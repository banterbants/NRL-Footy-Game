// Fictional clubs, squads, kits and crests. Everything visual is drawn to canvas at runtime.
import { rng, hex, clamp } from './config.js';

export const TEAMS = [
  { id: 'koo', city: 'Harbour City', name: 'Kookaburras', abbr: 'KOO', c1: 0x1583a8, c2: 0xf2b62b, c3: 0xffffff, pattern: 'vee', emblem: 'wings', ground: 'Harbour Stadium', att: 84, def: 80, spd: 82, kck: 78 },
  { id: 'iro', city: 'Redgum', name: 'Ironbarks', abbr: 'IRO', c1: 0xb3261e, c2: 0x1e1b1a, c3: 0xffffff, pattern: 'hoops', emblem: 'tree', ground: 'The Timberyard', att: 80, def: 88, spd: 74, kck: 76 },
  { id: 'cyc', city: 'Northern', name: 'Cyclones', abbr: 'CYC', c1: 0x5b2a9d, c2: 0xc9ced6, c3: 0xffffff, pattern: 'sash', emblem: 'spiral', ground: 'Monsoon Park', att: 88, def: 76, spd: 86, kck: 80 },
  { id: 'ray', city: 'Coral Coast', name: 'Stingrays', abbr: 'RAY', c1: 0x0fa99b, c2: 0xff6a5c, c3: 0x0b2a33, pattern: 'band', emblem: 'ray', ground: 'Reef Arena', att: 82, def: 78, spd: 90, kck: 74 },
  { id: 'din', city: 'Outback', name: 'Dingoes', abbr: 'DIN', c1: 0xc7651a, c2: 0x161616, c3: 0xf5e6c8, pattern: 'yoke', emblem: 'paw', ground: 'Red Centre Oval', att: 78, def: 84, spd: 80, kck: 72 },
  { id: 'lyr', city: 'Capital', name: 'Lyrebirds', abbr: 'LYR', c1: 0x14233f, c2: 0x9fd53a, c3: 0xffffff, pattern: 'stripes', emblem: 'lyre', ground: 'Parliament Park', att: 86, def: 82, spd: 80, kck: 88 },
  { id: 'min', city: 'Goldfields', name: 'Miners', abbr: 'MIN', c1: 0x121212, c2: 0xe2b007, c3: 0xffffff, pattern: 'halves', emblem: 'picks', ground: 'The Pit', att: 76, def: 90, spd: 72, kck: 78 },
  { id: 'stk', city: 'Snowy River', name: 'Stockmen', abbr: 'STK', c1: 0x1f6b3a, c2: 0xf3ead2, c3: 0x7a1f1f, pattern: 'hoops', emblem: 'horseshoe', ground: 'High Country Ground', att: 80, def: 80, spd: 78, kck: 84 },
  { id: 'vip', city: 'Sunset Coast', name: 'Vipers', abbr: 'VIP', c1: 0xf07a13, c2: 0x2a1245, c3: 0xffffff, pattern: 'vee', emblem: 'snake', ground: 'Sunset Bowl', att: 90, def: 72, spd: 88, kck: 76 },
  { id: 'kea', city: 'Southern Alps', name: 'Kea', abbr: 'KEA', c1: 0x3c5a2a, c2: 0xe2572b, c3: 0xf0f0e6, pattern: 'sash', emblem: 'peaks', ground: 'Glacier Field', att: 82, def: 86, spd: 82, kck: 82 },
  { id: 'cas', city: 'Highlands', name: 'Cassowaries', abbr: 'CAS', c1: 0x101014, c2: 0xd61f26, c3: 0xf7d117, pattern: 'band', emblem: 'casque', ground: 'Rainforest Park', att: 86, def: 80, spd: 88, kck: 70 },
  { id: 'rav', city: 'Pennine', name: 'Ravens', abbr: 'RAV', c1: 0xf2f2f2, c2: 0x15171c, c3: 0x4aa3df, pattern: 'yoke', emblem: 'raven', ground: 'Moorside', att: 78, def: 84, spd: 76, kck: 90 },
];
export const teamById = id => TEAMS.find(t => t.id === id) || TEAMS[0];
export const overall = t => Math.round((t.att + t.def + t.spd + t.kck) / 4);

