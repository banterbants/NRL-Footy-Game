// Match simulation: rules, ball physics, human control. No rendering in here.
// x runs the length of the field (try lines at +-FL), z across it. dir[t] is the way team t attacks.
import { FL, IG, FW, GRAV, clamp, rand, dist, angDiff, DIFFS, settings } from '../config.js';
import { makeSquad } from '../teams.js';
import { ACT, FLAG, STRIDE } from '../gfx/athlete.js';
import { aiPlayer, aiRefs, cpuKickoff, cpuConversion } from './ai.js';

const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 0.75;
export const TUNE = { tackle: 0.63, breakImmune: 0.45, line: 0.62, engage: 6.5 };
const newStats = () => ({ poss: 0, metres: 0, tackles: 0, missed: 0, breaks: 0, errors: 0, kicks: 0, tries: 0, sets: 0 });

export class Match {
  constructor(cfg) {
    this.cfg = cfg; this.emit = cfg.emit || (() => {}); this.humans = cfg.humans; this.n = cfg.n || 13;
    this.diff = DIFFS[cfg.diff ?? 1]; this.rain = cfg.weather === 'rain';
    this.maxT = cfg.rules?.tackles || 6; this.rules = Object.assign({ bonus: false, golden: false, mustWin: false }, cfg.rules);
    this.dir = [1, -1]; this.score = [0, 0]; this.half = 1; this.halfSecs = cfg.halfSecs || 180; this.clock = this.halfSecs; this.siren = false;
    this.golden = false; this.over = false; this.time = 0; this.scorers = []; this.stats = [newStats(), newStats()];
    this.poss = 0; this.tackles = 0; this.mark = { x: 0, z: 0 }; this.phase = 'idle'; this.pt = 0; this.pdur = 0; this.pnext = null; this.waiting = false; this.after = null;
    this.sel = [null, null]; this.cands = [{ L: [], R: [] }, { L: [], R: [] }]; this.basis = [null, null];
    this.seen = [null, null]; this.seenT = [0, 0]; this.passN = 0; this.ref = null; this.land = { x: 0, z: 0 }; this.playT = 0; this.broke = false; this.conv = null; this.ko = null;
    this.wind = { x: this.rain ? rand(-1.6, 1.6) : rand(-0.6, 0.6), z: this.rain ? rand(-1.6, 1.6) : rand(-0.6, 0.6) };
    this.players = []; this.squads = [[], []];
    for (let t = 0; t < 2; t++) makeSquad(cfg.teams[t], this.n).forEach((sp, i) => {
      const p = Object.assign({}, sp, {
        t, i, id: this.players.length, lz: sp.lane, x: 0, z: 0, vx: 0, vz: 0, dir: t ? Math.PI : 0, ph: Math.random() * 6, lastX: 0,
        down: 0, downType: ACT.PRONE, rise: 0, anim: 0, animT: 0, animDur: 1, animAux: 0, mood: 0, jump: 0,
        stam: 1, tired: false, sprint: false, immune: 0, fendT: 0, fendCd: 0, stepT: 0, stepS: 0, stepCd: 0, dummyCd: 0, diveT: 0, big: false, charge: 0,
        holdT: 0, think: 0, steer: 0, fooled: 0, chase: false, marker: false, backpedal: false, plan: null, tx: 0, tz: 0, tried: 0,
      });
      this.players.push(p); this.squads[t].push(p);
    });
    this.ball = { x: 0, y: 0.22, z: 0, vx: 0, vy: 0, vz: 0, mode: 'dead', carrier: null, target: null, last: 0, kicker: null, kick: null, noCatch: 0, spin: 0, yaw: 0, px: 0, pz: 0, py: 0, judged: 0, id: 0, long: false };
  }
  team(t) { return this.squads[t]; }
  isHuman(t) { return this.humans[t] !== null && this.humans[t] !== undefined; }
  cpuTeam(t) { return !this.isHuman(t); }
  speedOf(p) { return (4.2 + p.spd * 0.04) * (this.cpuTeam(p.t) ? this.diff.cpuSpeed : 1) * (this.rain ? 0.97 : 1); }

  /* ------------------------------------------------------------ helpers */
  anim(p, code, dur, aux = 0) { p.anim = code; p.animT = dur; p.animDur = dur; p.animAux = aux; }
  ground(p, secs, type) { p.down = secs; p.downType = type; p.vx = p.vz = 0; p.diveT = 0; p.stepT = 0; p.charge = 0; p.big = false; p.fendT = 0; }
  setVel(p, vx, vz, dt, k = 8.5) { const a = Math.min(1, dt * k); p.vx += (vx - p.vx) * a; p.vz += (vz - p.vz) * a; }
  moveTo(p, tx, tz, spd, dt) { const dx = tx - p.x, dz = tz - p.z, l = Math.hypot(dx, dz) || 1, s = l < 0.25 ? 0 : Math.min(spd, l * 4.5); this.setVel(p, dx / l * s, dz / l * s, dt); }
  setPhase(name, dur = 0, next = null) { this.phase = name; this.pt = 0; this.pdur = dur; this.pnext = next; }
  hold(reason, fn) { this.waiting = true; this.after = fn; this.emit('hold', { reason }); }
  resume() { if (!this.waiting) return; this.waiting = false; const f = this.after; this.after = null; if (f) f(); }
  landing() {
    const b = this.ball;
    if (b.y <= 0.4 && Math.abs(b.vy) < 2.5) return { x: b.x + b.vx * 0.3, z: b.z + b.vz * 0.3 };
    const t = (b.vy + Math.sqrt(b.vy * b.vy + 2 * GRAV * Math.max(0, b.y - 0.25))) / GRAV;
    return { x: clamp(b.x + b.vx * t, -FL - IG, FL + IG), z: clamp(b.z + b.vz * t, -FW - 2, FW + 2), t };
  }
  pickDefender(t, skip, refPt) {
    const r = refPt || this.ball.carrier || this.ball.target || (this.ball.mode === 'loose' ? this.land : this.mark), dA = -this.dir[t];
    let best = null, bs = 1e9;
    for (const p of this.squads[t]) {
      if (p === skip) continue;
      const s = dist(p, r) + (p.down > 0 ? 25 : 0) + ((p.x - r.x) * dA < -0.5 ? 5 : 0) + (p.fb ? 3 : 0) + (p.marker ? 2 : 0);
      if (s < bs) { bs = s; best = p; }
    }
    return best;
  }
  bestKicker(t) { return this.squads[t].reduce((a, p) => (p.kck > a.kck ? p : a)); }

