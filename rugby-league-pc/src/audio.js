// All sound is synthesised with Web Audio: no audio files to ship.
import { settings, clamp } from './config.js';

let ctx = null, master, sfxBus, crowdBus, musicBus, noiseBuf, murmur, roar;
const A = {
  excite: 0, base: 0.3, musicOn: false, _next: 0, _step: 0,

  init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; return; }
    master = ctx.createDynamicsCompressor(); master.threshold.value = -14; master.ratio.value = 5; master.connect(ctx.destination);
    sfxBus = ctx.createGain(); crowdBus = ctx.createGain(); musicBus = ctx.createGain();
    for (const b of [sfxBus, crowdBus, musicBus]) b.connect(master);
    const n = ctx.sampleRate * 3; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.16; }
    const layer = (freq, q) => {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; s.playbackRate.value = 0.8 + Math.random() * 0.4;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.value = 0; s.connect(f).connect(g).connect(crowdBus); s.start(); return { g, f };
    };
    murmur = layer(420, 0.5); roar = layer(1150, 0.7);
    this.volumes();
  },
  volumes() {
    if (!ctx) return;
    sfxBus.gain.value = settings.sfx; crowdBus.gain.value = settings.crowd * 1.4; musicBus.gain.value = settings.music * 0.55;
  },
  get t() { return ctx ? ctx.currentTime : 0; },

  tone(freq, dur, { type = 'sine', vol = 0.2, slide = 0, delay = 0, bus = sfxBus, attack = 0.004 } = {}) {
    if (!ctx) return;
    const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(25, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus); o.start(t); o.stop(t + dur + 0.05);
  },
  noise(dur, { vol = 0.2, freq = 1000, q = 0.7, type = 'bandpass', slide = 0, delay = 0, bus = sfxBus, attack = 0.005 } = {}) {
    if (!ctx) return;
    const t = ctx.currentTime + delay, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; s.loop = true; s.playbackRate.value = 0.7 + Math.random() * 0.6;
    f.type = type; f.Q.value = q; f.frequency.setValueAtTime(freq, t); if (slide) f.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol * 4, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(bus); s.start(t, Math.random() * 2); s.stop(t + dur + 0.05);
  },

  sfx(name, k = 1) {
    if (!ctx) return;
    switch (name) {
      case 'whistle': for (const f of [2320, 2470]) { this.tone(f, 0.32 * k, { type: 'square', vol: 0.045 }); } break;
      case 'whistleLong': for (const f of [2320, 2470]) { this.tone(f, 0.9, { type: 'square', vol: 0.045 }); this.tone(f, 0.22, { type: 'square', vol: 0.045, delay: 1.0 }); } break;
      case 'siren': this.tone(392, 1.6, { type: 'sawtooth', vol: 0.09, attack: 0.05 }); this.tone(494, 1.6, { type: 'sawtooth', vol: 0.07, attack: 0.05 }); break;
      case 'hit': this.tone(120, 0.16, { vol: 0.5 * k, slide: -75 }); this.noise(0.1, { vol: 0.16 * k, freq: 500, type: 'lowpass' }); break;
      case 'bighit': this.tone(95, 0.3, { vol: 0.8, slide: -60 }); this.noise(0.18, { vol: 0.3, freq: 700, type: 'lowpass' }); this.sfx('ooh'); break;
      case 'kick': this.tone(190, 0.11, { type: 'triangle', vol: 0.5, slide: -130 }); this.noise(0.03, { vol: 0.12, freq: 2500 }); break;
      case 'pass': this.noise(0.09, { vol: 0.045, freq: 2200, type: 'highpass' }); break;
      case 'catch': this.tone(260, 0.05, { vol: 0.12, slide: -120 }); this.noise(0.04, { vol: 0.05, freq: 900 }); break;
      case 'step': this.noise(0.12, { vol: 0.06, freq: 3000, slide: -2000 }); break;
      case 'bounce': this.tone(150, 0.07, { vol: 0.18 * k, slide: -60 }); break;
      case 'post': this.tone(880, 0.5, { type: 'triangle', vol: 0.2 }); this.tone(1320, 0.4, { type: 'sine', vol: 0.1 }); break;
      case 'ooh': this.noise(0.9, { vol: 0.2, freq: 950, slide: -500, q: 1.2, bus: crowdBus, attack: 0.08 }); break;
      case 'boo': this.noise(1.4, { vol: 0.16, freq: 330, q: 1.5, bus: crowdBus, attack: 0.2 }); break;
      case 'pop': this.noise(0.25, { vol: 0.2, freq: 1800, slide: -1500 }); this.tone(90, 0.2, { vol: 0.25, slide: -50 }); break;
      case 'move': this.tone(620, 0.045, { type: 'triangle', vol: 0.09 }); break;
      case 'ok': this.tone(520, 0.07, { type: 'triangle', vol: 0.12 }); this.tone(780, 0.11, { type: 'triangle', vol: 0.12, delay: 0.06 }); break;
      case 'back': this.tone(520, 0.07, { type: 'triangle', vol: 0.1 }); this.tone(390, 0.1, { type: 'triangle', vol: 0.1, delay: 0.06 }); break;
      case 'tick': this.tone(1200, 0.03, { type: 'square', vol: 0.04 }); break;
      case 'good': [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.22, { type: 'triangle', vol: 0.13, delay: i * 0.08 })); break;
      case 'bad': this.tone(220, 0.3, { type: 'sawtooth', vol: 0.07, slide: -90 }); break;
      case 'sting': [196, 247, 294, 392, 494].forEach((f, i) => this.tone(f, 0.5, { type: 'sawtooth', vol: 0.05, delay: i * 0.07, attack: 0.02 })); this.tone(98, 0.9, { vol: 0.3 }); break;
    }
  },
  cheer(amount = 1) { this.excite = clamp(Math.max(this.excite, amount), 0, 1.4); },

  update(dt) {
    if (!ctx) return;
    this.excite = Math.max(0, this.excite - dt * 0.28);
    const t = ctx.currentTime, wob = 0.85 + 0.15 * Math.sin(t * 0.7) * Math.sin(t * 1.9 + 1), e = clamp(this.base + this.excite, 0, 1.5);
    murmur.g.gain.setTargetAtTime((0.1 + 0.16 * e) * wob, t, 0.15);
    roar.g.gain.setTargetAtTime(0.26 * e * e, t, 0.12);
    roar.f.frequency.setTargetAtTime(950 + 500 * e, t, 0.2);
    if (this.musicOn) while (this._next < t + 0.12) { this._seq(this._step, this._next); this._next += 60 / 112 / 4; this._step = (this._step + 1) % 128; }
  },
  music(on) {
    if (on === this.musicOn) return;
    this.musicOn = on;
    if (on && ctx) { this._next = ctx.currentTime + 0.1; this._step = 0; }
  },
  // 8-bar loop in A minor: kick, clap, hats, bass, arpeggio and a pad per bar.
  _seq(step, t) {
    const bar = (step >> 4) % 8, s = step & 15, roots = [45, 45, 41, 41, 48, 48, 43, 43], root = roots[bar];
    const hz = m => 440 * Math.pow(2, (m - 69) / 12), dl = Math.max(0, t - ctx.currentTime);
    const minor = bar < 2, chord = minor ? [0, 3, 7, 12] : [0, 4, 7, 12];
    if (s % 4 === 0) this.tone(118, 0.16, { vol: 0.5, slide: -80, delay: dl, bus: musicBus });
    if (s === 4 || s === 12) this.noise(0.12, { vol: 0.09, freq: 1800, q: 0.8, delay: dl, bus: musicBus });
    if (s % 2 === 0) this.noise(0.03, { vol: s % 4 === 2 ? 0.035 : 0.018, freq: 8000, type: 'highpass', delay: dl, bus: musicBus });
    if (s % 2 === 0 && s !== 4) this.tone(hz(root - 12 + (s === 14 ? 7 : 0)), 0.16, { type: 'sawtooth', vol: 0.11, delay: dl, bus: musicBus });
    if ([0, 3, 6, 8, 11, 14].includes(s)) this.tone(hz(root + 24 + chord[(s + bar) % 4]), 0.14, { type: 'square', vol: 0.028, delay: dl, bus: musicBus });
    if (s === 0) for (const c of chord.slice(0, 3)) this.tone(hz(root + 12 + c), 1.9, { type: 'sawtooth', vol: 0.018, delay: dl, bus: musicBus, attack: 0.3 });
    if (bar === 7 && s >= 12) this.noise(0.05, { vol: 0.05 + (s - 12) * 0.02, freq: 1400, delay: dl, bus: musicBus });
  },
};
export const audio = A;
