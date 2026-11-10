// Front-end screens. Keyboard, mouse and gamepad all drive the same focus list.
import { settings, saveSettings, DIFFS, HALF_OPTIONS, TIMES, QUALITIES, hex, store } from '../config.js';
import { TEAMS, teamById, crestURL, kitURL, overall } from '../teams.js';
import { input, ACTIONS, keyLabel } from '../input.js';
import { audio } from '../audio.js';
import { MODES, loadSeason, newSeason, seasonFixture, seasonApply, ladder, loadCup, newCup, cupFixture, cupApply, CUP_ROUNDS } from '../modes.js';

const cap = s => s[0].toUpperCase() + s.slice(1);
const cyc = (arr, cur, d) => arr[(arr.indexOf(cur) + d + arr.length) % arr.length];
const OPTS = {
  half: { label: 'Half length', get: () => settings.half + ' min', adj: d => { settings.half = cyc(HALF_OPTIONS, settings.half, d); } },
  difficulty: { label: 'Difficulty', get: () => DIFFS[settings.difficulty].name, adj: d => { settings.difficulty = (settings.difficulty + d + 3) % 3; } },
  time: { label: 'Time of day', get: () => cap(settings.time), adj: d => { settings.time = cyc(TIMES, settings.time, d); } },
  weather: { label: 'Weather', get: () => (settings.weather === 'rain' ? 'Rain' : 'Clear'), adj: () => { settings.weather = settings.weather === 'rain' ? 'clear' : 'rain'; } },
  camera: { label: 'Camera', get: () => (settings.camera === 'side' ? 'Broadcast side-on' : 'End-on, behind play'), adj: () => { settings.camera = settings.camera === 'side' ? 'endon' : 'side'; } },
  quality: { label: 'Graphics quality', get: () => cap(settings.quality), adj: d => { settings.quality = cyc(QUALITIES, settings.quality, d); } },
  sfx: { label: 'Effects volume', get: () => Math.round(settings.sfx * 10), adj: d => { settings.sfx = Math.min(1, Math.max(0, Math.round(settings.sfx * 10 + d) / 10)); } },
  crowd: { label: 'Crowd volume', get: () => Math.round(settings.crowd * 10), adj: d => { settings.crowd = Math.min(1, Math.max(0, Math.round(settings.crowd * 10 + d) / 10)); } },
  music: { label: 'Music volume', get: () => Math.round(settings.music * 10), adj: d => { settings.music = Math.min(1, Math.max(0, Math.round(settings.music * 10 + d) / 10)); } },
  shake: { label: 'Camera shake', get: () => (settings.shake ? 'On' : 'Off'), adj: () => { settings.shake = !settings.shake; } },
  replays: { label: 'Try replays', get: () => (settings.replays ? 'On' : 'Off'), adj: () => { settings.replays = !settings.replays; } },
  hints: { label: 'Key hints', get: () => (settings.hints ? 'On' : 'Off'), adj: () => { settings.hints = !settings.hints; } },
  autoSwitch: { label: 'Auto-switch defender', get: () => (settings.autoSwitch ? 'On' : 'Off'), adj: () => { settings.autoSwitch = !settings.autoSwitch; } },
};
const optRow = k => `<div class="row" data-adj="${k}"><span>${OPTS[k].label}</span><b><i class="ar">&#9664;</i>${OPTS[k].get()}<i class="ar">&#9654;</i></b></div>`;
const btn = (act, label, cls = '') => `<div class="row btn ${cls}" data-act="${act}"><span>${label}</span></div>`;
const bar = (label, v) => `<div class="stat"><span>${label}</span><div><i style="width:${v}%"></i></div><b>${v}</b></div>`;
function teamCard(t, tag, variant = 0) {
  return `<div class="tcard" style="--tc:${hex(t.c1)};--t2:${hex(t.c2)}"><div class="tc-tag">${tag}</div>
    <div class="tc-top"><img class="tc-crest" src="${crestURL(t, 320)}" alt=""><img class="tc-kit" src="${kitURL(t, variant)}" alt=""></div>
    <div class="tc-city">${t.city}</div><div class="tc-name">${t.name}</div><div class="tc-ground">${t.ground}</div>
    ${bar('Attack', t.att)}${bar('Defence', t.def)}${bar('Speed', t.spd)}${bar('Kicking', t.kck)}<div class="tc-ovr"><span>Overall</span><b>${overall(t)}</b></div></div>`;
}
function statsTable(sum) {
  const [a, b] = sum.stats, tot = a.poss + b.poss || 1, row = (l, x, y) => `<tr><td>${x}</td><th>${l}</th><td>${y}</td></tr>`;
  return `<table class="stats">${row('Possession', Math.round(a.poss / tot * 100) + '%', Math.round(b.poss / tot * 100) + '%')}${row('Metres run', Math.round(a.metres), Math.round(b.metres))}${row('Line breaks', a.breaks, b.breaks)}${row('Tackles', a.tackles, b.tackles)}${row('Missed tackles', a.missed, b.missed)}${row('Errors', a.errors, b.errors)}${row('Kicks', a.kicks, b.kicks)}</table>`;
}
function scoreHead(sum) {
  const [h, a] = sum.teams, sc = t => sum.scorers.filter(s => s.t === t && s.type !== 'conversion').map(s => `${s.name.split(' ').slice(1).join(' ')} ${s.min}'${s.type === 'field goal' ? ' (FG)' : ''}`).join(', ');
  return `<div class="final"><div class="f-team" style="--tc:${hex(h.c1)}"><img src="${crestURL(h, 320)}" alt=""><span>${h.name}</span><em>${sc(0)}</em></div><div class="f-score"><b>${sum.score[0]}</b><i>&ndash;</i><b>${sum.score[1]}</b></div><div class="f-team" style="--tc:${hex(a.c1)}"><img src="${crestURL(a, 320)}" alt=""><span>${a.name}</span><em>${sc(1)}</em></div></div>`;
}

