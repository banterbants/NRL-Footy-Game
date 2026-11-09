// Sixth Tackle - a simple 3D rugby league inspired game.
// World units are metres. x runs the length of the field (try lines at +-50),
// z runs across it (touch lines at +-34). Team 0 (you) attacks toward +x.
import * as THREE from './three.module.min.js';

const FL = 50, IG = 8, FW = 34, GRAV = 14, HALF_SECS = 150;
const LANES = [-25, -15, -5, 5, 15, 25, 0];          // index 6 is the fullback
const TEAMS = [
  { name: 'Kookaburras', abbr: 'KOO', jersey: 0x1c7fa6, trim: 0xf2b62b, shorts: 0x0f3d52 },
  { name: 'Ironbarks', abbr: 'IRO', jersey: 0xb3302a, trim: 0xf3f6ee, shorts: 0x26201f },
];
const dirOf = t => (t === 0 ? 1 : -1);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

/* ------------------------------------------------------------------ DOM */
document.body.insertAdjacentHTML('beforeend', `
<div id="st-stage"></div>
<div id="st-hud" hidden>
  <div id="st-board">
    <div class="tm koo" id="st-t0"><span>${TEAMS[0].abbr}</span><b id="st-s0">0</b></div>
    <div class="clk"><span id="st-half">1st half</span><b id="st-clock">2:30</b></div>
    <div class="tm iro" id="st-t1"><b id="st-s1">0</b><span>${TEAMS[1].abbr}</span></div>
  </div>
  <div id="st-count">Tackle 0</div>
</div>
<div id="st-msg"></div>
<div id="st-pad" hidden></div>
<div id="st-stick" hidden><i></i></div>
<div id="st-btns" hidden>
  <button class="st-b" id="st-s" type="button"><i></i><span>Sprint</span></button>
  <button class="st-b" id="st-c" type="button">Step</button>
  <button class="st-b" id="st-b" type="button">Kick</button>
  <button class="st-b" id="st-a" type="button">Pass</button>
</div>
<div id="st-meter" hidden>Stop the pin in the gold<div class="bar"><div class="zone"></div><div class="pin"></div></div></div>
<button id="st-pause" type="button" hidden aria-label="Pause">II</button>
<div id="st-menu">
  <div class="eyebrow" id="st-eyebrow">Rugby league, six tackles at a time</div>
  <h1 id="st-title">Sixth <em>Tackle</em></h1>
  <p id="st-blurb">You are the ${TEAMS[0].name}, running left to right up the screen. Six tackles to score, then the ball is handed over. A try is 4 points, the conversion 2.</p>
  <ul id="st-how">
    <li><b>Stick</b><span>Run. Keyboard: arrows or WASD.</span></li>
    <li><b>Pass</b><span>Throw to a support runner, toward the side you lean. Key: Space.</span></li>
    <li><b>Kick</b><span>Punt downfield, best on the last tackle. Key: K.</span></li>
    <li><b>Step</b><span>Sidestep through a tackle. Key: L.</span></li>
    <li><b>Sprint</b><span>Hold to burn the gold stamina. Key: Shift.</span></li>
    <li><b>Defence</b><span>Run into the ball carrier or press Tackle to dive. Switch changes player.</span></li>
  </ul>
  <button class="st-go" id="st-go" type="button">Kick off</button>
</div>`);
const $ = id => document.getElementById(id);
const el = {
  stage: $('st-stage'), hud: $('st-hud'), msg: $('st-msg'), pad: $('st-pad'), stick: $('st-stick'), btns: $('st-btns'),
  meter: $('st-meter'), menu: $('st-menu'), go: $('st-go'), pause: $('st-pause'), count: $('st-count'),
  s0: $('st-s0'), s1: $('st-s1'), t0: $('st-t0'), t1: $('st-t1'), half: $('st-half'), clock: $('st-clock'),
  a: $('st-a'), b: $('st-b'), c: $('st-c'), s: $('st-s'),
};

/* ---------------------------------------------------------------- audio */
let actx = null;
function audioOn() {
  try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) { actx = null; }
}
function tone(freq, dur, type = 'sine', vol = 0.15, slide = 0, delay = 0) {
  if (!actx) return;
  const t = actx.currentTime + delay, o = actx.createOscillator(), g = actx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(actx.destination); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur, vol, freq) {
  if (!actx) return;
  const n = Math.floor(actx.sampleRate * dur), buf = actx.createBuffer(1, n, actx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / n);
  const s = actx.createBufferSource(), f = actx.createBiquadFilter(), g = actx.createGain();
  s.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.6; g.gain.value = vol;
  s.connect(f).connect(g).connect(actx.destination); s.start();
}
const sfx = {
  whistle: (long) => { tone(2350, long ? 0.7 : 0.28, 'square', 0.05); tone(2480, long ? 0.7 : 0.28, 'square', 0.04); },
  thud: () => { tone(130, 0.18, 'sine', 0.35, -80); noise(0.12, 0.2, 400); },
  kick: () => { tone(220, 0.12, 'triangle', 0.3, -150); },
  pass: () => { noise(0.08, 0.08, 1800); },
  cheer: () => { noise(2.4, 0.3, 900); noise(2.0, 0.2, 1700); },
  groan: () => { noise(1.2, 0.14, 380); },
};

