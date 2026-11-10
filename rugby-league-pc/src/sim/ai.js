// Team AI: ball carrier decisions, support lines, defensive line, kick chase.
import { FL, IG, clamp, rand, dist } from '../config.js';
import { TUNE } from './match.js';

const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 0.75;

function flag(m, t, pt, n, skip) {
  const list = m.squads[t].filter(p => p.down <= 0 && p !== skip).sort((a, b) => dist(a, pt) - dist(b, pt));
  for (let i = 0; i < Math.min(n, list.length); i++) list[i].chase = true;
}
// Work out who each side is reacting to this frame.
export function aiRefs(m, dt) {
  const b = m.ball;
  for (const p of m.players) p.chase = false;
  m.ref = b.carrier || (b.mode === 'pass' ? b.target : null);
  if (b.mode === 'loose') {
    m.land = m.landing();
    for (let t = 0; t < 2; t++) flag(m, t, m.land, b.kick && b.kick.team === t ? 3 : 2, b.noCatch > 0 ? b.kicker : null);
  } else if (m.ref) {
    const D = 1 - m.ref.t; m.seenT[D] -= dt;
    if (m.seenT[D] <= 0 || !m.seen[D] || m.seen[D].t !== m.ref.t || m.seen[D].down > 0) m.seen[D] = m.ref;
    flag(m, D, m.seen[D], m.cpuTeam(D) ? m.diff.chasers : 2, null);
  }
}

export function aiPlayer(m, p, dt) {
  const b = m.ball, spd = m.speedOf(p);
  if (p.stepT > 0) { p.stepT -= dt; p.vx = m.dir[p.t] * 5.5; p.vz = p.stepS * 12.5; return; }
  if (b.mode === 'loose') {
    const L = m.land;
    if (p.chase) { p.sprint = true; m.moveTo(p, L.x, L.z, spd * (p.tired ? 1 : 1.15), dt); }
    else { p.sprint = false; m.moveTo(p, clamp(L.x - m.dir[p.t] * (p.fb ? 18 : 7), -FL - IG + 2, FL + IG - 2), p.lz * 0.8 + L.z * 0.2, spd * 0.92, dt); }
    return;
  }
  const ref = m.ref; if (!ref) { m.setVel(p, 0, 0, dt); return; }
  if (p.t !== ref.t) return defend(m, p, spd, dt);
  if (p === b.carrier) return carrier(m, p, spd, dt);
  const d = m.dir[p.t];
  if (p === b.target) { p.sprint = true; m.setVel(p, d * spd * 1.08, p.vz * 0.5, dt); return; }
  p.sprint = false;
  const dz = Math.abs(p.lz - ref.z), depth = p.fb ? 7 : (p.fwd ? 1.6 : p.wing ? 3 : 2.3) + 0.05 * dz;
  m.moveTo(p, clamp(ref.x - d * depth, -FL - IG + 1, FL + IG - 1), p.fb ? ref.z * 0.6 : p.lz * 0.84 + ref.z * 0.16, spd * 1.12, dt);
}

function defend(m, p, spd, dt) {
  const ref = m.seen[p.t] && m.seen[p.t].t !== p.t ? m.seen[p.t] : m.ref;
  if (p.fooled > 0) { if (p.foolTo) m.moveTo(p, p.foolTo.x, p.foolTo.z, spd * 0.8, dt); else m.setVel(p, 0, 0, dt); return; }
  const dA = m.dir[ref.t], ahead = (p.x - ref.x) * dA, dd = dist(p, ref);
  if (p.marker && m.playT < m.diff.marker) { m.setVel(p, 0, 0, dt); p.backpedal = true; return; }
  if ((p.chase && dd < TUNE.engage) || dd < 3.5 || ahead < 0.8 || (p.fb && dd < 15) || (p.marker && m.playT < 1.2)) {
    const lead = clamp(dd / (spd + 3), 0, 0.55);
    p.sprint = dd > 4 && (ahead < 1 || m.broke);
    m.moveTo(p, ref.x + ref.vx * lead, ref.z + ref.vz * lead, spd * (p.sprint && !p.tired ? 1.16 : 1.03), dt);
  } else if (p.fb) { p.sprint = false; m.moveTo(p, ref.x + dA * clamp(ahead, 13, 28), ref.z * 0.85, spd * 0.9, dt); }
  else { p.sprint = false; const lx = Math.min((ref.x + dA * (3.4 + (p.wing ? 3.5 : 0))) * dA, FL - 0.4) * dA; m.moveTo(p, lx, p.lz * 0.7 + ref.z * 0.3, spd * TUNE.line, dt); }
}

