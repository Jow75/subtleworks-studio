import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Sparkles, Terminal, ArrowRight, ExternalLink } from 'lucide-react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About SubtleWorks Studio — Baziq Hue';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-container">
          <div className="section-badge">
            <Terminal size={14} className="text-cyan" />
            <span>A Baziq Hue Product Studio</span>
          </div>
          <h1 className="about-title">
            We build browser tools that do <span className="text-gradient-cyan">exactly what they say.</span>
          </h1>
          <p className="about-lead">
            SubtleWorks Studio was founded on a simple observation: modern browser extensions have become bloated, noisy,
            and invasive. As a dedicated product studio under Baziq Hue, we craft hyper-focused utilities designed to solve specific browser problems with surgical elegance.
          </p>
        </div>
      </section>

      {/* Brand Architecture Section */}
      <section className="about-brand-architecture">
        <div className="container brand-arch-container">
          <div className="brand-arch-card glass-panel">
            <div className="brand-arch-eyebrow">
              <span className="brand-arch-label">Brand Architecture</span>
            </div>
            <h2 className="brand-arch-title">Baziq Hue &amp; SubtleWorks Studio</h2>
            <div className="brand-arch-grid">
              <div className="brand-arch-col">
                <span className="brand-tier-badge badge-parent">Parent Company</span>
                <h3 className="brand-entity-name">
                  <a
                    href="https://baziqhue.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Baziq Hue</span>
                    <ExternalLink size={16} className="text-cyan" />
                  </a>
                </h3>
                <p className="brand-entity-desc">
                  Baziq Hue is the parent digital studio behind SubtleWorks Studio and the Universal Clipboard cross-device ecosystem.
                </p>
                <div style={{ marginTop: '0.75rem' }}>
                  <a
                    href="https://baziqhue.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>Visit baziqhue.co.ke</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="brand-arch-divider" aria-hidden="true">
                <div className="brand-arch-line" />
                <span className="brand-arch-arrow">↓</span>
              </div>
              <div className="brand-arch-col">
                <span className="brand-tier-badge badge-studio">Browser Product Studio</span>
                <h3 className="brand-entity-name">SubtleWorks Studio</h3>
                <p className="brand-entity-desc">
                  SubtleWorks Studio is the focused product studio creating lightweight, purpose-built browser tools and Chrome extensions (Snap Flow Studio, Phantom Typer, Invisible Selection).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="container manifesto-container">
          <div className="manifesto-card glass-panel">
            <h2 className="manifesto-heading">The SubtleWorks Manifesto</h2>

            <div className="manifesto-points">
              <div className="manifesto-item">
                <div className="manifesto-icon-box">
                  <Zap size={20} className="text-cyan" />
                </div>
                <div>
                  <h3 className="manifesto-item-title">1. One Job, Done Exceptionally</h3>
                  <p className="manifesto-item-text">
                    We resist feature creep. If an extension is built to hide selection highlights or simulate human typing cadence,
                    it will never morph into an ad network, a cryptocurrency miner, or an all-in-one AI assistant you didn't ask for.
                  </p>
                </div>
              </div>

              <div className="manifesto-item">
                <div className="manifesto-icon-box">
                  <ShieldCheck size={20} className="text-emerald" />
                </div>
                <div>
                  <h3 className="manifesto-item-title">2. Radical Privacy Respect</h3>
                  <p className="manifesto-item-text">
                    Your browser is your personal workspace. If a tool can run 100% offline, it will run 100% offline. We never track
                    the webpages you visit, log your keystrokes, or sell analytics to data brokers.
                  </p>
                </div>
              </div>

              <div className="manifesto-item">
                <div className="manifesto-icon-box">
                  <Sparkles size={20} className="text-purple" />
                </div>
                <div>
                  <h3 className="manifesto-item-title">3. Sub-Millisecond Lightweight Performance</h3>
                  <p className="manifesto-item-text">
                    We write lean, vanilla-level browser code. Our content scripts execute at document_start without slowing down page
                    render, consuming precious memory, or draining laptop batteries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-developer">
        <div className="container dev-container">
          <div className="dev-card glass-panel">
            <div className="dev-meta">
              <h2 className="dev-title">Crafted Independently</h2>
              <p className="dev-desc">
                SubtleWorks Studio extensions are created and maintained by a dedicated software engineer. When you email us for support,
                file a bug report, or suggest a new feature, you are speaking directly with the person who wrote every line of code.
              </p>
              <div className="dev-actions">
                <Link to="/support" className="btn btn-primary btn-lg">
                  <span>Get in Touch</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/" className="btn btn-secondary btn-lg">
                  <span>Browse Extensions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
