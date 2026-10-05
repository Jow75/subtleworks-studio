import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ChevronDown, Layers, Sparkles } from 'lucide-react';
import { PRODUCTS, STUDIO_METADATA } from '../../data/products';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [extensionsDropdownOpen, setExtensionsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setExtensionsDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExtensionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo & Lockup */}
        <Link
          to="/"
          className="nav-brand"
          onClick={handleBrandClick}
          aria-label="SubtleWorks Studio by Baziq Hue"
        >
          <div className="nav-logo-mark">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#0C1322" />
              <rect x="1" y="1" width="30" height="30" rx="7" stroke="#1E293B" strokeWidth="1" />
              <path d="M8 16L14 22L24 10" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="brand-text-lockup">
            <span className="parent-brand-tag">Baziq Hue</span>
            <div className="brand-title-group">
              <span className="brand-title">
                Subtle<span className="brand-accent">Works</span>
              </span>
              <span className="brand-badge">Studio</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          {/* Extensions Dropdown */}
          <div
            ref={dropdownRef}
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setExtensionsDropdownOpen(true)}
            onMouseLeave={() => setExtensionsDropdownOpen(false)}
          >
            <button
              id="nav-extensions-dropdown-btn"
              type="button"
              className={`nav-link nav-dropdown-btn ${location.pathname.startsWith('/extensions') ? 'active' : ''}`}
              aria-expanded={extensionsDropdownOpen}
              aria-haspopup="true"
              onClick={() => setExtensionsDropdownOpen((prev) => !prev)}
            >
              <Layers size={15} />
              <span>Extensions</span>
              <ChevronDown size={14} className={`dropdown-chevron ${extensionsDropdownOpen ? 'rotated' : ''}`} />
            </button>

            {extensionsDropdownOpen && (
              <div className="nav-dropdown-menu animate-fade-in" role="menu">
                <div className="dropdown-category">Live Extensions ({PRODUCTS.length})</div>
                {PRODUCTS.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/extensions/${prod.slug}`}
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => setExtensionsDropdownOpen(false)}
                  >
                    <img
                      src={prod.icon}
                      alt={prod.name}
                      className="dropdown-item-icon"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                      }}
                    />
                    <div className="dropdown-item-text">
                      <div className="dropdown-item-title">
                        {prod.shortName}
                        <span className={`badge ${prod.pricingType === 'free' ? 'badge-free' : 'badge-pro'} badge-sm`}>
                          {prod.pricingType === 'free' ? 'Free' : 'Pro'}
                        </span>
                      </div>
                      <div className="dropdown-item-sub">{prod.tagline}</div>
                    </div>
                  </Link>
                ))}

                <div className="dropdown-footer">
                  <span className="dropdown-footer-text">
                    <Sparkles size={12} className="text-cyan" />
                    Built for Chrome Manifest V3
                  </span>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/privacy" className={`nav-link ${location.pathname === '/privacy' ? 'active' : ''}`}>
            Privacy & Trust
          </Link>
          <Link to="/support" className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}>
            Support
          </Link>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href={STUDIO_METADATA.storeDeveloperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={14} />
            <span>Chrome Web Store</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer animate-fade-in">
          <div className="container mobile-drawer-content">
            <div className="mobile-section-label">Our Extensions</div>
            <div className="mobile-products-list">
              {PRODUCTS.map((prod) => (
                <Link key={prod.id} to={`/extensions/${prod.slug}`} className="mobile-product-card">
                  <img
                    src={prod.icon}
                    alt={prod.name}
                    className="mobile-prod-icon"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                    }}
                  />
                  <div>
                    <div className="mobile-prod-title">
                      {prod.shortName}
                      <span className={`badge ${prod.pricingType === 'free' ? 'badge-free' : 'badge-pro'} badge-sm`}>
                        {prod.priceBadge}
                      </span>
                    </div>
                    <div className="mobile-prod-desc">{prod.shortDescription}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mobile-section-label">Studio</div>
            <div className="mobile-nav-links">
              <Link to="/about" className="mobile-nav-link">About & Philosophy</Link>
              <Link to="/privacy" className="mobile-nav-link">Privacy & Permissions</Link>
              <Link to="/support" className="mobile-nav-link">Help & Support</Link>
            </div>

            <div className="mobile-drawer-cta">
              <a
                href={STUDIO_METADATA.storeDeveloperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <ExternalLink size={16} />
                Visit Chrome Web Store
              </a>
            </div>

            <div className="mobile-drawer-brand-note">
              <span>SubtleWorks Studio • A Baziq Hue Brand</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