  /* -------------------------------------------------------- set pieces */
  start() { this.firstKick = Math.random() < 0.5 ? 0 : 1; if (this.rules.golden) { this.golden = true; this.clock = 0; } this.restart(this.firstKick, 'kickoff'); }
  restart(k, type) {
    if (this.periodEnded()) return this.endPeriod();
    const R = 1 - k, dk = this.dir[k], kx = type === 'dropout' ? -dk * FL : 0, b = this.ball, kicker = this.bestKicker(k);
    for (const p of this.players) {
      Object.assign(p, { vx: 0, vz: 0, down: 0, rise: 0, diveT: 0, stepT: 0, charge: 0, mood: 0, animT: 0, fooled: 0, marker: false, backpedal: false, plan: null, immune: 0, jump: 0 });
      if (p.t === k) { p.x = kx - dk * (p === kicker ? 2.4 : p.fb ? 14 : 1); p.z = p === kicker ? 0 : p.lz; p.dir = dk > 0 ? 0 : Math.PI; }
      else { p.x = kx + dk * (p.fb ? (type === 'dropout' ? 44 : 42) : p.fwd ? 16 + (p.i % 3) * 3 : p.wing ? 33 : 27); p.z = p.lz * (p.fb ? 0 : 0.95); p.dir = dk > 0 ? Math.PI : 0; }
      p.x = clamp(p.x, -FL - IG + 1, FL + IG - 1); p.lastX = p.x;
    }
    Object.assign(b, { mode: 'place', carrier: null, target: null, kick: null, x: kx, y: 0.3, z: 0, vx: 0, vy: 0, vz: 0, last: k, yaw: dk > 0 ? 0 : Math.PI });
    this.poss = R; this.tackles = 0; this.broke = false; this.ref = null;
    this.ko = { k, kicker, type, kx, charge: 0, charging: false, human: this.isHuman(k) };
    this.sel[k] = kicker; this.sel[R] = this.squads[R].find(p => p.fb);
    this.setPhase('kickoff'); this.emit('kickoff', { type, k });
  }
  launchKickoff(power, aimZ) {
    const { k, kicker, type, kx } = this.ko, dk = this.dir[k], b = this.ball;
    const T = 2.1 + 0.5 * power, far = Math.min((type === 'dropout' ? 26 : 22) + 32 * power, (type === 'dropout' ? 2 * FL : FL) + IG - 4);
    Object.assign(b, { mode: 'loose', vx: dk * far / T, vz: clamp(aimZ, -28, 28) / T, vy: GRAV * T / 2, y: 0.5, last: k, kicker, noCatch: 0.6, judged: 0, id: b.id + 1, kick: { type: 'kickoff', from: { x: kx, z: 0 }, team: k, bounced: false } });
    this.anim(kicker, ACT.KICK, 0.45); this.playT = 0; this.stats[k].kicks++;
    this.emit('kick', { type: 'kickoff', p: kicker }); this.setPhase('play');
  }
  periodEnded() { return !this.golden && this.clock <= 0; }
  endPeriod() {
    const b = this.ball; Object.assign(b, { mode: 'dead', carrier: null, target: null, kick: null });
    for (const p of this.players) { p.charge = 0; p.diveT = 0; }
    if (this.half === 1) {
      this.setPhase('half'); this.emit('half');
      this.hold('half', () => { this.half = 2; this.clock = this.halfSecs; this.siren = false; this.dir = [-this.dir[0], -this.dir[1]]; this.restart(1 - this.firstKick, 'kickoff'); });
    } else if (this.score[0] === this.score[1] && this.rules.mustWin) {
      this.golden = true; this.clock = 0; this.emit('golden');
      this.setPhase('half'); this.hold('golden', () => this.restart(Math.random() < 0.5 ? 0 : 1, 'kickoff'));
    } else this.finish();
  }
  finish() { this.over = true; this.setPhase('full'); this.emit('full'); this.hold('full', () => {}); }

  ruck(mx, mz, o = {}) {
    if (this.periodEnded()) return this.endPeriod();
    if (o.team !== undefined && o.team !== this.poss) { this.poss = o.team; this.tackles = 0; this.stats[this.poss].sets++; }
    if (o.reset) this.tackles = 0;
    const A = this.poss, d = this.dir[A], b = this.ball;
    mx = clamp(mx, -FL + 1, FL - 1); mz = clamp(mz, -FW + 7, FW - 7); this.mark = { x: mx, z: mz };
    Object.assign(b, { mode: 'dead', carrier: null, target: null, kick: null, x: mx, y: 0.22, z: mz, vx: 0, vy: 0, vz: 0 });
    let dh = null, best = 1e9;
    for (const p of this.squads[A]) { const s = Math.hypot(p.x - mx, p.z - mz) + (p.down > 0 ? 5 : 0) + (p === o.tackled ? 99 : 0) + (p.fb ? 10 : 0) + (p.wing ? 6 : 0); if (s < best) { best = s; dh = p; } }
    for (const p of this.players) {
      Object.assign(p, { diveT: 0, stepT: 0, charge: 0, big: false, fooled: 0, marker: false, plan: null, backpedal: p.t !== A, sprint: false });
      if (p.t === A) {
        if (p === dh) { p.tx = mx - d * 1.4; p.tz = mz; }
        else if (p === o.tackled) { p.tx = mx; p.tz = mz; }
        else { const depth = p.fb ? 10 : p.fwd ? 3.2 : p.wing ? 6 : 4.5; p.tx = mx - d * (depth + 0.07 * Math.abs(p.lz - mz)); p.tz = p.fb ? mz * 0.5 : p.lz * 0.82 + mz * 0.18; }
        p.tx = clamp(p.tx, -FL - IG + 1, FL + IG - 1);
      } else if (p === o.tackler) { p.marker = true; p.tx = mx + d * 1.4; p.tz = mz; }
      else if (p.fb) { p.tx = clamp(mx + d * 27, -FL - 4, FL + 4); p.tz = mz * 0.6; }
      else { p.tx = clamp(mx + d * (p.wing ? 13 : 10), -FL, FL); p.tz = p.lz * 0.78 + mz * 0.22; }
    }
    this.dh = dh; this.broke = false; this.ref = null; this.passN = 0; this.sel[A] = dh; this.sel[1 - A] = this.pickDefender(1 - A, null, { x: mx + d * 6, z: mz });
    this.setPhase('ruck', o.slow ? 2.4 : 1.8, () => {
      Object.assign(b, { mode: 'held', carrier: dh }); dh.holdT = 0; dh.down = 0; dh.think = 0.25; dh.plan = 'service'; dh.lastX = dh.x;
      this.playT = 0; this.seen = [dh, dh]; this.sel[A] = dh; this.setPhase('play'); this.emit('playball');
    });
  }
  turnover(x, z, team, msg, extra = {}) { this.emit('stoppage', Object.assign({ msg, team }, extra)); this.ruck(x, z, { team, reset: true, slow: true }); }

