import React, { useEffect } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Mail } from 'lucide-react';
import { STUDIO_METADATA } from '../data/products';
import './PrivacyPage.css';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy & Permissions Audit — SubtleWorks Studio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container privacy-container">
          <div className="section-badge">
            <ShieldCheck size={14} className="text-emerald" />
            <span>SubtleWorks Studio • Baziq Hue</span>
          </div>
          <h1 className="privacy-title">Privacy Policy & Permissions Audit</h1>
          <p className="privacy-lead">
            At SubtleWorks Studio, a Baziq Hue product studio, we reject vague marketing promises. Below is the exact, audited reality of how our Chrome extensions interact with your browser,
            what permissions they declare in their manifests, and what happens to your data.
          </p>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="container privacy-container">
          {/* Summary Box */}
          <div className="privacy-summary-card glass-panel">
            <div className="summary-badge">
              <Lock size={16} className="text-emerald" />
              <span>Studio Privacy Standards</span>
            </div>
            <ul className="summary-list">
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>No Browsing History:</strong> We never log, store, or transmit the URLs you visit.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>No Keystroke Logging:</strong> We do not log what you type or capture form contents.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>No Covert Analytics:</strong> We do not use third-party analytics trackers or sell data to advertisers.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>Minimal Permissions:</strong> We request only the absolute minimum Chrome permissions needed to function.</span>
              </li>
            </ul>
          </div>

          {/* Extension-by-Extension Audits */}
          <div className="audits-container">
            <h2 className="audit-section-heading">Detailed Extension Breakdown</h2>

            {/* Invisible Selection Audit */}
            <div className="extension-audit-block glass-panel">
              <div className="audit-block-header">
                <img
                  src="/assets/extensions/invisible-selection/icon128.png"
                  alt="Invisible Selection"
                  className="audit-icon"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
                <div>
                  <h3 className="audit-tool-name">Invisible Selection (v1.0.0)</h3>
                  <span className="badge badge-free">100% Offline • Zero Data Collection</span>
                </div>
              </div>

              <div className="audit-text-block">
                <h4>Data Transmission</h4>
                <p>
                  <strong>Zero network requests.</strong> Invisible Selection runs entirely within your local browser. It does not communicate
                  with any external server, API, or analytics service. It is physically incapable of transmitting your information.
                </p>
              </div>

              <div className="audit-text-block">
                <h4>Local Storage</h4>
                <p>
                  The only data stored is a single boolean setting: <code>{`{ enabled: true | false }`}</code> using Chrome’s built-in
                  <code>chrome.storage.sync</code> so your toggle preference persists across browser restarts and syncs to your logged-in Google account.
                </p>
              </div>

              <div className="audit-text-block">
                <h4>Declared Permissions</h4>
                <div className="perm-table">
                  <div className="perm-table-row">
                    <code>storage</code>
                    <span>Saves your single ON/OFF toggle state locally in Chrome.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phantom Typer Audit */}
            <div className="extension-audit-block glass-panel">
              <div className="audit-block-header">
                <img
                  src="/assets/extensions/phantom-typer/icon128.png"
                  alt="Phantom Typer"
                  className="audit-icon"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
                <div>
                  <h3 className="audit-tool-name">Phantom Typer (v3.0.4)</h3>
                  <span className="badge badge-pro">Freemium • Client-Side Simulation</span>
                </div>
              </div>

              <div className="audit-text-block">
                <h4>Typing Content & Automation Safety</h4>
                <p>
                  The text you enter in the popup or side panel is stored solely in local <code>chrome.storage.local</code> on your device.
                  When you initiate typing, the extension emits simulated keyboard events into the focused element on the active tab.
                  <strong>We do not read, log, or transmit your typed text.</strong>
                </p>
              </div>

              <div className="audit-text-block">
                <h4>Network Requests & Authentication</h4>
                <p>
                  Phantom Typer makes network requests strictly for user authentication and Pro subscription license verification:
                </p>
                <ul className="network-list">
                  <li><strong>Firebase Auth & Firestore:</strong> Manages optional user login and stores Pro subscription entitlement status.</li>
                  <li><strong>Paystack:</strong> Secure third-party PCI-compliant payment processor for Pro upgrades.</li>
                  <li><strong>phantom-typer-api.vercel.app:</strong> Serverless backend endpoint that verifies payment webhooks and updates license flags.</li>
                </ul>
              </div>

              <div className="audit-text-block">
                <h4>Declared Permissions & Why They Are Required</h4>
                <div className="perm-table">
                  <div className="perm-table-row">
                    <code>storage</code>
                    <span>Stores typing speed, draft text, typo preferences, and license flags locally.</span>
                  </div>
                  <div className="perm-table-row">
                    <code>activeTab</code> & <code>scripting</code>
                    <span>Required to inject the typing simulator into the currently focused webpage when you press your hotkey.</span>
                  </div>
                  <div className="perm-table-row">
                    <code>sidePanel</code>
                    <span>Enables Chrome's native side panel UI for controlling typing sessions alongside web documents.</span>
                  </div>
                  <div className="perm-table-row">
                    <code>alarms</code>
                    <span>Periodically checks for Pro subscription renewals or status updates.</span>
                  </div>
                  <div className="perm-table-row">
                    <code>identity</code>
                    <span>Facilitates standard Google Sign-in to sync your Pro license across multiple computers.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Snap Flow Studio Audit */}
            <div className="extension-audit-block glass-panel">
              <div className="audit-block-header">
                <img
                  src="/assets/extensions/snapflow-studio/icon128.png"
                  alt="Snap Flow Studio"
                  className="audit-icon"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
                <div>
                  <h3 className="audit-tool-name">Snap Flow Studio (v1.1.0)</h3>
                  <span className="badge badge-free">100% Client-Side • Zero Telemetry</span>
                </div>
              </div>

              <div className="audit-text-block">
                <h4>Local-First Capture &amp; Image Processing</h4>
                <p>
                  Snap Flow Studio performs 100% of its scroll measurement, frame capture, subpixel stitching, and raster annotation inside your local browser session.
                  <strong>Your screenshots are never uploaded to any remote server or cloud rendering service.</strong>
                </p>
              </div>

              <div className="audit-text-block">
                <h4>True Destructive Redaction</h4>
                <p>
                  When you use the Redaction tool in the Studio editor, underlying pixels are irreversibly destroyed and replaced with high-entropy noise patterns. On PNG, JPEG, WebP, or multi-page PDF export, redacted areas are permanently flattened so no extractable text or visual data remains underneath.
                </p>
              </div>

              <div className="audit-text-block">
                <h4>Local Storage &amp; Auto-Purging</h4>
                <p>
                  Captures are saved in your browser's private local IndexedDB database. Snap Flow Studio only keeps your 10 most recent captures; older captures are deleted automatically to protect local storage space.
                </p>
              </div>

              <div className="audit-text-block">
                <h4>Declared Permissions &amp; Least Privilege</h4>
                <div className="perm-table">
                  <div className="perm-table-row">
                    <code>activeTab</code>
                    <span>Invoked strictly on the active tab when you trigger a capture shortcut or button. Zero background browsing monitoring.</span>
                  </div>
                  <div className="perm-table-row">
                    <code>scripting</code>
                    <span>Coordinates document scroll positions and interactive crop marquee overlays on the webpage.</span>
                  </div>
                  <div className="perm-table-row">
                    <code>storage</code>
                    <span>Saves your local studio preferences (e.g. watermark placement, default export format) in local storage.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Contact */}
          <div className="privacy-contact-box glass-panel">
            <h3>Questions or Concerns Regarding Privacy?</h3>
            <p>
              If you have any questions, require data deletion, or want clarification on any line of code, contact the developer directly:
            </p>
            <a href={`mailto:${STUDIO_METADATA.supportEmail}?subject=Privacy%20Inquiry`} className="btn btn-primary btn-md">
              <Mail size={16} />
              <span>Email {STUDIO_METADATA.supportEmail}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