/* ------------------------------------------------------------- renderer */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
el.stage.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(52, 1.6, 0.5, 600);
const camLook = new THREE.Vector3(0, 1, 0);
let portrait = false;
function resize() {
  const w = el.stage.clientWidth || window.innerWidth, h = el.stage.clientHeight || window.innerHeight;
  renderer.setSize(w, h, false);
  portrait = h > w;
  cam.aspect = w / h; cam.fov = portrait ? 72 : 52; cam.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function quad(a, b, c, d, mat) {            // a,b bottom edge, c,d top edge
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([...a, ...b, ...c, ...a, ...c, ...d], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); scene.add(m); return m;
}

function buildStadium() {
  scene.background = canvasTex(8, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#2c5f9e'); gr.addColorStop(0.55, '#8fc0e6'); gr.addColorStop(1, '#f0d9a8');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  scene.fog = new THREE.Fog(0xcfdcdc, 140, 420);
  scene.add(new THREE.HemisphereLight(0xdcecff, 0x4a6a3a, 2.1));
  const sun = new THREE.DirectionalLight(0xfff0d2, 2.2); sun.position.set(-40, 80, 30); scene.add(sun);

  // surrounds
  const apron = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), new THREE.MeshLambertMaterial({ color: 0x2e6b33 }));
  apron.rotation.x = -Math.PI / 2; apron.position.y = -0.05; scene.add(apron);

  // pitch, painted at 16 px per metre: canvas x -> world x, canvas y -> world z
  const PPM = 16, PW = 128, PH = 78;
  const pitchTex = canvasTex(PW * PPM, PH * PPM, (g) => {
    const X = x => (x + PW / 2) * PPM, Z = z => (z + PH / 2) * PPM;
    g.fillStyle = '#2f7436'; g.fillRect(0, 0, PW * PPM, PH * PPM);
    for (let i = -5; i < 5; i++) {                               // mown 10 m bands
      g.fillStyle = i % 2 ? '#3a8a3f' : '#33803a';
      g.fillRect(X(i * 10), Z(-FW), 10 * PPM, FW * 2 * PPM);
    }
    g.fillStyle = '#2b6d33'; g.fillRect(X(-FL - IG), Z(-FW), IG * PPM, FW * 2 * PPM); g.fillRect(X(FL), Z(-FW), IG * PPM, FW * 2 * PPM);
    for (let i = 0; i < 2600; i++) {                             // turf speckle
      g.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,.035)' : 'rgba(0,0,0,.05)';
      g.fillRect(Math.random() * PW * PPM, Math.random() * PH * PPM, 3, 14);
    }
    g.strokeStyle = '#f3f6ee'; g.fillStyle = '#f3f6ee'; g.lineCap = 'butt';
    const vline = (x, lw) => { g.lineWidth = lw; g.beginPath(); g.moveTo(X(x), Z(-FW)); g.lineTo(X(x), Z(FW)); g.stroke(); };
    g.lineWidth = 3; g.strokeRect(X(-FL - IG), Z(-FW), (FL + IG) * 2 * PPM, FW * 2 * PPM);
    for (let x = -FL; x <= FL; x += 10) vline(x, Math.abs(x) === FL ? 4 : x === 0 ? 3 : 2);
    for (let x = -FL + 10; x < FL; x += 10) {                    // 10 m and 20 m in-from-touch dashes
      for (const z of [-24, -14, 14, 24]) { g.fillRect(X(x) - 9, Z(z) - 1, 18, 2); }
    }
    g.font = '800 64px "Avenir Next Condensed","Arial Narrow",Arial,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let x = -FL + 10; x < FL; x += 10) {                    // metres from the nearer try line
      const label = String(50 - Math.abs(x));
      for (const z of [-27.5, 27.5]) {
        g.save(); g.translate(X(x), Z(z)); g.rotate(Math.PI / 2);
        g.fillStyle = 'rgba(243,246,238,.9)'; g.fillText(label[0], -26, 0); g.fillText(label[1], 26, 0); g.restore();
      }
    }
    g.font = 'italic 800 84px "Avenir Next Condensed","Arial Narrow",Arial,sans-serif';
    [[-FL - IG / 2, TEAMS[0], '#1c7fa6'], [FL + IG / 2, TEAMS[1], '#b3302a']].forEach(([x, t, col]) => {
      g.save(); g.translate(X(x), Z(0)); g.rotate(Math.PI / 2);
      g.fillStyle = col; g.globalAlpha = 0.85; g.fillRect(-330, -44, 660, 88);
      g.globalAlpha = 1; g.fillStyle = '#f3f6ee'; g.fillText(t.name.toUpperCase(), 0, 4); g.restore();
    });
  });
  const pitch = new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), new THREE.MeshLambertMaterial({ map: pitchTex }));
  pitch.rotation.x = -Math.PI / 2; scene.add(pitch);

  // goal posts
  const white = new THREE.MeshLambertMaterial({ color: 0xf3f6ee });
  for (const s of [-1, 1]) {
    for (const z of [-2.75, 2.75]) {
      const up = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 16, 8), white); up.position.set(s * FL, 8, z); scene.add(up);
      const padM = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2, 0.5), new THREE.MeshLambertMaterial({ color: s < 0 ? TEAMS[0].jersey : TEAMS[1].jersey }));
      padM.position.set(s * FL, 1, z); scene.add(padM);
    }
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5.5, 8), white);
    bar.rotation.x = Math.PI / 2; bar.position.set(s * FL, 3, 0); scene.add(bar);
  }

  // grandstands with a painted crowd
  const crowdTex = canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#1b2430'; g.fillRect(0, 0, w, h);
    const cols = ['#1c7fa6', '#f2b62b', '#b3302a', '#f3f6ee', '#3a4656', '#c9a27a', '#7d5a44', '#22303f', '#e0e4dc'];
    for (let r = 0; r < 20; r++) {
      g.fillStyle = 'rgba(0,0,0,.28)'; g.fillRect(0, r * 12.8 + 10, w, 3);
      for (let i = 0; i < 64; i++) {
        if (Math.random() < 0.1) continue;
        g.fillStyle = cols[(Math.random() * cols.length) | 0];
        g.fillRect(i * 8 + rand(0, 2), r * 12.8 + rand(1, 3), 5, 7);
      }
    }
  });
  crowdTex.wrapS = THREE.RepeatWrapping;
  const stand = (a, b, out, rep) => {       // a,b: ends of the front rail on the ground; out: outward unit vector
    const t = crowdTex.clone(); t.needsUpdate = true; t.repeat.set(rep, 1);
    const m = new THREE.MeshBasicMaterial({ map: t, side: THREE.DoubleSide });
    const rise = 20, run = 26, base = 2.4;
    quad([a[0], base, a[1]], [b[0], base, b[1]], [b[0] + out[0] * run, base + rise, b[1] + out[1] * run], [a[0] + out[0] * run, base + rise, a[1] + out[1] * run], m);
    const wall = new THREE.MeshLambertMaterial({ color: 0x18222b, side: THREE.DoubleSide });
    quad([a[0], 0, a[1]], [b[0], 0, b[1]], [b[0], base, b[1]], [a[0], base, a[1]], wall);
    const roof = new THREE.MeshLambertMaterial({ color: 0xdfe6e2, side: THREE.DoubleSide });
    quad([a[0] + out[0] * 8, base + rise + 7, a[1] + out[1] * 8], [b[0] + out[0] * 8, base + rise + 7, b[1] + out[1] * 8],
      [b[0] + out[0] * (run + 2), base + rise + 5, b[1] + out[1] * (run + 2)], [a[0] + out[0] * (run + 2), base + rise + 5, a[1] + out[1] * (run + 2)], roof);
  };
  stand([-70, -44], [70, -44], [0, -1], 9);
  stand([-70, 44], [70, 44], [0, 1], 9);
  stand([78, -40], [78, 40], [1, 0], 5);
  stand([-96, -40], [-96, 40], [-1, 0], 5);   // home end sits well back so the chase camera never clips it

  // floodlight towers
  const steel = new THREE.MeshLambertMaterial({ color: 0x59636b });
  const lamp = new THREE.MeshBasicMaterial({ color: 0xfffbe6 });
  for (const [x, z] of [[-74, -62], [74, -62], [-74, 62], [74, 62]]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.8, 44, 6), steel); pole.position.set(x, 22, z); scene.add(pole);
    const head = new THREE.Mesh(new THREE.BoxGeometry(7, 4, 1), lamp); head.position.set(x, 45, z); head.lookAt(0, 0, 0); scene.add(head);
  }
}