  addScore(t, pts, type, p) {
    this.score[t] += pts; this.scorers.push({ t, pts, type, name: p ? p.name : '', num: p ? p.num : 0, min: Math.max(1, Math.ceil(((this.half - 1) * this.halfSecs + (this.halfSecs - Math.max(0, this.clock))) / this.halfSecs * 40)) });
    this.emit('score', { t, pts, type, p });
  }
  scoreTry(p) {
    const b = this.ball, d = this.dir[p.t], bonus = this.rules.bonus && Math.abs(p.z) < 6, pts = bonus ? 5 : 4;
    Object.assign(b, { mode: 'held', carrier: p, kick: null }); this.ground(p, 3, ACT.TRYDIVE); p.vx = d * 5.5; p.vz *= 0.3; p.slide = 0.6;
    this.stats[p.t].tries++; this.addScore(p.t, pts, 'try', p);
    for (const q of this.players) { q.charge = 0; q.mood = q.t === p.t ? ACT.CELEBRATE : ACT.DEJECTED; q.sprint = false; }
    this.setPhase('try', 3.0, () => this.hold('try', () => (this.golden ? this.finish() : this.startConversion(p))));
    this.emit('try', { p, bonus });
  }
  startConversion(scorer) {
    const d = this.dir[scorer.t], back = clamp(Math.abs(scorer.z) * 0.85, 12, 30);
    this.setPlaceKick(scorer.t, { x: d * FL - d * back, z: clamp(scorer.z, -31, 31) });
  }
  setPlaceKick(t, spot) {
    const d = this.dir[t], gx = d * FL, b = this.ball, kicker = this.bestKicker(t);
    const base = Math.atan2(-spot.z, gx - spot.x);
    for (const p of this.players) {
      Object.assign(p, { vx: 0, vz: 0, down: 0, rise: 0, mood: 0, animT: 0, sprint: false });
      if (p === kicker) { p.x = spot.x - Math.cos(base) * 2.2; p.z = spot.z - Math.sin(base) * 2.2; p.dir = base; }
      else if (p.t === t) { p.x = spot.x - d * (12 + (p.i % 4) * 2.5); p.z = p.lz * 0.8; p.dir = d > 0 ? 0 : Math.PI; }
      else { p.x = gx + d * (1.5 + (p.i % 3) * 1.4); p.z = p.lz * 0.75; p.dir = d > 0 ? Math.PI : 0; }
    }
    Object.assign(b, { mode: 'place', carrier: null, target: null, kick: null, x: spot.x, y: 0.3, z: spot.z, vx: 0, vy: 0, vz: 0, yaw: base, judged: 0 });
    this.conv = { t, kicker, spot, gx, base, aim: 0, stage: 0, power: 0, needle: 0, time: 0, st: 0, human: this.isHuman(t), result: null, flying: false, dist: Math.hypot(gx - spot.x, spot.z) };
    this.sel[t] = kicker; this.setPhase('convert'); this.emit('convert', this.conv);
  }
  placeKick(c, power, yawErr) {
    const b = this.ball, over = Math.max(0, power - 0.9) * 2.2, v = 19 + 9.5 * power, el = 0.6;
    const yaw = c.base + c.aim + yawErr * (1 + over * 2.5) + (over ? gauss() * over * 0.08 : 0);
    Object.assign(b, { mode: 'loose', vx: Math.cos(yaw) * v * Math.cos(el), vz: Math.sin(yaw) * v * Math.cos(el), vy: v * Math.sin(el), y: 0.4, judged: 0, id: b.id + 1, noCatch: 9, kicker: c.kicker, last: c.t, kick: { type: 'place', from: { x: b.x, z: b.z }, team: c.t, bounced: false, gx: c.gx } });
    this.anim(c.kicker, ACT.KICK, 0.5); c.stage = 3; c.flying = true; c.st = 0; this.emit('kick', { type: 'place', p: c.kicker });
  }
  updateConvert(dt, pads) {
    const c = this.conv, b = this.ball; c.time += dt; c.st += dt;
    if (c.stage < 3) {
      if (c.human) {
        const pad = pads[c.t], go = pad && (pad.pressed.step || pad.pressed.kick || pad.pressed.fend);
        if (c.stage === 0) { if (pad) c.aim = clamp(c.aim + pad.mx * dt * 0.3, -0.5, 0.5); if ((go && c.time > 0.35) || c.time > 14) { c.stage = 1; c.st = 0; } }
        else if (c.stage === 1) { const u = (c.st / 0.9) % 2; c.power = u < 1 ? u : 2 - u; if (go || c.st > 6) { c.stage = 2; c.st = 0; this.emit('tick'); } }
        else { c.needle = Math.sin(c.st * 5.4); if (go || c.st > 6) { this.emit('tick'); this.placeKick(c, c.power, c.needle * 0.13 * (1.3 - c.kicker.kck / 250)); } }
      } else if (c.time > 1.6) { const k = cpuConversion(this, c); c.aim = 0; c.power = k.power; this.placeKick(c, k.power, k.err); }
      return;
    }
    this.flyBall(dt);
    if (c.result === null && (b.judged !== 0 || b.y <= 0.3 || c.st > 4)) {
      c.result = b.judged === 1; c.st = 0; c.flying = false;
      if (c.result) this.addScore(c.t, 2, 'conversion', c.kicker);
      this.emit('convResult', { good: c.result, t: c.t });
    }
    if (c.result !== null && c.st > 1.9) { const t = c.t; this.conv = null; if (this.rules.kicking) { this.setPhase('between'); this.hold('kickNext', () => {}); } else this.restart(1 - t, 'kickoff'); }
  }