const lum = c => (0.299 * (c >> 16 & 255) + 0.587 * (c >> 8 & 255) + 0.114 * (c & 255)) / 255;
const cdist = (a, b) => Math.hypot((a >> 16 & 255) - (b >> 16 & 255), (a >> 8 & 255) - (b >> 8 & 255), (a & 255) - (b & 255));
export const contrast = c => (lum(c) > 0.55 ? 0x101216 : 0xffffff);

// kit variant 0 = home colours, 1 = clash strip
export function kitOf(team, variant = 0) {
  if (!variant) return { c1: team.c1, c2: team.c2, c3: team.c3, pattern: team.pattern };
  if (lum(team.c1) > 0.7) return { c1: team.c2, c2: team.c1, c3: team.c3, pattern: team.pattern };
  return { c1: 0xf1f1ec, c2: team.c1, c3: lum(team.c2) > 0.8 ? team.c1 : team.c2, pattern: team.pattern };
}
export function pickKits(home, away) {
  return [0, cdist(kitOf(home, 0).c1, kitOf(away, 0).c1) < 120 ? 1 : 0];
}

/* ------------------------------------------------------------------ squads */
const FIRST = ['Jack', 'Tane', 'Lachlan', 'Sione', 'Cooper', 'Mitch', 'Kalani', 'Eli', 'Josh', 'Manu', 'Riley', 'Tevita', 'Harry', 'Nate', 'Kobe', 'Isaac', 'Viliami', 'Ben', 'Zac', 'Luca', 'Aiden', 'Jarrah', 'Mosese', 'Tom', 'Billy', 'Hemi', 'Ryan', 'Connor', 'Dane', 'Ari', 'Semisi', 'Will', 'Kai', 'Matt', 'Jonah', 'Reece', 'Tyrone', 'Finn', 'Marcus', 'Wiremu'];
const LAST = ['Walker', 'Tuala', 'Marsh', 'Faleolo', 'Barrett', 'Ngata', 'Sullivan', 'Vaka', 'Hodge', 'Tamati', 'Fraser', 'Lolohea', 'Doyle', 'Parata', 'Keane', 'Mafi', 'Brennan', 'Whaanga', 'Coates', 'Havili', 'Reid', 'Taufa', 'Mercer', 'Rangi', 'Dawson', 'Piutau', 'Hartley', 'Leota', 'Quinn', 'Amato', 'Stone', 'Kepa', 'Burns', 'Seumalo', 'Nash', 'Toala', 'Wright', 'Paki', 'Flynn', 'Matagi'];
const ROLE = {          // spd, str, tkl, hnd
  FB: [82, 68, 70, 84], W: [92, 62, 62, 76], C: [85, 74, 74, 78], FE: [80, 66, 68, 88], HB: [82, 62, 66, 90],
  P: [62, 92, 86, 68], HK: [74, 72, 84, 82], SR: [72, 86, 84, 72], L: [74, 82, 86, 76],
};
export const ROLE_NAME = { FB: 'Fullback', W: 'Wing', C: 'Centre', FE: 'Five-eighth', HB: 'Halfback', P: 'Prop', HK: 'Hooker', SR: 'Second row', L: 'Lock' };
// Line players listed left to right across the field; the fullback sits behind them.
const SHAPES = {
  13: [['W', 2], ['C', 3], ['SR', 11], ['FE', 6], ['P', 8], ['HK', 9], ['L', 13], ['P', 10], ['HB', 7], ['SR', 12], ['C', 4], ['W', 5]],
  9: [['W', 2], ['C', 3], ['P', 8], ['HK', 9], ['HB', 7], ['P', 10], ['C', 4], ['W', 5]],
};
export function makeSquad(team, n) {
  const r = rng(team.id.charCodeAt(0) * 7919 + team.id.charCodeAt(1) * 131 + team.id.charCodeAt(2) + n);
  const line = SHAPES[n] || SHAPES[13], out = [], used = new Set();
  const w = n === 13 ? 31 : 29;
  const mk = (role, num, lane, fb) => {
    const b = ROLE[role], j = () => (r() - 0.5) * 8;
    let name; do { name = FIRST[(r() * FIRST.length) | 0] + ' ' + LAST[(r() * LAST.length) | 0]; } while (used.has(name)); used.add(name);
    return {
      role, num, name, lane, fb, wing: role === 'W', fwd: 'P HK SR L'.includes(role),
      spd: clamp(b[0] + (team.spd - 80) * 0.5 + j(), 50, 99), str: clamp(b[1] + (team.att - 80) * 0.4 + j(), 50, 99),
      tkl: clamp(b[2] + (team.def - 80) * 0.6 + j(), 50, 99), hnd: clamp(b[3] + (team.att - 80) * 0.3 + j(), 50, 99),
      kck: clamp(team.kck + (role === 'HB' || role === 'FE' ? 6 : role === 'FB' ? 2 : -8) + j(), 40, 99),
      skin: (r() * 6) | 0, hair: (r() * 5) | 0, build: role === 'P' ? 1.16 : role === 'SR' || role === 'L' ? 1.08 : role === 'W' || role === 'HB' ? 0.93 : 1, tall: 0.96 + r() * 0.09,
    };
  };
  line.forEach(([role, num], i) => out.push(mk(role, num, -w + (2 * w * i) / (line.length - 1), false)));
  out.push(mk('FB', 1, 0, true));
  return out;
}