function carrier(m, c, spd, dt) {
  const d = m.dir[c.t], opp = m.squads[1 - c.t], toLine = FL - c.x * d;
  let near = null, nd = 1e9;
  for (const o of opp) { if (o.down > 0 || (o.x - c.x) * d < -1.5) continue; const dd = dist(o, c); if (dd < nd) { nd = dd; near = o; } }
  c.think -= dt;
  if (c.think <= 0) {
    c.think = 0.2;
    // pick the running line with the most room six metres ahead
    let best = -1e9, bo = 0;
    for (const off of c.fwd ? [-4, -2, 0, 2, 4] : [-9, -5, -2, 0, 2, 5, 9]) {
      const px = c.x + d * 6, pz = clamp(c.z + off, -31, 31); let s = 10;
      for (const o of opp) if (o.down <= 0) s = Math.min(s, Math.hypot(o.x - px, o.z - pz));
      s -= Math.abs(off) * 0.22; if (off === c.steer) s += 0.6; if (Math.abs(pz) > 29) s -= 3;
      if (s > best) { best = s; bo = off; }
    }
    c.steer = bo;
    if (c.plan === 'service' && c.holdT > 0.14) {
      c.plan = null;
      if (Math.random() < 0.8) {
        const early = m.tackles < 2 && c.x * d < 10;
        const list = m.squads[c.t].filter(q => q !== c && q.down <= 0 && (q.x - c.x) * d < -0.5 && dist(q, c) > 3.2 && dist(q, c) < 13 && !q.fb)
          .sort((a, b) => (early ? (b.fwd - a.fwd) * 20 : (a.fwd - b.fwd) * 6) + dist(a, c) - dist(b, c));
        const to = list[Math.random() < 0.65 ? 0 : 1] || list[0];
        if (to) return m.doPass(c, to);
      }
    }
    if (c.holdT > 0.3) {
      const last = m.tackles >= m.maxT - 1, margin = m.score[c.t] - m.score[1 - c.t];
      const wantGoal = (m.golden && toLine < 30 && m.tackles >= 2) || (m.half === 2 && m.clock < 40 && (margin === 0 || margin === -1) && m.tackles >= 3);
      if (wantGoal && toLine < 34 && Math.abs(c.z) < 15 && nd > 2 && m.dropGoal(c)) return;
      if (last && toLine > 11 && nd > 2.3 && Math.random() < 0.5) {
        const fb = opp.find(o => o.fb);
        if (toLine < 24) return m.doKick(c, Math.random() < 0.6 ? 'grubber' : 'bomb', 1, d, clamp(-c.z * 0.03 + rand(-0.25, 0.25), -0.6, 0.6));
        if (toLine < 50) return m.doKick(c, 'bomb', 1, d, rand(-0.45, 0.45));
        return m.doKick(c, 'punt', rand(0.75, 1), d, (fb && fb.z > 0 ? -1 : 1) * rand(0.15, 0.5));
      }
      if (near && nd < 4.2 && c.holdT > 0.45 && m.passN < 3 && Math.random() < 0.3 + m.diff.smart * 0.35) {
        let to = null, bs = 2.5; const mine = spaceOf(opp, c);
        for (const q of m.squads[c.t]) {
          if (q === c || q.down > 0 || (q.x - c.x) * d > -0.4 || (q.x - c.x) * d < -6) continue;
          const dd = dist(q, c); if (dd < 3 || dd > 20) continue;
          const gain = spaceOf(opp, q) - mine - dd * 0.05; if (gain > bs) { bs = gain; to = q; }
        }
        if (to) return m.doPass(c, to, dist(to, c) > 13);
      }
      if (near && nd < 2.6 && nd > 1.3 && (near.x - c.x) * d > 0) {
        const r = Math.random();
        if (r < m.diff.smart * 0.16 && c.stepCd <= 0) { c.stepT = 0.2; c.stepS = near.z > c.z ? -1 : 1; c.immune = 0.3; c.stepCd = 2.5; m.emit('step', { p: c }); }
        else if (r < m.diff.smart * 0.3 && c.fendCd <= 0 && c.str > 70) { c.fendT = 0.6; c.fendCd = 3; m.emit('fend', { p: c }); }
      }
    }
  }
  c.sprint = !c.tired && (nd > 7 || m.broke) && c.holdT > 0.4;
  m.moveTo(c, c.x + d * 9, clamp(c.z + c.steer, -32, 32), spd * (c.sprint ? 1.18 : 1) * 0.98, dt);
}
function spaceOf(opp, p) { let s = 30; for (const o of opp) if (o.down <= 0) s = Math.min(s, dist(o, p)); return s; }

export function cpuKickoff() { return { power: rand(0.6, 0.95), z: rand(-20, 20) }; }
export function cpuConversion(m, c) {
  const ang = Math.atan2(Math.abs(c.spot.z), Math.abs(c.gx - c.spot.x));
  const sigma = (0.02 + (100 - c.kicker.kck) * 0.0009 + ang * 0.035) * (1.15 - m.diff.smart * 0.3);
  return { power: clamp((c.dist - 12) / 34 + 0.5, 0.5, 0.9), err: gauss() * sigma };
}