  /* --------------------------------------------------------- ball play */
  gain(p, how) {
    const b = this.ball; Object.assign(b, { mode: 'held', carrier: p, target: null, kick: null }); p.holdT = 0; p.think = 0.3; p.lastX = p.x; p.plan = null; p.charge = 0;
    if (p.t !== this.poss) { this.poss = p.t; this.tackles = 0; this.broke = false; this.passN = 0; this.stats[p.t].sets++; this.emit('turnover', { p, how }); }
    this.seen = [p, p]; this.sel[p.t] = p;
    if (this.isHuman(1 - p.t)) this.sel[1 - p.t] = this.pickDefender(1 - p.t);
    this.emit('catch', { p, how });
  }
  doPass(from, to, long = false) {
    const b = this.ball;
    Object.assign(b, { mode: 'pass', carrier: null, target: to, last: from.t, x: from.x, y: 1.3, z: from.z, kick: null, long, id: b.id + 1 });
    const lat = -Math.sin(from.dir) * (to.x - from.x) + Math.cos(from.dir) * (to.z - from.z);
    this.anim(from, ACT.PASS, 0.32, lat >= 0 ? 1 : -1); from.charge = 0; from.plan = null;
    this.seenT[1 - from.t] = this.diff.react; this.passN++;
    if (this.isHuman(1 - from.t) && settings.autoSwitch && this.sel[1 - from.t] && dist(this.sel[1 - from.t], to) > 9) this.sel[1 - from.t] = this.pickDefender(1 - from.t, null, to);
    this.emit('pass', { from, to, long });
  }
  doKick(p, type, power, wx, wz) {
    const b = this.ball, l = Math.hypot(wx, wz) || 1, skill = 0.93 + p.kck * 0.0009; let vh, vy;
    if (type === 'bomb') { vh = 10.5; vy = 19.5; } else if (type === 'grubber') { vh = 15.5; vy = 2.4; } else if (power < 0.18) { vh = 9; vy = 9.5; type = 'chip'; } else { vh = 14 + 13 * power; vy = 9.5 + 5.5 * power; }
    vh *= skill * (this.rain ? 0.95 : 1);
    Object.assign(b, { mode: 'loose', carrier: null, target: null, last: p.t, kicker: p, noCatch: 0.5, judged: 0, id: b.id + 1, x: p.x + wx / l * 0.6, y: type === 'grubber' ? 0.45 : 1.0, z: p.z + wz / l * 0.6, vx: wx / l * vh, vz: wz / l * vh, vy, kick: { type, from: { x: p.x, z: p.z }, team: p.t, bounced: false } });
    this.anim(p, ACT.KICK, 0.45); p.vx *= 0.45; p.vz *= 0.45; p.charge = 0; this.stats[p.t].kicks++; this.broke = false;
    if (this.isHuman(1 - p.t)) this.sel[1 - p.t] = this.pickDefender(1 - p.t, null, this.landing());
    this.emit('kick', { type, p, power });
  }
  dropGoal(p) {
    const d = this.dir[p.t], gx = d * FL, dx = gx - p.x, dz = -p.z, D = Math.hypot(dx, dz), b = this.ball;
    if (dx * d < 4 || D > 50) return false;
    let sigma = 0.028 + D * 0.0021 + (100 - p.kck) * 0.0008;
    for (const o of this.squads[1 - p.t]) if (o.down <= 0 && dist(o, p) < 3) { sigma *= 1.7; break; }
    if (this.isHuman(p.t)) sigma *= 0.85;
    const yaw = Math.atan2(dz, dx) + gauss() * sigma, v = clamp(17.5 + D * 0.3, 18, 31), el = 0.62;
    Object.assign(b, { mode: 'loose', carrier: null, target: null, last: p.t, kicker: p, noCatch: 0.6, judged: 0, id: b.id + 1, x: p.x + Math.cos(yaw) * 0.6, y: 0.5, z: p.z + Math.sin(yaw) * 0.6, vx: Math.cos(yaw) * v * Math.cos(el), vz: Math.sin(yaw) * v * Math.cos(el), vy: v * Math.sin(el), kick: { type: 'drop', from: { x: p.x, z: p.z }, team: p.t, bounced: false, gx, D } });
    this.anim(p, ACT.KICK, 0.45); p.vx *= 0.3; p.vz *= 0.3; this.stats[p.t].kicks++;
    this.emit('kick', { type: 'drop', p }); return true;
  }
  // gravity, wind, bounces and goal-post judging for a ball in the air
  flyBall(dt) {
    const b = this.ball; b.px = b.x; b.py = b.y; b.pz = b.z;
    b.vy -= GRAV * dt; if (b.y > 2) { b.vx += this.wind.x * dt; b.vz += this.wind.z * dt; }
    b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt; b.spin += dt * (b.kick && b.kick.type === 'punt' ? 22 : 13);
    if (Math.hypot(b.vx, b.vz) > 0.5) b.yaw = Math.atan2(b.vz, b.vx);
    const k = b.kick;
    if (k && k.gx !== undefined && !b.judged && (b.px - k.gx) * (b.x - k.gx) <= 0 && b.x !== b.px) {
      const f = (k.gx - b.px) / (b.x - b.px), zc = b.pz + f * (b.z - b.pz), yc = b.py + f * (b.y - b.py);
      if (Math.abs(Math.abs(zc) - 2.75) < 0.16 && yc > 0.3) { b.judged = Math.random() < 0.45 ? 1 : -1; b.vz *= -0.3; this.emit('post'); }
      else b.judged = Math.abs(zc) < 2.75 && yc > 3.05 ? 1 : -1;
    }
    if (b.y < 0.25) {
      b.y = 0.25; if (k && !k.bounced) { k.bounced = true; k.bx = b.x; }
      if (k && k.gx !== undefined && !b.judged) b.judged = -1;
      if (b.vy < -2.4) { this.emit('bounce', { v: -b.vy }); b.vy *= -(k && k.type === 'grubber' ? 0.55 : 0.42); b.vx *= 0.72; b.vz = b.vz * 0.72 + rand(-1.8, 1.8); if (Math.random() < 0.25) { b.vx += rand(-1.5, 1.5); b.vy *= 1.4; } }
      else { b.vy = 0; const f = Math.max(0, 1 - dt * (this.rain ? 1.2 : 1.9)); b.vx *= f; b.vz *= f; }
    }
  }
  updateBall(dt) {
    const b = this.ball;
    if (b.mode === 'held') { const c = b.carrier; b.x = c.x + Math.cos(c.dir) * 0.3; b.z = c.z + Math.sin(c.dir) * 0.3; b.y = c.down > 0 ? 0.35 : 1.2; b.vx = c.vx; b.vz = c.vz; b.yaw = c.dir; return; }
    if (b.mode === 'pass') {
      const t = b.target, dx = t.x - b.x, dz = t.z - b.z, l = Math.hypot(dx, dz), sp = b.long ? 23 : 18.5;
      b.yaw = Math.atan2(dz, dx); b.spin += dt * 25;
      if (t.down > 0) { Object.assign(b, { mode: 'loose', vy: 2, vx: dx / (l || 1) * 6, vz: dz / (l || 1) * 6, noCatch: 0, kick: null }); return; }
      if (l < 0.95) {
        const drop = 0.005 + (this.rain ? 0.02 : 0) + (b.long ? 0.01 : 0) - (t.hnd - 75) * 0.0008;
        if (Math.random() < drop) { Object.assign(b, { mode: 'loose', vx: t.vx + rand(-2, 2) + this.dir[t.t] * 2.5, vz: t.vz + rand(-2, 2), vy: 3.5, last: t.t, kicker: t, noCatch: 0.35, kick: null }); this.stats[t.t].errors++; this.emit('spill', { p: t }); }
        else this.gain(t, 'pass');
        return;
      }
      b.x += dx / l * sp * dt; b.z += dz / l * sp * dt; b.y = 1.25 + Math.min(0.7, l * 0.05); b.vx = dx / l * sp; b.vz = dz / l * sp;
      for (const o of this.squads[1 - t.t]) {
        if (o.down > 0 || o.tried === b.id || Math.hypot(o.x - b.x, o.z - b.z) > 0.8) continue;
        o.tried = b.id;
        const human = this.sel[o.t] === o && this.isHuman(o.t);
        if (Math.random() < (human ? 0.5 : 0.16 + this.diff.cpuTackle)) { this.stats[o.t].breaks++; this.gain(o, 'intercept'); return; }
      }
      return;
    }
    if (b.mode !== 'loose') return;
    b.noCatch -= dt; this.flyBall(dt);
    const k = b.kick;
    if (k && k.type === 'drop' && b.judged) {
      if (b.judged === 1) { const pts = k.D > 40 ? 2 : 1; this.addScore(k.team, pts, 'field goal', b.kicker); this.emit('fieldGoal', { t: k.team, pts }); const t = k.team; b.kick = null; this.setPhase('between', 2.2, () => (this.golden ? this.finish() : this.restart(1 - t, 'kickoff'))); return; }
      k.gx = undefined;
    }
    if (Math.abs(b.z) > FW + 0.3) {
      const sz = Math.sign(b.z);
      if (k && !k.bounced) return this.turnover(k.from.x, k.from.z, 1 - k.team, 'Out on the full');
      if (k && (k.type === 'punt' || k.type === 'chip' || k.type === 'grubber' || k.type === 'bomb')) {
        const d = this.dir[k.team];
        if (k.from.x * d < -10 && k.bx * d > 30 && b.x * d > 30 && b.x * d < FL) return this.turnover(b.x, sz * 24, k.team, '40/20!', { big: true });
      }
      return this.turnover(b.x, sz * 24, 1 - b.last, 'Touch');
    }
    if (Math.abs(b.x) > FL + IG) return this.deadBall(Math.sign(b.x));
    if (b.y < 2.55) {
      let best = null, bd = 1.15;
      for (const p of this.players) {
        if (p.down > 0 || (p === b.kicker && b.noCatch > 0) || p.tried === b.id) continue;
        const dd = Math.hypot(p.x - b.x, p.z - b.z); if (dd < bd) { bd = dd; best = p; }
      }
      if (best) {
        const high = b.y > 1.2 && b.vy < -6;
        let drop = high ? 0.03 + (k && k.type === 'bomb' ? 0.09 : 0) + (this.rain ? 0.06 : 0) - (best.hnd - 75) * 0.002 : this.rain ? 0.04 : 0.005;
        if (high) for (const o of this.squads[1 - best.t]) if (o.down <= 0 && dist(o, best) < 1.8) { drop += 0.2; break; }
        if (Math.random() < drop) { best.tried = b.id; Object.assign(b, { vx: rand(-3, 3) + this.dir[best.t] * 2, vz: rand(-3, 3), vy: 4, last: best.t, kick: null }); this.stats[best.t].errors++; this.emit('spill', { p: best }); }
        else {
          const d = this.dir[best.t];
          this.gain(best, k ? 'kick' : 'loose');
          if (best.x * d > FL) this.scoreTry(best);
        }
      }
    }
  }
  deadBall(s) {
    const def = this.dir[0] === -s ? 0 : 1, b = this.ball;      // team whose goal line is at this end
    if (b.kick && b.kick.type === 'place') return;
    if (b.last === def) { this.emit('stoppage', { msg: 'Goal line drop-out', team: 1 - def }); return this.setPhase('between', 1.6, () => this.restart(def, 'dropout')); }
    this.turnover(s * 30, 0, def, '20 metre restart');
  }

