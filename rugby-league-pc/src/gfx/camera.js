// Camera director: gameplay follow cameras plus broadcast-style cutaways.
import * as THREE from 'three';
import { clamp, damp, smooth, settings, FL } from '../config.js';

export function basisFor(style, d) {
  // f: screen-up on the ground, r: screen-right, lat: the direction "pass right" travels
  if (style === 'side') return { fx: 0, fz: -1, rx: 1, rz: 0, lx: 0, lz: 1 };
  return { fx: d, fz: 0, rx: 0, rz: d, lx: 0, lz: d };
}

export class Director {
  constructor(cam) {
    this.cam = cam; this.pos = new THREE.Vector3(-40, 20, 50); this.look = new THREE.Vector3(); this.fov = 50;
    this.mode = 'menu'; this.t = 0; this.snap = true; this.trauma = 0; this.p = {}; this.tp = new THREE.Vector3(); this.tl = new THREE.Vector3(); this.clock = 0;
  }
  set(mode, p = {}) { if (mode !== this.mode || p.force) { this.snap = !(p.blend); this.t = 0; } this.mode = mode; this.p = p; }
  shake(v) { if (settings.shake) this.trauma = Math.min(1, this.trauma + v); }

  update(dt, c) {
    this.t += dt; this.clock += dt;
    const tp = this.tp, tl = this.tl, f = c.focus, d = c.d || 1, by = Math.max(0, (c.ballY || 0) - 1.5);
    let fov = 50, rate = 5;
    switch (this.mode) {
      case 'play':
        if (c.style === 'side') {
          tp.set(clamp(f.x, -44, 44) * 0.92, 24 + by * 0.2, clamp(f.z + 50, 38, 62)); tl.set(f.x, 0.5 + by * 0.4, f.z * 0.88 - 1); fov = 30;
        } else {
          const off = 21 + (c.defending ? 3 : 0) + by * 0.5, h = 12 + (c.defending ? 1 : 0) + by * 0.3;
          tp.set(f.x - d * off, h, clamp(f.z * 0.82, -30, 30)); tl.set(f.x + d * (c.defending ? 9 : 6), 1.4 + by * 0.45, f.z * 0.94); fov = 50;
          tp.x = clamp(tp.x, -84, 84);
          const over = Math.abs(tp.x) - 71; if (over > 0) tp.y = Math.max(tp.y, 1.6 + over * 0.6 + 4.5);
        }
        break;
      case 'intro': {
        const k = smooth(clamp(this.t / (this.p.dur || 5), 0, 1));
        tp.set(-46 + 30 * k, 30 - 17 * k, 44 - 16 * k); tl.set(6 * k, 2, 0); fov = 50 - 6 * k; rate = 30; break;
      }
      case 'try': {
        const a = (this.p.a0 || 0) + this.t * 0.45, r = 10;
        tp.set(f.x + Math.cos(a) * r, 3.6, f.z + Math.sin(a) * r); tl.set(f.x, 1.1, f.z); fov = 34; rate = 8; break;
      }
      case 'convert': {
        const p = this.p, dx = p.gx - p.x, dz = -p.z, l = Math.hypot(dx, dz) || 1, k = clamp((p.aim || 0), -1, 1);
        tp.set(p.x - (dx / l) * 9 + (dz / l) * 1.2, 3.3, p.z - (dz / l) * 9 - (dx / l) * 1.2);
        if (c.ballFlying) tl.lerpVectors(tl.set(p.gx, 5, 0), new THREE.Vector3(f.x, f.y || 0, f.z), 0.6); else tl.set(p.gx, 5.5, k * 0);
        fov = 42; rate = 6; break;
      }
      case 'replay': {
        if (this.p.angle === 1) { tp.set(this.p.gx + d * 15, 13, f.z * 0.35); tl.set(f.x, 1, f.z); fov = 26; }
        else { const side = this.p.side || 1; tp.set(f.x - d * 7, 1.6, f.z + side * 13); tl.set(f.x + d * 1.5, 1.1 + by * 0.5, f.z); fov = 30; }
        rate = 7; break;
      }
      case 'wide': { const a = (this.p.a0 || 0.6) + this.t * 0.06; tp.set(Math.cos(a) * 52, 30, Math.sin(a) * 38); tl.set(0, 2, 0); fov = 52; break; }
      case 'fixed': tp.copy(this.p.pos); tl.copy(this.p.look); fov = this.p.fov || 40; rate = this.p.rate || 3; break;
      default: {          // menu: slow low orbit that keeps an eye on the action
        const a = this.clock * 0.045 + 0.9; tp.set(Math.cos(a) * 44 + f.x * 0.3, 11 + Math.sin(this.clock * 0.1) * 3, Math.sin(a) * 33); tl.set(f.x * 0.7, 2.5, f.z * 0.5); fov = 44; rate = 1.2;
      }
    }
    if (this.snap) { this.pos.copy(tp); this.look.copy(tl); this.fov = fov; this.snap = false; }
    else {
      this.pos.set(damp(this.pos.x, tp.x, rate, dt), damp(this.pos.y, tp.y, rate, dt), damp(this.pos.z, tp.z, rate, dt));
      const lr = rate * 1.25; this.look.set(damp(this.look.x, tl.x, lr, dt), damp(this.look.y, tl.y, lr, dt), damp(this.look.z, tl.z, lr, dt));
      this.fov = damp(this.fov, fov, 3, dt);
    }
    this.trauma = Math.max(0, this.trauma - dt * 1.7);
    const s = this.trauma * this.trauma, t = this.clock * 37;
    this.cam.position.set(this.pos.x + Math.sin(t) * s * 0.5, this.pos.y + Math.sin(t * 1.31 + 2) * s * 0.4, this.pos.z + Math.sin(t * 0.83 + 4) * s * 0.5);
    this.cam.lookAt(this.look);
    this.cam.rotation.z += Math.sin(t * 1.7) * s * 0.025;
    if (Math.abs(this.cam.fov - this.fov) > 0.01) { this.cam.fov = this.fov; this.cam.updateProjectionMatrix(); }
  }
}
export { FL };