/* ------------------------------------------------------------------- kits */
// Jersey map wraps a cylinder: u 0.25 is the chest, u 0.75 the back.
export function drawJersey(g, W, H, kit, number) {
  const c1 = hex(kit.c1), c2 = hex(kit.c2), c3 = hex(kit.c3);
  g.fillStyle = c1; g.fillRect(0, 0, W, H);
  const fronts = [0.25, 0.75];
  switch (kit.pattern) {
    case 'hoops': g.fillStyle = c2; for (let i = 0; i < 4; i++) g.fillRect(0, H * (0.16 + i * 0.22), W, H * 0.1); break;
    case 'vee':
      for (const u of fronts) {
        g.lineJoin = 'miter'; g.strokeStyle = c2; g.lineWidth = H * 0.12;
        g.beginPath(); g.moveTo((u - 0.25) * W, H * 0.02); g.lineTo(u * W, H * 0.5); g.lineTo((u + 0.25) * W, H * 0.02); g.stroke();
        g.strokeStyle = c3; g.lineWidth = H * 0.035;
        g.beginPath(); g.moveTo((u - 0.25) * W, H * 0.17); g.lineTo(u * W, H * 0.65); g.lineTo((u + 0.25) * W, H * 0.17); g.stroke();
      }
      break;
    case 'sash':
      for (const u of fronts) {
        g.fillStyle = c2; g.beginPath(); g.moveTo((u - 0.25) * W, 0); g.lineTo((u - 0.1) * W, 0); g.lineTo((u + 0.25) * W, H); g.lineTo((u + 0.1) * W, H); g.closePath(); g.fill();
      }
      break;
    case 'halves': g.fillStyle = c2; g.fillRect(W * 0.25, 0, W * 0.5, H); break;
    case 'stripes': g.fillStyle = c2; for (let i = 0; i < 12; i++) g.fillRect((i / 12 + 0.012) * W, 0, W * 0.035, H); break;
    case 'yoke': g.fillStyle = c2; g.fillRect(0, 0, W, H * 0.3); g.fillStyle = c3; g.fillRect(0, H * 0.3, W, H * 0.035); break;
    case 'band': g.fillStyle = c3; g.fillRect(0, H * 0.27, W, H * 0.26); g.fillStyle = c2; g.fillRect(0, H * 0.3, W, H * 0.2); break;
    default: g.fillStyle = c2; g.fillRect(0, 0, W * 0.04, H); g.fillRect(W * 0.48, 0, W * 0.08, H); g.fillRect(W * 0.96, 0, W * 0.04, H);
  }
  g.fillStyle = c2; g.fillRect(0, H * 0.955, W, H * 0.045);
  if (number !== undefined) {
    const backBase = kit.pattern === 'halves' ? kit.c2 : kit.pattern === 'yoke' ? kit.c1 : kit.c1;
    const ink = hex(contrast(backBase)), edge = hex(contrast(contrast(backBase)));
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
    g.font = `800 ${H * 0.46}px "Barlow Condensed","Arial Narrow",Arial,sans-serif`;
    g.lineWidth = H * 0.05; g.strokeStyle = edge; g.strokeText(String(number), W * 0.75, H * 0.58); g.fillStyle = ink; g.fillText(String(number), W * 0.75, H * 0.58);
    g.font = `800 ${H * 0.17}px "Barlow Condensed","Arial Narrow",Arial,sans-serif`;
    g.lineWidth = H * 0.025; g.strokeText(String(number), W * 0.31, H * 0.2); g.fillText(String(number), W * 0.31, H * 0.2);
  }
}

