import { QuantumState } from '../types';

export function generateQRNGBits(count: number): number[] {
  return Array.from({ length: count }, () => (Math.random() > 0.5 ? 1 : 0));
}

export function updateQRNGStream(current: number[]): number[] {
  const fresh = generateQRNGBits(4);
  return [...current.slice(4), ...fresh];
}

export function calcEntropy(bits: number[]): number {
  const ones = bits.filter(b => b === 1).length;
  const p1 = ones / bits.length;
  const p0 = 1 - p1;
  if (p1 === 0 || p1 === 1) return 0;
  const h = -(p1 * Math.log2(p1) + p0 * Math.log2(p0));
  return Math.min(1, h + (Math.random() - 0.5) * 0.015);
}

export function calcSValue(deviationScore: number): number {
  // CHSH Bell inequality S-value
  // Classical max: 2.0, Tsirelson bound (quantum max): 2√2 ≈ 2.828
  const base = 1.85 + Math.random() * 0.25;
  if (deviationScore > 0.55) {
    return Math.min(2.828, base + deviationScore * 0.9 + Math.random() * 0.08);
  }
  return base;
}

export function calcDeviationScore(emf: number, temperature: number, motion: number): number {
  const emfNorm = Math.min(1, Math.max(0, (emf - 0.25) / 4.5));
  const tempNorm = Math.min(1, Math.max(0, (21 - temperature) / 12.0));
  const motNorm = Math.min(1, motion * 1.4);
  const raw = emfNorm * 0.40 + tempNorm * 0.35 + motNorm * 0.25;
  return Math.min(1, raw + (Math.random() - 0.5) * 0.04);
}

export function buildQuantumState(prev: QuantumState, deviation: number): QuantumState {
  const bits = updateQRNGStream(prev.bits);
  const entropy = calcEntropy(bits);
  const sValue = calcSValue(deviation);
  return {
    entropy,
    sValue,
    bits,
    deviationScore: deviation,
    samplesPerSecond: 1_048_576 + Math.floor((Math.random() - 0.5) * 65536),
  };
}

export const INITIAL_QUANTUM: QuantumState = {
  entropy: 0.943,
  sValue: 1.97,
  bits: generateQRNGBits(64),
  deviationScore: 0.04,
  samplesPerSecond: 1_048_576,
};