/* -------------------------------------------------------------- players */
const SKIN = [0xe2b48c, 0xc68e62, 0x8d5a3b, 0xf0c9a4, 0xa8714a, 0x6e4530, 0xd9a577];
const shadowGeo = new THREE.CircleGeometry(0.55, 16);
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false });
function makePlayer(team, idx) {
  const kit = TEAMS[team], L = c => new THREE.MeshLambertMaterial({ color: c });
  const skin = L(SKIN[(idx + team * 3) % SKIN.length]), jersey = L(kit.jersey), trim = L(kit.trim), shorts = L(kit.shorts);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const box = (w, h, d, m, x, y, z, parent = body) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); parent.add(o); return o; };
  box(0.34, 0.62, 0.58, jersey, 0, 1.24, 0);
  box(0.36, 0.13, 0.6, trim, 0, 1.3, 0);                                    // chest hoop
  box(0.33, 0.26, 0.54, shorts, 0, 0.82, 0);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), skin); head.position.set(0.02, 1.74, 0); body.add(head);
  box(0.3, 0.1, 0.3, L(idx % 3 ? 0x2a1d14 : 0x6b4a2a), -0.03, 1.87, 0);     // hair
  const limb = (y, z, len, upper, lower) => {
    const g = new THREE.Group(); g.position.set(0, y, z); body.add(g);
    box(0.16, len * 0.55, 0.16, upper, 0, -len * 0.275, 0, g);
    box(0.15, len * 0.45, 0.15, lower, 0, -len * 0.775, 0, g);
    return g;
  };
  const legs = [limb(0.72, 0.16, 0.72, skin, trim), limb(0.72, -0.16, 0.72, skin, trim)];
  const arms = [limb(1.5, 0.37, 0.6, jersey, skin), limb(1.5, -0.37, 0.6, jersey, skin)];
  root.scale.setScalar(1.25);
  const sh = new THREE.Mesh(shadowGeo, shadowMat); sh.rotation.x = -Math.PI / 2; sh.position.y = 0.03; root.add(sh);
  scene.add(root);
  return {
    team, idx, fb: idx === 6, lz: LANES[idx], x: 0, z: 0, vx: 0, vz: 0, dir: team === 0 ? 0 : Math.PI,
    spd: 6.1 + (idx % 3) * 0.15, down: 0, holdT: 0, think: 0, immune: 0, dive: 0, stepT: 0, stepS: 0, chase: false,
    tx: 0, tz: 0, ph: Math.random() * 6, root, body, legs, arms,
  };
}

/* ---------------------------------------------------------------- state */
let players = [], ball, ballMesh, ballShadow, ring;
const S = {
  phase: 'menu', t: 0, dur: 0, then: null, poss: 0, tackles: 0, mark: { x: 0, z: 0 }, dh: null, clock: HALF_SECS, half: 1,
  score: [0, 0], U: null, paused: false, stam: 1, tired: false, stepCd: 0, conv: null, msgT: 0, time: 0,
};
const input = { mx: 0, mz: 0, sprint: false, a: false, b: false, c: false };
const keys = {};

