import React, { useState } from 'react';
import {
  Camera,
  Layers,
  Crop,
  ShieldCheck,
  RotateCcw,
  RotateCw,
  Copy,
  Download,
  FileText,
  Sparkles,
  Check,
  Type,
  Square,
  ArrowUpRight,
  Smile,
  EyeOff,
  Link as LinkIcon
} from 'lucide-react';
import './Demos.css';

type CaptureMode = 'full-page' | 'visible' | 'selected' | 'scrolling';
type ActiveTool = 'select' | 'arrow' | 'rect' | 'text' | 'sticker' | 'redact';

interface AnnotationItem {
  id: string;
  type: 'arrow' | 'rect' | 'text' | 'sticker' | 'redact';
  text?: string;
  color?: string;
  x: number;
  y: number;
}

const EMOJI_STICKERS = ['🔒', '🎯', '✨', '🚀', '⚡', '🔥', '✅', '💡', '🛡️'];

export const SnapFlowStudioDemo: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [captureMode, setCaptureMode] = useState<CaptureMode>('full-page');
  const [activeTool, setActiveTool] = useState<ActiveTool>('select');
  const [activeColor, setActiveColor] = useState<string>('#38bdf8');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Redacted sensitive fields state
  const [apiKeyRedacted, setApiKeyRedacted] = useState<boolean>(true);
  const [cardRedacted, setCardRedacted] = useState<boolean>(true);

  const [annotations, setAnnotations] = useState<AnnotationItem[]>([
    { id: '1', type: 'arrow', text: 'Verified 0 Seams', color: '#38bdf8', x: 72, y: 35 },
    { id: '2', type: 'sticker', text: '🔒', x: 88, y: 15 }
  ]);
  const [undoStack, setUndoStack] = useState<AnnotationItem[][]>([]);
  const idCounterRef = React.useRef<number>(10);

  const getNextId = () => {
    idCounterRef.current += 1;
    return `ann-${idCounterRef.current}`;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleTriggerCapture = () => {
    setIsScanning(true);
    setToastMessage(null);
    setTimeout(() => {
      setIsScanning(false);
      showToast(`Captured ${captureMode.replace('-', ' ').toUpperCase()} composite • DPR 2.0 • 0 visible seams`);
    }, 1200);
  };

  const handleToolClick = (tool: ActiveTool) => {
    setActiveTool(tool);
    if (tool === 'redact') {
      showToast('Redact tool active: Click sensitive elements to apply destructive high-entropy noise masks.');
    } else if (tool === 'sticker') {
      showToast('Click any sticker icon below to stamp onto the composite.');
    }
  };

  const handleAddSticker = (emoji: string) => {
    setUndoStack((prev) => [...prev, annotations]);
    const nextOffset = (annotations.length * 11) % 30;
    const newSticker: AnnotationItem = {
      id: getNextId(),
      type: 'sticker',
      text: emoji,
      x: 35 + nextOffset,
      y: 40 + nextOffset
    };
    setAnnotations((prev) => [...prev, newSticker]);
    showToast(`Added sticker ${emoji} to canvas layer stack.`);
  };

  const handleAddBox = () => {
    setUndoStack((prev) => [...prev, annotations]);
    const nextOffset = (annotations.length * 13) % 25;
    const newBox: AnnotationItem = {
      id: getNextId(),
      type: 'rect',
      color: activeColor,
      text: 'Audit Target',
      x: 25 + nextOffset,
      y: 30 + nextOffset
    };
    setAnnotations((prev) => [...prev, newBox]);
    showToast(`Drew vector highlight box (${activeColor}).`);
  };

  const handleUndo = () => {
    if (undoStack.length === 0 && annotations.length === 0) return;
    if (undoStack.length > 0) {
      const prev = undoStack[undoStack.length - 1];
      setUndoStack((stack) => stack.slice(0, -1));
      setAnnotations(prev);
      showToast('Undo: Reverted last canvas mutation.');
    } else {
      setAnnotations([]);
      showToast('Undo: Canvas cleared back to raw screenshot.');
    }
  };

  const handleExport = (format: string) => {
    if (format === 'clipboard') {
      showToast('📋 Copied full-res composite to system clipboard!');
    } else if (format === 'pdf') {
      showToast('📄 Smart-Split PDF generated! Whitespace analysis split pages between paragraphs.');
    } else {
      showToast(`💾 Saved lossless screenshot composite as ${format.toUpperCase()}!`);
    }
  };

  return (
    <div className={`simulator-box snapflow-demo-box ${compact ? 'simulator-compact' : ''}`}>
      {/* 1. TOP SIMULATOR HEADER */}
      <div className="simulator-header">
        <div className="sim-title-group">
          <div className="browser-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="sim-badge">
            <ShieldCheck size={13} className="text-emerald" />
            Snap Flow Studio Engine v1.1.0 • Pure Client-Side
          </span>
        </div>

        <div className="sim-stats">
          <div className="sim-metric">
            Mode: <strong>{captureMode.replace('-', ' ').toUpperCase()}</strong>
          </div>
          <div className="sim-metric">
            Canvas: <strong>1440 &times; 3840 px</strong>
          </div>
        </div>
      </div>

      {/* 2. CAPTURE MODES SELECTOR */}
      <div className="snapflow-mode-bar">
        <span className="presets-label">Capture Engines:</span>
        <div className="mode-pill-group">
          <button
            type="button"
            className={`mode-pill ${captureMode === 'full-page' ? 'active' : ''}`}
            onClick={() => {
              setCaptureMode('full-page');
              handleTriggerCapture();
            }}
          >
            <Camera size={13} />
            <span>Full Page</span>
            <span className="key-hint">Alt+Shift+S</span>
          </button>

          <button
            type="button"
            className={`mode-pill ${captureMode === 'visible' ? 'active' : ''}`}
            onClick={() => {
              setCaptureMode('visible');
              handleTriggerCapture();
            }}
          >
            <Layers size={13} />
            <span>Visible Area</span>
            <span className="key-hint">Alt+Shift+V</span>
          </button>

          <button
            type="button"
            className={`mode-pill ${captureMode === 'selected' ? 'active' : ''}`}
            onClick={() => {
              setCaptureMode('selected');
              handleTriggerCapture();
            }}
          >
            <Crop size={13} />
            <span>Selected Marquee</span>
          </button>

          <button
            type="button"
            className={`mode-pill ${captureMode === 'scrolling' ? 'active' : ''}`}
            onClick={() => {
              setCaptureMode('scrolling');
              handleTriggerCapture();
            }}
          >
            <Layers size={13} />
            <span>Inner Scroll Panel</span>
          </button>
        </div>
      </div>

      {/* 3. STUDIO EDITOR TOOLBAR */}
      <div className="snapflow-editor-toolbar">
        <div className="editor-tool-group">
          <button
            type="button"
            className={`editor-tool-btn ${activeTool === 'select' ? 'active' : ''}`}
            onClick={() => handleToolClick('select')}
            title="Selection Pointer (V)"
          >
            Pointer
          </button>
          <button
            type="button"
            className={`editor-tool-btn ${activeTool === 'arrow' ? 'active' : ''}`}
            onClick={() => {
              handleToolClick('arrow');
              setUndoStack((prev) => [...prev, annotations]);
              setAnnotations((prev) => [
                ...prev,
                { id: getNextId(), type: 'arrow', color: activeColor, text: 'Clean Alignment', x: 25, y: 70 }
              ]);
              showToast('Added vector pointer arrow.');
            }}
            title="Vector Arrow (A)"
          >
            <ArrowUpRight size={14} />
            <span>Arrow (A)</span>
          </button>
          <button
            type="button"
            className={`editor-tool-btn ${activeTool === 'rect' ? 'active' : ''}`}
            onClick={() => {
              handleToolClick('rect');
              handleAddBox();
            }}
            title="Vector Rectangle (R)"
          >
            <Square size={14} />
            <span>Box (R)</span>
          </button>
          <button
            type="button"
            className={`editor-tool-btn ${activeTool === 'text' ? 'active' : ''}`}
            onClick={() => {
              handleToolClick('text');
              setUndoStack((prev) => [...prev, annotations]);
              setAnnotations((prev) => [
                ...prev,
                { id: getNextId(), type: 'text', color: '#ffffff', text: 'Important Note', x: 45, y: 60 }
              ]);
              showToast('Added text annotation.');
            }}
            title="Text Label (T)"
          >
            <Type size={14} />
            <span>Text (T)</span>
          </button>
          <button
            type="button"
            className={`editor-tool-btn ${activeTool === 'sticker' ? 'active' : ''}`}
            onClick={() => handleToolClick('sticker')}
            title="Emoji Stickers (E)"
          >
            <Smile size={14} />
            <span>Stickers (E)</span>
          </button>
          <button
            type="button"
            className={`editor-tool-btn btn-censor ${activeTool === 'redact' ? 'active' : ''}`}
            onClick={() => handleToolClick('redact')}
            title="Destructive Pixel Redaction"
          >
            <EyeOff size={14} />
            <span>Destructive Redact</span>
          </button>
        </div>

        {/* Color Palette & Undo/Redo */}
        <div className="editor-aux-group">
          <div className="color-dots-bar">
            {['#38bdf8', '#10b981', '#a855f7', '#ef4444', '#f59e0b'].map((color) => (
              <button
                key={color}
                type="button"
                className={`color-dot ${activeColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setActiveColor(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>

          <div className="history-btn-group">
            <button
              type="button"
              className="history-action-btn"
              onClick={handleUndo}
              disabled={annotations.length === 0}
              title="Undo Last Action (Ctrl+Z)"
            >
              <RotateCcw size={13} />
              <span>Undo</span>
            </button>
            <button
              type="button"
              className="history-action-btn"
              onClick={() => showToast('Redo stack up to date.')}
              title="Redo (Ctrl+Y)"
            >
              <RotateCw size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Emoji Sticker Drawer (if active) */}
      {activeTool === 'sticker' && (
        <div className="sticker-drawer animate-fade-in">
          <span className="sticker-drawer-label">Quick Stickers:</span>
          <div className="stickers-row">
            {EMOJI_STICKERS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                className="sticker-pick-btn"
                onClick={() => handleAddSticker(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. MAIN CAPTURE CANVAS VIEWPORT */}
      <div className="snapflow-canvas-container">
        {/* Animated Scanning Beam when capturing */}
        {isScanning && (
          <div className="scanning-beam-overlay">
            <div className="scanning-beam-line" />
            <div className="scanning-badge">
              <Camera size={14} className="animate-spin" />
              <span>Stitching tiles with subpixel compensation...</span>
            </div>
          </div>
        )}

        {/* Browser Mockup Chrome */}
        <div className="canvas-watermark-bar">
          <span className="watermark-url">
            <LinkIcon size={12} />
            https://baziqhue.co.ke/docs/architecture
          </span>
          <span className="watermark-timestamp">
            📅 2026-10-17 • DPR 2.0 • 100% Offline Composite
          </span>
        </div>

        {/* Composite Content */}
        <div className="canvas-composite-content">
          <div className="canvas-doc-header">
            <div className="doc-meta-badge">CONFIDENTIAL SYSTEM AUDIT</div>
            <h3 className="doc-title">BaziQ Hue Cloud Services Architecture</h3>
            <p className="doc-subtitle">
              Seamlessly stitched with zero horizontal seams. Click sensitive fields below to apply irreversible high-entropy noise redaction.
            </p>
          </div>

          <div className="canvas-grid-cards">
            {/* Card 1: API Credentials with interactive Redaction */}
            <div className="canvas-card">
              <div className="card-top-title">Production API Credentials</div>
              <p className="card-sub">Underlying pixels wiped permanently with high-entropy noise:</p>

              <div
                className={`censor-box ${apiKeyRedacted ? 'is-redacted' : 'is-exposed'}`}
                onClick={() => {
                  setApiKeyRedacted(!apiKeyRedacted);
                  showToast(
                    apiKeyRedacted
                      ? 'Revealed credential mockup (Testing Mode).'
                      : '🔒 Destructive Redaction applied! Underlying raster pixels wiped.'
                  );
                }}
                role="button"
                tabIndex={0}
                title="Click to toggle destructive noise redaction"
              >
                {apiKeyRedacted ? (
                  <div className="noise-pattern">
                    <span className="redact-tag">██████ DESTROYED PIXELS [HIGH-ENTROPY NOISE] ██████</span>
                  </div>
                ) : (
                  <code className="exposed-code">sk_live_9948201bcf8821038a892e</code>
                )}
              </div>
              <span className="card-hint">
                {apiKeyRedacted ? '🛡️ Permanent noise mask active' : '⚠️ Sensitive key exposed! Click to redact'}
              </span>
            </div>

            {/* Card 2: Payment Details with Redaction */}
            <div className="canvas-card">
              <div className="card-top-title">Payment Billing Account</div>
              <p className="card-sub">Flattened permanently on export (cannot be extracted from PDF):</p>

              <div
                className={`censor-box ${cardRedacted ? 'is-redacted' : 'is-exposed'}`}
                onClick={() => {
                  setCardRedacted(!cardRedacted);
                  showToast(
                    cardRedacted
                      ? 'Revealed credit card mockup.'
                      : '🔒 High-entropy noise mask applied to card digits!'
                  );
                }}
                role="button"
                tabIndex={0}
                title="Click to toggle destructive noise redaction"
              >
                {cardRedacted ? (
                  <div className="noise-pattern">
                    <span className="redact-tag">•••• •••• •••• [NOISE CENSOR]</span>
                  </div>
                ) : (
                  <code className="exposed-code">4242 •••• •••• 9812 (VISA Pro)</code>
                )}
              </div>
              <span className="card-hint">
                {cardRedacted ? '🛡️ Zero extractable text underneath' : '⚠️ Card number exposed! Click to redact'}
              </span>
            </div>
          </div>

          {/* Dynamic Annotations placed on canvas */}
          {annotations.map((ann) => (
            <div
              key={ann.id}
              className={`placed-annotation annotation-${ann.type}`}
              style={{
                top: `${ann.y}%`,
                left: `${ann.x}%`,
                borderColor: ann.color || activeColor
              }}
            >
              {ann.type === 'arrow' && (
                <div className="annotation-arrow-label" style={{ color: ann.color }}>
                  ↗ {ann.text}
                </div>
              )}
              {ann.type === 'rect' && (
                <div className="annotation-box-frame" style={{ borderColor: ann.color }}>
                  <span className="box-tag" style={{ background: ann.color }}>
                    {ann.text}
                  </span>
                </div>
              )}
              {ann.type === 'text' && (
                <div className="annotation-text-bubble">{ann.text}</div>
              )}
              {ann.type === 'sticker' && (
                <div className="annotation-sticker-glyph">{ann.text}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 5. EXPORT & ACTIONS BAR */}
      <div className="snapflow-export-bar">
        <div className="export-status">
          <Sparkles size={14} className="text-cyan" />
          <span>Local IndexedDB ready • Export options:</span>
        </div>

        <div className="export-buttons-group">
          <button
            type="button"
            className="btn-export btn-clipboard"
            onClick={() => handleExport('clipboard')}
          >
            <Copy size={13} />
            <span>Copy to Clipboard</span>
          </button>
          <button
            type="button"
            className="btn-export"
            onClick={() => handleExport('png')}
          >
            <Download size={13} />
            <span>Lossless PNG</span>
          </button>
          <button
            type="button"
            className="btn-export"
            onClick={() => handleExport('webp')}
          >
            <Download size={13} />
            <span>WebP</span>
          </button>
          <button
            type="button"
            className="btn-export btn-pdf"
            onClick={() => handleExport('pdf')}
          >
            <FileText size={13} />
            <span>Smart-Split PDF</span>
          </button>
        </div>
      </div>

      {/* Feedback Toast */}
      {toastMessage && (
        <div className="snapflow-toast animate-fade-in">
          <Check size={14} className="text-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
