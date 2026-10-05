import React from 'react';
import { Sparkles } from 'lucide-react';
import { getRelatedProducts } from '../../data/products';
import { ProductCard } from './ProductCard';
import './CrossPromotion.css';

interface CrossPromotionProps {
  currentProductSlug: string;
}

export const CrossPromotion: React.FC<CrossPromotionProps> = ({ currentProductSlug }) => {
  const relatedProducts = getRelatedProducts(currentProductSlug);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="cross-promo-section">
      <div className="container">
        <div className="cross-promo-header">
          <div className="cross-promo-badge">
            <Sparkles size={14} className="text-cyan" />
            <span>Discover More Precision Tools</span>
          </div>
          <h2 className="cross-promo-title">
            Explore the Rest of the Ecosystem
          </h2>
          <p className="cross-promo-sub">
            SubtleWorks extensions are engineered to work independently with zero bloat and uncompromising quality.
          </p>
        </div>

        <div className="cross-promo-grid">
          {relatedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};