function build() {
  buildStadium();
  for (let t = 0; t < 2; t++) for (let i = 0; i < 7; i++) players.push(makePlayer(t, i));
  ballMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), new THREE.MeshLambertMaterial({ color: 0xf1e3c4 }));
  ballMesh.scale.set(0.36, 0.23, 0.23); scene.add(ballMesh);
  ballShadow = new THREE.Mesh(shadowGeo, shadowMat); ballShadow.rotation.x = -Math.PI / 2; ballShadow.scale.setScalar(0.6); scene.add(ballShadow);
  ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.08, 28), new THREE.MeshBasicMaterial({ color: 0xf2b62b, transparent: true, opacity: 0.95, depthWrite: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05; ring.visible = false; scene.add(ring);
  ball = { x: 0, y: 0.3, z: 0, vx: 0, vy: 0, vz: 0, mode: 'dead', carrier: null, target: null, last: 0, kicker: null, noCatch: 0, spin: 0 };
  layoutKickoff(1);
}
const team = t => players.filter(p => p.team === t);

function say(text, secs = 1.4, gold = false) {
  el.msg.textContent = text; el.msg.classList.toggle('gold', gold); el.msg.classList.add('on'); S.msgT = secs;
}
function setPhase(name, dur = 0, then = null) { S.phase = name; S.t = 0; S.dur = dur; S.then = then; }

/* ----------------------------------------------------------- set pieces */
function layoutKickoff(kTeam) {
  const R = 1 - kTeam, sR = -dirOf(R);
  for (const p of players) {
    p.vx = p.vz = 0; p.down = 0; p.dive = 0; p.stepT = 0; p.immune = 0;
    if (p.team === R) { p.x = sR * (p.fb ? 42 : 24 + (p.idx % 2) * 10); p.z = p.lz; p.dir = sR > 0 ? Math.PI : 0; }
    else { p.x = -sR * (p.fb ? 14 : p.idx === 2 ? 2.5 : 1); p.z = p.idx === 2 ? 0 : p.lz; p.dir = sR > 0 ? 0 : Math.PI; }
  }
  Object.assign(ball, { x: 0, y: 0.25, z: 0, vx: 0, vy: 0, vz: 0, mode: 'dead', carrier: null, target: null });
}
function kickoff(kTeam) {
  const R = 1 - kTeam, sR = -dirOf(R);
  layoutKickoff(kTeam);
  S.poss = R; S.tackles = 0; S.U = players[2];
  say('Kick off', 1.2);
  setPhase('kickoff', 1.3, () => {
    const T = 2.3, tz = rand(-16, 16);
    Object.assign(ball, { mode: 'loose', vx: sR * rand(28, 36) / T, vz: tz / T, vy: GRAV * T / 2, last: kTeam, kicker: team(kTeam)[2], noCatch: 0.5 });
    sfx.kick(); sfx.whistle();
    S.U = nearestTo(0, landing());
    setPhase('play');
  });
}

function startRuck(mx, mz, o = {}) {
  if (S.clock <= 0) return endHalf();
  if (o.team !== undefined && o.team !== S.poss) { S.poss = o.team; S.tackles = 0; }
  if (o.reset) S.tackles = 0;
  const A = S.poss, d = dirOf(A);
  mx = clamp(mx, -FL + 1, FL - 1); mz = clamp(mz, -27, 27);
  S.mark = { x: mx, z: mz };
  Object.assign(ball, { mode: 'dead', carrier: null, target: null, x: mx, y: 0.25, z: mz, vx: 0, vy: 0, vz: 0 });
  let dh = null, best = 1e9;
  for (const p of team(A)) { const dd = Math.hypot(p.x - mx, p.z - mz) + (p.down > 0 ? 6 : 0) + (p === o.tackled ? 99 : 0) + (p.fb ? 8 : 0); if (dd < best) { best = dd; dh = p; } }
  S.dh = dh;
  for (const p of players) {
    p.dive = 0; p.stepT = 0;
    if (p.team === A) {
      if (p === dh) { p.tx = mx - d * 1.6; p.tz = mz; }
      else { p.tx = mx - d * (p.fb ? 11 : 4 + 0.1 * Math.abs(p.lz - mz)); p.tz = p.fb ? mz * 0.5 : p.lz; }
      p.tx = clamp(p.tx, -FL - IG + 1, FL + IG - 1);
    } else {
      p.tx = p.fb ? clamp(mx + d * 26, -FL - 5, FL + 5) : clamp(mx + d * 8, -FL, FL);
      p.tz = p.fb ? mz * 0.5 : p.lz * 0.8 + mz * 0.2;
    }
  }
  S.U = A === 0 ? dh : pickDefender();
  if (o.msg) say(o.msg, 1.3, !!o.gold);
  setPhase('ruck', o.slow ? 2.0 : 1.45, () => {
    Object.assign(ball, { mode: 'held', carrier: dh }); dh.holdT = 0; dh.think = 0.3; dh.down = 0;
    if (A === 0) S.U = dh; else S.U = pickDefender();
    setPhase('play');
  });
}
function handoverMsg() { return 'Handover'; }

function endHalf() {
  sfx.whistle(true);
  Object.assign(ball, { mode: 'dead', carrier: null, target: null });
  if (S.half === 1) {
    say('Half time', 2.6);
    setPhase('half', 3, () => { S.half = 2; S.clock = HALF_SECS; kickoff(0); });
  } else {
    setPhase('full', 1.6, showFullTime);
    say('Full time', 1.6);
  }
}

function scoreTry(p) {
  S.score[p.team] += 4;
  Object.assign(ball, { mode: 'dead', carrier: null, target: null, x: p.x, y: 0.25, z: p.z });
  p.down = 1.6; p.vx = p.vz = 0;
  say('Try!', 2.2, true); sfx.whistle(true); if (p.team === 0) sfx.cheer(); else sfx.groan();
  setPhase('try', 2.5, () => startConversion(p));
}
function startConversion(p) {
  const d = dirOf(p.team), z = clamp(p.z, -30, 30), x = d * (FL - 20);
  for (const q of players) { q.vx = q.vz = 0; q.down = 0; if (q !== p && Math.abs(q.x - x) < 6 && Math.abs(q.z - z) < 4) q.z += q.z > z ? 5 : -5; }
  p.x = x - d * 1.6; p.z = z; p.dir = d > 0 ? 0 : Math.PI;
  Object.assign(ball, { mode: 'dead', x, y: 0.25, z, vx: 0, vy: 0, vz: 0 });
  S.conv = { team: p.team, z, d, w: 0.42 - 0.24 * Math.abs(z) / 30, needle: 0, flying: false, good: false, done: false };
  S.U = p.team === 0 ? p : null;
  if (p.team === 0) { el.meter.hidden = false; el.meter.querySelector('.zone').style.width = (S.conv.w * 100) + '%'; }
  setPhase('convert');
}
function kickConversion(needle) {
  const c = S.conv, T = 1.45;
  c.good = Math.abs(needle) <= c.w; c.flying = true;
  const tz = c.good ? needle / c.w * 1.9 : Math.sign(needle || 1) * (3.8 + (Math.abs(needle) - c.w) * 6);
  Object.assign(ball, { mode: 'conv', vx: c.d * 20 / T, vz: (tz - c.z) / T, vy: (6.5 + 0.5 * GRAV * T * T) / T });
  el.meter.hidden = true; sfx.kick(); S.t = 0;
}

/* -------------------------------------------------------------- helpers */
function landing() {
  if (ball.y <= 0.35 && Math.abs(ball.vy) < 2) return { x: ball.x + ball.vx * 0.25, z: ball.z + ball.vz * 0.25 };
  const t = (ball.vy + Math.sqrt(ball.vy * ball.vy + 2 * GRAV * Math.max(0, ball.y))) / GRAV;
  return { x: clamp(ball.x + ball.vx * t, -FL - IG, FL + IG), z: clamp(ball.z + ball.vz * t, -FW, FW) };
}
function nearestTo(t, pt, skip) {
  let best = null, bd = 1e9;
  for (const p of team(t)) { if (p === skip) continue; const dd = dist(p, pt) + (p.down > 0 ? 8 : 0); if (dd < bd) { bd = dd; best = p; } }
  return best;
}
function pickDefender(skip) {
  const ref = ball.carrier || ball.target || (ball.mode === 'loose' ? landing() : S.mark);
  return nearestTo(0, ref, skip);
}
function space(p) { let m = 99; for (const o of team(1 - p.team)) if (o.down <= 0) m = Math.min(m, dist(o, p)); return m; }
function setVel(p, vx, vz, dt) { const k = Math.min(1, dt * 9); p.vx += (vx - p.vx) * k; p.vz += (vz - p.vz) * k; }
function moveTo(p, tx, tz, spd, dt) {
  const dx = tx - p.x, dz = tz - p.z, l = Math.hypot(dx, dz) || 1, s = l < 0.25 ? 0 : Math.min(spd, l * 4);
  setVel(p, dx / l * s, dz / l * s, dt);
}

/* ---------------------------------------------------------- ball events */
function gain(p) {
  Object.assign(ball, { mode: 'held', carrier: p, target: null }); p.holdT = 0; p.think = 0.35;
  if (p.team !== S.poss) { S.poss = p.team; S.tackles = 0; }
  S.U = p.team === 0 ? p : pickDefender();
}
function doPass(from, to) {
  Object.assign(ball, { mode: 'pass', carrier: null, target: to, last: from.team, x: from.x, y: 1.5, z: from.z });
  sfx.pass();
  if (to.team === 0) S.U = to;
}
function doKick(p, kx, kz) {
  const l = Math.hypot(kx, kz) || 1;
  Object.assign(ball, { mode: 'loose', carrier: null, target: null, last: p.team, kicker: p, noCatch: 0.45, x: p.x, y: 1.2, z: p.z, vx: kx / l * 19, vz: kz / l * 19, vy: 13 });
  sfx.kick();
}
function userPass(c) {
  let best = null, bd = 1e9;
  for (const m of team(0)) {
    if (m === c || m.down > 0) continue;
    if ((m.x - c.x) > 0.9) continue;                      // no forward passes
    const dd = dist(m, c); if (dd < 1.5 || dd > 26) continue;
    if (Math.abs(input.mz) > 0.35 && Math.sign(m.z - c.z) !== Math.sign(input.mz)) continue;
    if (dd < bd) { bd = dd; best = m; }
  }
  if (best) doPass(c, best); else say('No support', 0.6);
}
function tackle(def, c) {
  c.down = 1.1; def.down = 0.9; c.vx = c.vz = def.vx = def.vz = 0; def.dive = 0;
  sfx.thud();
  S.tackles++;
  if (S.tackles >= 6) { sfx.whistle(); startRuck(c.x, c.z, { team: 1 - c.team, msg: handoverMsg(), slow: true }); }
  else startRuck(c.x, c.z, { tackled: c, msg: S.tackles === 5 ? 'Last tackle' : 'Tackle ' + S.tackles, gold: S.tackles === 5 });
}

/* --------------------------------------------------------------- AI */
function aiCarrier(c, dt) {
  const d = dirOf(c.team);
  let near = null, nd = 99;
  for (const o of team(1 - c.team)) { if (o.down > 0 || (o.x - c.x) * d < -1) continue; const dd = dist(o, c); if (dd < nd) { nd = dd; near = o; } }
  let tz = c.z;
  if (near && nd < 12) tz = c.z + (Math.abs(c.z - near.z) < 0.5 ? (c.z > 0 ? -1 : 1) : Math.sign(c.z - near.z)) * 7;
  if (Math.abs(c.z) > 29) tz = Math.sign(c.z) * 24;
  moveTo(c, c.x + d * 10, tz, c.spd + 0.3, dt);
  c.think -= dt;
  if (c.think <= 0 && c.holdT > 0.5) {
    c.think = 0.25;
    if (S.tackles === 5 && FL - c.x * d > 28 && Math.random() < 0.45) { doKick(c, d, rand(-0.25, 0.25)); S.U = pickDefender(); return; }
    if (near && nd < 5.5 && Math.random() < 0.55) {
      let best = null, bs = space(c) + 2.5;
      for (const m of team(c.team)) {
        if (m === c || m.down > 0 || (m.x - c.x) * d > -0.4) continue;
        const dd = dist(m, c); if (dd < 3 || dd > 20) continue;
        const sp = space(m); if (sp > bs) { bs = sp; best = m; }
      }
      if (best) doPass(c, best);
    }
  }
}
function aiSupport(p, c, dt) {
  const d = dirOf(p.team), dz = Math.abs(p.lz - c.z);
  moveTo(p, c.x - d * (p.fb ? 9 : 2.6 + 0.1 * dz), p.fb ? c.z * 0.6 : p.lz * 0.85 + c.z * 0.15, p.spd + 0.9, dt);
}
function aiDefend(p, c, dt) {
  const d = dirOf(c.team), ahead = (p.x - c.x) * d, dd = dist(p, c);
  if (p.chase || (p.fb && dd < 13) || ahead < 0) {
    const lead = clamp(dd / 9, 0, 0.55);
    moveTo(p, c.x + c.vx * lead, c.z + c.vz * lead, p.spd + (p.team === 1 ? 0.15 : 0.35), dt);
  } else if (p.fb) moveTo(p, c.x + d * clamp(ahead, 9, 24), c.z * 0.8, p.spd, dt);
  else moveTo(p, c.x + d * clamp(ahead, 2.5, 6), p.lz * 0.7 + c.z * 0.3, p.spd * 0.8, dt);
}
function aiLoose(p, L, dt) {
  if (p.chase) moveTo(p, L.x, L.z, p.spd + 0.7, dt);
  else moveTo(p, L.x - dirOf(p.team) * (p.fb ? 16 : 7), p.lz * 0.8 + L.z * 0.2, p.spd * 0.9, dt);
}
function flagChasers(t, pt, n) {
  const list = team(t).filter(p => p.down <= 0 && !(ball.mode === 'loose' && p === ball.kicker && ball.noCatch > 0)).sort((a, b) => dist(a, pt) - dist(b, pt));
  for (const p of team(t)) p.chase = false;
  for (let i = 0; i < Math.min(n, list.length); i++) list[i].chase = true;
}

/* -------------------------------------------------------- user control */
function userMove(p, dt) {
  const c = ball.carrier === p, d = 1;
  if (p.stepT > 0) { p.stepT -= dt; p.vx = d * 5.5; p.vz = p.stepS * 12; return; }
  if (p.dive > 0) {
    p.dive -= dt;
    if (p.dive <= 0) { p.down = 0.7; p.vx *= 0.2; p.vz *= 0.2; }
    return;
  }
  const mag = Math.hypot(input.mx, input.mz), sprinting = input.sprint && !S.tired && mag > 0.2;
  if (sprinting) { S.stam -= dt * 0.3; if (S.stam <= 0) { S.stam = 0; S.tired = true; } }
  else { S.stam = Math.min(1, S.stam + dt * 0.17); if (S.stam > 0.3) S.tired = false; }
  const spd = sprinting ? 8.5 : 6.6;
  setVel(p, input.mx * spd, input.mz * spd, dt);
  if (c) {
    if (input.a && p.holdT > 0.12) userPass(p);
    else if (input.b && p.holdT > 0.12) { doKick(p, Math.max(0.45, input.mx), input.mz * 0.8); }
    else if (input.c && S.stepCd <= 0) {
      let s = Math.abs(input.mz) > 0.3 ? Math.sign(input.mz) : 0;
      if (!s) { const o = nearestTo(1, p); s = o && o.z > p.z ? -1 : 1; }
      p.stepT = 0.2; p.stepS = s; p.immune = 0.34; S.stepCd = 1.5; sfx.pass();
    }
  } else {
    if (input.a && ball.mode !== 'dead') {
      p.dive = 0.26; const a = mag > 0.2 ? Math.atan2(input.mz, input.mx) : p.dir;
      p.vx = Math.cos(a) * 11.5; p.vz = Math.sin(a) * 11.5;
    } else if (input.b) S.U = pickDefender(p) || p;
  }
}

/* ---------------------------------------------------------------- update */
function updateBall(dt) {
  if (ball.mode === 'held') {
    const c = ball.carrier; ball.x = c.x + Math.cos(c.dir) * 0.45; ball.z = c.z + Math.sin(c.dir) * 0.45; ball.y = c.down > 0 ? 0.4 : 1.45;
    ball.vx = c.vx; ball.vz = c.vz; return;
  }
  ball.spin += dt * 12;
  if (ball.mode === 'pass') {
    const t = ball.target, dx = t.x - ball.x, dz = t.z - ball.z, l = Math.hypot(dx, dz);
    if (l < 1 || t.down > 0) { if (t.down > 0) { ball.mode = 'loose'; ball.vy = 2; } else gain(t); return; }
    ball.x += dx / l * 17 * dt; ball.z += dz / l * 17 * dt; ball.y = 1.5 + Math.min(0.5, l * 0.05);
    for (const o of team(1 - t.team)) {
      if (o.down <= 0 && Math.hypot(o.x - ball.x, o.z - ball.z) < 0.75) { gain(o); say('Intercept!', 1.2, o.team === 0); return; }
    }
    return;
  }
  if (ball.mode === 'loose' || ball.mode === 'conv') {
    ball.noCatch -= dt;
    ball.vy -= GRAV * dt; ball.x += ball.vx * dt; ball.y += ball.vy * dt; ball.z += ball.vz * dt;
    if (ball.y < 0.25) {
      ball.y = 0.25;
      if (ball.vy < -2.5) { ball.vy *= -0.45; ball.vx *= 0.7; ball.vz = ball.vz * 0.7 + rand(-1.6, 1.6); }
      else { ball.vy = 0; const f = Math.max(0, 1 - dt * 1.8); ball.vx *= f; ball.vz *= f; }
    }
  }
  if (ball.mode !== 'loose') return;
  if (Math.abs(ball.z) > FW + 0.3) {
    sfx.whistle();
    return startRuck(ball.x, Math.sign(ball.z) * 24, { team: 1 - ball.last, reset: true, msg: 'Touch', slow: true });
  }
  if (Math.abs(ball.x) > FL + IG) {
    const s = Math.sign(ball.x), def = s > 0 ? 1 : 0;
    sfx.whistle();
    if (ball.last === def) return startRuck(s * 40, 0, { team: 1 - def, reset: true, msg: 'Dead ball', slow: true });
    return startRuck(s * 30, 0, { team: def, reset: true, msg: '20 metre restart', slow: true });
  }
  if (ball.y < 2.1) {
    let best = null, bd = 1.15;
    for (const p of players) {
      if (p.down > 0 || (p === ball.kicker && ball.noCatch > 0)) continue;
      const dd = Math.hypot(p.x - ball.x, p.z - ball.z); if (dd < bd) { bd = dd; best = p; }
    }
    if (best) gain(best);
  }
}

function updatePlay(dt) {
  S.clock -= dt; S.stepCd -= dt;
  let c = ball.carrier;
  const ref = c || ball.target;
  if (ball.mode === 'loose') { const L = landing(); flagChasers(0, L, 2); flagChasers(1, L, 2); }
  else if (ref) flagChasers(1 - ref.team, ref, 2);
  if (!S.U || S.U.team !== 0) S.U = pickDefender();

  for (const p of players) {
    p.holdT += dt; p.immune -= dt;
    if (p.down > 0) { p.down -= dt; p.vx = p.vz = 0; continue; }
    if (p === S.U) userMove(p, dt);
    else if (ball.mode === 'loose') aiLoose(p, landing(), dt);
    else {
      const r = ball.carrier || ball.target;
      if (!r) continue;
      if (p === r) { if (ball.carrier === p) aiCarrier(p, dt); else setVel(p, dirOf(p.team) * p.spd, 0, dt); }
      else if (p.team === r.team) aiSupport(p, r, dt);
      else aiDefend(p, r, dt);
    }
  }
  integrate(dt);
  updateBall(dt);
  if (S.phase !== 'play') return;

  c = ball.carrier;
  if (!c) return;
  const d = dirOf(c.team);
  if (Math.abs(c.z) > FW) {
    sfx.whistle();
    return startRuck(c.x, Math.sign(c.z) * 24, { team: 1 - c.team, reset: true, msg: 'Into touch', slow: true });
  }
  if (c.x * d >= FL + 0.4) return scoreTry(c);
  if (c.holdT < 0.15 || c.immune > 0) return;
  for (const o of team(1 - c.team)) {
    if (o.down > 0) continue;
    const reach = o.dive > 0 ? 1.9 : 1.15;
    if (dist(o, c) > reach) continue;
    let ok;
    if (c.team === 0) ok = Math.random() > 0.12;
    else ok = o === S.U ? (o.dive > 0 || Math.random() < 0.92) : Math.random() < 0.7;
    if (ok) return tackle(o, c);
    o.down = 1.3; o.dive = 0; c.immune = 0.4;
    if (c.team === 0) say('Broken tackle!', 0.8, true);
  }
}

function integrate(dt) {
  for (const p of players) {
    p.x = clamp(p.x + p.vx * dt, -FL - IG + 0.5, FL + IG - 0.5);
    p.z = clamp(p.z + p.vz * dt, -FW - 1.5, FW + 1.5);
  }
  for (let i = 0; i < players.length; i++) for (let j = i + 1; j < players.length; j++) {
    const a = players[i], b = players[j];
    if (a.down > 0 || b.down > 0 || a === ball.carrier || b === ball.carrier) continue;
    const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz);
    if (l < 0.8 && l > 0.001) { const k = (0.8 - l) / 2 / l; a.x -= dx * k; a.z -= dz * k; b.x += dx * k; b.z += dz * k; }
  }
}