export class Menus {
  constructor(root, app) {
    this.root = root; this.app = app; this.stack = []; this.focus = 0; this.items = []; this.closedAt = 0;
    this.pick = { mode: 'quick', a: 0, b: 1, short: true };
    const last = store.get('lastTeams', null); if (last) { this.pick.a = Math.max(0, TEAMS.findIndex(t => t.id === last[0])); this.pick.b = Math.max(0, TEAMS.findIndex(t => t.id === last[1])); }
    input.menuHandler = (dir, pad) => this.nav(dir, pad);
    root.addEventListener('click', e => { audio.init(); if (this.top && this.top.name === 'title') return this.nav('ok'); const n = e.target.closest('.row'); if (!n) return; const i = this.items.indexOf(n); if (i < 0) return; this.focus = i; if (n.dataset.adj) { this.adjust(n, e.target.closest('.ar') && e.target.closest('.ar') === n.querySelector('.ar') ? -1 : 1); } else this.activate(n); });
    root.addEventListener('mousemove', e => { const n = e.target.closest('.row'); if (!n) return; const i = this.items.indexOf(n); if (i >= 0 && i !== this.focus) { this.focus = i; this.paint(); } });
  }
  get active() { return this.stack.length > 0; }
  get top() { return this.stack[this.stack.length - 1]; }
  open(name, data = {}) { this.stack.push({ name, data }); this.focus = data.focus || 0; this.render(); }
  replace(name, data = {}) { this.stack.pop(); this.open(name, data); }
  reset(name, data = {}) { this.stack = []; this.open(name, data); }
  closeAll() { this.stack = []; this.root.innerHTML = ''; this.root.hidden = true; this.items = []; this.closedAt = performance.now(); }
  back() {
    const s = this.top; if (!s) return;
    if (['title', 'main', 'half', 'post', 'kickDone'].includes(s.name)) return;
    audio.sfx('back');
    if (s.name === 'pause') return this.app.resume();
    this.stack.pop(); if (!this.stack.length) return this.closeAll();
    this.focus = this.top.data.focus || 0; this.render();
  }
  render() {
    const s = this.top; this.root.hidden = false; this.root.dataset.screen = s.name;
    this.root.innerHTML = this['s_' + s.name](s.data);
    this.items = [...this.root.querySelectorAll('.row')]; this.focus = Math.min(this.focus, Math.max(0, this.items.length - 1)); this.paint();
  }
  paint() { this.items.forEach((n, i) => n.classList.toggle('focus', i === this.focus)); const f = this.items[this.focus]; if (f && f.dataset.mode) { const d = this.root.querySelector('.blurb'); const m = MODES.find(x => x.id === f.dataset.mode); if (d && m) d.textContent = m.blurb; } if (f && f.scrollIntoView) f.scrollIntoView({ block: 'nearest' }); }
  nav(dir) {
    const s = this.top; if (!s) return; audio.init();
    if (s.name === 'title') { if (dir === 'ok') { audio.sfx('ok'); this.replace('main'); } return; }
    if (this.capturing) return;
    const f = this.items[this.focus];
    if (dir === 'up' || dir === 'down') { if (!this.items.length) return; this.focus = (this.focus + (dir === 'up' ? -1 : 1) + this.items.length) % this.items.length; audio.sfx('move'); this.paint(); }
    else if (dir === 'left' || dir === 'right') { if (f && f.dataset.adj) this.adjust(f, dir === 'left' ? -1 : 1); }
    else if (dir === 'ok') { if (f) { if (f.dataset.adj) this.adjust(f, 1); else this.activate(f); } }
    else if (dir === 'back') this.back();
  }
  adjust(n, d) {
    const k = n.dataset.adj, p = this.pick, N = TEAMS.length;
    if (k === 'teamA') { p.a = (p.a + d + N) % N; if (p.a === p.b && this.needsTwo()) p.b = (p.b + d + N) % N; }
    else if (k === 'teamB') { p.b = (p.b + d + N) % N; if (p.a === p.b) p.b = (p.b + d + N) % N; }
    else if (k === 'short') p.short = !p.short;
    else if (OPTS[k]) { OPTS[k].adj(d); saveSettings(); this.app.applySettings(k); }
    audio.sfx('tick'); this.top.data.focus = this.focus; this.render();
  }
  needsTwo() { return !['season', 'cup', 'kicking'].includes(this.pick.mode); }
  activate(n) {
    const a = n.dataset.act, arg = n.dataset.arg, p = this.pick, app = this.app; if (!a) return;
    audio.sfx('ok'); if (this.top) this.top.data.focus = this.focus;
    switch (a) {
      case 'mode':
        p.mode = arg;
        if (arg === 'season' && loadSeason()) return this.open('season');
        if (arg === 'cup' && loadCup()) return this.open('cup');
        return this.open('teams');
      case 'open': return this.open(arg);
      case 'teamsDone':
        store.set('lastTeams', [TEAMS[p.a].id, TEAMS[p.b].id]);
        if (p.mode === 'season') { newSeason(TEAMS[p.a].id, p.short); return this.replace('season'); }
        if (p.mode === 'cup') { newCup(TEAMS[p.a].id); return this.replace('cup'); }
        return this.open('setup');
      case 'kickoff': return app.launch(this.config());
      case 'seasonPlay': { const s = loadSeason(), fx = seasonFixture(s); return app.launch({ mode: 'season', teams: [fx.home, fx.away], userSide: fx.userSide, n: 13, rules: { mustWin: fx.knockout }, label: fx.label }); }
      case 'seasonSim': { seasonApply(loadSeason(), null); return this.render(); }
      case 'seasonNew': store.del('season'); p.mode = 'season'; return this.replace('teams');
      case 'cupPlay': { const c = loadCup(), fx = cupFixture(c); return app.launch({ mode: 'cup', teams: [fx.home, fx.away], userSide: fx.userSide, n: 13, rules: { mustWin: true }, label: fx.label }); }
      case 'cupNew': store.del('cup'); p.mode = 'cup'; return this.replace('teams');
      case 'resume': return app.resume();
      case 'restart': return app.restartMatch();
      case 'quit': return app.quitMatch();
      case 'halfGo': return app.continueHalf();
      case 'postGo': return this.afterMatch();
      case 'fullscreen': return app.fullscreen();
      case 'rebind': this.capturing = true; n.querySelector('b').textContent = 'Press a key...'; input.capture = code => { this.capturing = false; if (code !== 'Escape') input.rebind(arg, code); this.render(); }; return;
      case 'resetBinds': input.resetBinds(); return this.render();
      case 'back': return this.back();
    }
  }
  config() {
    const p = this.pick, A = TEAMS[p.a], B = TEAMS[p.b], base = { mode: p.mode, teams: [A, B], userSide: 0, n: 13, rules: {}, label: MODES.find(m => m.id === p.mode).name };
    if (p.mode === 'nines') { base.n = 9; base.rules = { tackles: 5, bonus: true }; }
    if (p.mode === 'golden') base.rules = { golden: true };
    if (p.mode === 'versus') base.duo = true;
    if (p.mode === 'kicking') { base.teams = [A, TEAMS[(p.a + 1) % TEAMS.length]]; base.rules = { kicking: true }; }
    return base;
  }
  // called by the app when a match finishes
  finish(sum) { this.sum = sum; this.reset(sum.mode === 'kicking' ? 'kickDone' : 'post', { sum }); }
  afterMatch() {
    const sum = this.sum, app = this.app; app.toMenuWorld();
    if (sum.mode === 'season') { seasonApply(loadSeason(), sum.score); this.reset('main'); this.pick.mode = 'season'; return this.open('season'); }
    if (sum.mode === 'cup') { cupApply(loadCup(), sum.score); this.reset('main'); this.pick.mode = 'cup'; return this.open('cup'); }
    this.reset('main');
  }

