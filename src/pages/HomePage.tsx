import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sliders,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Layers,
  HelpCircle,
  Mail,
  Search
} from 'lucide-react';
import { PRODUCTS, STUDIO_METADATA } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { PhantomTyperDemo } from '../components/demos/PhantomTyperDemo';
import { InvisibleSelectionDemo } from '../components/demos/InvisibleSelectionDemo';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'free' | 'freemium'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [heroDemoTab, setHeroDemoTab] = useState<'phantom' | 'invisible'>('phantom');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Filter products based on search and category
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'free' && p.pricingType === 'free') ||
      (activeFilter === 'freemium' && p.pricingType === 'freemium');

    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const generalFaq = [
    {
      q: 'Where do these extensions install from?',
      a: 'All SubtleWorks Studio extensions are published directly on Google’s official Chrome Web Store. You install them with a single click, and Google manages verified automatic updates.'
    },
    {
      q: 'Do any of your extensions sell browsing data or run background miners?',
      a: 'Never. Our core philosophy is radical anti-bloat. Invisible Selection makes zero network requests and runs 100% offline. Phantom Typer only communicates with Google Firebase and Paystack to manage accounts and Pro licenses. Keystrokes and webpage content are never logged or transmitted.'
    },
    {
      q: 'Are these extensions compatible with Brave, Edge, Opera, or Arc?',
      a: 'Yes! Because they are built on standard Chromium Manifest V3 APIs, they install and run smoothly on any Chromium-based desktop browser, including Microsoft Edge, Brave, Opera, Arc, and Vivaldi.'
    },
    {
      q: 'How are new extensions added to the studio?',
      a: 'We actively develop single-purpose utilities based on real workflows. If you have an idea or friction point you want solved, contact our developer directly via email.'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-badge animate-fade-in">
            <Sparkles size={14} className="text-cyan" />
            <span>A Baziq Hue Product Studio</span>
          </div>

          <h1 className="hero-title animate-fade-in">
            Small Chrome extensions that do <span className="text-gradient-cyan">surprisingly useful things.</span>
          </h1>

          <p className="hero-description animate-fade-in">
            SubtleWorks Studio is a Baziq Hue product studio building lightweight, hyper-focused Chrome extensions
            engineered to solve specific browser problems cleanly. Zero bloat, zero tracking, total control.
          </p>

          <div className="hero-cta-group animate-fade-in">
            <a href="#extensions" className="btn btn-primary btn-lg">
              <span>Explore Extensions</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={STUDIO_METADATA.storeDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <ExternalLink size={16} />
              <span>Chrome Web Store</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-row animate-fade-in">
            {STUDIO_METADATA.stats.map((s, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-val">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* 2. INTERACTIVE HERO DEMO SHOWCASE */}
          <div className="hero-showcase animate-fade-in">
            <div className="showcase-tabs-bar">
              <span className="showcase-tab-label">Interactive Live Demonstration:</span>
              <div className="showcase-tab-pills">
                <button
                  type="button"
                  className={`showcase-tab-btn ${heroDemoTab === 'phantom' ? 'active' : ''}`}
                  onClick={() => setHeroDemoTab('phantom')}
                >
                  <span className="dot dot-green" />
                  Phantom Typer Simulator
                </button>
                <button
                  type="button"
                  className={`showcase-tab-btn ${heroDemoTab === 'invisible' ? 'active' : ''}`}
                  onClick={() => setHeroDemoTab('invisible')}
                >
                  <span className="dot dot-green" />
                  Invisible Selection Sandbox
                </button>
              </div>
            </div>

            <div className="showcase-demo-container">
              {heroDemoTab === 'phantom' ? (
                <div>
                  <div className="demo-caption-top">
                    <strong>Phantom Typer:</strong> Dispatches real keyboard events character-by-character with natural velocity variance and typo backspacing.
                  </div>
                  <PhantomTyperDemo />
                </div>
              ) : (
                <div>
                  <div className="demo-caption-top">
                    <strong>Invisible Selection:</strong> Eliminates visible blue highlight rectangles while keeping Ctrl+C copy-paste 100% functional and offline.
                  </div>
                  <InvisibleSelectionDemo />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXTENSIONS DISCOVERY CATALOG SECTION */}
      <section id="extensions" className="catalog-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Layers size={13} className="text-cyan" />
              <span>Product Catalog</span>
            </div>
            <h2 className="section-title">Our Extensions</h2>
            <p className="section-subtitle">
              Engineered with surgical focus. Each tool does one job with uncompromising craftsmanship.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="catalog-controls-bar">
            <div className="filter-pills">
              <button
                type="button"
                className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Tools ({PRODUCTS.length})
              </button>
              <button
                type="button"
                className={`filter-pill ${activeFilter === 'free' ? 'active' : ''}`}
                onClick={() => setActiveFilter('free')}
              >
                100% Free
              </button>
              <button
                type="button"
                className={`filter-pill ${activeFilter === 'freemium' ? 'active' : ''}`}
                onClick={() => setActiveFilter('freemium')}
              >
                Freemium / Pro
              </button>
            </div>

            <div className="catalog-search-box">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                placeholder="Search extensions by feature or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured={product.pricingType === 'freemium'} />
            ))}

            {/* Coming Soon Card */}
            <div className="product-card glass-panel coming-soon-card">
              <div className="card-header">
                <div className="card-header-meta">
                  <div className="card-category-row">
                    <span className="card-category">Next In Pipeline</span>
                  </div>
                  <div className="card-badge-wrap">
                    <span className="badge badge-coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="card-icon-title">
                  <div className="coming-soon-icon">
                    <Sparkles size={24} className="text-cyan" />
                  </div>
                  <h3 className="product-card-title">More Focused Tools</h3>
                </div>
              </div>
              <p className="product-card-desc">
                We are actively prototyping new precision browser extensions to simplify web workflows, developer automation,
                and distraction-free reading.
              </p>
              <div className="coming-soon-features">
                <div className="coming-feature-item">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Manifest V3 native architecture</span>
                </div>
                <div className="coming-feature-item">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Zero unnecessary background permissions</span>
                </div>
                <div className="coming-feature-item">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>No data mining, trackers, or ads</span>
                </div>
              </div>
              <div className="coming-soon-footer">
                <Link to="/support" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                  Suggest an Extension Idea
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY & WHY CHOOSE US */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <ShieldCheck size={13} className="text-emerald" />
              <span>Studio Principles</span>
            </div>
            <h2 className="section-title">The Anti-Bloat Philosophy</h2>
            <p className="section-subtitle">
              Most browser extensions become bloated monsters over time. We take the exact opposite approach.
            </p>
          </div>

          <div className="principles-grid">
            {STUDIO_METADATA.principles.map((pr, idx) => (
              <div key={idx} className="principle-card glass-panel">
                <div className="principle-icon-wrap">
                  {idx === 0 && <Sliders size={20} className="text-cyan" />}
                  {idx === 1 && <ShieldCheck size={20} className="text-emerald" />}
                  {idx === 2 && <Zap size={20} className="text-cyan" />}
                  {idx === 3 && <Sparkles size={20} className="text-purple" />}
                </div>
                <h3 className="principle-title">{pr.title}</h3>
                <p className="principle-desc">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="faq-section">
        <div className="container faq-container">
          <div className="section-header">
            <div className="section-badge">
              <HelpCircle size={13} className="text-cyan" />
              <span>Common Questions</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about our browser tools.</p>
          </div>

          <div className="faq-accordion">
            {generalFaq.map((item, idx) => (
              <div key={idx} className={`faq-row ${openFaqIndex === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} className={`faq-arrow ${openFaqIndex === idx ? 'rotated' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="faq-answer-panel animate-fade-in">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEVELOPER CONTACT & COMMUNITY CTA */}
      <section className="contact-banner-section">
        <div className="container">
          <div className="contact-banner glass-panel">
            <div className="banner-content">
              <h3 className="banner-title">Need a custom feature or have a question?</h3>
              <p className="banner-desc">
                SubtleWorks Studio is an independent product studio under Baziq Hue. We respond directly to every email.
              </p>
            </div>
            <div className="banner-actions">
              <a href={`mailto:${STUDIO_METADATA.supportEmail}`} className="btn btn-primary btn-lg">
                <Mail size={16} />
                <span>Contact {STUDIO_METADATA.supportEmail}</span>
              </a>
              <Link to="/support" className="btn btn-outline btn-lg">
                <span>Support Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
