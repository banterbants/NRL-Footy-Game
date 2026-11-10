// The ground: painted pitch, a full bowl of stands with an instanced crowd, floodlights, LED boards, sky.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { FL, IG, FW, hex, rand } from '../config.js';
import { drawCrest, shade, contrast } from '../teams.js';

const FONT = '"Barlow Condensed","Arial Narrow",Arial,sans-serif';
const SPONSORS = ['BANKSIA BANK', 'REDGUM HARDWARE', 'WOMBAT WIRELESS', 'MAGPIE MOTORS', 'SIXTH TACKLE', 'BOOMERANG FREIGHT', 'WATTLE ENERGY', 'GALAH AIR'];
const CONDITIONS = {
  day: { sky: ['#1b5cb8', '#62a8e8', '#d3e8f6'], sun: [0xfff2dc, 3.3, [-0.45, 0.82, 0.42]], hemi: [0xcfe4ff, 0x5b7a3c, 1.2], fog: [0xbfd8ec, 260, 950], exposure: 0.95, bloom: 0.2, lamps: 0.25, glow: 1.0, env: 0.5 },
  dusk: { sky: ['#182456', '#b6577a', '#f7b267'], sun: [0xffa869, 2.9, [-0.86, 0.34, 0.22]], hemi: [0x9a92d6, 0x40503c, 0.8], fog: [0x8f6d88, 220, 850], exposure: 0.98, bloom: 0.38, lamps: 2.2, glow: 1.5, env: 0.4 },
  night: { sky: ['#03060d', '#081022', '#16233f'], sun: [0xeaf1ff, 2.5, [-0.22, 0.92, 0.3]], hemi: [0x93aadb, 0x25412b, 0.62], fog: [0x0a1322, 210, 760], exposure: 0.98, bloom: 0.5, lamps: 3.4, glow: 1.9, env: 0.3 },
};

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
class Quads {                                   // tiny builder for merged static geometry
  constructor() { this.p = []; this.u = []; }
  quad(a, b, c, d, u0 = 0, u1 = 1, v0 = 0, v1 = 1) { this.p.push(...a, ...b, ...c, ...a, ...c, ...d); this.u.push(u0, v0, u1, v0, u1, v1, u0, v0, u1, v1, u0, v1); }
  mesh(mat) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.computeVertexNormals(); return new THREE.Mesh(g, mat);
  }
}
// Inner edge of the seating bowl, as an octagon; stands are offsets of this ring.
const RING = [[-58, -46], [58, -46], [72, -32], [72, 32], [58, 46], [-58, 46], [-72, 32], [-72, -32]];
const EN = RING.map((p, i) => { const q = RING[(i + 1) % 8], dx = q[0] - p[0], dz = q[1] - p[1], l = Math.hypot(dx, dz); return [dz / l, -dx / l]; });
const MITER = RING.map((p, i) => { const a = EN[(i + 7) % 8], b = EN[i], k = 1 + a[0] * b[0] + a[1] * b[1]; return [(a[0] + b[0]) / k, (a[1] + b[1]) / k]; });
const ringPt = (i, t) => { const j = i % 8; return [RING[j][0] + MITER[j][0] * t, RING[j][1] + MITER[j][1] * t]; };
const LOWER = { t0: 0, t1: 20, y0: 1.6, y1: 13.6, rows: 24 }, UPPER = { t0: 20, t1: 38, y0: 16.6, y1: 30.6, rows: 20 };

export class Stadium {
  constructor(scene, renderer) {
    this.scene = scene; this.renderer = renderer; this.group = new THREE.Group(); scene.add(this.group);
    this.u = { time: { value: 0 }, excite: { value: 0 } };
    this.cond = CONDITIONS.night; this.wet = false; this.home = null; this.away = null;
    this.seats = []; this.focus = new THREE.Vector3();
    const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
    this._lights(); this._sky(); this._pitch(); this._furniture(); this._bowl();
  }

