// Sixth Tackle: boot, game loop, presentation (camera cuts, replays, crowd, commentary) and mode flow.
import * as THREE from 'three';
import css from './style.css';
import f5 from '@fontsource/barlow-condensed/files/barlow-condensed-latin-500-normal.woff2';
import f6 from '@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2';
import f7 from '@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2';
import f8 from '@fontsource/barlow-condensed/files/barlow-condensed-latin-800-normal.woff2';
import f8i from '@fontsource/barlow-condensed/files/barlow-condensed-latin-800-italic.woff2';
import { FL, settings, clamp, rand, pick, hex, store } from './config.js';
import { TEAMS, pickKits, kitOf, contrast } from './teams.js';
import { input } from './input.js';
import { audio } from './audio.js';
import { createGfx } from './gfx/renderer.js';
import { Stadium } from './gfx/stadium.js';
import { Athlete, BallView, ShadowFan, makeKitMats, STRIDE } from './gfx/athlete.js';
import { FX } from './gfx/fx.js';
import { Director, basisFor } from './gfx/camera.js';
import { Match } from './sim/match.js';
import { Hud } from './ui/hud.js';
import { Menus } from './ui/menus.js';

const MAXP = 26, BUF = MAXP * STRIDE + 8, REC = 420;
const fonts = [[500, 'normal', f5], [600, 'normal', f6], [700, 'normal', f7], [800, 'normal', f8], [800, 'italic', f8i]];
const style = document.createElement('style');
style.textContent = fonts.map(([w, s, u]) => `@font-face{font-family:"Barlow Condensed";font-weight:${w};font-style:${s};font-display:block;src:url(${u}) format("woff2")}`).join('') + css;
document.head.appendChild(style);
document.body.insertAdjacentHTML('beforeend', '<div id="st-app"><div id="st-stage"></div><div id="st-hud" hidden></div><div id="st-menu"></div><div id="st-fade"></div></div>');
const $ = id => document.getElementById(id);

const G = {
  match: null, cfg: null, attract: false, paused: false, intro: 0, slowT: 0, time: 0, buf: new Float32Array(BUF), view: new Float32Array(BUF),
  events: [], timers: [], humans: [null, null], userTeam: 0, style: 'endon', duo: false, excite: 0, kicks: null, kits: null,
  rec: { frames: [], head: 0, count: 0 }, replay: { active: false },
};
let scene, camera, gfx, stadium, fx, director, hud, menus, ballView, fan, rings, landRing, aimArrow;
const athletes = [], tmp = new THREE.Vector3(), focus = new THREE.Vector3(), proj = new THREE.Vector3();

const LINES = {
  break: ['{n} is through the line!', 'Open country for {n}!', '{n} bursts clear!'],
  bighit: ['Huge hit from {n}!', '{n} rattles him!', 'That one shook the stand!'],
  try: ['{n} scores for the {t}!', 'Try time! {n} gets it down!', '{n} crosses for the {t}!'],
  intercept: ['Picked off by {n}!', '{n} reads it and steals it!'],
  miss: ['{n} shrugs off the tackle!', '{n} will not go down!', 'Slips straight through {n}\'s fingers... wait, he is still going!'],
  fend: ['What a fend from {n}!', '{n} palms him away!'],
  bomb: ['Up goes the bomb!', 'A towering kick from {n}!'],
  grubber: ['{n} threads a grubber through!', 'Kick in behind!'],
  drop: ['{n} snaps a shot at field goal...'],
  fumble: ['The ball is loose!', 'Knocked free!'],
  fortyTwenty: ['A forty-twenty! Brilliant from the boot!'],
  last: ['Last tackle. Decision time.', 'Fifth and last. What have they got?'],
  conv: ['Straight between the sticks!', 'He has nailed it!'], convMiss: ['Pushed it wide.', 'That one drifts away.'],
};
const say = (key, vars = {}) => { if (G.attract || !LINES[key]) return; hud.comment(pick(LINES[key]).replace('{n}', vars.n || '').replace('{t}', vars.t || '')); };
const sur = p => (p ? p.name.split(' ').slice(1).join(' ') : '');
const after = (t, fn) => G.timers.push({ t, fn });

