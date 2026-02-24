export type Screen = 'dashboard' | 'quantum' | 'sensors' | 'echo' | 'log';

export interface SensorReading {
  emf: number;         // µT
  temperature: number; // °C
  motion: number;      // 0–1 intensity
  pressure: number;    // hPa
  audioLevel: number;  // dB SPL (negative scale)
  timestamp: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export interface AnomalyHotspot {
  x: number; // 0–1 normalized
  y: number;
  radius: number;
  intensity: number;
  colorType: 'emf' | 'thermal' | 'quantum' | 'evp';
}

export interface QuantumState {
  entropy: number;        // 0–1 (Shannon entropy of bit stream)
  sValue: number;         // CHSH Bell S-value (classical ≤2.0, quantum ≤2.828)
  bits: number[];         // 64 QRNG bits
  deviationScore: number; // σ deviation from QRNG baseline
  samplesPerSecond: number;
}

export type AnomalyType =
  | 'emf_spike'
  | 'temperature_drop'
  | 'evp_pattern'
  | 'quantum_deviation'
  | 'bell_violation'
  | 'motion_surge';

export type Severity = 'low' | 'medium' | 'high';

export interface Anomaly {
  id: string;
  timestamp: number;
  type: AnomalyType;
  severity: Severity;
  description: string;
  readings: Partial<SensorReading>;
  entropy: number;
  hash: string;
  hotspot?: { x: number; y: number };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'echo';
  content: string;
  timestamp: number;
  isTyping?: boolean;
}
