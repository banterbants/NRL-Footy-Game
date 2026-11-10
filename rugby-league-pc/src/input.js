// Keyboard (rebindable) and gamepad input, exposed as per-player action pads.
import { store } from './config.js';

export const ACTIONS = [
  ['up', 'Move up'], ['down', 'Move down'], ['left', 'Move left'], ['right', 'Move right'],
  ['sprint', 'Sprint'], ['passL', 'Pass left / switch player'], ['passR', 'Pass right / next player'],
  ['step', 'Sidestep / tackle'], ['fend', 'Fend / big hit'], ['dummy', 'Dummy pass'],
  ['kick', 'Punt (hold for power)'], ['bomb', 'Bomb'], ['grubber', 'Grubber'], ['drop', 'Field goal'],
];
const SOLO = {
  up: ['KeyW', 'ArrowUp'], down: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'],
  sprint: ['ShiftLeft', 'ShiftRight'], passL: ['KeyQ'], passR: ['KeyE'], step: ['Space'], fend: ['KeyF'], dummy: ['KeyC'],
  kick: ['KeyK', 'KeyR'], bomb: ['KeyI', 'KeyT'], grubber: ['KeyL', 'KeyG'], drop: ['KeyJ', 'KeyV'],
};
const DUO = [
  { up: ['KeyW'], down: ['KeyS'], left: ['KeyA'], right: ['KeyD'], sprint: ['ShiftLeft'], passL: ['KeyQ'], passR: ['KeyE'], step: ['Space'], fend: ['KeyF'], dummy: ['KeyC'], kick: ['KeyR'], bomb: ['KeyT'], grubber: ['KeyG'], drop: ['KeyV'] },
  { up: ['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'], sprint: ['ShiftRight'], passL: ['Comma'], passR: ['Period'], step: ['Enter'], fend: ['Slash'], dummy: ['KeyM'], kick: ['KeyK'], bomb: ['KeyI'], grubber: ['KeyL'], drop: ['KeyJ'] },
];
const PADMAP = { step: 0, fend: 1, kick: 2, bomb: 3, passL: 4, passR: 5, grubber: 6, sprint: 7, dummy: 10, drop: 11 };
const PADNAME = { step: 'A', fend: 'B', kick: 'X', bomb: 'Y', passL: 'LB', passR: 'RB', grubber: 'LT', sprint: 'RT', dummy: 'L3', drop: 'R3' };

export function keyLabel(code) {
  if (!code) return '?';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return ({ Space: 'Space', ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', ControlLeft: 'L-Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'L-Alt', AltRight: 'R-Alt', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Enter: 'Enter', Comma: ',', Period: '.', Slash: '/', Semicolon: ';', Quote: "'", BracketLeft: '[', BracketRight: ']', Backslash: '\\', Minus: '-', Equal: '=', Backquote: '`', Tab: 'Tab', CapsLock: 'Caps' })[code] || code;
}

class Pad {
  constructor() { this.mx = 0; this.my = 0; this.held = {}; this.pressed = {}; this.released = {}; this.holdT = {}; this.usingPad = false; }
  clear() { this.mx = this.my = 0; for (const [a] of ACTIONS) { this.held[a] = this.pressed[a] = this.released[a] = false; this.holdT[a] = 0; } }
}

