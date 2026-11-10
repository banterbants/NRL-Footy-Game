// Pooled particle effects (turf, dust, confetti, sparks) and rain.
import * as THREE from 'three';
import { rand } from '../config.js';

const VERT = `
  attribute float size; attribute vec4 pcolor; varying vec4 vColor; uniform float uScale;
  void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * uScale / max(0.5, -mv.z); gl_Position = projectionMatrix * mv; }`;
const FRAG = `
  varying vec4 vColor; uniform float uSoft;
  void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard;
    float a = mix(1.0, smoothstep(0.5, 0.12, d), uSoft); gl_FragColor = vec4(vColor.rgb, vColor.a * a);
    #include <colorspace_fragment>
  }`;

class Pool {
  constructor(scene, n, additive) {
    this.n = n; this.i = 0; this.live = 0;
    this.pos = new Float32Array(n * 3); this.col = new Float32Array(n * 4); this.size = new Float32Array(n);
    this.vel = new Float32Array(n * 3); this.life = new Float32Array(n); this.max = new Float32Array(n); this.grav = new Float32Array(n); this.drag = new Float32Array(n); this.s0 = new Float32Array(n); this.a0 = new Float32Array(n);
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 4)); g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: { uScale: { value: 600 }, uSoft: { value: additive ? 1 : 0.6 } }, transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5; scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, life, size, r, g, b, a = 1, grav = 9, drag = 0.5) {
    const i = this.i; this.i = (i + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z; this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = this.max[i] = life; this.s0[i] = size; this.a0[i] = a; this.grav[i] = grav; this.drag[i] = drag;
    this.col[i * 4] = r; this.col[i * 4 + 1] = g; this.col[i * 4 + 2] = b; this.col[i * 4 + 3] = a; this.size[i] = size;
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) continue;
      const l = (this.life[i] -= dt), j = i * 3;
      if (l <= 0) { this.size[i] = 0; this.col[i * 4 + 3] = 0; continue; }
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[j] *= d; this.vel[j + 2] *= d; this.vel[j + 1] = this.vel[j + 1] * d - this.grav[i] * dt;
      this.pos[j] += this.vel[j] * dt; this.pos[j + 1] += this.vel[j + 1] * dt; this.pos[j + 2] += this.vel[j + 2] * dt;
      if (this.pos[j + 1] < 0.03 && this.grav[i] > 0) { this.pos[j + 1] = 0.03; this.vel[j + 1] *= -0.25; this.vel[j] *= 0.6; this.vel[j + 2] *= 0.6; }
      this.col[i * 4 + 3] = this.a0[i] * Math.min(1, (l / this.max[i]) * 2.2);
    }
    this.geo.attributes.position.needsUpdate = this.geo.attributes.pcolor.needsUpdate = this.geo.attributes.size.needsUpdate = true;
  }
}