/* -------------------------------------------------------------------- boot */
async function boot() {
  try { await Promise.race([Promise.all(fonts.map(([w, s]) => document.fonts.load(`${s} ${w} 40px "Barlow Condensed"`))), new Promise(r => setTimeout(r, 2500))]); } catch (e) { /* fall back to system fonts */ }
  scene = new THREE.Scene(); camera = new THREE.PerspectiveCamera(50, 16 / 9, 0.3, 2400);
  gfx = createGfx($('st-stage'), scene, camera);
  stadium = new Stadium(scene, gfx.renderer); fx = new FX(scene); director = new Director(camera);
  for (let i = 0; i < MAXP; i++) athletes.push(new Athlete(scene));
  ballView = new BallView(scene); fan = new ShadowFan(scene, MAXP, stadium.mastPos);
  rings = [0xffd23c, 0x4fd1ff].map(c => { const r = new THREE.Mesh(new THREE.RingGeometry(0.72, 0.92, 36), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.95, depthWrite: false, side: THREE.DoubleSide })); r.rotation.x = -Math.PI / 2; r.visible = false; r.renderOrder = 2; scene.add(r); return r; });
  landRing = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.15, 36), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false, side: THREE.DoubleSide })); landRing.rotation.x = -Math.PI / 2; landRing.visible = false; landRing.renderOrder = 2; scene.add(landRing);
  const ac = document.createElement('canvas'); ac.width = 256; ac.height = 32; const ag = ac.getContext('2d'), gr = ag.createLinearGradient(0, 0, 256, 0); gr.addColorStop(0, 'rgba(255,210,60,.95)'); gr.addColorStop(1, 'rgba(255,210,60,0)'); ag.fillStyle = gr; ag.fillRect(0, 10, 256, 12);
  const ageo = new THREE.PlaneGeometry(14, 0.8); ageo.rotateX(-Math.PI / 2); ageo.translate(7.4, 0, 0);
  aimArrow = new THREE.Mesh(ageo, new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(ac), transparent: true, depthWrite: false })); aimArrow.visible = false; aimArrow.renderOrder = 2; scene.add(aimArrow);
  for (let i = 0; i < REC; i++) G.rec.frames.push(new Float32Array(BUF));
  hud = new Hud($('st-hud')); menus = new Menus($('st-menu'), app);
  const onResize = () => { gfx.resize(); fx.resize(gfx.h, camera.fov); };
  window.addEventListener('resize', onResize); onResize();
  app.applySettings('quality');
  document.addEventListener('visibilitychange', () => { if (document.hidden && G.match && !G.attract && !G.paused && !menus.active) pause(); });
  window.addEventListener('pointerdown', () => audio.init(), { once: false });
  startAttract(); menus.open('title');
  $('st-fade').classList.add('clear');
  let last = performance.now();
  const loop = now => { const dt = Math.min(0.05, (now - last) / 1000); last = now; frame(dt); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
}

