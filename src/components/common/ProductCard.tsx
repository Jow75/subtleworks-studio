import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Keyboard, Copy, Check, FileText, Camera, Layers, Crop } from 'lucide-react';
import type { Product } from '../../data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap size={13} className="text-cyan" />;
      case 'Keyboard': return <Keyboard size={13} className="text-cyan" />;
      case 'FileText': return <FileText size={13} className="text-cyan" />;
      case 'Copy': return <Copy size={13} className="text-cyan" />;
      case 'Camera': return <Camera size={13} className="text-cyan" />;
      case 'Layers': return <Layers size={13} className="text-cyan" />;
      case 'Crop': return <Crop size={13} className="text-cyan" />;
      case 'ShieldCheck': return <ShieldCheck size={13} className="text-emerald" />;
      default: return <Check size={13} className="text-cyan" />;
    }
  };

  return (
    <div className={`product-card glass-panel ${featured ? 'card-featured' : ''}`}>
      {/* Card Header */}
      <div className="card-header">
        <div className="card-header-meta">
          <div className="card-category-row">
            <span className="card-category">{product.category}</span>
            <span className="card-version">v{product.version}</span>
          </div>
          <div className="card-badge-wrap">
            <span className={`badge ${product.pricingType === 'free' ? 'badge-free' : 'badge-pro'}`}>
              <span className="badge-dot" />
              {product.priceBadge}
            </span>
          </div>
        </div>

        <div className="card-icon-title">
          <img
            src={product.icon}
            alt={product.name}
            className="product-icon"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
            }}
          />
          <h3 className="product-card-title">
            <Link to={`/extensions/${product.slug}`}>{product.shortName}</Link>
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="product-card-desc">{product.shortDescription}</p>

      {/* Key Highlights */}
      <div className="card-highlights">
        {product.highlights.slice(0, 3).map((hl, i) => (
          <div key={i} className="highlight-item">
            <span className="highlight-icon-box">{getHighlightIcon(hl.iconName)}</span>
            <span className="highlight-text">
              <strong>{hl.title}:</strong> {hl.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Hero Preview Thumbnail */}
      <div className="card-media-preview">
        <Link to={`/extensions/${product.slug}`} tabIndex={-1} aria-hidden="true">
          <img
            src={product.screenshots[0]?.src || product.heroPreview}
            alt={`${product.shortName} interface screenshot`}
            className="preview-image"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = product.heroPreview;
            }}
          />
          <div className="preview-overlay">
            <span className="preview-cta">
              Explore Live Interactive Demo <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      </div>

      {/* Card Footer CTAs */}
      <div className="card-actions">
        <a
          href={product.chromeStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-store btn-sm card-store-btn"
          aria-label={`Install ${product.shortName} on Chrome Web Store`}
        >
          <ExternalLink size={14} />
          <span>Add to Chrome</span>
        </a>

        <Link
          to={`/extensions/${product.slug}`}
          className="btn btn-outline btn-sm card-details-btn"
        >
          <span>Learn More</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};
