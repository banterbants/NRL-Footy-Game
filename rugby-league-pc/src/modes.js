// Competition logic: season ladder, knockout cup, simulated results. Pure data, saved to localStorage.
import { TEAMS, teamById } from './teams.js';
import { store } from './config.js';

function poisson(l) { const L = Math.exp(-l); let k = 0, p = 1; do { k++; p *= Math.random(); } while (p > L); return k - 1; }
export function simScore(a, b, noDraw = false) {
  const one = (x, y) => { let pts = 0; const n = poisson(Math.max(0.5, 3.3 + (x.att - y.def) * 0.11 + (x.spd - y.spd) * 0.03)); for (let i = 0; i < n; i++) pts += 4 + (Math.random() < x.kck / 115 ? 2 : 0); return pts + (Math.random() < 0.07 ? 1 : 0); };
  let sa = one(a, b), sb = one(b, a);
  if (noDraw && sa === sb) { if (Math.random() < 0.5) sa += 1; else sb += 1; }
  return [sa, sb];
}
function roundRobin(ids) {
  const a = ids.slice(), n = a.length, rounds = [];
  for (let r = 0; r < n - 1; r++) {
    const pairs = []; for (let i = 0; i < n / 2; i++) pairs.push(r % 2 ? [a[n - 1 - i], a[i]] : [a[i], a[n - 1 - i]]);
    rounds.push(pairs); a.splice(1, 0, a.pop());
  }
  return rounds;
}
const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ----------------------------------------------------------------- season */
export function newSeason(teamId, short) {
  const ids = shuffle(TEAMS.map(t => t.id)), rounds = roundRobin(ids).slice(0, short ? 5 : 11), table = {};
  for (const id of ids) table[id] = { p: 0, w: 0, d: 0, l: 0, pf: 0, pa: 0, pts: 0 };
  const s = { team: teamId, rounds, round: 0, table, stage: 'regular', finals: null, last: [], champion: null, out: false };
  store.set('season', s); return s;
}
export const loadSeason = () => store.get('season', null);
export const saveSeason = s => store.set('season', s);
export function ladder(s) {
  return Object.entries(s.table).map(([id, r]) => Object.assign({ id, pd: r.pf - r.pa }, r)).sort((a, b) => b.pts - a.pts || b.pd - a.pd || b.pf - a.pf);
}
function tally(s, h, a, sh, sa) {
  const H = s.table[h], A = s.table[a]; H.p++; A.p++; H.pf += sh; H.pa += sa; A.pf += sa; A.pa += sh;
  if (sh > sa) { H.w++; H.pts += 2; A.l++; } else if (sa > sh) { A.w++; A.pts += 2; H.l++; } else { H.d++; A.d++; H.pts++; A.pts++; }
}
export function seasonFixture(s) {
  if (s.stage === 'done') return null;
  const pairs = s.stage === 'regular' ? s.rounds[s.round] : s.finals, pr = pairs.find(p => p.includes(s.team));
  if (!pr) return null;
  return { home: teamById(pr[0]), away: teamById(pr[1]), userSide: pr[0] === s.team ? 0 : 1, label: s.stage === 'regular' ? `Round ${s.round + 1} of ${s.rounds.length}` : s.stage === 'semi' ? 'Semi final' : 'Grand final', knockout: s.stage !== 'regular' };
}
// scores are [home, away] for the user's fixture; pass null to simulate it as well
export function seasonApply(s, scores) {
  const pairs = s.stage === 'regular' ? s.rounds[s.round] : s.finals; s.last = [];
  const winners = [];
  for (const [h, a] of pairs) {
    const mine = h === s.team || a === s.team, sc = mine && scores ? scores : simScore(teamById(h), teamById(a), s.stage !== 'regular');
    s.last.push([h, a, sc[0], sc[1]]); winners.push(sc[0] >= sc[1] ? h : a);
    if (s.stage === 'regular') tally(s, h, a, sc[0], sc[1]);
  }
  if (s.stage === 'regular') {
    s.round++;
    if (s.round >= s.rounds.length) { const top = ladder(s).slice(0, 4).map(r => r.id); s.finals = [[top[0], top[3]], [top[1], top[2]]]; s.stage = 'semi'; s.out = !top.includes(s.team); }
  } else if (s.stage === 'semi') { s.finals = [[winners[0], winners[1]]]; s.stage = 'final'; if (!winners.includes(s.team)) s.out = true; }
  else { s.champion = winners[0]; s.stage = 'done'; }
  // if the user has been knocked out, play the remaining finals without them
  while (s.out && s.stage !== 'done') seasonApply(s, null);
  saveSeason(s); return s;
}

/* -------------------------------------------------------------------- cup */
export function newCup(teamId) {
  const others = shuffle(TEAMS.map(t => t.id).filter(id => id !== teamId)).slice(0, 7), ids = shuffle([teamId, ...others]);
  const c = { team: teamId, rounds: [[[ids[0], ids[1]], [ids[2], ids[3]], [ids[4], ids[5]], [ids[6], ids[7]]]], results: [], stage: 'play', champion: null, out: false };
  store.set('cup', c); return c;
}
export const loadCup = () => store.get('cup', null);
export const CUP_ROUNDS = ['Quarter final', 'Semi final', 'Final'];
export function cupFixture(c) {
  if (c.stage === 'done' || c.out) return null;
  const r = c.rounds.length - 1, pr = c.rounds[r].find(p => p.includes(c.team));
  return { home: teamById(pr[0]), away: teamById(pr[1]), userSide: pr[0] === c.team ? 0 : 1, label: 'Cup ' + CUP_ROUNDS[r].toLowerCase(), knockout: true };
}
export function cupApply(c, scores) {
  const r = c.rounds.length - 1, res = [], winners = [];
  for (const [h, a] of c.rounds[r]) {
    const mine = (h === c.team || a === c.team) && scores, sc = mine ? scores : simScore(teamById(h), teamById(a), true);
    res.push([sc[0], sc[1]]); winners.push(sc[0] >= sc[1] ? h : a);
  }
  c.results.push(res);
  if (!winners.includes(c.team)) c.out = true;
  if (winners.length === 1) { c.champion = winners[0]; c.stage = 'done'; }
  else { const next = []; for (let i = 0; i < winners.length; i += 2) next.push([winners[i], winners[i + 1]]); c.rounds.push(next); }
  while (c.out && c.stage !== 'done') cupApply(c, null);
  store.set('cup', c); return c;
}

/* ------------------------------------------------------- game mode table */
export const MODES = [
  { id: 'quick', name: 'Quick Match', blurb: 'Pick two clubs and play a full 13-a-side match. Six tackles a set, two halves, bragging rights.' },
  { id: 'season', name: 'Premiership', blurb: 'Take a club through the regular season, finish in the top four and win the grand final.' },
  { id: 'cup', name: 'Knockout Cup', blurb: 'Eight clubs, three rounds, no second chances. Level at full time means golden point.' },
  { id: 'nines', name: 'Nines Blitz', blurb: 'Nine a side, five-tackle sets and wide open spaces. A try under the posts is worth five.' },
  { id: 'golden', name: 'Golden Point', blurb: 'Sudden death from the kick-off. The first try, goal or field goal wins it.' },
  { id: 'kicking', name: 'Goal Kicking', blurb: 'Ten shots at goal from tougher and tougher spots, with the wind getting up. Beat your best.' },
  { id: 'versus', name: 'Two Player', blurb: 'Head to head on one PC. Share the keyboard or plug in gamepads.' },
];