/* ------------------------------------------------------------ match set-up */
function launch(cfg) {
  const attract = !!cfg.attract, side = cfg.userSide || 0, m0 = G.match;
  G.cfg = cfg; G.attract = attract; G.duo = !!cfg.duo; G.paused = false; G.events.length = 0; G.timers.length = 0; G.replay.active = false; G.rec.count = 0; G.slowT = 0; G.kicks = null;
  G.humans = attract ? [null, null] : cfg.duo ? [0, 1] : side === 0 ? [0, null] : [null, 0];
  G.userTeam = cfg.duo ? 0 : side; G.style = cfg.duo ? 'side' : settings.camera; input.duo = !!cfg.duo;
  const kv = pickKits(cfg.teams[0], cfg.teams[1]), kits = G.kits = [kitOf(cfg.teams[0], kv[0]), kitOf(cfg.teams[1], kv[1])], mats = kits.map(makeKitMats);
  const time = attract && !m0 ? settings.time : settings.time, weather = attract ? 'clear' : settings.weather;
  const m = G.match = new Match({ teams: cfg.teams, humans: G.humans, n: cfg.n || 13, halfSecs: attract ? 150 : settings.half * 60, diff: attract ? 0 : settings.difficulty, rules: cfg.rules || {}, weather, emit: (t, d) => G.events.push([t, d]) });
  const cond = stadium.setConditions(time, weather); gfx.bloom.strength = cond.bloom; fx.setRain(weather === 'rain'); G.night = time !== 'day';
  stadium.setTeams(cfg.teams[0], cfg.teams[1]); screen();
  athletes.forEach((a, i) => { const p = m.players[i]; a.setVisible(!!p); if (p) a.setKit(kits[p.t], mats[p.t], p); });
  hud.setTeams(cfg.teams, kits, m.maxT); hud.versus(false); hud.replay(false);
  menus.closeAll();
  if (attract) { hud.show(false); m.start(); director.set('menu'); return; }
  audio.music(false); hud.show(true);
  if (cfg.rules && cfg.rules.kicking) { G.kicks = { i: 0, made: 0, log: [], total: 10, prev: store.get('kickBest', 0) }; nextKick(); director.set('play'); return; }
  m.start(); m.snapshot(G.buf);
  G.intro = 4.6; director.set('intro', { dur: 4.6, force: true }); hud.cine(true); audio.sfx('sting'); audio.cheer(0.9);
  hud.versus(true, cfg.teams, cfg.label || 'Quick Match', `${cfg.teams[0].ground} · ${time[0].toUpperCase() + time.slice(1)}${weather === 'rain' ? ', rain' : ''}`);
}
function startAttract() {
  const a = (Math.random() * TEAMS.length) | 0, b = (a + 1 + ((Math.random() * (TEAMS.length - 1)) | 0)) % TEAMS.length;
  launch({ attract: true, teams: [TEAMS[a], TEAMS[b]], n: 13, rules: {} });
}
function screen() { const m = G.match, c = G.cfg; stadium.setScreen(c.teams[0], c.teams[1], m.score[0], m.score[1], m.over ? 'FULL TIME' : m.golden ? 'GOLDEN POINT' : c.teams[0].ground.toUpperCase()); }
function summary() { const m = G.match, c = G.cfg; return { mode: c.mode, label: c.label, teams: c.teams, score: m.score.slice(), stats: m.stats, scorers: m.scorers, userSide: G.userTeam, duo: G.duo, golden: m.golden, kicks: G.kicks }; }
const KICK_SPOTS = [[14, 0], [18, 9], [22, -13], [21, 19], [27, -21], [31, 11], [29, 26], [35, -25], [39, 17], [43, -30]];
function nextKick() {
  const m = G.match, k = G.kicks;
  if (k.i >= k.total) { if (k.made > k.prev) store.set('kickBest', k.made); return menus.finish(summary()); }
  const [back, z] = KICK_SPOTS[k.i], w = 0.4 + k.i * 0.28, a = rand(6.28);
  m.wind = { x: Math.cos(a) * w, z: Math.sin(a) * w }; m.waiting = false;
  m.setPlaceKick(0, { x: m.dir[0] * (FL - back), z });
  hud.banner(`Kick ${k.i + 1} of ${k.total}`, `${Math.round(m.conv.dist)} metres out`, { small: true, dur: 2 });
}
function pause() { if (G.paused) return; G.paused = true; menus.open('pause'); }

const app = {
  launch,
  resume() { G.paused = false; menus.closeAll(); },
  restartMatch() { launch(G.cfg); },
  quitMatch() { app.toMenuWorld(); menus.reset('main'); },
  continueHalf() { menus.closeAll(); director.set('play'); G.match.resume(); },
  toMenuWorld() { hud.show(false); startAttract(); audio.music(true); },
  fullscreen() { try { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); } catch (e) { /* not available here */ } },
  applySettings(key) {
    if (key === 'quality') { gfx.setQuality(settings.quality); stadium.setShadowQuality(gfx.q.shadow); stadium.setCrowd(gfx.q.crowd); fx.resize(gfx.h, camera.fov); if (stadium.cond) gfx.bloom.strength = stadium.cond.bloom; }
    if (key === 'camera' && G.match && !G.duo) G.style = settings.camera;
    audio.volumes();
  },
};

