import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProductScreenshot } from '../../data/products';
import './ScreenshotGallery.css';

interface ScreenshotGalleryProps {
  screenshots: ProductScreenshot[];
  productName: string;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots, productName }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  if (!screenshots || screenshots.length === 0) return null;

  const currentScreenshot = screenshots[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-wrapper">
      {/* Active Screenshot Display */}
      <div className="gallery-main-frame">
        <div className="gallery-window-header">
          <div className="gallery-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="gallery-filename">
            {currentScreenshot.tag ? `[${currentScreenshot.tag}] ` : ''}
            {currentScreenshot.title}
          </span>
          <button
            type="button"
            className="gallery-zoom-btn"
            onClick={() => setLightboxOpen(true)}
            aria-label="Enlarge screenshot"
          >
            <Maximize2 size={14} />
          </button>
        </div>

        <div className="gallery-image-viewport" onClick={() => setLightboxOpen(true)}>
          <img
            src={currentScreenshot.src}
            alt={`${productName} — ${currentScreenshot.title}`}
            className="gallery-main-image"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
            }}
          />
          <div className="gallery-caption-overlay">
            <div className="gallery-caption-title">{currentScreenshot.title}</div>
            <p className="gallery-caption-text">{currentScreenshot.caption}</p>
          </div>
        </div>

        {/* Navigation arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-nav-arrow arrow-prev"
              onClick={handlePrev}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="gallery-nav-arrow arrow-next"
              onClick={handleNext}
              aria-label="Next screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {screenshots.length > 1 && (
        <div className="gallery-thumbnails-strip">
          {screenshots.map((s, idx) => (
            <button
              key={idx}
              type="button"
              className={`gallery-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={s.src}
                alt={s.title}
                className="thumb-img"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
                }}
              />
              <span className="thumb-label">{s.tag || `0${idx + 1}`}</span>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="gallery-lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close zoomed screenshot"
            >
              <X size={24} />
            </button>
            <img
              src={currentScreenshot.src}
              alt={currentScreenshot.title}
              className="lightbox-img"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/favicon.svg';
              }}
            />
            <div className="lightbox-footer">
              <h4>{currentScreenshot.title}</h4>
              <p>{currentScreenshot.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