/* ------------------------------------------------------------------ crests */
const EMBLEMS = {
  wings(g) { for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(0, 0.45 - i * 0.3); g.quadraticCurveTo(s * 0.5, -0.25 - i * 0.3, s * (0.95 - i * 0.12), -0.05 - i * 0.32); g.quadraticCurveTo(s * 0.45, 0.02 - i * 0.3, 0, 0.72 - i * 0.3); g.fill(); } },
  tree(g) { g.fillRect(-0.09, 0.1, 0.18, 0.75); for (const [x, y, r] of [[0, -0.42, 0.42], [-0.38, -0.08, 0.34], [0.38, -0.08, 0.34], [0, 0.05, 0.3]]) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); } },
  spiral(g) { g.lineWidth = 0.2; g.lineCap = 'round'; for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(0, 0, 0.3 + k * 0.22, k * 2.1, k * 2.1 + 3.2); g.stroke(); } g.beginPath(); g.arc(0, 0, 0.12, 0, 7); g.fill(); },
  ray(g) { g.beginPath(); g.moveTo(0, -0.8); g.quadraticCurveTo(0.95, -0.25, 0.85, 0.05); g.quadraticCurveTo(0.3, 0.1, 0, 0.35); g.quadraticCurveTo(-0.3, 0.1, -0.85, 0.05); g.quadraticCurveTo(-0.95, -0.25, 0, -0.8); g.fill(); g.lineWidth = 0.09; g.beginPath(); g.moveTo(0, 0.3); g.quadraticCurveTo(0.12, 0.6, -0.1, 0.9); g.stroke(); },
  paw(g) { g.beginPath(); g.ellipse(0, 0.3, 0.46, 0.38, 0, 0, 7); g.fill(); for (const [x, y] of [[-0.55, -0.2], [-0.2, -0.55], [0.2, -0.55], [0.55, -0.2]]) { g.beginPath(); g.ellipse(x, y, 0.17, 0.22, x * 0.5, 0, 7); g.fill(); } },
  lyre(g) { g.lineWidth = 0.15; g.lineCap = 'round'; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * 0.12, 0.8); g.bezierCurveTo(s * 0.9, 0.3, s * 0.2, -0.3, s * 0.75, -0.8); g.stroke(); } g.lineWidth = 0.05; for (let i = -1; i <= 1; i++) { g.beginPath(); g.moveTo(i * 0.14, 0.7); g.lineTo(i * 0.2, -0.55); g.stroke(); } },
  picks(g) { g.lineWidth = 0.12; g.lineCap = 'round'; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * 0.6, 0.8); g.lineTo(-s * 0.45, -0.55); g.stroke(); g.beginPath(); g.arc(-s * 0.1, -0.2, 0.62, s > 0 ? Math.PI * 0.95 : -0.5, s > 0 ? Math.PI * 1.5 : -0.02 + 0.05); g.stroke(); } },
  horseshoe(g) { g.lineWidth = 0.3; g.lineCap = 'butt'; g.beginPath(); g.arc(0, -0.05, 0.6, Math.PI * 0.72, Math.PI * 0.28, false); g.stroke(); },
  snake(g) { g.lineWidth = 0.24; g.lineCap = 'round'; g.beginPath(); g.moveTo(0.5, -0.65); g.bezierCurveTo(-1.1, -0.75, 1.1, 0.35, -0.45, 0.72); g.stroke(); g.beginPath(); g.arc(0.58, -0.66, 0.2, 0, 7); g.fill(); },
  peaks(g) { g.beginPath(); g.moveTo(-0.95, 0.7); g.lineTo(-0.3, -0.5); g.lineTo(0.05, 0.1); g.lineTo(0.4, -0.75); g.lineTo(0.95, 0.7); g.closePath(); g.fill(); },
  casque(g) { g.beginPath(); g.moveTo(0, -0.9); g.bezierCurveTo(0.75, -0.3, 0.7, 0.45, 0, 0.85); g.bezierCurveTo(-0.7, 0.45, -0.3, -0.1, 0, -0.9); g.fill(); },
  raven(g) { g.beginPath(); g.moveTo(-0.95, -0.55); g.lineTo(0.1, -0.35); g.lineTo(0.95, -0.7); g.lineTo(0.45, 0.05); g.lineTo(0.6, 0.75); g.lineTo(-0.05, 0.2); g.lineTo(-0.55, 0.5); g.lineTo(-0.35, -0.1); g.closePath(); g.fill(); },
};
export function drawCrest(g, team, cx, cy, s) {
  const c1 = hex(team.c1), c2 = hex(team.c2), c3 = hex(team.c3);
  const shield = k => { g.beginPath(); g.moveTo(cx - s * 0.42 * k, cy - s * 0.46 * k); g.lineTo(cx + s * 0.42 * k, cy - s * 0.46 * k); g.lineTo(cx + s * 0.42 * k, cy + s * 0.08 * k); g.quadraticCurveTo(cx + s * 0.4 * k, cy + s * 0.36 * k, cx, cy + s * 0.5 * k); g.quadraticCurveTo(cx - s * 0.4 * k, cy + s * 0.36 * k, cx - s * 0.42 * k, cy + s * 0.08 * k); g.closePath(); };
  g.save();
  shield(1); g.fillStyle = lum(team.c1) > 0.75 ? c2 : c3; g.fill();
  shield(0.9); const gr = g.createLinearGradient(cx, cy - s * 0.45, cx, cy + s * 0.5); gr.addColorStop(0, c1); gr.addColorStop(1, hex(shade(team.c1, 0.6))); g.fillStyle = gr; g.fill();
  g.save(); shield(0.9); g.clip();
  g.fillStyle = c2; g.fillRect(cx - s * 0.5, cy + s * 0.14, s, s * 0.5);
  g.restore();
  const ink = cdist(team.c2, team.c1) > 150 ? c2 : c3;
  g.save(); g.translate(cx, cy - s * 0.15); g.scale(s * 0.25, s * 0.25); g.fillStyle = ink; g.strokeStyle = ink; EMBLEMS[team.emblem](g); g.restore();
  g.fillStyle = hex(contrast(team.c2)); g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `800 ${s * 0.17}px "Barlow Condensed","Arial Narrow",Arial,sans-serif`; g.fillText(team.abbr, cx, cy + s * 0.27);
  g.restore();
}
function shade(c, k) { return ((c >> 16 & 255) * k) << 16 | ((c >> 8 & 255) * k) << 8 | ((c & 255) * k); }
export { shade };

