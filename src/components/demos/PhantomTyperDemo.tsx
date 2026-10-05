import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Check, Sliders, Keyboard } from 'lucide-react';
import './Demos.css';

interface Preset {
  label: string;
  text: string;
}

const PRESETS: Preset[] = [
  {
    label: 'Code Snippet',
    text: 'const speed = 120;\nfunction simulate() {\n  return "Human cadence initialized";\n}'
  },
  {
    label: 'Live Presentation',
    text: 'Welcome everyone! Today we demonstrate precision automation without breaking workflow.'
  },
  {
    label: 'Customer Reply',
    text: 'Hi Alex, thank you for reaching out. Your account has been upgraded to Pro successfully!'
  }
];

// QWERTY adjacent key map for realistic typo simulation
const ADJACENT_KEYS: Record<string, string[]> = {
  a: ['s', 'q', 'z'],
  b: ['v', 'g', 'h', 'n'],
  c: ['x', 'd', 'v'],
  d: ['s', 'e', 'r', 'f', 'c', 'x'],
  e: ['w', 'r', 'd', 's'],
  f: ['d', 'r', 't', 'g', 'v', 'c'],
  g: ['f', 't', 'y', 'h', 'b', 'v'],
  h: ['g', 'y', 'u', 'j', 'n', 'b'],
  i: ['u', 'o', 'k', 'j'],
  j: ['h', 'u', 'i', 'k', 'm', 'n'],
  k: ['j', 'i', 'o', 'l', 'm'],
  l: ['k', 'o', 'p'],
  m: ['n', 'j', 'k'],
  n: ['b', 'h', 'j', 'm'],
  o: ['i', 'p', 'l', 'k'],
  p: ['o', 'l'],
  q: ['w', 'a'],
  r: ['e', 't', 'f', 'd'],
  s: ['a', 'w', 'e', 'd', 'x', 'z'],
  t: ['r', 'y', 'g', 'f'],
  u: ['y', 'i', 'j', 'h'],
  v: ['c', 'f', 'g', 'b'],
  w: ['q', 'e', 's', 'a'],
  x: ['z', 's', 'd', 'c'],
  y: ['t', 'u', 'h', 'g'],
  z: ['a', 's', 'x']
};