function update(dt) {
  S.time += dt;
  if (S.msgT > 0) { S.msgT -= dt; if (S.msgT <= 0) el.msg.classList.remove('on'); }
  if (S.phase === 'menu' || S.phase === 'over') return;
  S.t += dt;
  if (S.phase === 'play') updatePlay(dt);
  else if (S.phase === 'ruck') {
    S.clock -= dt;
    for (const p of players) {
      if (p.down > 0) { p.down -= dt; p.vx = p.vz = 0; continue; }
      moveTo(p, p.tx, p.tz, 9.5, dt);
    }
    integrate(dt);
  } else if (S.phase === 'convert') {
    const c = S.conv;
    if (!c.flying) {
      c.needle = Math.sin(S.t * 3.4);
      el.meter.querySelector('.pin').style.left = (50 + c.needle * 50) + '%';
      if (c.team === 0) { if (S.t > 0.4 && (input.a || input.b || input.c || S.t > 7)) kickConversion(c.needle); }
      else if (S.t > 1.3) kickConversion(Math.random() < 0.85 - 0.5 * Math.abs(c.z) / 30 ? rand(-c.w, c.w) * 0.8 : (Math.random() < 0.5 ? -1 : 1) * (c.w + 0.2));
    } else {
      updateBall(dt);
      if (!c.done && S.t > 1.5) {
        c.done = true;
        if (c.good) { S.score[c.team] += 2; say('Converted', 1.5, c.team === 0); if (c.team === 0) sfx.cheer(); }
        else say('No good', 1.5);
      }
      if (S.t > 3.2) { const t = c.team; S.conv = null; if (S.clock <= 0) endHalf(); else kickoff(1 - t); }
    }
  } else for (const p of players) { p.vx *= 0.85; p.vz *= 0.85; if (p.down > 0) p.down -= dt; }
  if (S.dur && S.t >= S.dur && S.then) { const f = S.then; S.then = null; S.dur = 0; f(); }
  input.a = input.b = input.c = false;
}

