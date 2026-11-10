// Articulated player models with procedural animation, the match ball, and floodlight shadow fans.
import * as THREE from 'three';
import { hex, clamp, lerp } from '../config.js';
import { drawJersey, contrast } from '../teams.js';

// Snapshot layout shared by the live match and the replay buffer.
export const STRIDE = 10;         // x, z, dir, speed, phase, act, actT, flags, aux, y
export const ACT = { NONE: 0, PASS: 1, KICK: 2, LUNGE: 3, PRONE: 4, SUPINE: 5, TRYDIVE: 6, CELEBRATE: 7, DEJECTED: 8, CATCH: 9, SETKICK: 10, STEP: 11, GETUP: 12 };
export const FLAG = { BALL: 1, FEND: 2, SPRINT: 8, READY: 16 };

const SKINS = [0xe8b998, 0xcf9a6e, 0x94603f, 0xf2cfae, 0xb07850, 0x70472f];
const HAIRS = ['#1c1410', '#3a2716', '#6b4a2a', '#c9a567', '#111111'];
const P = { HIPY: 0, PITCH: 1, ROLL: 2, LEAN: 3, TWIST: 4, HEAD: 5, SHL: 6, SHR: 7, ABL: 8, ABR: 9, ELL: 10, ELR: 11, HPL: 12, HPR: 13, KNL: 14, KNR: 15, YOFF: 16, N: 17 };

const geo = {
  pelvis: new THREE.CylinderGeometry(0.17, 0.185, 0.24, 12).scale(0.72, 1, 1),
  shortLeg: new THREE.CylinderGeometry(0.092, 0.084, 0.2, 10),
  thigh: new THREE.CapsuleGeometry(0.074, 0.3, 4, 10),
  shin: new THREE.CapsuleGeometry(0.056, 0.3, 4, 10),
  sock: new THREE.CylinderGeometry(0.064, 0.054, 0.22, 10),
  boot: new THREE.BoxGeometry(0.25, 0.085, 0.1),
  torso: new THREE.CylinderGeometry(0.225, 0.165, 0.5, 20, 1).scale(0.68, 1, 1),
  shoulder: new THREE.SphereGeometry(0.095, 10, 8),
  upper: new THREE.CapsuleGeometry(0.056, 0.19, 4, 8),
  fore: new THREE.CapsuleGeometry(0.045, 0.19, 4, 8),
  hand: new THREE.SphereGeometry(0.052, 8, 6),
  neck: new THREE.CylinderGeometry(0.052, 0.06, 0.1, 8),
  head: new THREE.SphereGeometry(0.118, 18, 14).scale(1, 1.13, 0.94),
};
const skinMats = SKINS.map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.62 }));
const bootMat = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: 0.5 });
const headMats = new Map();
function headMat(skin, hair) {
  const key = skin * 10 + hair;
  if (headMats.has(key)) return headMats.get(key);
  const c = document.createElement('canvas'); c.width = 128; c.height = 128; const g = c.getContext('2d');
  g.fillStyle = hex(SKINS[skin]); g.fillRect(0, 0, 128, 128);
  // u = 0.5 is the face; canvas top is the crown
  g.fillStyle = HAIRS[hair]; g.fillRect(0, 0, 128, hair === 4 ? 30 : 38); g.fillRect(0, 0, 38, 78); g.fillRect(90, 0, 38, 78);
  if (hair === 2) g.fillRect(0, 0, 128, 44);
  g.fillStyle = 'rgba(30,18,12,.9)'; g.fillRect(52, 52, 6, 5); g.fillRect(70, 52, 6, 5);
  g.fillRect(50, 46, 10, 2.5); g.fillRect(68, 46, 10, 2.5);
  g.fillStyle = 'rgba(90,40,30,.55)'; g.fillRect(58, 76, 12, 2.5);
  g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(62, 56, 4, 12);
  if (hair === 1 || hair === 4) { g.fillStyle = HAIRS[hair]; g.globalAlpha = 0.55; g.fillRect(46, 72, 36, 22); g.globalAlpha = 1; }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.65 }); headMats.set(key, m); return m;
}
export function makeKitMats(kit) {
  return {
    sleeve: new THREE.MeshStandardMaterial({ color: kit.pattern === 'yoke' ? kit.c2 : kit.c1, roughness: 0.7 }),
    shorts: new THREE.MeshStandardMaterial({ color: kit.pattern === 'halves' || kit.pattern === 'yoke' ? kit.c2 : contrast(kit.c1) === 0xffffff ? kit.c1 : kit.c2, roughness: 0.75 }),
    socks: new THREE.MeshStandardMaterial({ color: kit.c1 === 0xf1f1ec ? kit.c2 : kit.c1, roughness: 0.8 }),
  };
}