/* ------------------------------------------------------------------ events */
function handle(type, d) {
  const m = G.match, A = G.attract, teams = G.cfg.teams, col = t => ({ color: hex(G.kits[t].c1), ink: hex(contrast(G.kits[t].c1)) });
  switch (type) {
    case 'kickoff': if (!A && !G.intro) hud.banner(d.type === 'dropout' ? 'Drop-out' : 'Kick off', '', { small: true, dur: 1.4 }); break;
    case 'kick': audio.sfx('kick'); if (d.type === 'bomb') say('bomb', { n: sur(d.p) }); else if (d.type === 'grubber') say('grubber', { n: sur(d.p) }); else if (d.type === 'drop') say('drop', { n: sur(d.p) }); if (d.type === 'kickoff') audio.sfx('whistle'); break;
    case 'pass': audio.sfx('pass'); break;
    case 'catch': audio.sfx('catch'); if (d.how === 'intercept') { hud.banner('Intercept!', sur(d.p), col(d.p.t)); audio.cheer(1); say('intercept', { n: sur(d.p) }); } break;
    case 'tackle':
      audio.sfx(d.big ? 'bighit' : 'hit'); fx.turf(d.car.x, d.car.z, d.big ? 22 : 10, d.big ? 1.5 : 1); director.shake(d.big ? 0.55 : 0.22);
      if (d.big) { say('bighit', { n: sur(d.def) }); audio.cheer(0.7); G.excite = Math.max(G.excite, 0.6); if (!A) G.slowT = Math.max(G.slowT, 0.3); } break;
    case 'count': if (!A) { hud.banner(d.last ? 'Last tackle' : 'Tackle ' + d.n, '', Object.assign({ small: true, dur: 1.1 }, d.last ? {} : { color: 'rgba(10,14,19,.82)', ink: '#fff' })); if (d.last) say('last'); } break;
    case 'miss': audio.sfx('step'); fx.turf(d.def.x, d.def.z, 6); audio.cheer(0.5); if (d.fended) say('fend', { n: sur(d.car) }); else if (Math.random() < 0.5) say('miss', { n: sur(d.car) }); break;
    case 'break': if (!A) hud.banner('Line break', sur(d.p), Object.assign({ small: true }, col(d.p.t))); audio.cheer(0.95); G.excite = 1; say('break', { n: sur(d.p) }); break;
    case 'fumble': case 'spill': audio.sfx('ooh'); if (!A) hud.banner('Loose ball', '', { small: true, dur: 1.2 }); say('fumble'); break;
    case 'stoppage': audio.sfx('whistle'); if (!A) hud.banner(d.msg, teams[d.team].name + ' ball', Object.assign({ small: !d.big }, col(d.team))); if (d.big) { audio.cheer(1); say('fortyTwenty'); } break;
    case 'try': {
      audio.sfx('whistleLong'); audio.cheer(1.4); G.excite = 1.6; G.slowT = 1.1; director.shake(0.3);
      director.set('try', { a0: rand(6.28), force: true }); fx.turf(d.p.x, d.p.z, 20, 1.3);
      fx.confetti(d.p.x, 9, d.p.z, [G.kits[d.p.t].c1, G.kits[d.p.t].c2, 0xffffff], 160);
      if (G.night) for (let i = 0; i < 5; i++) after(0.25 * i, () => { fx.firework(rand(-50, 50), rand(46, 62), rand(-1, 1) > 0 ? 60 : -60, pick([G.kits[d.p.t].c1, G.kits[d.p.t].c2, 0xffd23c])); audio.sfx('pop'); });
      if (!A) hud.banner(d.bonus ? 'Bonus zone try!' : 'Try!', `${sur(d.p)} · ${teams[d.p.t].name}`, Object.assign({ big: true, dur: 2.8 }, col(d.p.t)));
      say('try', { n: sur(d.p), t: teams[d.p.t].name }); break;
    }
    case 'convert': director.set('convert', { x: d.spot.x, z: d.spot.z, gx: d.gx, force: true }); break;
    case 'convResult':
      if (d.good) { audio.sfx('good'); audio.cheer(0.9); say('conv'); } else { audio.sfx('bad'); audio.sfx('ooh'); say('convMiss'); }
      if (!A) hud.banner(d.good ? (G.kicks ? 'Good!' : 'Converted') : 'No good', '', Object.assign({ small: true }, d.good ? col(d.t) : { color: 'rgba(10,14,19,.82)', ink: '#fff' }));
      if (G.kicks) { G.kicks.log.push(d.good); if (d.good) G.kicks.made++; G.kicks.i++; } break;
    case 'fieldGoal': audio.sfx('good'); audio.cheer(1.2); G.excite = 1.3; if (!A) hud.banner(d.pts === 2 ? 'Two-point field goal!' : 'Field goal!', teams[d.t].name, Object.assign({ big: true }, col(d.t))); break;
    case 'score': screen(); break;
    case 'siren': audio.sfx('siren'); break;
    case 'half': audio.sfx('whistleLong'); director.set('wide', { a0: rand(6.28) }); break;
    case 'golden': if (!A) hud.banner('Golden point', 'Next score wins', { big: true, dur: 2.6 }); break;
    case 'full': audio.sfx('whistleLong'); audio.cheer(1.2); director.set('wide', { a0: rand(6.28) }); screen(); if (!A) hud.banner('Full time', `${teams[0].abbr} ${m.score[0]} – ${m.score[1]} ${teams[1].abbr}`, { big: true, dur: 3 });
      if (G.night) for (let i = 0; i < 8; i++) after(0.3 * i, () => fx.firework(rand(-55, 55), rand(46, 64), rand(-1, 1) > 0 ? 62 : -62, pick([0xffd23c, 0xffffff, G.kits[0].c1, G.kits[1].c1]))); break;
    case 'step': case 'fend': case 'dummy': audio.sfx('step'); fx.turf(d.p.x, d.p.z, 5, 0.7); break;
    case 'dust': fx.turf(d.p.x, d.p.z, 8, 0.9); break;
    case 'bounce': audio.sfx('bounce', clamp(d.v / 10, 0.3, 1)); fx.turf(m.ball.x, m.ball.z, 4, 0.6); break;
    case 'post': audio.sfx('post'); audio.sfx('ooh'); break;
    case 'deny': audio.sfx('bad'); break;
    case 'tick': audio.sfx('tick'); break;
    case 'turnover': if (d.how === 'loose' || d.how === 'kick') G.excite = Math.max(G.excite, 0.4); break;
    case 'hold':
      if (d.reason === 'try') { if (A || !settings.replays || G.rec.count < 90) m.resume(); else startReplay(5.2); }
      else if (d.reason === 'half') { if (A) after(2.5, () => m.resume()); else after(2.2, () => menus.open('half', { sum: summary() })); }
      else if (d.reason === 'golden') after(2.8, () => { director.set('play'); m.resume(); });
      else if (d.reason === 'full') { if (A) after(5, () => { if (G.attract) startAttract(); }); else after(3.4, () => { audio.music(true); menus.finish(summary()); }); }
      else if (d.reason === 'kickNext') nextKick();
      break;
  }
}

