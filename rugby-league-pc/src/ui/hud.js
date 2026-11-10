// In-match overlay: scorebug, tackle count, player card, radar, banners, on-field key tags, kick meters.
import { FL, IG, FW, hex, settings } from '../config.js';
import { crestURL, contrast, ROLE_NAME } from '../teams.js';
import { input } from '../input.js';

const $ = (root, sel) => root.querySelector(sel);
const short = name => { const [f, ...r] = name.split(' '); return f[0] + '. ' + r.join(' '); };

export class Hud {
  constructor(root) {
    this.root = root; this.cache = {}; this.bannerT = 0; this.tickT = 0;
    root.innerHTML = `
      <div class="bug">
        <div class="bug-team home"><img class="crest" alt=""><span class="abbr"></span><b class="pts">0</b></div>
        <div class="bug-clock"><b>0:00</b><span>1ST</span></div>
        <div class="bug-team away"><b class="pts">0</b><span class="abbr"></span><img class="crest" alt=""></div>
        <div class="count"><span class="lbl">Tackle</span><div class="pips"></div></div>
      </div>
      <div class="card"><b class="num"></b><div class="who"><span class="pname"></span><span class="prole"></span><div class="stam"><i></i></div></div></div>
      <div class="hints"></div>
      <canvas class="radar" width="240" height="140"></canvas>
      <div class="banner"><div class="b-main"></div><div class="b-sub"></div></div>
      <div class="ticker"></div><div class="prompt"></div>
      <div class="tag" data-k="0"></div><div class="tag" data-k="1"></div><div class="tag" data-k="2"></div><div class="tag" data-k="3"></div>
      <div class="pin" data-k="0"><i></i><span></span></div><div class="pin" data-k="1"><i></i><span></span></div>
      <div class="kbar" data-k="0"><i></i></div><div class="kbar" data-k="1"><i></i></div>
      <div class="meter" hidden><div class="m-title"></div>
        <div class="m-row"><span>Power</span><div class="m-bar power"><i class="sweet"></i><i class="fill"></i></div></div>
        <div class="m-row"><span>Accuracy</span><div class="m-bar acc"><i class="zone"></i><i class="needle"></i></div></div>
        <div class="m-wind"><span>Wind</span><i class="arrow"></i><b></b></div></div>
      <div class="replay" hidden><span>Replay</span></div>
      <div class="bars"></div>
      <div class="versus" hidden><div class="v-side home"><img alt=""><b></b><span></span></div><div class="v-mid"><em></em><b>V</b><span></span></div><div class="v-side away"><img alt=""><b></b><span></span></div></div>`;
    this.el = {
      bug: $(root, '.bug'), home: $(root, '.bug-team.home'), away: $(root, '.bug-team.away'), clock: $(root, '.bug-clock b'), half: $(root, '.bug-clock span'),
      count: $(root, '.count'), lbl: $(root, '.count .lbl'), pips: $(root, '.pips'), card: $(root, '.card'), hints: $(root, '.hints'), radar: $(root, '.radar'),
      banner: $(root, '.banner'), bMain: $(root, '.b-main'), bSub: $(root, '.b-sub'), ticker: $(root, '.ticker'), prompt: $(root, '.prompt'), meter: $(root, '.meter'), replay: $(root, '.replay'), versus: $(root, '.versus'),
      tags: [...root.querySelectorAll('.tag')], pins: [...root.querySelectorAll('.pin')], kbars: [...root.querySelectorAll('.kbar')],
    };
    this.g = this.el.radar.getContext('2d');
  }
  set(key, node, v, prop = 'textContent') { if (this.cache[key] !== v) { this.cache[key] = v; node[prop] = v; } }
  show(on) { this.root.hidden = !on; }
  setTeams(teams, kits, maxT) {
    this.teams = teams; this.cache = {};
    [this.el.home, this.el.away].forEach((n, i) => {
      $(n, '.crest').src = crestURL(teams[i]); $(n, '.abbr').textContent = teams[i].abbr;
      n.style.setProperty('--tc', hex(teams[i].c1)); n.style.setProperty('--tk', hex(contrast(teams[i].c1)));
    });
    this.el.pips.innerHTML = '<i></i>'.repeat(maxT); this.pips = [...this.el.pips.children];
    this.colors = teams.map((t, i) => hex(kits[i].c1));
  }
  banner(main, sub = '', o = {}) {
    const b = this.el.banner; this.el.bMain.textContent = main; this.el.bSub.textContent = sub;
    b.className = 'banner on' + (o.big ? ' big' : '') + (o.small ? ' small' : '');
    b.style.setProperty('--bc', o.color || '#ffd23c'); b.style.setProperty('--bk', o.ink || '#0a0e13');
    void b.offsetWidth; b.classList.add('go'); this.bannerT = o.dur || 1.8;
  }
  comment(text) { const t = this.el.ticker; t.textContent = text; t.classList.remove('on'); void t.offsetWidth; t.classList.add('on'); this.tickT = 3.2; }
  versus(on, teams, title, sub) {
    const v = this.el.versus; v.hidden = !on; if (!on) return;
    [...v.querySelectorAll('.v-side')].forEach((n, i) => { $(n, 'img').src = crestURL(teams[i], 320); $(n, 'b').textContent = teams[i].name; $(n, 'span').textContent = teams[i].city; n.style.setProperty('--tc', hex(teams[i].c1)); });
    $(v, '.v-mid em').textContent = title; $(v, '.v-mid span').textContent = sub;
  }
  replay(on) { this.el.replay.hidden = !on; this.root.classList.toggle('cine', on); }
  cine(on) { this.root.classList.toggle('cine', on); }

