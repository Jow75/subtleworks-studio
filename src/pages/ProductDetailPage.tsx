import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Sparkles,
  Check,
  Cpu,
  UserCheck,
  Zap,
  Maximize2,
  X
} from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { PhantomTyperDemo } from '../components/demos/PhantomTyperDemo';
import { InvisibleSelectionDemo } from '../components/demos/InvisibleSelectionDemo';
import { ScreenshotGallery } from '../components/common/ScreenshotGallery';
import { CrossPromotion } from '../components/common/CrossPromotion';
import './ProductDetailPage.css';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [heroViewMode, setHeroViewMode] = useState<'demo' | 'preview'>('demo');
  const [heroPreviewZoomed, setHeroPreviewZoomed] = useState<boolean>(false);

  // Update page title dynamically for SEO
  useEffect(() => {
    if (product) {
      document.title = `${product.name} — SubtleWorks Studio`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="product-detail-page">
      {/* 1. PRODUCT HERO */}
      <section className="product-hero">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Extensions</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{product.shortName}</span>
          </nav>

          <div className="hero-product-grid">
            {/* Left Column: Product Info & CTAs */}
            <div className="product-hero-info">
              <div className="product-badge-row">
                <span className={`badge ${product.pricingType === 'free' ? 'badge-free' : 'badge-pro'}`}>
                  <span className="badge-dot" />
                  {product.priceBadge}
                </span>
                <span className="badge badge-offline">v{product.version}</span>
                <span className="badge badge-offline">Manifest V3</span>
              </div>

              <div className="hero-product-title-row">
                <img
                  src={product.icon}
                  alt={product.name}
                  className="detail-hero-icon"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                  }}
                />
                <h1 className="detail-product-title">{product.name}</h1>
              </div>

              <p className="detail-product-tagline">{product.tagline}</p>

              {/* Primary Install CTA */}
              <div className="detail-hero-ctas">
                <a
                  href={product.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-store btn-lg detail-install-btn"
                >
                  <ExternalLink size={18} />
                  <span>Install from Chrome Web Store</span>
                </a>

                <a href="#how-it-works" className="btn btn-secondary btn-lg">
                  <span>How It Works</span>
                </a>
              </div>

              <div className="detail-install-note">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Verified by Google Chrome Web Store • Fast single-click setup</span>
              </div>
            </div>

            {/* Right Column: Live Interactive Demo Box & Official UI Preview */}
            <div className="product-hero-demo-col">
              <div className="hero-view-switcher">
                <button
                  type="button"
                  className={`hero-switch-btn ${heroViewMode === 'demo' ? 'active' : ''}`}
                  onClick={() => setHeroViewMode('demo')}
                >
                  <Sparkles size={13} className="text-cyan" />
                  <span>Live Interactive Sandbox</span>
                </button>
                <button
                  type="button"
                  className={`hero-switch-btn ${heroViewMode === 'preview' ? 'active' : ''}`}
                  onClick={() => setHeroViewMode('preview')}
                >
                  <Maximize2 size={13} className="text-cyan" />
                  <span>Extension UI Preview</span>
                </button>
              </div>

              {heroViewMode === 'demo' ? (
                product.demoType === 'phantom-typer' ? (
                  <PhantomTyperDemo />
                ) : (
                  <InvisibleSelectionDemo />
                )
              ) : (
                <div className="hero-preview-frame glass-panel">
                  <div className="hero-preview-topbar">
                    <div className="browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <span className="hero-preview-badge">
                      <ShieldCheck size={12} className="text-emerald" />
                      {product.shortName} v{product.version} Interface
                    </span>
                    <button
                      type="button"
                      className="hero-preview-zoom-btn"
                      onClick={() => setHeroPreviewZoomed(true)}
                      aria-label="Enlarge extension UI preview"
                    >
                      <Maximize2 size={13} />
                    </button>
                  </div>
                  <div
                    className="hero-preview-viewport"
                    onClick={() => setHeroPreviewZoomed(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setHeroPreviewZoomed(true)}
                  >
                    <img
                      src={product.heroPreview}
                      alt={`${product.name} official Chrome interface`}
                      className="hero-preview-img"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = product.screenshots[0]?.src || '/favicon.svg';
                      }}
                    />
                    <div className="hero-preview-overlay">
                      <span className="hero-preview-zoom-pill">
                        <Maximize2 size={13} />
                        Click to enlarge interface screenshot
                      </span>
                    </div>
                  </div>
                  <div className="hero-preview-footer">
                    <span className="preview-footer-note">
                      Captured directly from Google Chrome • Verified Manifest V3 Build
                    </span>
                    <a
                      href="#screenshots"
                      className="preview-gallery-link"
                    >
                      View All Screenshots ({product.screenshots.length}) →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Preview Lightbox Modal */}
      {heroPreviewZoomed && (
        <div className="gallery-lightbox" onClick={() => setHeroPreviewZoomed(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setHeroPreviewZoomed(false)}
              aria-label="Close zoomed screenshot"
            >
              <X size={24} />
            </button>
            <img
              src={product.heroPreview}
              alt={`${product.name} official Chrome interface`}
              className="lightbox-img"
            />
            <div className="lightbox-footer">
              <h4>{product.name} — Official Extension Interface</h4>
              <p>Authentic interface captured from live Chrome browser session.</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. WHAT IT DOES & HOW IT WORKS */}
      <section id="how-it-works" className="detail-section section-how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Zap size={13} className="text-cyan" />
              <span>Workflow Breakdown</span>
            </div>
            <h2 className="section-title">How {product.shortName} Works</h2>
            <p className="section-subtitle">
              Designed to get completely out of your way and execute instantly.
            </p>
          </div>

          <div className="steps-timeline-grid">
            {product.howItWorks.map((step) => (
              <div key={step.step} className="step-card glass-panel">
                <div className="step-number-badge">0{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-instruction">{step.instruction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES GRID */}
      <section className="detail-section section-features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Cpu size={13} className="text-cyan" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="section-title">Features Engineered for Reliability</h2>
            <p className="section-subtitle">
              Every capability is backed by genuine, verified browser APIs.
            </p>
          </div>

          <div className="features-grid">
            {product.features.map((feat, idx) => (
              <div key={idx} className="feature-item-card glass-panel">
                <div className="feature-top-row">
                  <div className="feature-icon-box">
                    <CheckCircle2 size={18} className="text-cyan" />
                  </div>
                  {feat.badge && (
                    <span className="badge badge-offline badge-sm">{feat.badge}</span>
                  )}
                </div>
                <h3 className="feature-item-title">{feat.title}</h3>
                <p className="feature-item-desc">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL SCREENSHOT GALLERY */}
      <section id="screenshots" className="detail-section section-gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Layers size={13} className="text-cyan" />
              <span>Visual Interface</span>
            </div>
            <h2 className="section-title">Interface & Real Screenshots</h2>
            <p className="section-subtitle">
              Actual screenshots captured from the live extension interface.
            </p>
          </div>

          <ScreenshotGallery screenshots={product.screenshots} productName={product.shortName} />
        </div>
      </section>

      {/* 5. WHO IT'S FOR */}
      <section className="detail-section section-audience">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <UserCheck size={13} className="text-emerald" />
              <span>Use Cases</span>
            </div>
            <h2 className="section-title">Who Is {product.shortName} For?</h2>
            <p className="section-subtitle">
              Built for real people solving specific friction points.
            </p>
          </div>

          <div className="audience-grid">
            {product.targetAudiences.map((aud, idx) => (
              <div key={idx} className="audience-card glass-panel">
                <div className="audience-role-badge">{aud.role}</div>
                <div className="audience-problem">
                  <strong>The Friction:</strong> {aud.problem}
                </div>
                <div className="audience-benefit">
                  <Check size={14} className="text-emerald" />
                  <span>
                    <strong>The Solution:</strong> {aud.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING */}
      {product.pricingTiers && product.pricingTiers.length > 0 && (
        <section id="pricing" className="detail-section section-pricing">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <Sparkles size={13} className="text-cyan" />
                <span>Simple Pricing</span>
              </div>
              <h2 className="section-title">Transparent, Honest Pricing</h2>
              <p className="section-subtitle">
                No hidden fees or unexpected lock-ins. Cancel anytime with a single click.
              </p>
            </div>

            <div className={`pricing-grid tiers-count-${product.pricingTiers.length}`}>
              {product.pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`pricing-card glass-panel ${tier.highlight ? 'pricing-highlight' : ''}`}
                >
                  {tier.badge && <span className="pricing-tier-badge">{tier.badge}</span>}
                  <h3 className="tier-name">{tier.name}</h3>
                  <div className="tier-price-row">
                    <span className="tier-amount">{tier.price}</span>
                    {tier.period && <span className="tier-period">/ {tier.period}</span>}
                  </div>

                  <ul className="tier-features-list">
                    {tier.features.map((f, i) => (
                      <li key={i} className="tier-feature">
                        <Check size={14} className="text-emerald" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.chromeStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${tier.highlight ? 'btn-primary' : 'btn-secondary'} btn-lg tier-cta-btn`}
                  >
                    <span>{tier.ctaText}</span>
                    <ExternalLink size={15} />
                  </a>

                  {tier.ctaSubtext && <div className="tier-subtext">{tier.ctaSubtext}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. PERMISSIONS & PRIVACY AUDIT */}
      <section className="detail-section section-permissions">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <ShieldCheck size={13} className="text-emerald" />
              <span>Full Privacy Audit</span>
            </div>
            <h2 className="section-title">Audited Permissions & Privacy</h2>
            <p className="section-subtitle">
              We believe in complete technical transparency. Here is every permission requested and why.
            </p>
          </div>

          <div className="privacy-audit-card glass-panel">
            <div className="audit-guarantee-box">
              <ShieldCheck size={28} className="text-emerald" />
              <div>
                <h4 className="guarantee-title">Our Privacy Guarantee for {product.shortName}</h4>
                <p className="guarantee-desc">{product.privacy.guarantee}</p>
              </div>
            </div>

            <h4 className="permissions-table-title">Extension Permissions Breakdown</h4>
            <div className="permissions-list">
              {product.permissions.map((perm, idx) => (
                <div key={idx} className="permission-row">
                  <div className="perm-name-col">
                    <code className="perm-code">{perm.name}</code>
                    <span className={`perm-req-badge ${perm.required ? 'badge-required' : 'badge-optional'}`}>
                      {perm.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                  <div className="perm-desc-col">{perm.purpose}</div>
                </div>
              ))}
            </div>

            {product.technicalLimitations && product.technicalLimitations.length > 0 && (
              <div className="limitations-box">
                <div className="limitations-header">
                  <AlertCircle size={16} className="text-amber" />
                  <span>Technical Limitations & Known Constraints</span>
                </div>
                <ul className="limitations-list">
                  {product.technicalLimitations.map((lim, i) => (
                    <li key={i}>{lim}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. PRODUCT SPECIFIC FAQ */}
      <section className="detail-section section-faq">
        <div className="container faq-container">
          <div className="section-header">
            <div className="section-badge">
              <HelpCircle size={13} className="text-cyan" />
              <span>Got Questions?</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common queries about {product.shortName}.</p>
          </div>

          <div className="faq-accordion">
            {product.faq.map((item, idx) => (
              <div key={idx} className={`faq-row ${openFaqIndex === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} className={`faq-arrow ${openFaqIndex === idx ? 'rotated' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="faq-answer-panel animate-fade-in">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROMINENT BOTTOM CHROME STORE CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card glass-panel">
            <img
              src={product.icon}
              alt={product.name}
              className="final-cta-icon"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
              }}
            />
            <h3 className="final-cta-title">Ready to install {product.shortName}?</h3>
            <p className="final-cta-desc">
              Available instantly from the official Chrome Web Store. Runs on Chrome, Edge, Brave, and all Chromium browsers.
            </p>
            <a
              href={product.chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-store btn-lg"
            >
              <ExternalLink size={18} />
              <span>Add to Chrome — It Takes 5 Seconds</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. CROSS-PROMOTION LOOP ("You might also like") */}
      <CrossPromotion currentProductSlug={product.slug} />
    </div>
  );
};