/* ----------------------------------------------------------------- replays */
function startReplay(secs) {
  const r = G.rec, n = Math.min(r.count, Math.floor(secs * 60));
  G.replay = { active: true, start: (r.head - n + REC) % REC, n, pos: 0, t: 0, angle: Math.random() < 0.5 ? 0 : 1, side: Math.random() < 0.5 ? 1 : -1 };
  hud.replay(true); director.set('replay', { angle: G.replay.angle, side: G.replay.side, gx: G.match.dir[G.match.ball.carrier ? G.match.ball.carrier.t : 0] * FL, force: true });
}
function stepReplay(dt) {
  const R = G.replay, r = G.rec, n = G.match.players.length; R.t += dt; R.pos += dt * 60 * 0.5;
  if (R.pos >= R.n - 2 || (input.any && R.t > 0.7)) { R.active = false; hud.replay(false); G.match.resume(); return; }
  const i0 = Math.floor(R.pos), a = R.pos - i0, f0 = r.frames[(R.start + i0) % REC], f1 = r.frames[(R.start + i0 + 1) % REC], v = G.view;
  v.set(f0);
  for (let i = 0; i < n; i++) { const o = i * STRIDE; v[o] = f0[o] + (f1[o] - f0[o]) * a; v[o + 1] = f0[o + 1] + (f1[o + 1] - f0[o + 1]) * a; const dd = f1[o + 2] - f0[o + 2]; v[o + 2] = f0[o + 2] + Math.atan2(Math.sin(dd), Math.cos(dd)) * a; v[o + 4] = f0[o + 4] + (f1[o + 4] - f0[o + 4]) * a; }
  const o = n * STRIDE; for (let k = 0; k < 3; k++) v[o + k] = f0[o + k] + (f1[o + k] - f0[o + k]) * a;
}