  /* ----------------------------------------------------------- screens */
  s_title() { return `<div class="title"><div class="t-eyebrow">Rugby league arcade</div><h1>Sixth<em>Tackle</em></h1><div class="t-press">Press <kbd>Enter</kbd> to start</div></div>`; }
  s_main() {
    return `<div class="panel left"><div class="logo">Sixth<em>Tackle</em></div><div class="list">${MODES.map(m => `<div class="row btn" data-act="mode" data-arg="${m.id}" data-mode="${m.id}"><span>${m.name}</span></div>`).join('')}
      <div class="gap"></div>${btn('open', 'Controls', 'minor').replace('data-act="open"', 'data-act="open" data-arg="controls"')}${btn('open', 'Settings', 'minor').replace('data-act="open"', 'data-act="open" data-arg="settings"')}</div>
      <p class="blurb"></p><div class="foot"><kbd>&uarr;</kbd><kbd>&darr;</kbd> choose <kbd>Enter</kbd> select</div></div>`;
  }
  s_teams() {
    const p = this.pick, two = this.needsTwo(), duo = p.mode === 'versus', A = TEAMS[p.a], B = TEAMS[p.b], name = MODES.find(m => m.id === p.mode).name;
    const pickRow = (k, label, t) => `<div class="row" data-adj="${k}"><span>${label}</span><b><i class="ar">&#9664;</i>${t.city} ${t.name}<i class="ar">&#9654;</i></b></div>`;
    return `<div class="panel wide"><h2>${name}<small>Choose ${two ? 'the clubs' : 'your club'}</small></h2>
      <div class="cards">${teamCard(A, duo ? 'Player 1' : 'Your club')}${two ? `<div class="vs">V</div>${teamCard(B, duo ? 'Player 2' : 'Opponent')}` : ''}</div>
      <div class="list tight">${pickRow('teamA', duo ? 'Player 1 club' : 'Your club', A)}${two ? pickRow('teamB', duo ? 'Player 2 club' : 'Opponent', B) : ''}
      ${p.mode === 'season' ? `<div class="row" data-adj="short"><span>Season length</span><b><i class="ar">&#9664;</i>${p.short ? 'Short, 5 rounds' : 'Full, 11 rounds'}<i class="ar">&#9654;</i></b></div>` : ''}
      ${btn(p.mode === 'kicking' ? 'kickoff' : 'teamsDone', p.mode === 'kicking' ? 'Start the shootout' : 'Continue', 'go')}</div>
      <div class="foot"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change <kbd>Enter</kbd> select <kbd>Esc</kbd> back</div></div>`;
  }
  s_setup() {
    const duo = this.pick.mode === 'versus';
    return `<div class="panel left"><h2>Match settings</h2><div class="list tight">${optRow('half')}${duo ? '' : optRow('difficulty')}${optRow('time')}${optRow('weather')}${duo ? '' : optRow('camera')}${btn('kickoff', 'Kick off', 'go')}</div>
      ${duo ? '<p class="blurb show">Two player matches use the broadcast side-on camera. Player 1: W A S D, Q/E pass, Space tackle. Player 2: arrow keys, comma/full stop pass, Enter tackle. Gamepads work too.</p>' : ''}
      <div class="foot"><kbd>&larr;</kbd><kbd>&rarr;</kbd> change <kbd>Esc</kbd> back</div></div>`;
  }
  s_settings() {
    return `<div class="panel left"><h2>Settings</h2><div class="list tight">${['quality', 'camera', 'difficulty', 'half', 'sfx', 'crowd', 'music', 'shake', 'replays', 'hints', 'autoSwitch'].map(optRow).join('')}${btn('fullscreen', 'Toggle fullscreen')}${btn('back', 'Done', 'go')}</div></div>`;
  }
  s_controls() {
    const rows = ACTIONS.map(([a, label]) => `<div class="row" data-act="rebind" data-arg="${a}"><span>${label}</span><b>${input.binds[a].map(keyLabel).join(' / ')}</b></div>`).join('');
    return `<div class="panel wide"><h2>Controls<small>Select an action and press Enter to rebind it</small></h2><div class="cols"><div class="list tight scroll">${rows}${btn('resetBinds', 'Reset to defaults')}${btn('back', 'Done', 'go')}</div>
      <div class="help"><h3>How it plays</h3><p><b>Attack.</b> The key shown above each support runner throws them the ball; hold it for a cut-out pass to the next player along. Step and fend to beat a tackler, and hold the punt key to charge a kick.</p><p><b>Defence.</b> Run into the ball carrier to wrap them up, or dive with the tackle key. A big hit can jar the ball loose but is easy to miss.</p><p><b>Sets.</b> You get six tackles. Kick on the last or hand the ball over where you are caught.</p>
      <h3>Gamepad</h3><p>Left stick move, RT sprint, LB/RB pass, A step or tackle, B fend or big hit, X punt, Y bomb, LT grubber, R3 field goal, L3 dummy.</p>
      <h3>Two player keyboard</h3><p>P1: W A S D, L-Shift, Q/E, Space, F, C, R/T/G/V kicks.<br>P2: arrows, R-Shift, , and . to pass, Enter, /, M, K/I/L/J kicks.</p></div></div></div>`;
  }
  s_pause() { return `<div class="panel left"><h2>Paused</h2><div class="list">${btn('resume', 'Resume', 'go')}${btn('open', 'Controls').replace('data-act="open"', 'data-act="open" data-arg="controls"')}${btn('open', 'Settings').replace('data-act="open"', 'data-act="open" data-arg="settings"')}${btn('restart', 'Restart match')}${btn('quit', 'Quit to menu')}</div></div>`; }
  s_half(d) { return `<div class="panel centre"><h2>Half time</h2>${scoreHead(d.sum)}${statsTable(d.sum)}<div class="list tight">${btn('halfGo', 'Second half', 'go')}</div></div>`; }
  s_post(d) {
    const s = d.sum, me = s.userSide, won = s.score[me] > s.score[1 - me], draw = s.score[0] === s.score[1];
    const head = s.duo ? (draw ? 'Honours even' : `${s.teams[s.score[0] > s.score[1] ? 0 : 1].name} win`) : draw ? 'Honours even' : won ? 'You win' : 'Beaten today';
    return `<div class="panel centre"><h2>${head}<small>${s.label || 'Full time'}${s.golden ? ', golden point' : ''}</small></h2>${scoreHead(s)}${statsTable(s)}<div class="list tight">${btn('postGo', 'Continue', 'go')}</div></div>`;
  }
  s_kickDone(d) {
    const s = d.sum, best = store.get('kickBest', 0);
    return `<div class="panel centre"><h2>${s.kicks.made} from ${s.kicks.total}<small>${s.kicks.made > s.kicks.prev ? 'A new personal best' : 'Your best is ' + best}</small></h2><div class="kicks">${s.kicks.log.map(k => `<i class="${k ? 'good' : 'miss'}"></i>`).join('')}</div><div class="list tight">${btn('postGo', 'Continue', 'go')}</div></div>`;
  }
  s_season() {
    const s = loadSeason(), fx = seasonFixture(s), rows = ladder(s), me = teamById(s.team);
    const table = `<table class="ladder"><tr><th></th><th class="l">Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>PD</th><th>Pts</th></tr>${rows.map((r, i) => { const t = teamById(r.id); return `<tr class="${r.id === s.team ? 'me' : ''}${i === 3 ? ' cut' : ''}"><td>${i + 1}</td><td class="l"><img src="${crestURL(t)}" alt="">${t.city} ${t.name}</td><td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.pd > 0 ? '+' : ''}${r.pd}</td><td><b>${r.pts}</b></td></tr>`; }).join('')}</table>`;
    const res = s.last.length ? `<div class="results"><h3>Latest results</h3>${s.last.map(([h, a, x, y]) => `<div class="${h === s.team || a === s.team ? 'me' : ''}"><span>${teamById(h).name}</span><b>${x} &ndash; ${y}</b><span>${teamById(a).name}</span></div>`).join('')}</div>` : '';
    let next;
    if (s.stage === 'done') next = `<div class="next"><h3>${s.champion === s.team ? 'Premiers!' : 'Season over'}</h3><p>${teamById(s.champion).city} ${teamById(s.champion).name} are the champions.${s.champion === s.team ? ' You lifted the trophy.' : s.out ? ' Your season ended early.' : ''}</p></div>`;
    else next = `<div class="next"><h3>${fx.label}</h3><div class="fx"><img src="${crestURL(fx.home, 320)}" alt=""><span>${fx.home.name}<i>v</i>${fx.away.name}</span><img src="${crestURL(fx.away, 320)}" alt=""></div></div>`;
    return `<div class="panel full"><h2>Premiership<small>${me.city} ${me.name}</small></h2><div class="cols"><div>${table}</div><div class="side">${next}${res}<div class="list tight">${s.stage === 'done' ? '' : btn('seasonPlay', 'Play match', 'go') + btn('seasonSim', 'Simulate match')}${btn('seasonNew', 'Start a new season')}${btn('back', 'Back')}</div></div></div></div>`;
  }
  s_cup() {
    const c = loadCup(), fx = cupFixture(c), me = teamById(c.team);
    const cols = [0, 1, 2].map(r => { const pairs = c.rounds[r] || []; const n = [4, 2, 1][r]; let h = `<div class="bcol"><h3>${CUP_ROUNDS[r]}</h3>`; for (let i = 0; i < n; i++) { const p = pairs[i], res = c.results[r] && c.results[r][i]; h += p ? `<div class="tie${p.includes(c.team) ? ' me' : ''}">${[0, 1].map(k => `<div class="${res && res[k] > res[1 - k] ? 'won' : ''}"><img src="${crestURL(teamById(p[k]))}" alt=""><span>${teamById(p[k]).name}</span><b>${res ? res[k] : ''}</b></div>`).join('')}</div>` : '<div class="tie tbd"><div><span>To be decided</span></div><div><span>To be decided</span></div></div>'; } return h + '</div>'; }).join('');
    const status = c.stage === 'done' ? `<p class="blurb show">${teamById(c.champion).city} ${teamById(c.champion).name} won the cup.${c.champion === c.team ? ' That is you. Well played.' : ''}</p>` : fx ? `<p class="blurb show">Next: ${fx.home.name} v ${fx.away.name}, ${fx.label.toLowerCase()}.</p>` : '';
    return `<div class="panel full"><h2>Knockout Cup<small>${me.city} ${me.name}</small></h2><div class="bracket">${cols}</div>${status}<div class="list tight row3">${c.stage !== 'done' && fx ? btn('cupPlay', 'Play match', 'go') : ''}${btn('cupNew', 'Start a new cup')}${btn('back', 'Back')}</div></div>`;
  }
}