/* ---------------------------------------------------------------- render */
const hudCache = {};
function setText(node, key, v) { if (hudCache[key] !== v) { hudCache[key] = v; node.textContent = v; } }
function draw(dt) {
  for (const p of players) {
    const sp = Math.hypot(p.vx, p.vz);
    if (sp > 0.6) { let da = Math.atan2(p.vz, p.vx) - p.dir; da = Math.atan2(Math.sin(da), Math.cos(da)); p.dir += da * Math.min(1, dt * 12); }
    p.ph += sp * dt * 1.9;
    const sw = Math.sin(p.ph) * Math.min(1, sp / 4) * 0.95, isDown = p.down > 0 || p.dive > 0;
    p.root.position.set(p.x, 0, p.z); p.root.rotation.y = -p.dir;
    p.body.rotation.z += ((isDown ? -Math.PI / 2 : -Math.min(0.22, sp * 0.028)) - p.body.rotation.z) * Math.min(1, dt * 14);
    p.body.position.y += ((isDown ? 0.2 : 0) - p.body.position.y) * Math.min(1, dt * 14);
    p.legs[0].rotation.z = sw; p.legs[1].rotation.z = -sw;
    const carrying = ball.carrier === p;
    p.arms[0].rotation.z = carrying ? 0.9 : -sw; p.arms[1].rotation.z = carrying ? 0.9 : sw;
  }
  ballMesh.position.set(ball.x, ball.y, ball.z);
  if (ball.mode === 'held') ballMesh.rotation.set(0, -ball.carrier.dir, 0.3); else if (ball.mode !== 'dead') ballMesh.rotation.set(0, ball.spin * 0.3, ball.spin);
  ballShadow.position.set(ball.x, 0.04, ball.z); ballShadow.visible = ball.mode !== 'held';
  const u = S.U;
  ring.visible = !!u && S.phase !== 'menu' && S.phase !== 'over' && S.phase !== 'convert';
  if (u) { ring.position.set(u.x, 0.06, u.z); ring.scale.setScalar(1 + Math.sin(S.time * 7) * 0.06); }

  // camera
  if (S.phase === 'menu' || S.phase === 'over') {
    const a = S.time * 0.07;
    cam.position.set(-34 + Math.sin(a) * 10, 7, 30 + Math.cos(a) * 6); camLook.set(30, 4, -14);
  } else {
    const f = ball.carrier || ball, def = S.poss === 1 && S.phase !== 'convert';
    let off = (portrait ? 20 : 15.5) + (def ? 6 : 0), h = (portrait ? 13 : 8.5) + (def ? 1.5 : 0);
    if (S.phase === 'convert') { off = 13; h = 5; }
    const k = 1 - Math.exp(-dt * 4.5);
    cam.position.x += (Math.max(f.x - off, -90) - cam.position.x) * k;
    cam.position.y += (h - cam.position.y) * k;
    cam.position.z += (clamp(f.z * 0.88, -31, 31) - cam.position.z) * k;
    camLook.x += (f.x + 9 - camLook.x) * k; camLook.y += (1.2 - camLook.y) * k; camLook.z += (f.z * 0.93 - camLook.z) * k;
  }
  cam.lookAt(camLook);
  renderer.render(scene, cam);

  // hud
  setText(el.s0, 's0', S.score[0]); setText(el.s1, 's1', S.score[1]);
  const cl = Math.max(0, Math.ceil(S.clock));
  setText(el.clock, 'ck', Math.floor(cl / 60) + ':' + String(cl % 60).padStart(2, '0'));
  setText(el.half, 'hf', S.half === 1 ? '1st half' : '2nd half');
  setText(el.count, 'ct', S.tackles >= 5 ? 'Last tackle' : 'Tackle ' + S.tackles);
  const last = S.tackles >= 5, hasBall = S.poss === 0 && ball.mode !== 'loose';
  if (hudCache.last !== last) { hudCache.last = last; el.count.classList.toggle('last', last); }
  if (hudCache.poss !== S.poss) { hudCache.poss = S.poss; el.t0.classList.toggle('has', S.poss === 0); el.t1.classList.toggle('has', S.poss === 1); }
  if (hudCache.att !== hasBall) {
    hudCache.att = hasBall;
    el.a.textContent = hasBall ? 'Pass' : 'Tackle'; el.b.textContent = hasBall ? 'Kick' : 'Switch'; el.c.hidden = !hasBall;
  }
  el.s.firstElementChild.style.height = (S.stam * 100) + '%';
}