const urlCache = new Map();
export function crestURL(team, size = 160) {
  const key = team.id + size;
  if (!urlCache.has(key)) { const c = document.createElement('canvas'); c.width = c.height = size; drawCrest(c.getContext('2d'), team, size / 2, size / 2, size * 0.96); urlCache.set(key, c.toDataURL()); }
  return urlCache.get(key);
}
// Flat front-on shirt for menus.
export function kitURL(team, variant = 0) {
  const key = team.id + 'kit' + variant;
  if (urlCache.has(key)) return urlCache.get(key);
  const kit = kitOf(team, variant), W = 180, H = 190;
  const jc = document.createElement('canvas'); jc.width = 256; jc.height = 128; drawJersey(jc.getContext('2d'), 256, 128, kit);
  const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  g.beginPath(); g.moveTo(58, 12); g.quadraticCurveTo(90, 30, 122, 12); g.lineTo(172, 40); g.lineTo(156, 84); g.lineTo(134, 74); g.lineTo(134, 180); g.lineTo(46, 180); g.lineTo(46, 74); g.lineTo(24, 84); g.lineTo(8, 40); g.closePath();
  g.save(); g.clip(); g.fillStyle = hex(kit.c1); g.fillRect(0, 0, W, H);
  g.drawImage(jc, 0, 0, 128, 128, 46, 8, 88, 172);                      // chest half of the wrap
  g.fillStyle = hex(kit.pattern === 'yoke' ? kit.c2 : kit.c1); g.fillRect(0, 0, 46, 100); g.fillRect(134, 0, 46, 100);
  g.fillStyle = hex(kit.c2); g.fillRect(0, 76, 46, 10); g.fillRect(134, 76, 46, 10);
  g.restore();
  g.lineWidth = 3; g.strokeStyle = 'rgba(255,255,255,.35)'; g.stroke();
  urlCache.set(key, c.toDataURL()); return urlCache.get(key);
}