/* -------------------------------------------------------------------- frame */
function frame(dtReal, draw = true) {
  G.time += dtReal; input.update(dtReal); audio.update(dtReal);
  const m = G.match; let dtSim = 0;
  if (m) {
    if (input.pause && !menus.active && !G.attract && !G.intro && performance.now() - menus.closedAt > 250) pause();
    if (!G.paused) {
      for (let i = G.timers.length - 1; i >= 0; i--) if ((G.timers[i].t -= dtReal) <= 0) { const f = G.timers[i].fn; G.timers.splice(i, 1); f(); }
      if (G.intro > 0) { G.intro -= dtReal; if (G.intro <= 0 || (input.any && G.intro < 3.9)) { G.intro = 0; hud.versus(false); hud.cine(false); director.set('play', { blend: true }); } }
      else if (G.replay.active) { stepReplay(dtReal); dtSim = dtReal * 0.5; }
      else {
        if (G.slowT > 0) G.slowT -= dtReal;
        dtSim = dtReal * (G.slowT > 0 ? 0.32 : 1);
        for (let t = 0; t < 2; t++) m.basis[t] = basisFor(G.style, m.dir[G.duo ? t : G.userTeam]);
        if (m.phase === 'convert' && m.conv) { const c = m.conv; m.basis[c.t] = basisFor('endon', m.dir[c.t]); }
        const pads = [G.humans[0] !== null ? input.pads[G.humans[0]] : null, G.humans[1] !== null ? input.pads[G.humans[1]] : null];
        m.update(dtSim, pads);
        while (G.events.length) { const [t, d] = G.events.shift(); handle(t, d); }
        if (G.match !== m) return;
        m.snapshot(G.buf);
        const r = G.rec; r.frames[r.head].set(G.buf); r.head = (r.head + 1) % REC; r.count = Math.min(REC, r.count + 1);
      }
    }
    if (draw) present(m, G.paused ? 0 : dtSim || dtReal, dtReal);
  }
  if (!draw) return;
  gfx.grade.uniforms.uSat.value = G.replay.active ? 0.92 : 1.12; gfx.grade.uniforms.uVig.value = G.replay.active || menus.active ? 0.5 : 0.3;
  gfx.render(dtReal);
}

