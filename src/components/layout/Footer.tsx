import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Mail, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { PRODUCTS, STUDIO_METADATA } from '../../data/products';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const location = useLocation();

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-content">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <Link
              to="/"
              className="footer-brand"
              onClick={handleBrandClick}
              aria-label="SubtleWorks Studio Home"
            >
              <div className="footer-logo-mark">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#0C1322" />
                  <rect x="1" y="1" width="30" height="30" rx="7" stroke="#1E293B" strokeWidth="1" />
                  <path d="M8 16L14 22L24 10" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="footer-brand-text">
                <span className="footer-parent-tag">Baziq Hue</span>
                <span className="footer-brand-title">SubtleWorks Studio</span>
              </div>
            </Link>
            <div className="footer-parent-note">A Baziq Hue product studio</div>
            <p className="footer-mission">
              A curated ecosystem of lightweight, hyper-focused Chrome extensions engineered to solve specific browser problems cleanly.
            </p>
            <div className="footer-badges">
              <span className="badge badge-offline">
                <ShieldCheck size={12} className="text-emerald" />
                Manifest V3 Verified
              </span>
              <span className="badge badge-offline">
                <Sparkles size={12} className="text-cyan" />
                Zero Covert Tracking
              </span>
            </div>
          </div>

          {/* Extensions Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Extensions</h4>
            <ul className="footer-links-list">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link to={`/extensions/${prod.slug}`} className="footer-link">
                    <span>{prod.shortName}</span>
                    <span className={`badge ${prod.pricingType === 'free' ? 'badge-free' : 'badge-pro'} badge-sm`}>
                      {prod.pricingType === 'free' ? 'Free' : 'Pro'}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <span className="footer-link footer-link-disabled">
                  <span>More in development...</span>
                  <span className="badge badge-coming-soon badge-sm">Roadmap</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Studio Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Studio & Trust</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link">About SubtleWorks Studio</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy & Permissions</Link>
              </li>
              <li>
                <Link to="/support" className="footer-link">Support & FAQ</Link>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_METADATA.supportEmail}`}
                  className="footer-link"
                >
                  <Mail size={13} />
                  <span>Contact Developer</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Chrome Web Store Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Chrome Web Store</h4>
            <ul className="footer-links-list">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a
                    href={prod.chromeStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span>Install {prod.shortName}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={STUDIO_METADATA.storeDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Chrome Developer Profile</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            &copy; {CURRENT_YEAR} SubtleWorks Studio • A Baziq Hue Brand. All rights reserved.
            Built with surgical precision for Google Chrome.
          </div>
          <div className="footer-bottom-meta">
            <span className="developer-tag">
              <Terminal size={12} />
              Crafted by an independent software engineer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