  /* ------------------------------------------------------ human control */
  human(t, pad, dt) {
    const p = this.sel[t], b = this.ball, bs = this.basis[t]; if (!p || !bs) return;
    const has = b.carrier === p, d = this.dir[t];
    const wx = bs.rx * pad.mx + bs.fx * pad.my, wz = bs.rz * pad.mx + bs.fz * pad.my, mag = Math.hypot(wx, wz);
    if (p.stepT > 0) { p.stepT -= dt; p.vx = d * 5.5; p.vz = p.stepS * 12.5; return; }
    if (p.diveT > 0) { p.diveT -= dt; if (p.diveT <= 0) { this.ground(p, p.big ? 1.0 : 0.75, ACT.PRONE); this.emit('dust', { p }); } return; }
    p.sprint = pad.held.sprint && !p.tired && mag > 0.2;
    let spd = this.speedOf(p) * (p.sprint ? 1.22 : 1) * (p.rise > 0 ? 0.5 : 1) * (has ? 0.98 : 1) * (p.charge > 0 ? 0.72 : 1) * (p.fendT > 0 ? 0.9 : 1);
    this.setVel(p, wx * spd, wz * spd, dt, has ? 7.5 : 9);
    if (has) {
      if (p.holdT < 0.1) return;
      // passing: tap for the first receiver, hold for the cut-out pass
      for (const [key, side] of [['passL', 'L'], ['passR', 'R']]) {
        const c = this.cands[t][side];
        if (pad.released[key] && pad.holdT[key] < 0.22) { if (c[0]) return this.doPass(p, c[0]); this.emit('deny', { t }); }
        else if (pad.held[key] && pad.holdT[key] >= 0.22 && !p['long' + side]) { p['long' + side] = true; if (c[1] || c[0]) return this.doPass(p, c[1] || c[0], !!c[1]); this.emit('deny', { t }); }
        if (!pad.held[key]) p['long' + side] = false;
      }
      const kx = mag > 0.3 ? wx : d, kz = mag > 0.3 ? wz : 0;
      if (pad.held.kick) p.charge = Math.min(1, p.charge + dt / 0.85);
      else if (p.charge > 0) return this.doKick(p, 'punt', p.charge, kx, kz);
      if (pad.pressed.bomb) return this.doKick(p, 'bomb', 1, kx, kz);
      if (pad.pressed.grubber) return this.doKick(p, 'grubber', 1, kx, kz);
      if (pad.pressed.drop && !this.dropGoal(p)) this.emit('deny', { t });
      if (b.carrier !== p) return;
      if (pad.pressed.step && p.stepCd <= 0 && p.stam > 0.08) {
        let s = Math.abs(wz) > 0.3 ? Math.sign(wz) : 0;
        if (!s) { let near = null, nd = 1e9; for (const o of this.squads[1 - t]) { const dd = dist(o, p); if (o.down <= 0 && dd < nd) { nd = dd; near = o; } } s = near && near.z > p.z ? -1 : 1; }
        p.stepT = 0.2; p.stepS = s; p.immune = 0.32; p.stepCd = 1.1; p.stam = Math.max(0, p.stam - 0.1); this.emit('step', { p });
      }
      if (pad.pressed.fend && p.fendCd <= 0) { p.fendT = 0.65; p.fendCd = 2.0; this.emit('fend', { p }); }
      if (pad.pressed.dummy && p.dummyCd <= 0) {
        p.dummyCd = 2.2; const side = this.cands[t].R[0] && (!this.cands[t].L[0] || wz * bs.lz + wx * bs.lx >= 0) ? 'R' : 'L', fake = this.cands[t][side][0];
        this.anim(p, ACT.PASS, 0.3, side === 'R' ? 1 : -1);
        for (const o of this.squads[1 - t]) if (o.down <= 0 && dist(o, p) < 9 && Math.random() < (this.cpuTeam(o.t) ? this.diff.fool : 0.5) && this.sel[o.t] !== o) { o.fooled = 0.5; o.foolTo = fake || null; }
        this.emit('dummy', { p });
      }
    } else if (b.mode !== 'dead') {
      if (pad.pressed.step || pad.pressed.fend) {
        const c = b.carrier; let a = mag > 0.2 ? Math.atan2(wz, wx) : p.dir;
        if (c && c.t !== t) { const dd = dist(c, p), ca = Math.atan2(c.z + c.vz * 0.15 - p.z, c.x + c.vx * 0.15 - p.x); if (dd < 5.5 && Math.abs(angDiff(ca, a)) < 1.1) a = ca; }
        p.big = !!pad.pressed.fend && !pad.pressed.step; p.diveT = p.big ? 0.22 : 0.28; const v = p.big ? 10.5 : 12.5; p.vx = Math.cos(a) * v; p.vz = Math.sin(a) * v; p.dir = a;
      } else if (pad.pressed.passL) this.sel[t] = this.pickDefender(t, p) || p;
      else if (pad.pressed.passR) { const list = this.squads[t].filter(q => q.down <= 0 && q !== p).sort((x, y) => dist(x, b) - dist(y, b)); this.sel[t] = list[1] || list[0] || p; }
    }
  }
  passCandidates(t) {
    const c = this.ball.carrier, out = this.cands[t]; out.L.length = 0; out.R.length = 0;
    if (!c || c.t !== t || !this.basis[t]) return;
    const bs = this.basis[t], d = this.dir[t], L = [], R = [];
    for (const m of this.squads[t]) {
      if (m === c || m.down > 0) continue;
      if ((m.x - c.x) * d > 0.7) continue;                         // no forward passes
      const dd = dist(m, c); if (dd < 2.6 || dd > 30) continue;
      const lat = (m.x - c.x) * bs.lx + (m.z - c.z) * bs.lz; if (Math.abs(lat) < 1.2) continue;
      (lat > 0 ? R : L).push([dd, m]);
    }
    for (const [arr, o] of [[L, out.L], [R, out.R]]) { arr.sort((a, b) => a[0] - b[0]); for (let i = 0; i < Math.min(2, arr.length); i++) o.push(arr[i][1]); }
  }