export const PhantomTyperDemo: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [selectedPreset, setSelectedPreset] = useState<number>(1);
  const [targetText, setTargetText] = useState<string>(PRESETS[1].text);
  const [typedContent, setTypedContent] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [speedWpm, setSpeedWpm] = useState<number>(85);
  const [typosEnabled, setTyposEnabled] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [lastChar, setLastChar] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const typingTimeoutRef = useRef<number | null>(null);

  // Synthesize realistic mechanical keyboard click via Web Audio API
  const playKeyClick = (isBackspace = false) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const freq = isBackspace ? 320 : 540 + Math.random() * 120;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio fallback silent
    }
  };

  const handleStartTyping = () => {
    setIsTyping(true);
  };

  const handlePauseTyping = () => {
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
  };

  const handleReset = () => {
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    setTypedContent('');
    setProgress(0);
    setLastChar('');
  };

  const handleSelectPreset = (index: number) => {
    setSelectedPreset(index);
    setTargetText(PRESETS[index].text);
    handleReset();
  };

  // Main typing engine loop
  useEffect(() => {
    if (!isTyping) return;

    if (typedContent.length >= targetText.length) {
      setIsTyping(false);
      return;
    }

    const nextIndex = typedContent.length;
    const targetChar = targetText[nextIndex];

    // Base delay from WPM (5 chars per word)
    const baseDelay = (60 / (speedWpm * 5)) * 1000;
    // Add ±25% human variance
    const variance = (Math.random() - 0.5) * 0.5 * baseDelay;
    let delay = baseDelay + variance;

    // Smart hesitation pauses at punctuation
    if (['.', '!', '?', ';'].includes(targetChar)) {
      delay += 280 + Math.random() * 200;
    } else if ([',', ':'].includes(targetChar)) {
      delay += 140 + Math.random() * 100;
    }

    // Typo simulation trigger (approx 4% chance on letters)
    const isLetter = /[a-zA-Z]/.test(targetChar);
    const shouldMakeTypo = typosEnabled && isLetter && Math.random() < 0.04 && nextIndex > 3;

    if (shouldMakeTypo) {
      const lower = targetChar.toLowerCase();
      const possibleMistakes = ADJACENT_KEYS[lower] || ['x', 's'];
      const typoChar = possibleMistakes[Math.floor(Math.random() * possibleMistakes.length)];

      typingTimeoutRef.current = window.setTimeout(() => {
        // 1. Type the typo
        setTypedContent((prev) => prev + typoChar);
        setLastChar(typoChar);
        playKeyClick(false);

        // 2. Hesitate (real human realizing mistake)
        typingTimeoutRef.current = window.setTimeout(() => {
          // 3. Backspace
          setTypedContent((prev) => prev.slice(0, -1));
          setLastChar('⌫');
          playKeyClick(true);

          // 4. Continue to next correct character on next tick
        }, 220 + Math.random() * 150);
      }, delay);

      return () => {
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      };
    }

    // Normal character dispatch
    typingTimeoutRef.current = window.setTimeout(() => {
      setTypedContent((prev) => prev + targetChar);
      setLastChar(targetChar === ' ' ? '␣' : targetChar);
      setProgress(Math.round(((nextIndex + 1) / targetText.length) * 100));
      playKeyClick(false);
    }, delay);

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [isTyping, typedContent, targetText, speedWpm, typosEnabled, soundEnabled]);

  return (
    <div className={`simulator-box ${compact ? 'simulator-compact' : ''}`}>
      {/* Simulator Header */}
      <div className="simulator-header">
        <div className="sim-title-group">
          <div className="browser-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="sim-badge">
            <Keyboard size={13} />
            Phantom Typing Simulator Engine v3.0.4
          </span>
        </div>
        <div className="sim-stats">
          <span className="sim-metric">
            <strong>{speedWpm}</strong> WPM
          </span>
          <span className="sim-metric">
            <strong>{progress}%</strong> Streamed
          </span>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="sim-presets-bar">
        <span className="presets-label">Prompt Preset:</span>
        <div className="preset-buttons">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              className={`preset-btn ${selectedPreset === idx ? 'active' : ''}`}
              onClick={() => handleSelectPreset(idx)}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Screen / Typing Canvas */}
      <div className="sim-canvas">
        <div className="sim-editor-surface">
          <pre className="sim-text-display">
            {typedContent}
            <span className="sim-caret" />
          </pre>
          {typedContent.length === 0 && !isTyping && (
            <div className="sim-empty-state">
              <Sparkles size={20} className="sim-sparkle-icon" />
              <span>Click "Simulate Typing" below to watch authentic human keystrokes in action.</span>
            </div>
          )}
        </div>

        {/* Live Keystroke Monitor */}
        <div className="sim-keystroke-hud">
          <div className="hud-pill">
            <span className="hud-label">Last Key:</span>
            <span className="hud-val">{lastChar || '—'}</span>
          </div>
          <div className="hud-pill">
            <span className="hud-label">Event:</span>
            <span className="hud-val">InputEvent(insertText)</span>
          </div>
          <div className="hud-pill">
            <span className="hud-label">Variance:</span>
            <span className="hud-val">±30% Normal</span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sim-controls-bar">
        <div className="sim-btn-group">
          {!isTyping ? (
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleStartTyping}
              disabled={typedContent.length >= targetText.length}
            >
              <Play size={14} />
              {typedContent.length > 0 && typedContent.length < targetText.length
                ? 'Resume Typing'
                : 'Simulate Typing'}
            </button>
          ) : (
            <button type="button" className="btn btn-secondary btn-sm" onClick={handlePauseTyping}>
              <Pause size={14} />
              Pause
            </button>
          )}

          <button type="button" className="btn btn-outline btn-sm" onClick={handleReset} title="Reset simulator">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>

        {/* Speed Slider */}
        <div className="sim-slider-group">
          <Sliders size={14} className="control-icon" />
          <label htmlFor="wpmSlider" className="control-label">
            Speed: {speedWpm} WPM
          </label>
          <input
            id="wpmSlider"
            type="range"
            min="40"
            max="180"
            step="5"
            value={speedWpm}
            onChange={(e) => setSpeedWpm(Number(e.target.value))}
            className="sim-slider"
          />
        </div>

        {/* Toggles */}
        <div className="sim-toggle-group">
          <button
            type="button"
            className={`toggle-chip ${typosEnabled ? 'active' : ''}`}
            onClick={() => setTyposEnabled(!typosEnabled)}
            title="Toggle realistic typo simulation with auto-correction"
          >
            <span className="chip-indicator">{typosEnabled && <Check size={10} />}</span>
            Typo Simulation
          </button>

          <button
            type="button"
            className={`toggle-chip ${soundEnabled ? 'active' : ''}`}
            onClick={() => setSoundEnabled(!soundEnabled)}
            title="Toggle mechanical switch audio feedback"
          >
            {soundEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
            Sound
          </button>
        </div>
      </div>
    </div>
  );
};