function present(m, dt, dtReal) {
  const v = G.replay.active ? G.view : G.buf, n = m.players.length, o = n * STRIDE, b = m.ball, live = !G.replay.active;
  for (let i = 0; i < n; i++) athletes[i].apply(v, i * STRIDE, dt, G.time, i * 1.7);
  fan.update(v, n, G.night);
  const type = v[o + 5], ci = v[o + 6];
  if (type === 0 && ci >= 0) { athletes[ci].ballPos(tmp); ballView.set(tmp.x, tmp.y, tmp.z, v[o + 3], 0, 0); focus.set(v[ci * STRIDE], 0, v[ci * STRIDE + 1]); }
  else { ballView.set(v[o], type === 4 ? 0.14 : v[o + 1], v[o + 2], v[o + 3], type === 4 ? 0 : v[o + 4], type === 4 ? 2 : type); focus.set(v[o], v[o + 1], v[o + 2]); }
  // field markers
  const showSel = live && !G.attract && (m.phase === 'play' || m.phase === 'ruck' || m.phase === 'kickoff');
  for (let t = 0; t < 2; t++) {
    const s = m.sel[t], r = rings[G.duo ? t : 0];
    if (G.humans[t] === null) { if (G.duo) r.visible = false; continue; }
    r.visible = showSel && !!s; if (s) { r.position.set(s.x, 0.05, s.z); r.scale.setScalar(1 + Math.sin(G.time * 7) * 0.06); }
  }
  if (!G.duo) rings[1].visible = false; if (G.attract) rings[0].visible = false;
  landRing.visible = live && b.mode === 'loose' && b.y > 2.2 && m.phase === 'play'; if (landRing.visible) { landRing.position.set(m.land.x, 0.05, m.land.z); landRing.scale.setScalar(0.8 + ((G.time * 2) % 1) * 0.5); }
  const c = m.conv; aimArrow.visible = live && !!c && c.human && c.stage < 3; if (aimArrow.visible) { aimArrow.position.set(c.spot.x, 0.06, c.spot.z); aimArrow.rotation.y = -(c.base + c.aim); }
  // ball trail and crowd energy
  if (live && b.mode === 'loose' && b.y > 1.2 && dt > 0) fx.trail(b.x, b.y, b.z);
  const d = m.ref ? m.dir[m.ref.t] : 0, near = m.ref ? clamp((m.ref.x * d - 10) / 40, 0, 1) : 0;
  G.excite = Math.max(0, G.excite - dtReal * 0.35); audio.base = 0.22 + near * 0.3 + (m.broke ? 0.25 : 0);
  const ex = clamp(G.excite + near * 0.25, 0, 1.6);
  if (G.night && ex > 0.45 && Math.random() < ex * 0.5) { stadium.randomSeat(tmp); fx.flash(tmp.x, tmp.y, tmp.z); }
  stadium.update(dtReal, G.time, ex, focus); fx.update(dt, G.time, camera);
  // camera
  if (live && !G.intro) {
    if (menus.active && G.attract) director.set('menu');
    else if (m.phase === 'try') { /* set on the event */ }
    else if (m.phase === 'convert') { if (director.mode !== 'convert' && c) director.set('convert', { x: c.spot.x, z: c.spot.z, gx: c.gx }); }
    else if (m.phase === 'half' || m.phase === 'full') { if (director.mode !== 'wide') director.set('wide'); }
    else if (director.mode !== 'play' && !G.attract) director.set('play', { blend: director.mode === 'intro' });
    else if (G.attract && !menus.active) director.set('menu');
  }
  const ut = G.userTeam;
  director.update(dtReal, { focus, style: G.style, d: m.dir[ut], defending: !G.duo && m.poss !== ut, ballY: v[o + 1], ballFlying: !!c && c.flying });
  if (!G.attract) {
    let ws = [1, 0];
    if (c) { const fxv = Math.cos(c.base), fzv = Math.sin(c.base); ws = [m.wind.x * -fzv + m.wind.z * fxv, -(m.wind.x * fxv + m.wind.z * fzv)]; }
    hud.update(dtReal, { match: m, humans: G.humans, duo: G.duo, replay: G.replay.active, intro: G.intro, quiet: G.intro > 0 || m.phase === 'half' || m.phase === 'full', windScreen: ws, project });
  }
}
function project(x, y, z) {
  proj.set(x, y, z).project(camera);
  return [(proj.x * 0.5 + 0.5) * gfx.w, (-proj.y * 0.5 + 0.5) * gfx.h, proj.z < 1 && Math.abs(proj.x) < 1.05 && Math.abs(proj.y) < 1.05];
}

window.__st = { G, app, settings, TEAMS, input, fast(n, dt = 1 / 60) { for (let i = 0; i < n; i++) frame(dt, false); }, get menus() { return menus; }, get director() { return director; } };
boot();
