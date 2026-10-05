# SubtleWorks Studio

> Precision Chrome extensions engineered to solve specific browser problems cleanly. Zero bloat, zero covert tracking, total user control.

SubtleWorks Studio is a focused digital product studio operated under the parent brand **Baziq Hue**.

```text
BAZIQ HUE (Parent Brand)
    ↓
SubtleWorks Studio (Product Studio)
    ↓
Chrome Extensions
    ├── Phantom Typer (Human Typing Simulator)
    └── Invisible Selection (Clean Visual Isolation)
```

---

## Chrome Extensions Ecosystem

### 1. Phantom Typer
* **Category**: Automation & Productivity
* **Version**: v3.0.4 (Manifest V3)
* **Description**: Simulates authentic human keyboard typing with realistic cadences, natural hesitation, smart pauses, and typo simulation across form fields, rich-text editors, and code platforms.
* **Pricing**: Free / Pro tier

### 2. Invisible Selection
* **Category**: Privacy & Presentation
* **Version**: v1.0.0 (Manifest V3)
* **Description**: Visually suppresses distracting blue text selection highlights across web pages while preserving full copy-paste clipboard functionality. 100% offline with zero data collection.
* **Pricing**: 100% Free & Offline

---

## Tech Stack & Architecture

* **Framework**: React 19 + TypeScript + Vite
* **Styling**: Vanilla CSS Design Tokens (Dark Aesthetic, Glassmorphism, Micro-animations)
* **Icons**: Lucide React
* **Routing**: React Router DOM (v7 SPA with Netlify fallback routing)
* **Code Quality**: Oxlint + TypeScript strict mode

---

## Getting Started

### Prerequisites
* Node.js 18+
* npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

The output bundle is generated in the `dist/` directory.

### Local Preview
```bash
npm run preview
```

---

## Deployment Configuration

* **Platform**: Netlify (Git-integrated automated continuous deployment)
* **Build Command**: `npm run build`
* **Publish Directory**: `dist`
* **SPA Routing**: Handled via `netlify.toml` and `public/_redirects` (`/* /index.html 200`)
* **Security Headers**: Content sniffing protection, XSS protection, and frame restriction enabled.

---

## License & Attribution

&copy; 2026 SubtleWorks Studio • A Baziq Hue Brand. All rights reserved.
