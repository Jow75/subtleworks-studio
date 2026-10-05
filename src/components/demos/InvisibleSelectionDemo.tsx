import React, { useState, useRef } from 'react';
import { Eye, EyeOff, Copy, Check, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import './Demos.css';

export const InvisibleSelectionDemo: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [isInvisibleOn, setIsInvisibleOn] = useState<boolean>(true);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedWordCount, setSelectedWordCount] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'sandbox' | 'comparison'>('sandbox');
  const textRef = useRef<HTMLDivElement>(null);

  // Monitor DOM selection on mouseup/keyup
  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      const words = selection.toString().trim().split(/\s+/).length;
      setSelectedWordCount(words);
    } else {
      setSelectedWordCount(0);
    }
  };

  const handleSelectSample = () => {
    if (!textRef.current) return;
    const range = document.createRange();
    range.selectNodeContents(textRef.current);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      setSelectedWordCount(range.toString().trim().split(/\s+/).length);
    }
  };

  const handleCopy = () => {
    const selection = window.getSelection();
    let textToCopy = selection?.toString().trim();
    if (!textToCopy && textRef.current) {
      textToCopy = textRef.current.innerText.trim();
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedText(textToCopy.substring(0, 45) + (textToCopy.length > 45 ? '...' : ''));
        setTimeout(() => setCopiedText(null), 3200);
      });
    }
  };

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
            <ShieldCheck size={13} />
            Invisible Selection Sandbox v1.0.0
          </span>
        </div>
        <div className="sim-stats">
          <div className="demo-view-toggle">
            <button
              type="button"
              className={`view-pill ${viewMode === 'sandbox' ? 'active' : ''}`}
              onClick={() => setViewMode('sandbox')}
            >
              Interactive Sandbox
            </button>
            <button
              type="button"
              className={`view-pill ${viewMode === 'comparison' ? 'active' : ''}`}
              onClick={() => setViewMode('comparison')}
            >
              Side-by-Side Compare
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'sandbox' ? (
        <>
          {/* Extension Toolbar Toggle Bar */}
          <div className="sim-toolbar-interactive">
            <div className="toolbar-toggle-card">
              <div className="toggle-info">
                <span className="toggle-icon-wrap">
                  {isInvisibleOn ? <EyeOff size={16} className="text-emerald" /> : <Eye size={16} className="text-blue" />}
                </span>
                <div>
                  <div className="toggle-title">Extension Switch: <strong>{isInvisibleOn ? 'ACTIVE' : 'INACTIVE'}</strong></div>
                  <div className="toggle-sub">
                    {isInvisibleOn
                      ? 'Selection highlight is hidden. Copy/paste is 100% active.'
                      : 'Standard browser blue highlight is visible.'}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={`switch-btn ${isInvisibleOn ? 'switch-on' : 'switch-off'}`}
                onClick={() => setIsInvisibleOn(!isInvisibleOn)}
                aria-label="Toggle Invisible Selection"
              >
                <span className="switch-slider" />
              </button>
            </div>
          </div>

          {/* Interactive Text Article Canvas */}
          <div
            className={`sim-canvas selection-canvas ${isInvisibleOn ? 'invisible-selection-active' : 'normal-selection-active'}`}
            onMouseUp={handleSelectionChange}
            onKeyUp={handleSelectionChange}
          >
            <div className="article-preview-tag">
              <Sparkles size={13} />
              <span>Interactive Test Webpage — Drag your cursor across the paragraph below:</span>
            </div>

            <div ref={textRef} className="article-interactive-text">
              <h4 className="article-sample-title">Clean Screen Recording & Presentation Demonstration</h4>
              <p>
                When recording high-resolution video tutorials or presenting slides during a live webinar, dragging your
                mouse across text ordinarily splashes jarring, high-contrast blue rectangles across the entire screen.
                With <strong>Invisible Selection enabled</strong>, your cursor effortlessly highlights the text, standard
                clipboard copy hotkeys capture every character, yet your screen remains visually flawless and distraction-free.
              </p>
            </div>

            {/* Selection Status Bar */}
            <div className="sim-keystroke-hud">
              <div className="hud-pill">
                <span className="hud-label">Highlight Status:</span>
                <span className={`hud-val ${isInvisibleOn ? 'text-emerald' : 'text-blue'}`}>
                  {isInvisibleOn ? 'Hidden (Transparent)' : 'Visible (Standard Blue)'}
                </span>
              </div>
              <div className="hud-pill">
                <span className="hud-label">Selected Words:</span>
                <span className="hud-val">{selectedWordCount > 0 ? selectedWordCount : 'None (Click & drag above)'}</span>
              </div>
              <div className="hud-pill">
                <span className="hud-label">Clipboard Engine:</span>
                <span className="hud-val">100% Preserved</span>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="sim-controls-bar">
            <div className="sim-btn-group">
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleSelectSample}>
                <Layers size={14} />
                Select Entire Paragraph
              </button>

              <button type="button" className="btn btn-primary btn-sm" onClick={handleCopy}>
                <Copy size={14} />
                Copy Selection (Ctrl+C)
              </button>
            </div>

            {copiedText && (
              <div className="copy-feedback-toast animate-fade-in">
                <Check size={14} className="text-emerald" />
                <span>Copied to clipboard invisibly: "{copiedText}"</span>
              </div>
            )}
          </div>
        </>
      ) : (
        /* Side-by-Side Comparison Mode */
        <div className="comparison-container">
          <div className="comparison-col comparison-normal">
            <div className="col-header">
              <span className="col-badge badge-normal">Standard Browser</span>
              <p className="col-desc">Jarring blue blocks clutter screen recordings & slides</p>
            </div>
            <div className="col-screen-mock normal-selection-active">
              <p>
                <span className="simulated-blue-highlight">When you drag across text to copy it during a live demo</span>,
                distracting colored boxes obscure your layout and ruin presentation cleanliness.
              </p>
            </div>
          </div>

          <div className="comparison-col comparison-invisible">
            <div className="col-header">
              <span className="col-badge badge-pro">Invisible Selection</span>
              <p className="col-desc">Flawless, clean presentation with 100% working copy/paste</p>
            </div>
            <div className="col-screen-mock invisible-selection-active">
              <p>
                <span className="simulated-invisible-highlight">When you drag across text to copy it during a live demo</span>,
                your screen remains completely pristine while Ctrl+C captures the exact snippet instantly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
