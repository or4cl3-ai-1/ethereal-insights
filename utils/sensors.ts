import { SensorReading, Anomaly, AnomalyType, Severity } from '../types';

function clamp(v: number, lo: number, hi: number) { return Math.min(hi, Math.max(lo, v)); }
function noise(scale = 1) { return (Math.random() - 0.5) * scale; }

let eventPhase = 0;
let eventTimer = 0;
const EVENT_INTERVAL_MS = 40000;

export function simulateSensors(prev: SensorReading, elapsed: number): SensorReading {
  eventTimer += elapsed;
  if (eventTimer > EVENT_INTERVAL_MS) {
    if (Math.random() < 0.35) {
      eventPhase = 9000;
      eventTimer = 0;
    } else {
      eventTimer = EVENT_INTERVAL_MS - 12000;
    }
  }
  if (eventPhase > 0) eventPhase -= elapsed;
  const evtStr = eventPhase > 0 ? (eventPhase / 9000) : 0;

  const emf = clamp(prev.emf + noise(0.05) + (evtStr > 0 ? noise(0.8) * evtStr * 14 : 0), 0.05, 14.0);
  const temperature = clamp(prev.temperature + noise(0.08) - (evtStr > 0 ? 0.35 * evtStr : 0), 13.0, 28.0);
  const motion = clamp(Math.abs(prev.motion + noise(0.02) + (evtStr > 0 ? Math.random() * 0.5 * evtStr : 0)), 0, 1);
  const pressure = clamp(prev.pressure + noise(0.06), 1008.0, 1018.0);
  const audioLevel = clamp(-54 + noise(4) + (evtStr > 0 ? 28 + noise(10) : 0), -80, 0);

  return { emf, temperature, motion, pressure, audioLevel, timestamp: Date.now() };
}

function simpleHash(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) + h) + s.charCodeAt(i); h = h & h; }
  return Math.abs(h).toString(16).toUpperCase().padStart(8, '0');
}

export function detectAnomaly(current: SensorReading, prev: SensorReading | undefined): Anomaly | null {
  if (!prev) return null;
  const candidates: { type: AnomalyType; severity: Severity; desc: string }[] = [];

  if (current.emf > 2.8 && prev.emf < 1.0) {
    const mult = (current.emf / 0.2).toFixed(1);
    const dev = (Math.random() * 0.35 + 0.12).toFixed(2);
    candidates.push({
      type: 'emf_spike',
      severity: current.emf > 6 ? 'high' : 'medium',
      desc: `EMF spike: ${current.emf.toFixed(2)} µT (${mult}× baseline). Entropy deviation ${dev}σ below QRNG baseline — structured non-randomness detected.`,
    });
  }
  if (current.temperature < prev.temperature - 1.8) {
    const drop = (prev.temperature - current.temperature).toFixed(1);
    candidates.push({
      type: 'temperature_drop',
      severity: +drop > 3.5 ? 'high' : 'medium',
      desc: `Rapid thermal drop: −${drop}°C in <500ms. Thermodynamic analysis: inconsistent with HVAC cycling or occupant-induced convection.`,
    });
  }
  if (current.motion > 0.55 && prev.motion < 0.08) {
    candidates.push({
      type: 'motion_surge',
      severity: current.motion > 0.8 ? 'high' : 'medium',
      desc: `Motion surge: ${(current.motion * 100).toFixed(0)}% intensity threshold. No registered occupant displacement in sensor zone.`,
    });
  }
  if (current.audioLevel > -22 && prev.audioLevel < -42) {
    const conf = (Math.random() * 30 + 55).toFixed(0);
    candidates.push({
      type: 'evp_pattern',
      severity: current.audioLevel > -12 ? 'high' : 'medium',
      desc: `EVP-class audio event: ${current.audioLevel.toFixed(1)} dBSPL. CNN pattern classifier: ${conf}% confidence of non-ambient structured signal in 80–3400 Hz band.`,
    });
  }

  if (candidates.length === 0) return null;
  const pick = candidates[0];
  const id = `Α${Date.now().toString(36).toUpperCase().slice(-5)}`;
  return {
    id,
    timestamp: Date.now(),
    type: pick.type,
    severity: pick.severity,
    description: pick.desc,
    readings: { emf: current.emf, temperature: current.temperature, motion: current.motion, audioLevel: current.audioLevel },
    entropy: 0.65 + Math.random() * 0.3,
    hash: simpleHash(id + pick.desc + current.timestamp),
    hotspot: { x: 0.15 + Math.random() * 0.7, y: 0.15 + Math.random() * 0.7 },
  };
}

export const INITIAL_SENSORS: SensorReading = {
  emf: 0.19,
  temperature: 21.4,
  motion: 0.01,
  pressure: 1013.2,
  audioLevel: -53,
  timestamp: Date.now(),
};