  /* ------------------------------------------------------------ tackles */
  tackleChecks() {
    const b = this.ball, c = b.carrier; if (!c || c.holdT < 0.12 || c.immune > 0) return;
    for (const o of this.squads[1 - c.t]) {
      if (o.down > 0 || o.rise > 0.2) continue;
      if (o.marker && this.playT < this.diff.marker && this.cpuTeam(o.t)) continue;
      if (dist(o, c) > (o.diveT > 0 ? 1.8 : 1.12)) continue;
      const human = this.sel[o.t] === o && this.isHuman(o.t);
      let p = TUNE.tackle + (o.tkl - c.str) * 0.004;
      if (this.cpuTeam(o.t)) p += this.diff.cpuTackle; else p += human ? this.diff.humanTackle + 0.07 : -0.03;
      if (o.diveT > 0 && human) p += 0.07;
      if (o.big) p -= 0.13;
      let fended = false;
      if (c.fendT > 0 && Math.abs(angDiff(Math.atan2(o.z - c.z, o.x - c.x), c.dir)) < 1.35) { p -= 0.42 + (c.str - 70) * 0.004; fended = true; }
      const cs = Math.hypot(c.vx, c.vz); if (cs < 3) p += 0.1;
      if (c.sprint) p -= 0.04; if (this.isHuman(c.t)) p -= 0.03;
      if (Math.random() < clamp(p, 0.15, 0.97)) return this.tackle(o, c);
      this.ground(o, 1.2, ACT.PRONE); c.immune = TUNE.breakImmune; c.vx *= 0.92; c.vz *= 0.92; this.stats[o.t].missed++;
      this.emit('miss', { def: o, car: c, fended });
    }
  }
  tackle(o, c) {
    const b = this.ball, d = this.dir[c.t], big = !!o.big || Math.random() < 0.1;
    this.ground(c, 1.3, ACT.SUPINE); this.ground(o, 1.05, ACT.PRONE); this.stats[o.t].tackles++;
    c.dir = Math.atan2(o.z - c.z, o.x - c.x) + Math.PI;
    this.emit('tackle', { def: o, car: c, big, human: this.sel[o.t] === o && this.isHuman(o.t) });
    const fum = 0.007 + (big ? 0.18 : 0) + (this.rain ? 0.03 : 0) - (c.hnd - 75) * 0.001;
    if (Math.random() < fum) {
      Object.assign(b, { mode: 'loose', carrier: null, target: null, kick: null, x: c.x, y: 0.9, z: c.z, vx: c.vx * 0.3 + rand(-3.5, 3.5), vz: rand(-3.5, 3.5), vy: 4.5, last: c.t, kicker: c, noCatch: 0.3, id: b.id + 1 });
      this.stats[c.t].errors++; this.emit('fumble', { p: c, def: o }); return;
    }
    if (c.x * d < -FL) { this.emit('stoppage', { msg: 'Goal line drop-out', team: 1 - c.t }); return this.setPhase('between', 1.8, () => this.restart(c.t, 'dropout')); }
    this.tackles++;
    if (this.tackles >= this.maxT) { this.emit('stoppage', { msg: 'Handover', team: 1 - c.t }); this.ruck(c.x, c.z, { team: 1 - c.t, slow: true }); }
    else { this.emit('count', { n: this.tackles, last: this.tackles === this.maxT - 1 }); this.ruck(c.x + d * 0.8, c.z, { tackled: c, tackler: o }); }
  }

