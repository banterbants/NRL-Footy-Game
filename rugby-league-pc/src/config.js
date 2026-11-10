// Shared constants, maths helpers and persisted settings.
export const FL = 50;      // half length: try lines at x = +-50
export const IG = 8;       // in-goal depth
export const FW = 34;      // half width: touch lines at z = +-34
export const GRAV = 14;    // a little heavier than real life: snappier arcade ball flight

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const randi = (a, b) => Math.floor(rand(a, b + 1));
export const pick = arr => arr[(Math.random() * arr.length) | 0];
export const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export const angDiff = (a, b) => { const d = a - b; return Math.atan2(Math.sin(d), Math.cos(d)); };
export const damp = (cur, target, rate, dt) => cur + (target - cur) * (1 - Math.exp(-rate * dt));
export const smooth = t => t * t * (3 - 2 * t);
export function rng(seed) {                       // small deterministic PRNG for squads and fixtures
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export const hex = c => '#' + c.toString(16).padStart(6, '0');

export const store = {
  get(key, def) { try { const v = localStorage.getItem('sixthtackle.' + key); return v === null ? def : JSON.parse(v); } catch (e) { return def; } },
  set(key, v) { try { localStorage.setItem('sixthtackle.' + key, JSON.stringify(v)); } catch (e) { /* storage unavailable: play on without saving */ } },
  del(key) { try { localStorage.removeItem('sixthtackle.' + key); } catch (e) { /* ignore */ } },
};

export const DIFFS = [
  { name: 'Rookie', cpuSpeed: 0.975, cpuTackle: -0.06, react: 0.45, marker: 1.2, chasers: 2, smart: 0.45, fool: 0.85, humanTackle: 0.08 },
  { name: 'Pro', cpuSpeed: 1.0, cpuTackle: 0, react: 0.32, marker: 0.85, chasers: 2, smart: 0.7, fool: 0.6, humanTackle: 0.05 },
  { name: 'Legend', cpuSpeed: 1.03, cpuTackle: 0.06, react: 0.18, marker: 0.55, chasers: 3, smart: 0.9, fool: 0.35, humanTackle: 0 },
];
export const HALF_OPTIONS = [2, 3, 5, 8];
export const TIMES = ['day', 'dusk', 'night'];
export const QUALITIES = ['low', 'medium', 'high', 'ultra'];

export const settings = Object.assign({
  quality: 'high', camera: 'endon', half: 3, difficulty: 1, time: 'night', weather: 'clear',
  sfx: 0.8, music: 0.45, crowd: 0.7, hints: true, autoSwitch: true, shake: true, replays: true,
}, store.get('settings', {}));
export const saveSettings = () => store.set('settings', settings);