export class Athlete {
  constructor(scene) {
    const add = (parent, g, mat, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(g, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
    const grp = (parent, x, y, z) => { const o = new THREE.Group(); o.position.set(x, y, z); parent.add(o); return o; };
    this.root = new THREE.Group(); scene.add(this.root);
    this.hips = grp(this.root, 0, 0.96, 0);
    this.spine = grp(this.hips, 0, 0.1, 0);
    this.jerseyCanvas = document.createElement('canvas'); this.jerseyCanvas.width = 256; this.jerseyCanvas.height = 128;
    this.jerseyTex = new THREE.CanvasTexture(this.jerseyCanvas); this.jerseyTex.colorSpace = THREE.SRGBColorSpace; this.jerseyTex.anisotropy = 4;
    this.jerseyMat = new THREE.MeshStandardMaterial({ map: this.jerseyTex, roughness: 0.68 });
    const s0 = skinMats[0];
    this.kitMeshes = { sleeve: [], shorts: [], socks: [] }; this.skinMeshes = [];
    this.kitMeshes.shorts.push(add(this.hips, geo.pelvis, s0, 0, 0, 0));
    add(this.spine, geo.torso, this.jerseyMat, 0, 0.27, 0);
    this.skinMeshes.push(add(this.spine, geo.neck, s0, 0, 0.56, 0));
    this.headG = grp(this.spine, 0, 0.6, 0);
    this.headMesh = add(this.headG, geo.head, s0, 0.01, 0.13, 0);
    this.ballAnchor = grp(this.spine, 0.2, 0.2, 0.16);
    this.sh = []; this.el = []; this.hp = []; this.kn = [];
    for (const s of [-1, 1]) {                       // -1 = player's left
      this.kitMeshes.sleeve.push(add(this.spine, geo.shoulder, s0, 0, 0.47, s * 0.235));
      const sh = grp(this.spine, 0, 0.47, s * 0.27); this.kitMeshes.sleeve.push(add(sh, geo.upper, s0, 0, -0.13, 0));
      const el = grp(sh, 0, -0.27, 0); this.skinMeshes.push(add(el, geo.fore, s0, 0, -0.13, 0), add(el, geo.hand, s0, 0, -0.28, 0));
      const hp = grp(this.hips, 0, -0.06, s * 0.1); this.skinMeshes.push(add(hp, geo.thigh, s0, 0, -0.22, 0)); this.kitMeshes.shorts.push(add(hp, geo.shortLeg, s0, 0, -0.1, 0));
      const kn = grp(hp, 0, -0.45, 0); this.skinMeshes.push(add(kn, geo.shin, s0, 0, -0.2, 0)); this.kitMeshes.socks.push(add(kn, geo.sock, s0, 0, -0.3, 0)); add(kn, geo.boot, bootMat, 0.055, -0.43, 0);
      this.sh.push(sh); this.el.push(el); this.hp.push(hp); this.kn.push(kn);
    }
    this.cur = new Float32Array(P.N); this.tgt = new Float32Array(P.N); this.cur[P.HIPY] = 0.96;
    this.base = 1.16; this.sx = 1; this.sy = 1;
  }
  setKit(kit, mats, sp) {
    drawJersey(this.jerseyCanvas.getContext('2d'), 256, 128, kit, sp.num); this.jerseyTex.needsUpdate = true;
    for (const k of ['sleeve', 'shorts', 'socks']) for (const m of this.kitMeshes[k]) m.material = mats[k];
    for (const m of this.skinMeshes) m.material = skinMats[sp.skin];
    this.headMesh.material = headMat(sp.skin, sp.hair);
    this.sx = this.base * sp.build; this.sy = this.base * sp.tall; this.root.scale.set(this.sx, this.sy, this.sx);
  }
  setVisible(v) { this.root.visible = v; }

  // b: snapshot buffer, o: offset of this player's record
  apply(b, o, dt, time, seed) {
    const T = this.tgt, spd = b[o + 3], ph = b[o + 4], act = b[o + 5], at = b[o + 6], fl = b[o + 7], aux = b[o + 8];
    const a = clamp(Math.abs(spd) / 7.4, 0, 1.25), sg = spd >= 0 ? 1 : -1, sL = Math.sin(ph), cL = Math.cos(ph), still = 1 - Math.min(1, a * 3);
    const ready = fl & FLAG.READY ? still : 0, breath = Math.sin(time * 1.7 + seed) * 0.012;
    let rate = 26;
    T[P.HIPY] = 0.96 - 0.05 * a + Math.abs(sL) * 0.035 * a - ready * 0.09 + breath;
    T[P.PITCH] = 0; T[P.ROLL] = 0; T[P.YOFF] = b[o + 9];
    T[P.LEAN] = sg > 0 ? -(0.05 + 0.27 * a) - ready * 0.28 : 0.07; T[P.TWIST] = sL * 0.15 * a; T[P.HEAD] = 0.12 * a + ready * 0.2;
    T[P.HPL] = sL * 0.98 * a * sg + 0.08 * a + ready * 0.36; T[P.HPR] = -sL * 0.98 * a * sg + 0.08 * a + ready * 0.36;
    T[P.KNL] = 0.06 + (0.16 + 1.4 * Math.max(0, cL * sg)) * a + ready * 0.6; T[P.KNR] = 0.06 + (0.16 + 1.4 * Math.max(0, -cL * sg)) * a + ready * 0.6;
    T[P.SHL] = -sL * 0.8 * a + ready * 0.5 + still * 0.04; T[P.SHR] = sL * 0.8 * a + ready * 0.5 + still * 0.04;
    T[P.ELL] = T[P.ELR] = 0.3 + 1.2 * Math.min(1, a) + ready * 0.6; T[P.ABL] = T[P.ABR] = 0.1 + ready * 0.25;
    if (fl & FLAG.BALL) { T[P.SHR] = 0.5 + sL * 0.12 * a; T[P.ELR] = 1.8; T[P.ABR] = -0.28; if (fl & FLAG.FEND) { T[P.SHL] = 1.5; T[P.ELL] = 0.05; T[P.ABL] = 0.2; } }
    if (fl & FLAG.SPRINT) T[P.LEAN] -= 0.08;
    const w = Math.sin(Math.PI * clamp(at, 0, 1));
    switch (act) {
      case ACT.PASS:
        T[P.SHL] = T[P.SHR] = 0.95; T[P.ELL] = T[P.ELR] = 0.55 - 0.35 * w; T[P.ABR] = aux * 0.95 * w; T[P.ABL] = -aux * 0.8 * w; T[P.TWIST] = -aux * 0.65 * w; rate = 22; break;
      case ACT.KICK: {
        const back = at < 0.4, k = back ? at / 0.4 : clamp((at - 0.4) / 0.22, 0, 1);
        T[P.HPR] = back ? -0.95 * k : lerp(-0.95, 1.65, k); T[P.KNR] = back ? 1.35 * k : 1.35 * (1 - k); T[P.HPL] = 0.12; T[P.KNL] = 0.22;
        T[P.LEAN] = 0.16; T[P.ABL] = 0.95; T[P.SHL] = -0.35; T[P.SHR] = 0.45; T[P.ELL] = 0.3; T[P.HIPY] = 0.95; rate = 30; break;
      }
      case ACT.LUNGE: T[P.PITCH] = -1.25; T[P.HIPY] = lerp(0.62, 0.34, at); T[P.SHL] = T[P.SHR] = 2.75; T[P.ELL] = T[P.ELR] = 0.15; T[P.ABL] = T[P.ABR] = 0.3; T[P.HPL] = -0.35; T[P.HPR] = -0.15; T[P.KNL] = 0.3; T[P.KNR] = 0.5; T[P.LEAN] = -0.1; rate = 24; break;
      case ACT.PRONE: T[P.PITCH] = -1.5; T[P.HIPY] = 0.2; T[P.SHL] = 2.5; T[P.SHR] = 2.2; T[P.ELL] = 0.7; T[P.ELR] = 0.5; T[P.ABL] = T[P.ABR] = 0.55; T[P.HPL] = 0.08; T[P.HPR] = -0.18; T[P.KNL] = 0.2; T[P.KNR] = 0.45; T[P.LEAN] = 0; T[P.HEAD] = -0.3; rate = 15; break;
      case ACT.SUPINE: T[P.PITCH] = 1.42; T[P.ROLL] = 0.25; T[P.HIPY] = 0.22; T[P.SHL] = 0.5; T[P.SHR] = 0.7; T[P.ELL] = 1.3; T[P.ELR] = 1.7; T[P.HPL] = 0.75; T[P.KNL] = 1.2; T[P.HPR] = 0.15; T[P.KNR] = 0.3; T[P.LEAN] = -0.15; T[P.HEAD] = 0.3; rate = 14; break;
      case ACT.TRYDIVE: T[P.PITCH] = -1.36; T[P.HIPY] = lerp(0.8, 0.26, clamp(at * 1.6, 0, 1)); T[P.SHR] = 2.7; T[P.SHL] = 2.4; T[P.ELL] = T[P.ELR] = 0.2; T[P.ABR] = -0.1; T[P.HPL] = -0.3; T[P.HPR] = -0.1; T[P.KNL] = 0.35; T[P.KNR] = 0.6; T[P.LEAN] = -0.05; rate = 20; break;
      case ACT.CELEBRATE: { const j = Math.abs(Math.sin(time * 7.5 + seed)); T[P.SHL] = 2.95; T[P.SHR] = 2.8 + Math.sin(time * 9 + seed) * 0.25; T[P.ABL] = T[P.ABR] = 0.45; T[P.ELL] = T[P.ELR] = 0.25; T[P.YOFF] = j * 0.24; T[P.KNL] = T[P.KNR] = 0.25 * (1 - j); T[P.LEAN] = 0.1; T[P.HEAD] = -0.25; rate = 20; break; }
      case ACT.DEJECTED: T[P.HEAD] = 0.6; T[P.LEAN] = -0.22; T[P.SHL] = T[P.SHR] = -0.25; T[P.ABL] = T[P.ABR] = 0.5; T[P.ELL] = T[P.ELR] = 1.75; rate = 8; break;
      case ACT.CATCH: T[P.SHL] = T[P.SHR] = 2.65; T[P.ELL] = T[P.ELR] = 0.35; T[P.ABL] = T[P.ABR] = 0.22; T[P.HEAD] = -0.5; T[P.LEAN] = 0.08; rate = 16; break;
      case ACT.SETKICK: T[P.LEAN] = -0.1; T[P.HEAD] = 0.25; T[P.SHL] = T[P.SHR] = 0.05; T[P.ELL] = T[P.ELR] = 0.3; rate = 10; break;
      case ACT.STEP: T[P.ROLL] = aux * 0.42; T[P.HIPY] -= 0.08; T[P.ABL] = aux < 0 ? 0.9 : 0.2; T[P.ABR] = aux > 0 ? 0.9 : 0.2; break;
      case ACT.GETUP: T[P.PITCH] = -0.55; T[P.HIPY] = 0.62; T[P.KNL] = 1.3; T[P.KNR] = 0.9; T[P.HPL] = 1.15; T[P.HPR] = 0.5; T[P.SHL] = T[P.SHR] = 0.9; T[P.ELL] = T[P.ELR] = 0.3; rate = 10; break;
    }
    const k = 1 - Math.exp(-rate * dt), C = this.cur;
    for (let i = 0; i < P.N; i++) C[i] += (T[i] - C[i]) * k;
    this.root.position.set(b[o], 0, b[o + 1]); this.root.rotation.y = -b[o + 2];
    this.hips.position.y = C[P.HIPY] + C[P.YOFF] / this.sy; this.hips.rotation.set(C[P.ROLL], 0, C[P.PITCH]);
    this.spine.rotation.set(0, C[P.TWIST], C[P.LEAN]); this.headG.rotation.z = C[P.HEAD];
    this.sh[0].rotation.set(C[P.ABL], 0, C[P.SHL]); this.sh[1].rotation.set(-C[P.ABR], 0, C[P.SHR]);
    this.el[0].rotation.z = C[P.ELL]; this.el[1].rotation.z = C[P.ELR];
    this.hp[0].rotation.z = C[P.HPL]; this.hp[1].rotation.z = C[P.HPR]; this.kn[0].rotation.z = -C[P.KNL]; this.kn[1].rotation.z = -C[P.KNR];
  }
  snap() { this.cur.set(this.tgt); }
  ballPos(out) { this.root.updateMatrixWorld(true); return this.ballAnchor.getWorldPosition(out); }
}

export class BallView {
  constructor(scene) {
    const c = document.createElement('canvas'); c.width = 128; c.height = 128; const g = c.getContext('2d');
    g.fillStyle = '#f6f1e4'; g.fillRect(0, 0, 128, 128); g.fillStyle = '#e0a21a'; g.fillRect(0, 0, 128, 24); g.fillRect(0, 104, 128, 24);
    g.fillStyle = '#1c2a44'; g.fillRect(0, 24, 128, 4); g.fillRect(0, 100, 128, 4); for (let i = 0; i < 4; i++) g.fillRect(i * 32, 28, 2, 72);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const geom = new THREE.SphereGeometry(1, 20, 14); geom.rotateZ(-Math.PI / 2); geom.scale(0.185, 0.115, 0.115);
    this.mesh = new THREE.Mesh(geom, new THREE.MeshStandardMaterial({ map: t, roughness: 0.45 })); this.mesh.castShadow = true; this.mesh.rotation.order = 'YZX'; scene.add(this.mesh);
    this.blob = new THREE.Mesh(new THREE.CircleGeometry(0.4, 16), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.3, depthWrite: false })); this.blob.rotation.x = -Math.PI / 2; scene.add(this.blob);
    this.tee = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 0.1, 10), new THREE.MeshStandardMaterial({ color: 0xff7a1a })); this.tee.visible = false; scene.add(this.tee);
  }
  // type 0 held, 1 spiral, 2 end-over-end, 3 upright on a tee
  set(x, y, z, yaw, spin, type) {
    this.mesh.position.set(x, y, z);
    if (type === 3) this.mesh.rotation.set(0, -yaw, 1.15); else if (type === 2) this.mesh.rotation.set(0, -yaw, spin); else this.mesh.rotation.set(type === 1 ? spin : 0, -yaw, type === 0 ? 0.35 : 0.18);
    this.blob.visible = type !== 0 && y > 0.5; this.blob.position.set(x, 0.03, z); const s = clamp(1.2 - y * 0.05, 0.4, 1.2); this.blob.scale.set(s, s, s); this.blob.material.opacity = clamp(0.36 - y * 0.012, 0.1, 0.36);
    this.tee.visible = type === 3; if (type === 3) this.tee.position.set(x, 0.05, z);
  }
}