  /* -------------------------------------------------------------- update */
  timers(p, dt) {
    p.holdT += dt; p.immune -= dt; p.fendT -= dt; p.fendCd -= dt; p.stepCd -= dt; p.dummyCd -= dt; p.fooled -= dt; p.rise -= dt;
    if (p.animT > 0) p.animT -= dt;
    if (p.sprint && !p.tired) { p.stam -= dt * 0.26; if (p.stam <= 0) { p.stam = 0; p.tired = true; } } else { p.stam = Math.min(1, p.stam + dt * 0.11); if (p.stam > 0.3) p.tired = false; }
    if (p.tired) p.sprint = false;
  }
  integrate(dt) {
    const P = this.players, b = this.ball;
    for (const p of P) {
      p.x = clamp(p.x + p.vx * dt, -FL - IG + 0.4, FL + IG - 0.4); p.z = clamp(p.z + p.vz * dt, -FW - 1.6, FW + 1.6);
      const sp = Math.hypot(p.vx, p.vz); p.ph += sp * dt * 1.55;
      let want = null;
      if (p.down > 0 || p.diveT > 0) want = null;
      else if (p.backpedal || sp < 0.9) { const fx = b.x - p.x, fz = b.z - p.z; if (Math.hypot(fx, fz) > 1.2 && (p.backpedal || this.phase !== 'convert')) want = Math.atan2(fz, fx); if (b.carrier === p || this.phase === 'convert' || this.phase === 'kickoff') want = sp > 0.9 ? Math.atan2(p.vz, p.vx) : null; }
      else want = Math.atan2(p.vz, p.vx);
      if (want !== null) p.dir += angDiff(want, p.dir) * Math.min(1, dt * 11);
    }
    for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
      const a = P[i], c = P[j]; if (a.down > 0 || c.down > 0 || a === b.carrier || c === b.carrier) continue;
      const dx = c.x - a.x, dz = c.z - a.z, l = Math.hypot(dx, dz);
      if (l < 0.85 && l > 0.001) { const k = (0.85 - l) / 2 / l; a.x -= dx * k; a.z -= dz * k; c.x += dx * k; c.z += dz * k; }
    }
  }
  update(dt, pads) {
    if (this.waiting || this.phase === 'idle') return;
    this.time += dt; this.pt += dt;
    const b = this.ball;
    if (this.phase === 'play') this.stepPlay(dt, pads);
    else if (this.phase === 'ruck') {
      this.clock -= dt;
      for (const p of this.players) {
        this.timers(p, dt); p.sprint = false;
        if (p.down > 0) { p.down -= dt; p.vx = p.vz = 0; if (p.down <= 0) p.rise = 0.35; continue; }
        this.moveTo(p, p.tx, p.tz, this.speedOf(p) * 1.25, dt);
      }
      this.integrate(dt);
    } else if (this.phase === 'kickoff') {
      const ko = this.ko, pad = pads[ko.k];
      for (const p of this.players) { this.timers(p, dt); this.setVel(p, 0, 0, dt); }
      if (ko.human && pad) {
        if (pad.held.kick || pad.held.step) { ko.charging = true; ko.charge = Math.min(1, ko.charge + dt / 0.9); }
        else if (ko.charging) { const bs = this.basis[ko.k]; this.launchKickoff(Math.max(0.3, ko.charge), ((bs.rz * pad.mx + bs.fz * pad.my) || rand(-0.6, 0.6)) * 22); }
        if (this.pt > 7 && !ko.charging) this.launchKickoff(0.7, rand(-18, 18));
        if (ko.charging && ko.charge >= 1 && this.pt > 9) this.launchKickoff(1, rand(-18, 18));
      } else if (this.pt > 1.5) { const k = cpuKickoff(this); this.launchKickoff(k.power, k.z); }
      this.integrate(dt);
    } else if (this.phase === 'convert') { for (const p of this.players) this.timers(p, dt); this.updateConvert(dt, pads); this.integrate(dt); }
    else {      // try, between, half, full: everyone coasts to a stop
      for (const p of this.players) {
        this.timers(p, dt);
        if (p.down > 0) { p.down -= dt; if (p.slide > 0) { p.slide -= dt; p.vx *= 1 - dt * 3; } else p.vx = p.vz = 0; if (p.down <= 0) p.rise = 0.35; continue; }
        this.setVel(p, 0, 0, dt, 4);
      }
      this.integrate(dt); if (b.mode === 'loose') this.flyBall(dt); else this.updateBall(dt);
    }
    if (this.pdur && this.pt >= this.pdur && this.pnext) { const f = this.pnext; this.pnext = null; this.pdur = 0; f(); }
  }
  stepPlay(dt, pads) {
    const b = this.ball; this.playT += dt;
    if (!this.golden) { this.clock -= dt; if (this.clock <= 0 && !this.siren) { this.siren = true; this.emit('siren'); } } else this.clock += dt;
    const c0 = b.carrier;
    if (c0) { const st = this.stats[c0.t]; st.poss += dt; const f = (c0.x - c0.lastX) * this.dir[c0.t]; if (f > 0) st.metres += f; c0.lastX = c0.x; }
    aiRefs(this, dt);
    for (let t = 0; t < 2; t++) {
      if (!this.isHuman(t)) continue;
      if (b.carrier && b.carrier.t === t) this.sel[t] = b.carrier;
      else if (b.mode === 'pass' && b.target.t === t) this.sel[t] = b.target;
      else if (!this.sel[t] || this.sel[t].down > 0.9) this.sel[t] = this.pickDefender(t);
      this.passCandidates(t);
    }
    for (const p of this.players) {
      this.timers(p, dt);
      if (p.down > 0) { p.down -= dt; p.vx = p.vz = 0; if (p.down <= 0) p.rise = 0.35; continue; }
      p.backpedal = false;
      if (this.sel[p.t] === p && this.isHuman(p.t) && pads[p.t]) this.human(p.t, pads[p.t], dt); else aiPlayer(this, p, dt);
    }
    this.integrate(dt); this.updateBall(dt);
    if (this.phase !== 'play') return;
    const c = b.carrier; if (!c) return;
    const d = this.dir[c.t];
    if (Math.abs(c.z) > FW) return this.turnover(c.x, Math.sign(c.z) * 24, 1 - c.t, 'Into touch');
    if (c.x * d >= FL + 0.3) return this.scoreTry(c);
    if (c.x * d < -FL - IG + 0.6) { this.emit('stoppage', { msg: 'Goal line drop-out', team: 1 - c.t }); return this.setPhase('between', 1.6, () => this.restart(c.t, 'dropout')); }
    if (!this.broke && this.playT > 0.5) {
      let ahead = 0; for (const o of this.squads[1 - c.t]) if (!o.fb && o.down <= 0 && (o.x - c.x) * d > 0.5 && Math.abs(o.z - c.z) < 16) ahead++;
      if (ahead === 0 && (c.x - this.mark.x) * d > 6) { this.broke = true; this.stats[c.t].breaks++; this.emit('break', { p: c }); }
    }
    this.tackleChecks();
  }

  /* ------------------------------------------------------------ snapshot */
  snapshot(buf) {
    const b = this.ball, live = this.phase === 'play' || this.phase === 'ruck';
    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i], o = i * STRIDE;
      let act = ACT.NONE, at = 0, aux = 0, fl = 0;
      if (p.down > 0) { act = p.downType; at = p.downType === ACT.TRYDIVE ? 1 - p.down / 3 : 1; }
      else if (p.rise > 0) act = ACT.GETUP;
      else if (p.diveT > 0) { act = ACT.LUNGE; at = 1 - p.diveT / 0.28; }
      else if (p.stepT > 0) { act = ACT.STEP; aux = p.stepS * (Math.cos(p.dir) >= 0 ? 1 : -1); }
      else if (p.animT > 0) { act = p.anim; at = 1 - p.animT / p.animDur; aux = p.animAux; }
      else if (p.mood && this.phase === 'try') act = p.mood;
      else if (this.phase === 'convert' && this.conv && p === this.conv.kicker && this.conv.stage < 3) act = ACT.SETKICK;
      else if (b.mode === 'loose' && p.chase && b.y > 2.5 && dist(p, this.land) < 2) act = ACT.CATCH;
      if (b.carrier === p) fl |= FLAG.BALL; if (p.fendT > 0) fl |= FLAG.FEND; if (p.sprint) fl |= FLAG.SPRINT;
      if (live && p.t !== this.poss && b.mode !== 'loose') fl |= FLAG.READY;
      buf[o] = p.x; buf[o + 1] = p.z; buf[o + 2] = p.dir; buf[o + 3] = p.vx * Math.cos(p.dir) + p.vz * Math.sin(p.dir); buf[o + 4] = p.ph;
      buf[o + 5] = act; buf[o + 6] = at; buf[o + 7] = fl; buf[o + 8] = aux; buf[o + 9] = 0;
    }
    const o = this.players.length * STRIDE;
    buf[o] = b.x; buf[o + 1] = b.y; buf[o + 2] = b.z; buf[o + 3] = b.yaw; buf[o + 4] = b.spin;
    buf[o + 5] = b.mode === 'held' ? 0 : b.mode === 'place' ? 3 : b.mode === 'dead' ? 4 : b.mode === 'pass' || (b.kick && (b.kick.type === 'punt' || b.kick.type === 'chip')) ? 1 : 2;
    buf[o + 6] = b.carrier ? b.carrier.id : -1;
  }
}