const down = new Set();
export const input = {
  pads: [new Pad(), new Pad()],
  duo: false,
  binds: Object.assign(JSON.parse(JSON.stringify(SOLO)), store.get('binds', {})),
  any: false, anyQueued: false, pauseQueued: false, pause: false,
  menuHandler: null, capture: null,
  _gpPrev: [{}, {}], _navT: [0, 0],

  profile(i) { return this.duo ? DUO[i] : i === 0 ? this.binds : null; },
  label(i, action) {
    const pad = this.pads[i];
    if (pad.usingPad && PADNAME[action]) return PADNAME[action];
    const p = this.profile(i); return p ? keyLabel(p[action][0]) : PADNAME[action] || '';
  },
  rebind(action, code) {
    for (const a of Object.keys(this.binds)) this.binds[a] = this.binds[a].filter(c => c !== code);
    this.binds[action] = [code, ...this.binds[action].filter((c, k) => k > 0)];
    for (const a of Object.keys(this.binds)) if (!this.binds[a].length) this.binds[a] = [SOLO[a][0]];
    store.set('binds', this.binds);
  },
  resetBinds() { this.binds = JSON.parse(JSON.stringify(SOLO)); store.del('binds'); },

  update(dt) {
    this.any = this.anyQueued; this.anyQueued = false;
    this.pause = this.pauseQueued; this.pauseQueued = false;
    let gps = [];
    try { gps = (navigator.getGamepads ? Array.from(navigator.getGamepads()) : []).filter(g => g && g.connected); } catch (e) { gps = []; }
    for (let i = 0; i < 2; i++) {
      const pad = this.pads[i], prof = this.profile(i), gp = gps[i], prev = this._gpPrev[i];
      const key = a => !!prof && prof[a].some(c => down.has(c));
      const btn = n => !!gp && gp.buttons[n] && (gp.buttons[n].pressed || gp.buttons[n].value > 0.4);
      let mx = (key('right') ? 1 : 0) - (key('left') ? 1 : 0), my = (key('up') ? 1 : 0) - (key('down') ? 1 : 0);
      if (mx || my) pad.usingPad = false;
      if (gp) {
        let ax = gp.axes[0] || 0, ay = -(gp.axes[1] || 0);
        if (btn(14)) ax = -1; if (btn(15)) ax = 1; if (btn(12)) ay = 1; if (btn(13)) ay = -1;
        if (Math.hypot(ax, ay) > 0.25) { mx = ax; my = ay; pad.usingPad = true; }
      }
      const l = Math.hypot(mx, my); if (l > 1) { mx /= l; my /= l; }
      pad.mx = mx; pad.my = my;
      for (const [a] of ACTIONS) {
        if (a === 'up' || a === 'down' || a === 'left' || a === 'right') continue;
        const g = PADMAP[a] !== undefined && btn(PADMAP[a]);
        if (g) pad.usingPad = true;
        const h = key(a) || g;
        pad.pressed[a] = h && !pad.held[a]; pad.released[a] = !h && pad.held[a];
        pad.holdT[a] = h ? (pad.held[a] ? pad.holdT[a] + dt : 0) : pad.holdT[a];
        pad.held[a] = h;
      }
      if (gp) {                                        // gamepad menu navigation and pause
        const edge = n => { const b = btn(n), e = b && !prev[n]; prev[n] = b; return e; };
        const sx = gp.axes[0] || 0, sy = gp.axes[1] || 0;
        this._navT[i] -= dt;
        let nav = null;
        if (edge(12) || (sy < -0.6 && this._navT[i] <= 0)) nav = 'up'; else if (edge(13) || (sy > 0.6 && this._navT[i] <= 0)) nav = 'down';
        else if (edge(14) || (sx < -0.6 && this._navT[i] <= 0)) nav = 'left'; else if (edge(15) || (sx > 0.6 && this._navT[i] <= 0)) nav = 'right';
        if (nav) this._navT[i] = 0.22;
        if (Math.abs(sx) < 0.3 && Math.abs(sy) < 0.3) this._navT[i] = 0;
        if (edge(0)) { nav = 'ok'; this.any = true; }
        if (edge(1)) nav = 'back';
        if (edge(9)) { this.pause = true; this.any = true; }
        if (nav && this.menuHandler) this.menuHandler(nav, i);
      }
    }
  },
};
for (const p of input.pads) p.clear();

const NAV = { ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right', Enter: 'ok', Space: 'ok', NumpadEnter: 'ok', Escape: 'back', Backspace: 'back', Tab: 'tab' };
window.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Slash', 'Quote', 'Backspace'].includes(e.code)) e.preventDefault();
  if (e.repeat) { if (input.menuHandler && NAV[e.code] && !['ok', 'back', 'tab'].includes(NAV[e.code])) input.menuHandler(NAV[e.code], 0); return; }
  if (input.capture) { const f = input.capture; input.capture = null; f(e.code); return; }
  down.add(e.code); input.anyQueued = true;
  if (e.code === 'Escape' || e.code === 'KeyP') input.pauseQueued = true;
  if (input.menuHandler && NAV[e.code]) input.menuHandler(NAV[e.code], 0);
});
window.addEventListener('keyup', e => down.delete(e.code));
window.addEventListener('blur', () => down.clear());