/* ----------------------------------------------------------------- input */
function readKeys() {
  let x = 0, z = 0;
  if (keys.ArrowUp || keys.KeyW) x += 1; if (keys.ArrowDown || keys.KeyS) x -= 1;
  if (keys.ArrowRight || keys.KeyD) z += 1; if (keys.ArrowLeft || keys.KeyA) z -= 1;
  if (x || z) { const l = Math.hypot(x, z); input.mx = x / l; input.mz = z / l; input.kb = true; }
  else if (input.kb) { input.mx = input.mz = 0; input.kb = false; }
  input.sprint = !!(keys.ShiftLeft || keys.ShiftRight || input.sprintBtn);
}
window.addEventListener('keydown', e => {
  if (e.repeat) return;
  keys[e.code] = true;
  if (e.code === 'Space' || e.code === 'KeyJ') input.a = true;
  if (e.code === 'KeyK') input.b = true;
  if (e.code === 'KeyL') input.c = true;
  if (e.code === 'Enter' && (S.phase === 'menu' || S.phase === 'over' || S.paused)) el.go.click();
  if (e.code === 'KeyP' || e.code === 'Escape') togglePause();
  if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
});
window.addEventListener('keyup', e => { keys[e.code] = false; });

let stickId = null, sx = 0, sy = 0;
const knob = el.stick.firstElementChild;
el.pad.addEventListener('pointerdown', e => {
  if (stickId !== null) return;
  stickId = e.pointerId; sx = e.clientX; sy = e.clientY;
  el.stick.style.left = sx + 'px'; el.stick.style.top = sy + 'px';
  try { el.pad.setPointerCapture(e.pointerId); } catch (err) { /* synthetic pointer */ }
  e.preventDefault();
});
el.pad.addEventListener('pointermove', e => {
  if (e.pointerId !== stickId) return;
  let dx = e.clientX - sx, dy = e.clientY - sy; const l = Math.hypot(dx, dy), R = 46;
  if (l > R) { dx *= R / l; dy *= R / l; }
  knob.style.transform = `translate(${dx}px,${dy}px)`;
  const m = Math.min(1, l / R), dead = m < 0.18 ? 0 : 1;
  input.mx = dead * (-dy / R); input.mz = dead * (dx / R); input.kb = false;
});
const stickUp = e => {
  if (e.pointerId !== stickId) return;
  stickId = null; input.mx = input.mz = 0; knob.style.transform = '';
  el.stick.style.left = ''; el.stick.style.top = '';
};
el.pad.addEventListener('pointerup', stickUp); el.pad.addEventListener('pointercancel', stickUp);
function bindBtn(node, down, up) {
  node.addEventListener('pointerdown', e => { e.preventDefault(); node.classList.add('dn'); down(); });
  const off = () => { node.classList.remove('dn'); if (up) up(); };
  node.addEventListener('pointerup', off); node.addEventListener('pointercancel', off); node.addEventListener('pointerleave', off);
}
bindBtn(el.a, () => { input.a = true; }); bindBtn(el.b, () => { input.b = true; }); bindBtn(el.c, () => { input.c = true; });
bindBtn(el.s, () => { input.sprintBtn = true; }, () => { input.sprintBtn = false; });
el.meter.addEventListener('pointerdown', () => { input.a = true; });
for (const ev of ['contextmenu', 'gesturestart', 'dblclick']) document.addEventListener(ev, e => e.preventDefault());
document.addEventListener('touchmove', e => { if (!el.menu.contains(e.target)) e.preventDefault(); }, { passive: false });