  // v: { match, humans, pads, project(x, y, z) -> [sx, sy, visible], replay, quiet }
  update(dt, v) {
    const m = v.match, e = this.el, b = m.ball;
    if (this.bannerT > 0 && (this.bannerT -= dt) <= 0) e.banner.classList.remove('on', 'go');
    if (this.tickT > 0 && (this.tickT -= dt) <= 0) e.ticker.classList.remove('on');
    this.set('s0', $(e.home, '.pts'), String(m.score[0])); this.set('s1', $(e.away, '.pts'), String(m.score[1]));
    const cl = Math.max(0, m.golden ? Math.floor(m.clock) : Math.ceil(m.clock));
    this.set('clock', e.clock, Math.floor(cl / 60) + ':' + String(cl % 60).padStart(2, '0'));
    this.set('half', e.half, m.golden ? 'GOLDEN POINT' : m.rules.kicking ? 'SHOOTOUT' : m.half === 1 ? '1ST HALF' : '2ND HALF');
    if (this.cache.possCls !== m.poss) { this.cache.possCls = m.poss; e.home.classList.toggle('has', m.poss === 0); e.away.classList.toggle('has', m.poss === 1); }
    const last = m.tackles >= m.maxT - 1, live = m.phase === 'play' || m.phase === 'ruck';
    this.set('lbl', e.lbl, last ? 'Last tackle' : 'Tackle ' + m.tackles);
    if (this.cache.tk !== m.tackles) { this.cache.tk = m.tackles; this.pips.forEach((p, i) => p.classList.toggle('on', i < m.tackles)); e.count.classList.toggle('last', last); }
    e.count.style.setProperty('--tc', this.colors[m.poss]);
    const quiet = v.quiet || v.replay || m.rules.kicking;
    e.count.style.visibility = live && !quiet ? 'visible' : 'hidden';

    // player card + hints follow the first human side
    const ht = v.humans.findIndex(h => h !== null), sel = ht >= 0 ? m.sel[ht] : null, showCard = !!sel && live && !quiet && !v.duo;
    e.card.style.visibility = showCard ? 'visible' : 'hidden';
    if (showCard) {
      this.set('num', $(e.card, '.num'), String(sel.num)); this.set('pname', $(e.card, '.pname'), short(sel.name)); this.set('prole', $(e.card, '.prole'), ROLE_NAME[sel.role]);
      $(e.card, '.stam i').style.transform = `scaleX(${sel.stam.toFixed(3)})`; $(e.card, '.stam').classList.toggle('tired', sel.tired);
      e.card.style.setProperty('--tc', this.colors[ht]);
    }
    const mode = !settings.hints || !live || quiet || ht < 0 || v.duo ? 'off' : b.carrier && b.carrier.t === ht ? 'att' : m.poss === ht && b.mode === 'pass' ? 'att' : 'def';
    if (this.cache.hint !== mode + input.pads[0].usingPad) {
      this.cache.hint = mode + input.pads[0].usingPad;
      const k = a => `<kbd>${input.label(0, a)}</kbd>`;
      e.hints.innerHTML = mode === 'off' ? '' : mode === 'att'
        ? `<span>${k('passL')}${k('passR')} Pass</span><span>${k('step')} Step</span><span>${k('fend')} Fend</span><span>${k('dummy')} Dummy</span><span>${k('kick')} Punt</span><span>${k('bomb')} Bomb</span><span>${k('grubber')} Grubber</span><span>${k('drop')} Field goal</span><span>${k('sprint')} Sprint</span>`
        : `<span>${k('step')} Tackle</span><span>${k('fend')} Big hit</span><span>${k('passL')}${k('passR')} Switch</span><span>${k('sprint')} Sprint</span>`;
    }

    // on-field tags: pass keys over the receivers, pins over controlled players, kick charge bars
    let ti = 0;
    for (let t = 0; t < 2; t++) {
      const hp = v.humans[t], pin = e.pins[t], kb = e.kbars[t], s = m.sel[t];
      if (hp === null || !s || !live || quiet) { pin.style.display = 'none'; kb.style.display = 'none'; continue; }
      const [sx, sy, ok] = v.project(s.x, 2.45, s.z);
      pin.style.display = ok ? 'block' : 'none'; pin.style.transform = `translate(${sx}px,${sy}px)`; pin.style.setProperty('--tc', v.duo ? (t ? '#4fd1ff' : '#ffd23c') : '#ffd23c');
      this.set('pin' + t, pin.lastElementChild, v.duo ? 'P' + (hp + 1) : '');
      const charge = m.phase === 'kickoff' && m.ko && m.ko.k === t ? m.ko.charge : s.charge;
      kb.style.display = charge > 0 && ok ? 'block' : 'none';
      if (charge > 0) { kb.style.transform = `translate(${sx}px,${sy - 26}px)`; kb.firstElementChild.style.transform = `scaleX(${charge.toFixed(3)})`; kb.classList.toggle('max', charge > 0.9); }
      if (b.carrier && b.carrier.t === t && m.phase === 'play') for (const [side, act] of [['L', 'passL'], ['R', 'passR']]) {
        const c = m.cands[t][side][0], tag = e.tags[ti++]; if (!tag) break;
        if (!c) { tag.style.display = 'none'; continue; }
        const [tx, ty, tok] = v.project(c.x, 2.5, c.z);
        tag.style.display = tok ? 'block' : 'none'; tag.style.transform = `translate(${tx}px,${ty}px)`; this.set('tag' + ti, tag, input.label(hp, act));
      }
    }
    for (; ti < 4; ti++) e.tags[ti].style.display = 'none';

    // context prompt
    let pr = '';
    if (v.replay) pr = 'Press any key to skip';
    else if (v.intro) pr = v.intro < 3.9 ? 'Press any key to skip' : '';
    else if (m.phase === 'kickoff' && m.ko && m.ko.human && !m.ko.charging) pr = `Hold <kbd>${input.label(v.humans[m.ko.k] || 0, 'kick')}</kbd> and release to kick off`;
    if (this.cache.prompt !== pr) { this.cache.prompt = pr; e.prompt.innerHTML = pr; e.prompt.classList.toggle('on', !!pr); }

    // conversion meter
    const c = m.conv, showM = !!c && c.human && c.stage < 3;
    if (this.cache.meter !== showM) { this.cache.meter = showM; e.meter.hidden = !showM; }
    if (showM) {
      const key = `<kbd>${input.label(v.humans[c.t] || 0, 'step')}</kbd>`;
      this.set('mt', $(e.meter, '.m-title'), c.stage === 0 ? `Aim with <kbd>${input.label(v.humans[c.t] || 0, 'left')}</kbd><kbd>${input.label(v.humans[c.t] || 0, 'right')}</kbd> then press ${key}` : c.stage === 1 ? `Press ${key} to set power` : `Press ${key} when the pin is centred`, 'innerHTML');
      e.meter.dataset.stage = c.stage;
      $(e.meter, '.fill').style.transform = `scaleX(${c.power.toFixed(3)})`; $(e.meter, '.needle').style.left = (50 + c.needle * 50) + '%';
      const w = Math.hypot(m.wind.x, m.wind.z), [ax, ay] = v.windScreen || [1, 0];
      $(e.meter, '.arrow').style.transform = `rotate(${Math.atan2(ay, ax)}rad)`; this.set('wind', $(e.meter, '.m-wind b'), (w * 9).toFixed(0) + ' km/h');
    }
    if (!v.quiet) this.radar(m, v);
    e.radar.style.visibility = live && !quiet ? 'visible' : 'hidden';
  }
  radar(m, v) {
    const g = this.g, W = 240, H = 140, S = 2, X = x => W / 2 + x * S, Z = z => H / 2 + z * S;
    g.clearRect(0, 0, W, H);
    g.fillStyle = 'rgba(8,14,20,.62)'; g.fillRect(X(-FL - IG), Z(-FW), (FL + IG) * 2 * S, FW * 2 * S);
    for (let t = 0; t < 2; t++) { g.fillStyle = this.colors[t]; g.globalAlpha = 0.4; g.fillRect(X(m.dir[t] > 0 ? -FL - IG : FL), Z(-FW), IG * S, FW * 2 * S); }
    g.globalAlpha = 1; g.strokeStyle = 'rgba(255,255,255,.45)'; g.lineWidth = 1; g.strokeRect(X(-FL - IG) + 0.5, Z(-FW) + 0.5, (FL + IG) * 2 * S - 1, FW * 2 * S - 1);
    g.beginPath(); for (const x of [-FL, -30, -10, 0, 10, 30, FL]) { g.moveTo(X(x) + 0.5, Z(-FW)); g.lineTo(X(x) + 0.5, Z(FW)); } g.stroke();
    for (const p of m.players) {
      const sel = m.sel[p.t] === p && v.humans[p.t] !== null;
      g.fillStyle = this.colors[p.t]; g.beginPath(); g.arc(X(p.x), Z(p.z), sel ? 4 : 2.6, 0, 7); g.fill();
      g.lineWidth = sel ? 2 : 0.8; g.strokeStyle = sel ? '#ffd23c' : 'rgba(255,255,255,.75)'; g.stroke();
    }
    const b = m.ball; g.fillStyle = '#fff'; g.beginPath(); g.arc(X(b.x), Z(b.z), 2.4, 0, 7); g.fill(); g.strokeStyle = '#000'; g.lineWidth = 1; g.stroke();
  }
}