// Under lights every player throws a faint cross of shadows, one per mast.
export class ShadowFan {
  constructor(scene, count, masts) {
    const c = document.createElement('canvas'); c.width = 64; c.height = 32; const g = c.getContext('2d');
    const gr = g.createRadialGradient(20, 16, 1, 32, 16, 30); gr.addColorStop(0, 'rgba(0,0,0,.9)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 32);
    const geom = new THREE.PlaneGeometry(2.3, 0.85); geom.rotateX(-Math.PI / 2); geom.translate(0.95, 0, 0);
    this.mesh = new THREE.InstancedMesh(geom, new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.2, depthWrite: false }), count * masts.length);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 1; scene.add(this.mesh);
    this.masts = masts; this.count = count; this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.p = new THREE.Vector3(); this.s = new THREE.Vector3(1, 1, 1); this.up = new THREE.Vector3(0, 1, 0);
  }
  update(b, n, visible) {
    this.mesh.visible = visible; if (!visible) return;
    let k = 0;
    for (let i = 0; i < this.count; i++) for (const [mx, mz] of this.masts) {
      if (i < n) { const x = b[i * STRIDE], z = b[i * STRIDE + 1]; this.q.setFromAxisAngle(this.up, -Math.atan2(z - mz, x - mx)); this.p.set(x, 0.035, z); this.s.setScalar(1); }
      else this.s.setScalar(0.0001);
      this.m.compose(this.p, this.q, this.s); this.mesh.setMatrixAt(k++, this.m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