  _lights() {
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x334433, 1); this.scene.add(this.hemi);
    const sun = this.sun = new THREE.DirectionalLight(0xffffff, 3);
    sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
    const c = sun.shadow.camera; c.left = -42; c.right = 42; c.top = 42; c.bottom = -42; c.near = 20; c.far = 260;
    sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03; sun.shadow.radius = 2.5;
    this.scene.add(sun, sun.target);
    this.fill = new THREE.DirectionalLight(0xffffff, 0.5); this.scene.add(this.fill);
  }
  setShadowQuality(size) {
    this.sun.castShadow = size > 0;
    if (size > 0 && this.sun.shadow.mapSize.x !== size) { this.sun.shadow.mapSize.set(size, size); if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; } }
  }

  _sky() {
    this.skyCanvas = document.createElement('canvas'); this.skyCanvas.width = 1024; this.skyCanvas.height = 512;
    this.skyTex = new THREE.CanvasTexture(this.skyCanvas); this.skyTex.colorSpace = THREE.SRGBColorSpace;
    const dome = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), new THREE.MeshBasicMaterial({ map: this.skyTex, side: THREE.BackSide, fog: false, depthWrite: false }));
    dome.renderOrder = -10; this.group.add(dome); this.dome = dome;
  }
  _paintSky(time, rain) {
    const g = this.skyCanvas.getContext('2d'), W = 1024, H = 512, c = CONDITIONS[time].sky;
    const gr = g.createLinearGradient(0, 0, 0, H / 2);
    if (rain && time !== 'night') { gr.addColorStop(0, '#4a5560'); gr.addColorStop(0.6, '#77828c'); gr.addColorStop(1, '#a2abb1'); }
    else { gr.addColorStop(0, c[0]); gr.addColorStop(0.62, c[1]); gr.addColorStop(1, c[2]); }
    g.fillStyle = gr; g.fillRect(0, 0, W, H / 2); g.fillStyle = rain && time !== 'night' ? '#a2abb1' : c[2]; g.fillRect(0, H / 2, W, H / 2);
    if (time === 'night' && !rain) for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(255,255,255,${rand(0.2, 0.9)})`; g.fillRect(rand(W), rand(H * 0.42), rand(0.6, 1.8), rand(0.6, 1.8)); }
    if (time === 'dusk' && !rain) { const s = g.createRadialGradient(170, 250, 4, 170, 250, 200); s.addColorStop(0, 'rgba(255,236,190,.95)'); s.addColorStop(0.2, 'rgba(255,170,90,.5)'); s.addColorStop(1, 'rgba(255,140,80,0)'); g.fillStyle = s; g.fillRect(0, 40, 400, 220); }
    const clouds = time === 'night' ? 0 : rain ? 40 : 16;
    for (let i = 0; i < clouds; i++) {
      const x = rand(W), y = rand(60, 235), w = rand(60, 190), col = time === 'dusk' ? '255,196,170' : rain ? '70,78,86' : '255,255,255';
      for (let k = 0; k < 6; k++) { const cx = x + rand(-w, w) * 0.6, cy = y + rand(-10, 10), r = rand(18, 46); const cg = g.createRadialGradient(cx, cy, 2, cx, cy, r * 1.6); cg.addColorStop(0, `rgba(${col},${rain ? 0.35 : 0.22})`); cg.addColorStop(1, `rgba(${col},0)`); g.fillStyle = cg; g.fillRect(cx - r * 2, cy - r, r * 4, r * 2); }
    }
    this.skyTex.needsUpdate = true;
  }

  _pitch() {
    this.PPM = 24; this.PW = 150; this.PH = 96;
    this.pitchCanvas = document.createElement('canvas'); this.pitchCanvas.width = this.PW * this.PPM; this.pitchCanvas.height = this.PH * this.PPM;
    this.pitchTex = new THREE.CanvasTexture(this.pitchCanvas); this.pitchTex.colorSpace = THREE.SRGBColorSpace; this.pitchTex.anisotropy = 16;
    const detail = canvasTex(256, 256, (g) => {
      g.fillStyle = '#808080'; g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 9000; i++) { const v = (rand(60, 200)) | 0; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(rand(256), rand(256), 1.4, rand(2, 7)); }
    }, false);
    detail.wrapS = detail.wrapT = THREE.RepeatWrapping;
    const mat = this.pitchMat = new THREE.MeshStandardMaterial({ map: this.pitchTex, roughness: 0.93, metalness: 0 });
    mat.onBeforeCompile = sh => {
      sh.uniforms.uDetail = { value: detail };
      sh.fragmentShader = 'uniform sampler2D uDetail;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n float gd = texture2D(uDetail, vMapUv * vec2(96.0, 61.0)).r; float gd2 = texture2D(uDetail, vMapUv * vec2(17.0, 11.0)).r; diffuseColor.rgb *= 0.74 + gd * 0.36 + gd2 * 0.16;');
    };
    const pitch = new THREE.Mesh(new THREE.PlaneGeometry(this.PW, this.PH), mat); pitch.rotation.x = -Math.PI / 2; pitch.receiveShadow = true; this.group.add(pitch);
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), new THREE.MeshStandardMaterial({ color: 0x23272b, roughness: 1 })); apron.rotation.x = -Math.PI / 2; apron.position.y = -0.06; this.group.add(apron);
  }
  _paintPitch() {
    const g = this.pitchCanvas.getContext('2d'), P = this.PPM, PW = this.PW, PH = this.PH, home = this.home, away = this.away, wet = this.wet;
    const X = x => (x + PW / 2) * P, Z = z => (z + PH / 2) * P;
    g.globalAlpha = 1; g.fillStyle = wet ? '#1f5527' : '#2a6a30'; g.fillRect(0, 0, PW * P, PH * P);
    for (let i = -10; i < 10; i++) {                                   // mown 5 m bands across the field
      g.fillStyle = (i & 1) ? (wet ? '#2a7133' : '#39903f') : (wet ? '#256a2e' : '#31833a'); g.fillRect(X(i * 5), Z(-FW), 5 * P, FW * 2 * P);
    }
    for (let j = 0; j < 8; j++) { if (j & 1) { g.fillStyle = 'rgba(255,255,255,.035)'; g.fillRect(X(-FL), Z(-FW + j * 8.5), FL * 2 * P, 8.5 * P); } }
    for (const [x, t] of [[-FL - IG, home], [FL, away]]) {             // in-goals carry the club colours
      g.fillStyle = hex(shade(t.c1, 0.8)); g.globalAlpha = 0.9; g.fillRect(X(x), Z(-FW), IG * P, FW * 2 * P); g.globalAlpha = 1;
      g.save(); g.translate(X(x + IG / 2), Z(0)); g.rotate(x < 0 ? -Math.PI / 2 : Math.PI / 2);
      g.font = `italic 800 ${P * 5.4}px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = hex(contrast(shade(t.c1, 0.8)) === 0xffffff ? (t.c2 === 0x161616 || t.c2 === 0x1e1b1a || t.c2 === 0x15171c ? 0xffffff : t.c2) : 0x101216); g.fillText(t.name.toUpperCase(), 0, P * 0.3); g.restore();
    }
    g.save(); g.globalAlpha = 0.9; drawCrest(g, home, X(0), Z(0), P * 15); g.restore();
    g.font = `italic 800 ${P * 3.4}px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = 'rgba(255,255,255,.13)'; g.font = `italic 800 ${P * 2.6}px ${FONT}`;
    g.fillText(SPONSORS[0], X(-25), Z(0)); g.fillText(SPONSORS[4], X(25), Z(0));
    g.strokeStyle = '#e4e8df'; g.fillStyle = '#e4e8df';
    const vline = (x, w) => { g.lineWidth = w; g.beginPath(); g.moveTo(X(x), Z(-FW)); g.lineTo(X(x), Z(FW)); g.stroke(); };
    g.lineWidth = P * 0.13; g.strokeRect(X(-FL - IG), Z(-FW), (FL + IG) * 2 * P, FW * 2 * P);
    for (let x = -FL; x <= FL; x += 10) vline(x, Math.abs(x) === FL ? P * 0.18 : P * 0.11);
    g.fillStyle = '#d43c30'; for (const s of [-1, 1]) for (const x of [-10, 10]) { g.fillRect(X(x) - P * 0.055, Z(s * FW) - (s > 0 ? P * 1.5 : 0), P * 0.11, P * 1.5); }   // red 40 m markers
    g.fillStyle = '#e4e8df';
    for (let x = -FL + 10; x < FL; x += 10) for (const z of [-24, -14, 14, 24]) g.fillRect(X(x) - P * 0.6, Z(z) - P * 0.05, P * 1.2, P * 0.1);
    g.font = `800 ${P * 3.1}px ${FONT}`;
    for (let x = -FL + 10; x < FL; x += 10) {
      const label = String(50 - Math.abs(x));
      for (const z of [-28.5, 28.5]) { g.save(); g.translate(X(x), Z(z)); g.fillText(label[0], -P * 1.25, 0); g.fillText(label[1], P * 1.25, 0); g.restore(); }
    }
    // run-off: a darker track ring with a painted sponsor mat behind each dead-ball line
    g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(0, 0, PW * P, Z(-FW - 4)); g.fillRect(0, Z(FW + 4), PW * P, PH * P);
    this.pitchTex.needsUpdate = true;
  }

  _furniture() {
    const white = new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.4, emissive: 0xffffff, emissiveIntensity: 0.05 });
    this.padMats = [new THREE.MeshStandardMaterial({ roughness: 0.6 }), new THREE.MeshStandardMaterial({ roughness: 0.6 })];
    for (const s of [-1, 1]) {
      for (const z of [-2.75, 2.75]) {
        const up = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 16, 10), white); up.position.set(s * FL, 8, z); up.castShadow = true; this.group.add(up);
        const pad = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2, 0.5), this.padMats[s < 0 ? 0 : 1]); pad.position.set(s * FL, 1, z); pad.castShadow = true; this.group.add(pad);
      }
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 5.5, 10), white); bar.rotation.x = Math.PI / 2; bar.position.set(s * FL, 3, 0); bar.castShadow = true; this.group.add(bar);
    }
    this.flags = [];
    const flagMat = new THREE.MeshBasicMaterial({ color: 0xffd23c, side: THREE.DoubleSide });
    for (const x of [-FL, FL]) for (const z of [-FW, FW]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 6), white); pole.position.set(x, 0.75, z); this.group.add(pole);
      const f = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.3), flagMat); f.position.set(x + 0.24, 1.33, z); this.group.add(f); this.flags.push(f);
    }
    // LED perimeter boards
    this.boardTex = canvasTex(2048, 64, (g, w, h) => {
      g.fillStyle = '#05080c'; g.fillRect(0, 0, w, h); g.font = `italic 800 44px ${FONT}`; g.textBaseline = 'middle';
      const cols = ['#ffd23c', '#ffffff', '#5fd0ff', '#ff6a5c', '#9fe870', '#ffffff', '#ffb347', '#c9a6ff']; let x = 20;
      SPONSORS.forEach((s, i) => { g.fillStyle = cols[i]; g.fillText(s, x, 34); x += g.measureText(s).width + 70; });
    });
    this.boardTex.wrapS = THREE.RepeatWrapping;
    this.boardMat = new THREE.MeshBasicMaterial({ map: this.boardTex, color: 0xffffff });
    const back = new THREE.MeshStandardMaterial({ color: 0x14181d, roughness: 0.8 });
    const board = (x, z, len, rot, rep) => {
      const geo = new THREE.PlaneGeometry(len, 1.05); geo.attributes.uv.array.forEach((v, i, a) => { if (i % 2 === 0) a[i] = v * rep; });
      const m = new THREE.Mesh(geo, this.boardMat); m.position.set(x, 0.62, z); m.rotation.y = rot; this.group.add(m);
      const b = new THREE.Mesh(new THREE.BoxGeometry(len, 1.15, 0.25), back); b.position.set(x - Math.sin(rot) * 0.14, 0.6, z - Math.cos(rot) * 0.14); b.rotation.y = rot; this.group.add(b);
    };
    board(0, -40.5, 124, 0, 5); board(0, 40.5, 124, Math.PI, 5); board(-64.5, 0, 78, Math.PI / 2, 3.2); board(64.5, 0, 78, -Math.PI / 2, 3.2);
    // big screens above each end
    this.screenCanvas = document.createElement('canvas'); this.screenCanvas.width = 768; this.screenCanvas.height = 256;
    this.screenTex = new THREE.CanvasTexture(this.screenCanvas); this.screenTex.colorSpace = THREE.SRGBColorSpace;
    this.screenMat = new THREE.MeshBasicMaterial({ map: this.screenTex });
    for (const s of [-1, 1]) {
      const sc = new THREE.Mesh(new THREE.PlaneGeometry(30, 10), this.screenMat); sc.position.set(s * 84.5, 29.5, 0); sc.rotation.y = -s * Math.PI / 2; this.group.add(sc);
      const fr = new THREE.Mesh(new THREE.BoxGeometry(0.6, 11, 31), back); fr.position.set(s * 85, 29.5, 0); this.group.add(fr);
    }
  }

  _bowl() {
    const concrete = new THREE.MeshStandardMaterial({ color: 0x2a3138, roughness: 0.95, side: THREE.DoubleSide });
    const seatTex = canvasTex(8, 32, (g) => { g.fillStyle = '#39424b'; g.fillRect(0, 0, 8, 32); g.fillStyle = '#20262c'; g.fillRect(0, 0, 8, 9); });
    seatTex.wrapS = seatTex.wrapT = THREE.RepeatWrapping;
    this.seatMat = new THREE.MeshStandardMaterial({ map: seatTex, roughness: 0.9, side: THREE.DoubleSide });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x4a545d, roughness: 0.7, metalness: 0.2, side: THREE.DoubleSide });
    this.lampMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.ribbonTex = canvasTex(1024, 32, (g, w, h) => { g.fillStyle = '#111'; g.fillRect(0, 0, w, h); });
    this.ribbonTex.wrapS = THREE.RepeatWrapping;
    this.ribbonMat = new THREE.MeshBasicMaterial({ map: this.ribbonTex, side: THREE.DoubleSide });
    const walls = new Quads(), lower = new Quads(), upper = new Quads(), roof = new Quads(), lamps = new Quads(), ribbon = new Quads();
    let run = 0;
    for (let i = 0; i < 8; i++) {
      const P = (t, y) => { const a = ringPt(i, t), b = ringPt(i + 1, t); return [[a[0], y, a[1]], [b[0], y, b[1]]]; };
      const band = (q, t0, y0, t1, y1, u0 = 0, u1 = 1, v1 = 1) => { const [a, b] = P(t0, y0), [d, c] = P(t1, y1); q.quad(a, b, c, d, u0, u1, 0, v1); };
      const len = Math.hypot(RING[(i + 1) % 8][0] - RING[i][0], RING[(i + 1) % 8][1] - RING[i][1]);
      band(walls, 0, 0, 0, LOWER.y0);
      band(lower, LOWER.t0, LOWER.y0, LOWER.t1, LOWER.y1, 0, 1, LOWER.rows);
      band(ribbon, 20, 13.6, 20, 16.6, run / 40, (run + len) / 40);
      band(upper, UPPER.t0, UPPER.y0, UPPER.t1, UPPER.y1, 0, 1, UPPER.rows);
      band(walls, 38, 30.6, 38, 41); band(walls, 41, 0, 41, 42);
      band(roof, 41, 42, 9, 36.5);
      band(lamps, 9.2, 36.3, 9.2, 35.1);
      run += len;
    }
    this.group.add(walls.mesh(concrete), lower.mesh(this.seatMat), upper.mesh(this.seatMat), roof.mesh(roofMat), lamps.mesh(this.lampMat), ribbon.mesh(this.ribbonMat));
    // corner light masts
    const steel = new THREE.MeshStandardMaterial({ color: 0x59636b, roughness: 0.6, metalness: 0.5 });
    this.mastPos = [];
    for (const [x, z] of [[-96, -70], [96, -70], [-96, 70], [96, 70]]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.1, 58, 8), steel); pole.position.set(x, 29, z); this.group.add(pole);
      const head = new THREE.Group(); head.position.set(x, 60, z); head.lookAt(0, 0, 0); this.group.add(head);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(11, 7, 0.5), steel); head.add(frame);
      for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const l = new THREE.Mesh(new THREE.CircleGeometry(0.62, 10), this.lampMat); l.position.set(-4.4 + c * 1.76, -2.5 + r * 1.66, 0.3); head.add(l); }
      this.mastPos.push([x, z]);
    }
    this._crowdMats();
    this.setCrowd(0.8);
  }
  _crowdMats() {
    const inject = mat => {
      mat.onBeforeCompile = sh => {
        sh.uniforms.uTime = this.u.time; sh.uniforms.uExcite = this.u.excite;
        sh.vertexShader = 'uniform float uTime; uniform float uExcite;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
          #ifdef USE_INSTANCING
          float cph = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);
          float cj = max(0.0, sin(uTime * (6.0 + cph * 5.0) + cph * 6.283));
          transformed.y += (cj * cj * uExcite * (0.3 + cph * 0.5) + sin(uTime * 1.3 + cph * 40.0) * 0.02) / max(0.2, length(instanceMatrix[1].xyz));
          #endif`);
      };
      return mat;
    };
    this.bodyMat = inject(new THREE.MeshLambertMaterial({ color: 0xffffff }));
    this.headMat = inject(new THREE.MeshLambertMaterial({ color: 0xffffff }));
  }
  setCrowd(density) {
    if (this.density === density) return; this.density = density;
    for (const m of [this.bodies, this.heads]) if (m) { this.group.remove(m); m.geometry.dispose(); m.dispose(); }
    const spacing = 0.64 / density, seats = [];
    for (const T of [LOWER, UPPER]) for (let r = 0; r < T.rows; r++) {
      const t = T.t0 + 0.8 + (r / T.rows) * (T.t1 - T.t0 - 0.9), y = T.y0 + ((t - T.t0) / (T.t1 - T.t0)) * (T.y1 - T.y0);
      for (let i = 0; i < 8; i++) {
        const a = ringPt(i, t), b = ringPt(i + 1, t), len = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.floor(len / spacing);
        for (let k = 0; k < n; k++) { if (Math.random() < 0.07) continue; const u = (k + 0.5 + rand(-0.2, 0.2)) / n; seats.push(a[0] + (b[0] - a[0]) * u, y, a[1] + (b[1] - a[1]) * u, i); }
      }
    }
    const n = seats.length / 4; this.seats = seats; this.seatN = n; this.fan = new Float32Array(n);
    const bodyGeo = new THREE.BoxGeometry(0.46, 0.62, 0.34); bodyGeo.translate(0, 0.42, 0);
    const headGeo = new THREE.BoxGeometry(0.23, 0.25, 0.23); headGeo.translate(0, 0.88, 0);
    this.bodies = new THREE.InstancedMesh(bodyGeo, this.bodyMat, n); this.heads = new THREE.InstancedMesh(headGeo, this.headMat, n);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
    const skins = [0xe2b48c, 0xc68e62, 0x8d5a3b, 0xf0c9a4, 0xa8714a, 0x6e4530];
    for (let i = 0; i < n; i++) {
      const e = seats[i * 4 + 3], k = rand(0.9, 1.15);
      q.setFromAxisAngle(up, Math.atan2(EN[e][0], EN[e][1]) + rand(-0.3, 0.3)); p.set(seats[i * 4], seats[i * 4 + 1], seats[i * 4 + 2]); s.set(k, k, k);
      m.compose(p, q, s); this.bodies.setMatrixAt(i, m); this.heads.setMatrixAt(i, m);
      this.heads.setColorAt(i, col.setHex(skins[(Math.random() * skins.length) | 0])); this.fan[i] = Math.random();
    }
    this.bodies.frustumCulled = this.heads.frustumCulled = false;
    this.group.add(this.bodies, this.heads);
    if (this.home) this._dressCrowd();
  }
  _dressCrowd() {
    const col = new THREE.Color(), h = this.home, a = this.away, neutral = [0x2b3442, 0xd9dde2, 0x555f6b, 0x8a6f5a, 0x20262e, 0xb9c4cf, 0x3c4a5c];
    const pop = c => (contrast(c) === 0xffffff && (c & 0xff) + (c >> 8 & 0xff) + (c >> 16) < 90 ? 0x2a2a30 : c);
    for (let i = 0; i < this.seatN; i++) {
      const f = this.fan[i], west = this.seats[i * 4] < 0;
      let c;
      if (f < 0.46) c = pop(h.c1); else if (f < 0.58) c = pop(h.c2); else if (f < 0.7 && !west) c = pop(a.c1); else if (f < 0.74) c = pop(a.c2); else c = neutral[(f * 977 | 0) % neutral.length];
      this.bodies.setColorAt(i, col.setHex(c).multiplyScalar(0.75 + (f * 131 % 1) * 0.4));
    }
    this.bodies.instanceColor.needsUpdate = true; this.heads.instanceColor.needsUpdate = true;
  }
  randomSeat(out) { const i = ((Math.random() * this.seatN) | 0) * 4; return out.set(this.seats[i], this.seats[i + 1] + 1.1, this.seats[i + 2]); }

  setTeams(home, away) {
    this.home = home; this.away = away;
    this.padMats[0].color.setHex(home.c1); this.padMats[1].color.setHex(away.c1);
    this.seatMat.color.setHex(0xffffff).lerp(new THREE.Color(home.c1), 0.35);
    const light = contrast(home.c1) !== 0xffffff, bg = light ? (contrast(home.c2) === 0xffffff ? home.c2 : 0x14181d) : home.c1;
    const g = this.ribbonTex.image.getContext('2d'); g.fillStyle = hex(shade(bg, 0.8)); g.fillRect(0, 0, 1024, 32);
    g.font = `italic 800 26px ${FONT}`; g.textBaseline = 'middle'; g.textAlign = 'left';
    for (let i = 0; i < 4; i++) { g.fillStyle = light ? hex(home.c1) : hex(i & 1 ? home.c3 : (contrast(home.c2) === 0xffffff ? home.c3 : home.c2)); g.fillText(i & 1 ? home.ground.toUpperCase() : `${home.city} ${home.name}`.toUpperCase(), i * 256 + 12, 17); }
    this.ribbonTex.needsUpdate = true;
    this._paintPitch(); this._dressCrowd();
  }
  setConditions(time, weather) {
    const c = this.cond = CONDITIONS[time] || CONDITIONS.night, rain = weather === 'rain'; this.wet = rain; this.time = time;
    this._paintSky(time, rain);
    this.sun.color.setHex(c.sun[0]); this.sun.intensity = c.sun[1] * (rain ? 0.62 : 1); this.sunDir = new THREE.Vector3(...c.sun[2]).normalize();
    this.fill.color.setHex(c.hemi[0]); this.fill.intensity = time === 'night' ? 0.9 : 0.35; this.fill.position.set(-this.sunDir.x * 50, 40, -this.sunDir.z * 50 - 30);
    this.hemi.color.setHex(c.hemi[0]); this.hemi.groundColor.setHex(c.hemi[1]); this.hemi.intensity = c.hemi[2] * (rain ? 1.1 : 1);
    this.scene.fog = new THREE.Fog(rain && time !== 'night' ? 0x9aa4ab : c.fog[0], c.fog[1] * (rain ? 0.55 : 1), c.fog[2] * (rain ? 0.6 : 1));
    this.scene.environmentIntensity = c.env * (rain ? 1.5 : 1);
    this.renderer.toneMappingExposure = c.exposure;
    this.lampMat.color.setRGB(c.lamps, c.lamps, c.lamps * 0.94);
    this.boardMat.color.setScalar(c.glow); this.ribbonMat.color.setScalar(Math.min(1.25, c.glow * 0.7)); this.screenMat.color.setScalar(Math.min(1.05, c.glow * 0.6));
    this.pitchMat.roughness = rain ? 0.42 : 0.93; this.pitchMat.envMapIntensity = rain ? 1.4 : 0.4;
    if (this.home) this._paintPitch();
    return c;
  }
  setScreen(home, away, s0, s1, line) {
    const g = this.screenCanvas.getContext('2d'), W = 768, H = 256;
    g.fillStyle = '#06090d'; g.fillRect(0, 0, W, H);
    g.fillStyle = hex(home.c1); g.fillRect(0, 0, W / 2 - 60, 170); g.fillStyle = hex(away.c1); g.fillRect(W / 2 + 60, 0, W / 2 - 60, 170);
    drawCrest(g, home, 90, 86, 140); drawCrest(g, away, W - 90, 86, 140);
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `800 150px ${FONT}`;
    g.fillStyle = hex(contrast(home.c1)); g.fillText(String(s0), 245, 92); g.fillStyle = hex(contrast(away.c1)); g.fillText(String(s1), W - 245, 92);
    g.fillStyle = '#ffd23c'; g.font = `800 40px ${FONT}`; g.fillText('V', W / 2, 90);
    g.fillStyle = '#fff'; g.font = `italic 800 54px ${FONT}`; g.fillText(line, W / 2, 214);
    this.screenTex.needsUpdate = true;
  }

  update(dt, time, excite, focus) {
    this.u.time.value = time; this.u.excite.value += (excite - this.u.excite.value) * Math.min(1, dt * 3);
    this.boardTex.offset.x = (time * 0.012) % 1; this.ribbonTex.offset.x = (time * 0.02) % 1;
    const fx = Math.round(focus.x / 2) * 2, fz = Math.round(focus.z / 2) * 2;
    this.sun.target.position.set(fx, 0, fz); this.sun.position.set(fx + this.sunDir.x * 130, this.sunDir.y * 130, fz + this.sunDir.z * 130);
    for (let i = 0; i < this.flags.length; i++) this.flags[i].rotation.y = Math.sin(time * 3 + i) * 0.5;
    this.dome.position.set(focus.x * 0.2, 0, 0);
  }
}