export class FX {
  constructor(scene) {
    this.solid = new Pool(scene, 1400, false); this.glow = new Pool(scene, 900, true);
    this.rain = null; this.scene = scene; this.raining = false; this.wet = false;
    this._buildRain();
  }
  resize(h, fov) { const s = h / (2 * Math.tan((fov * Math.PI) / 360)); this.solid.mat.uniforms.uScale.value = s; this.glow.mat.uniforms.uScale.value = s; }
  turf(x, z, n = 10, power = 1) {
    for (let i = 0; i < n; i++) { const a = rand(6.28), s = rand(1, 4) * power, g = rand(0.25, 0.5); this.solid.emit(x + rand(-0.3, 0.3), 0.1, z + rand(-0.3, 0.3), Math.cos(a) * s, rand(1.5, 4.5) * power, Math.sin(a) * s, rand(0.4, 0.9), rand(0.05, 0.11), g * 0.5, g, g * 0.35, 1, 11, 1.2); }
    if (this.wet) for (let i = 0; i < n; i++) { const a = rand(6.28), s = rand(1, 5) * power; this.solid.emit(x, 0.1, z, Math.cos(a) * s, rand(1, 4) * power, Math.sin(a) * s, rand(0.3, 0.6), rand(0.04, 0.08), 0.8, 0.88, 0.95, 0.7, 12, 0.6); }
    else for (let i = 0; i < n / 3; i++) this.solid.emit(x + rand(-0.4, 0.4), 0.2, z + rand(-0.4, 0.4), rand(-1, 1), rand(0.3, 1), rand(-1, 1), rand(0.5, 1), rand(0.5, 0.9), 0.75, 0.72, 0.6, 0.18, -0.4, 1.5);
  }
  dust(x, z, vx, vz) { this.solid.emit(x, 0.08, z, -vx * 0.15 + rand(-0.6, 0.6), rand(0.4, 1.4), -vz * 0.15 + rand(-0.6, 0.6), rand(0.25, 0.5), rand(0.05, 0.09), 0.22, 0.42, 0.18, 0.9, 9, 1.5); }
  trail(x, y, z) { this.glow.emit(x, y, z, 0, 0, 0, 0.3, 0.3, 0.5, 0.5, 0.46, 0.3, 0, 0); }
  confetti(x, y, z, colors, n = 80) {
    for (let i = 0; i < n; i++) { const c = colors[i % colors.length]; this.solid.emit(x + rand(-10, 10), y + rand(0, 6), z + rand(-10, 10), rand(-3, 3), rand(-1, 4), rand(-3, 3), rand(2.5, 5), rand(0.12, 0.2), (c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255, 1, 2.2, 0.9); }
  }
  firework(x, y, z, color) {
    const r = (color >> 16 & 255) / 255 * 3, g = (color >> 8 & 255) / 255 * 3, b = (color & 255) / 255 * 3;
    for (let i = 0; i < 90; i++) { const a = rand(6.28), e = Math.acos(rand(-1, 1)), s = rand(8, 15); this.glow.emit(x, y, z, Math.sin(e) * Math.cos(a) * s, Math.cos(e) * s, Math.sin(e) * Math.sin(a) * s, rand(0.9, 1.7), rand(0.5, 0.9), r, g, b, 1, 4, 1.4); }
  }
  flash(x, y, z) { this.glow.emit(x, y, z, 0, 0, 0, rand(0.06, 0.14), rand(1.2, 2.4), 4, 4, 4.4, 1, 0, 0); }
  spark(x, y, z, n = 8) { for (let i = 0; i < n; i++) this.glow.emit(x, y, z, rand(-3, 3), rand(1, 5), rand(-3, 3), rand(0.2, 0.5), 0.14, 3, 2.4, 1.2, 1, 10, 0.5); }

  _buildRain() {
    const N = 1600, pos = new Float32Array(N * 6), seed = new Float32Array(N * 2);
    for (let i = 0; i < N; i++) { const x = rand(-45, 45), y = rand(0, 40), z = rand(-45, 45); pos.set([x, y, z, x, y, z], i * 6); seed[i * 2] = 0; seed[i * 2 + 1] = 1; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('end', new THREE.BufferAttribute(seed, 1));
    this.rainMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() } }, transparent: true, depthWrite: false,
      vertexShader: `attribute float end; uniform float uTime; uniform vec3 uCam; varying float vA;
        void main(){ vec3 p = position; p.y = mod(p.y - uTime * 34.0, 40.0); p.x = mod(p.x - uTime * 5.0 - uCam.x + 45.0, 90.0) - 45.0 + uCam.x; p.z = mod(p.z - uCam.z + 45.0, 90.0) - 45.0 + uCam.z;
          p.y += end * 1.1; p.x += end * 0.16; vA = end; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
      fragmentShader: `varying float vA; void main(){ gl_FragColor = vec4(0.78, 0.85, 0.95, 0.1 + vA * 0.22); }`,
    });
    this.rain = new THREE.LineSegments(g, this.rainMat); this.rain.frustumCulled = false; this.rain.visible = false; this.rain.renderOrder = 6; this.scene.add(this.rain);
  }
  setRain(on) { this.raining = this.wet = on; this.rain.visible = on; }
  update(dt, time, cam) {
    this.solid.update(dt); this.glow.update(dt);
    if (this.raining) { this.rainMat.uniforms.uTime.value = time; this.rainMat.uniforms.uCam.value.copy(cam.position); }
  }
}