/* ------------------------------------------------------------ menu flow */
function showPlayUI(on) { for (const n of [el.hud, el.pad, el.stick, el.btns, el.pause]) n.hidden = !on; }
function startMatch() {
  audioOn();
  S.score = [0, 0]; S.half = 1; S.clock = HALF_SECS; S.stam = 1; S.tired = false; S.paused = false; S.conv = null;
  el.menu.hidden = true; el.meter.hidden = true; showPlayUI(true);
  kickoff(1);
}
function showFullTime() {
  S.phase = 'over'; showPlayUI(false); el.meter.hidden = true;
  const [a, b] = S.score;
  $('st-eyebrow').textContent = 'Full time';
  $('st-title').innerHTML = a > b ? 'You <em>win</em>' : a < b ? 'Beaten <em>today</em>' : 'Honours <em>even</em>';
  $('st-blurb').textContent = `${TEAMS[0].name} ${a}, ${TEAMS[1].name} ${b}.`;
  $('st-how').hidden = true; el.go.textContent = 'Play again'; el.menu.hidden = false;
  if (a > b) sfx.cheer();
}
function togglePause() {
  if (S.phase === 'menu' || S.phase === 'over') return;
  S.paused = !S.paused;
  if (S.paused) {
    $('st-eyebrow').textContent = 'Time off'; $('st-title').innerHTML = 'Game <em>paused</em>';
    $('st-blurb').textContent = `${TEAMS[0].name} ${S.score[0]}, ${TEAMS[1].name} ${S.score[1]}.`;
    $('st-how').hidden = false; el.go.textContent = 'Resume';
  }
  el.menu.hidden = !S.paused; showPlayUI(!S.paused);
}
el.go.addEventListener('click', () => { if (S.paused) togglePause(); else startMatch(); });
el.pause.addEventListener('click', togglePause);
document.addEventListener('visibilitychange', () => { if (document.hidden && !S.paused) togglePause(); });

/* ----------------------------------------------------------------- boot */
build(); resize();
let lastT = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
  readKeys();
  if (!S.paused) update(dt);
  draw(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__sixthTackle = { S, ball, players, input, step: update };
