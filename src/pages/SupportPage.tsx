import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, Bug, Lightbulb, HelpCircle, ChevronDown } from 'lucide-react';
import { STUDIO_METADATA } from '../data/products';
import './SupportPage.css';

export const SupportPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Support & Help Center — SubtleWorks Studio';
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const supportFaqs = [
    {
      q: 'Why doesn’t Snap Flow Studio, Invisible Selection, or Phantom Typer work on chromewebstore.google.com?',
      a: 'Google Chrome strictly blocks all extensions from injecting content scripts into Chrome Web Store pages (chromewebstore.google.com) and internal browser settings (chrome://settings, chrome://extensions) for browser security. On normal websites, the extensions operate normally.'
    },
    {
      q: 'How does Snap Flow Studio Smart-Split PDF prevent slicing text lines in half?',
      a: 'Before dividing tall page captures across A4 or US Letter pages, the local PDF engine performs horizontal whitespace gutter scanning to detect paragraph breaks, placing page divisions naturally in empty spaces rather than bisecting lines of text.'
    },
    {
      q: 'How do I change the keyboard shortcut in Phantom Typer or Snap Flow Studio?',
      a: 'In Phantom Typer, you can configure your trigger key directly in the popup Settings tab. For Snap Flow Studio (Alt+Shift+S for Full Page, Alt+Shift+V for Visible Area) and all other shortcuts, you can customize key combinations directly at chrome://extensions/shortcuts in your browser.'
    },
    {
      q: 'How do I cancel or update my Phantom Typer Pro subscription?',
      a: 'Subscriptions are securely managed through Paystack. You can cancel your subscription anytime with zero penalty. Simply email gmuraguri75@gmail.com with your account email address and we will immediately process your cancellation or refund.'
    },
    {
      q: 'Why did text selection look normal inside a particular widget in Invisible Selection?',
      a: 'A small number of modern web applications use closed "Shadow DOM" boundaries. Because Shadow DOM isolates internal styling, standard extension stylesheets cannot penetrate closed shadow roots. We are constantly improving our bypass strategies.'
    },
    {
      q: 'Do you offer educational or volume licensing?',
      a: 'Yes! If you are a school, bootcamp, or development team needing bulk Pro licenses for testing and screen recording, email us directly.'
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="container support-container">
          <div className="section-badge">
            <HelpCircle size={14} className="text-cyan" />
            <span>SubtleWorks Studio Support • Baziq Hue</span>
          </div>
          <h1 className="support-title">How Can We Help You?</h1>
          <p className="support-lead">
            Have a question about a SubtleWorks Studio extension, encountered a bug, or want to suggest a new feature? You can contact the developer directly.
          </p>
        </div>
      </section>

      <section className="support-content-section">
        <div className="container support-container">
          {/* Quick Action Email Buttons */}
          <div className="support-actions-card glass-panel">
            <h2 className="actions-card-title">Direct Support Channels</h2>
            <p className="actions-card-desc">
              Click any channel below to open a pre-filled email directly to <strong>{STUDIO_METADATA.supportEmail}</strong>:
            </p>

            <div className="action-buttons-grid">
              <a
                href={`mailto:${STUDIO_METADATA.supportEmail}?subject=Support%20Request%20-%20SubtleWorks%20Studio`}
                className="support-action-btn primary-action"
              >
                <Mail size={18} />
                <div>
                  <div className="action-btn-title">General Support</div>
                  <div className="action-btn-sub">Assistance with setup or usage</div>
                </div>
              </a>

              <a
                href={`mailto:${STUDIO_METADATA.supportEmail}?subject=Bug%20Report%20-%20SubtleWorks%20Studio`}
                className="support-action-btn"
              >
                <Bug size={18} className="text-amber" />
                <div>
                  <div className="action-btn-title">Report a Bug</div>
                  <div className="action-btn-sub">Website or behavior issue</div>
                </div>
              </a>

              <a
                href={`mailto:${STUDIO_METADATA.supportEmail}?subject=Feature%20Request%20-%20SubtleWorks%20Studio`}
                className="support-action-btn"
              >
                <Lightbulb size={18} className="text-cyan" />
                <div>
                  <div className="action-btn-title">Feature Request</div>
                  <div className="action-btn-sub">Suggest ideas for future updates</div>
                </div>
              </a>

              <a
                href={`mailto:${STUDIO_METADATA.supportEmail}?subject=Billing%20Help%20-%20SubtleWorks%20Studio`}
                className="support-action-btn"
              >
                <MessageSquare size={18} className="text-emerald" />
                <div>
                  <div className="action-btn-title">Billing & License</div>
                  <div className="action-btn-sub">Subscription or payment help</div>
                </div>
              </a>
            </div>
          </div>

          {/* Troubleshooting FAQ */}
          <div className="troubleshooting-section">
            <h2 className="troubleshooting-title">Troubleshooting & Known Behaviors</h2>
            <div className="faq-accordion">
              {supportFaqs.map((faq, idx) => (
                <div key={idx} className={`faq-row ${openFaqIndex === idx ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIndex === idx}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`faq-arrow ${openFaqIndex === idx ? 'rotated' : ''}`} />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="faq-answer-panel animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Direct Email Card */}
          <div className="direct-email-card glass-panel">
            <Mail size={32} className="text-cyan" />
            <h3>Direct Contact</h3>
            <p>Our typical response time is under 24 hours.</p>
            <a href={`mailto:${STUDIO_METADATA.supportEmail}`} className="direct-email-link">
              {STUDIO_METADATA.supportEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
