# 🌌 Ethereal Insights v2.0

> *Walk the razor between rigorous science and the unknown.*

**The world's first quantum-benchmarked paranormal investigation platform.** Ethereal Insights doesn't just measure anomalies — it benchmarks them against certified Quantum Random Number Generator (QRNG) streams using Bell-like statistical tests, giving investigators a defensible, physics-grounded framework for evaluating unexplained phenomena.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Ethereal%20Insights-blueviolet?style=for-the-badge)](https://or4cl3-ai-1.github.io/ethereal-insights)
[![License](https://img.shields.io/badge/License-OOML%20v1.0-teal?style=for-the-badge)](./LICENSE)
[![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Powered by Groq](https://img.shields.io/badge/AI-Llama%203.3%2070B%20%C2%B7%20Groq-orange?style=for-the-badge)](https://groq.com)

---

## ✨ What Makes This Different

Most paranormal apps use basic EMF meters and audio recorders with no scientific framework. Ethereal Insights applies **real quantum physics** to anomaly detection:

- **Bell Inequality Testing** — Runs CHSH-style statistical tests on sensor data to flag non-classical correlations
- **QRNG Benchmarking** — Compares environmental entropy against certified quantum random streams (ANU, IDQ)
- **Quantum Entropy Analysis** — EVP screen isolates structured deviations from true randomness
- **S-Value Tracking** — Live Bell parameter monitoring with classical (S≤2) vs quantum (S>2) threshold display

The claim is defensible: *"We flag what the physics says is anomalous."*

---

## 📱 Seven Investigation Screens

| Screen | Function |
|--------|----------|
| **HOME** | Quantum HUD — live sensor readings, anomaly detection, S-value, QRNG deviation |
| **SCAN** | 200-particle quantum visualizer, Bell inequality meter, environmental sensor grid |
| **SPIRIT** | FM frequency sweep (87.5–108.0 MHz) with full Web Audio API engine — white noise + bandpass filter tracking frequency, sawtooth voice bursts on contact |
| **ECHO** | Llama 3.3 70B AI with full visibility into all session data — sensors, particles, spirit contacts, anomaly history |
| **EVP** | Entropy analysis comparing sensor data vs certified QRNG streams |
| **HUD** | Comprehensive quantum metrics dashboard |
| **LOG** | Complete session event history |

---

## 🎨 Visual Design

- **Theme**: Deep void black with animated purple/teal nebula gradients
- **Effects**: CRT scanline overlay, neon glow system (teal nominal · purple quantum · red anomalies · amber warnings)
- **Cards**: Glass morphism with light streaks
- **Typography**: Orbitron (brand) · Share Tech Mono (data) · Rajdhani (labels)
- **Mobile-first**: 70px bottom navigation, 48px minimum touch targets, keyboard-safe layouts

---

## 🤖 Echo AI — Quantum-Aware Analysis

Echo is powered by **Llama 3.3 70B running on Groq** with a live system prompt built from your actual session data every message:

- Current EMF, temperature, pressure, motion readings
- Bell S-value and anomaly count by severity
- Spirit Box sweep status and all logged contacts (word, frequency, entropy %, timestamp)
- Full conversation history (last 18 messages)

Echo reasons across all screens simultaneously — it can correlate a Spirit Box contact with a simultaneous EMF spike and explain what the quantum statistics actually say about it.

**API key management**: The Groq API key is stored securely in the agent's private server-side storage. It is never exposed to the client, never in localStorage, and never in this repository. The app works seamlessly with no configuration required.

---

## 🏗 Tech Stack

```
Frontend:   React 18 + TypeScript
Audio:      Web Audio API (OscillatorNode, BiquadFilterNode, GainNode, LFO)
AI:         Llama 3.3 70B via Groq API (server-side proxied)
Visuals:    Canvas API, CSS animations, WebGL-ready
Icons:      Lucide React
Styling:    Inline styles + CSS-in-JS (no build step required)
```

---

## 🚀 Development

```bash
# Clone the repo
git clone https://github.com/or4cl3-ai-1/ethereal-insights.git
cd ethereal-insights

# Install dependencies
npm install

# Run locally
npm start
```

To enable Echo AI in a self-hosted environment, set your Groq API key:
```bash
export GROQ_API_KEY=your_key_here
```
Get a free key at [console.groq.com](https://console.groq.com).

---

## 📡 Roadmap

- [ ] Real QRNG API integration (ANU Quantum Random Numbers, IDQ Quantis)
- [ ] GPS-tagged investigation sessions with heatmap export
- [ ] Multi-device session sync for team investigations
- [ ] Exportable PDF investigation reports with statistical appendix
- [ ] Apple Watch / WearOS companion for wrist-worn EMF monitoring
- [ ] Integration with professional-grade USB EMF probes

---

## 📖 Built On

Ethereal Insights evolved from **SpiritBoxAI** — one of the original Or4cl3 AI repositories with an established audience — now rebuilt from the ground up as a full quantum-benchmarked platform.

Part of the **Or4cl3 AI Solutions** ecosystem — pioneering intrinsic ethics and sovereign synthetic intelligence.

- 🌐 [or4cl3-ai-1.github.io/consulting](https://or4cl3-ai-1.github.io/consulting) — AI Governance & EU AI Act consulting
- 📚 [github.com/or4cl3-ai-1](https://github.com/or4cl3-ai-1) — Full ecosystem (35 repositories)

---

## ⚖️ License

Released under the **Or4cl3 Open Model License (OOML) v1.0** — open like MIT, protective like GPL. Commercial use requires attribution and reciprocal open-sourcing of derivative works.

---

*"Code is not just logic; it is a performance."* — Dustin Groves, Or4cl3 AI Solutions
