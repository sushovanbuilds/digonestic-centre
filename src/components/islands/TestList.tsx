import { useState } from 'react';

export interface TestItem {
  id: string;
  name: string;
  blurb: string;
  includes: string[];
  prep?: string;
  price?: string;
  waUrl: string;
}

interface TestListProps {
  tests: TestItem[];
  initialOpenId?: string;
  showPrices?: boolean;
  testHeaderLabel?: string;
  detailsHeaderLabel?: string;
  whatsIncludedLabel?: string;
  preparationLabel?: string;
  bookTestWhatsAppLabel?: string;
}

export default function TestList({
  tests,
  initialOpenId,
  showPrices = false,
  testHeaderLabel = 'Test',
  detailsHeaderLabel = 'Details',
  whatsIncludedLabel = "What's included",
  preparationLabel = 'Preparation',
  bookTestWhatsAppLabel = 'Book this test on WhatsApp',
}: TestListProps) {
  // One row open at a time; collapsed by default unless initialOpenId is specified
  const [openId, setOpenId] = useState<string | null>(initialOpenId ?? null);

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="test-card-container">
      {/* Small Header Row inside the card */}
      <div className="test-card-header">
        <span className="th-left">{testHeaderLabel}</span>
        <span className="th-right">{detailsHeaderLabel}</span>
      </div>

      <div className="test-card-rows">
        {tests.map((test) => {
          const isOpen = openId === test.id;
          const panelId = `panel-${test.id}`;
          const buttonId = `button-${test.id}`;

          return (
            <div
              key={test.id}
              className={`test-row-wrapper ${isOpen ? 'is-expanded' : ''}`}
            >
              <button
                id={buttonId}
                type="button"
                className="test-row-toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleRow(test.id)}
              >
                <div className="test-summary">
                  <span className="test-name">{test.name}</span>
                  <span className="test-blurb">{test.blurb}</span>
                </div>
                <div className="test-row-actions">
                  {showPrices && test.price && (
                    <span className="test-price-tag">{test.price}</span>
                  )}
                  <span className={`test-chevron ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
              </button>

              {/* Expandable Panel */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`test-panel ${isOpen ? 'open' : ''}`}
              >
                <div className="test-panel-inner">
                  {/* What's included */}
                  <div className="test-includes-section">
                    <p className="test-section-title">{whatsIncludedLabel}:</p>
                    <ul className="test-includes-bullets">
                      {test.includes.map((inc, i) => (
                        <li key={i} className="test-bullet-item">{inc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation Box with Info Icon */}
                  {test.prep && (
                    <div className="test-prep-box">
                      <span className="prep-icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </span>
                      <div className="prep-content">
                        <span className="prep-title">{preparationLabel}</span>
                        <p className="prep-text">{test.prep}</p>
                      </div>
                    </div>
                  )}

                  {/* Price in Open Area */}
                  {showPrices && test.price && (
                    <div className="test-open-price-row">
                      <span className="test-open-price-label">Price:</span>
                      <span className="test-open-price-val">{test.price}</span>
                    </div>
                  )}

                  {/* Full-width Green WhatsApp Booking Button */}
                  <div className="test-action-wrap">
                    <a
                      href={test.waUrl}
                      className="btn btn-wa full-width-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
                      </svg>
                      <span>{bookTestWhatsAppLabel}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        /* ONE bordered white card (radius 10px) matching Stitch */
        .test-card-container {
          background-color: #ffffff;
          border: 1px solid var(--rule);
          border-radius: var(--radius-card);
          overflow: hidden;
        }

        .test-card-header {
          display: flex;
          justify-content: space-between;
          padding: var(--space-12) var(--space-20);
          background-color: var(--paper);
          border-bottom: 1px solid var(--rule);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--ink-soft);
        }

        .test-card-rows {
          display: flex;
          flex-direction: column;
        }

        .test-row-wrapper {
          border-bottom: 1px solid var(--rule);
          transition: background-color 0.2s ease;
        }

        .test-row-wrapper:last-child {
          border-bottom: none;
        }

        .test-row-wrapper.is-expanded {
          background-color: var(--tint);
        }

        .test-row-toggle {
          width: 100%;
          min-height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-16) var(--space-20);
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: background-color 0.15s ease;
        }

        .test-row-toggle:hover {
          background-color: rgba(14, 107, 99, 0.05);
        }

        .test-row-toggle:focus-visible {
          outline: 3px solid var(--primary);
          outline-offset: -2px;
        }

        .test-summary {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-right: var(--space-12);
        }

        .test-name {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--ink);
        }

        .test-blurb {
          font-size: var(--font-size-small);
          color: var(--ink-soft);
        }

        .test-row-actions {
          display: flex;
          align-items: center;
          gap: var(--space-12);
        }

        .test-price-tag {
          font-size: 0.9375rem;
          font-weight: 650;
          color: var(--primary);
          white-space: nowrap;
        }

        .test-open-price-row {
          display: flex;
          align-items: baseline;
          gap: var(--space-8);
          margin-bottom: var(--space-16);
          font-size: 0.9375rem;
          color: var(--ink);
        }

        .test-open-price-label {
          color: var(--ink-soft);
          font-size: 0.8125rem;
        }

        .test-open-price-val {
          font-weight: 700;
          color: var(--primary);
          font-size: 1.125rem;
        }

        .test-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          min-width: 32px;
          color: var(--ink-soft);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .test-chevron.is-rotated {
          transform: rotate(180deg);
          color: var(--primary);
        }

        /* AutoHeight + blur-fade content swap */
        .test-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .test-panel.open {
          grid-template-rows: 1fr;
        }

        .test-panel-inner {
          overflow: hidden;
          padding: 0 var(--space-20);
          opacity: 0;
          filter: blur(4px);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .test-panel.open .test-panel-inner {
          padding-bottom: var(--space-24);
          opacity: 1;
          filter: blur(0);
        }

        .test-includes-section {
          margin-bottom: var(--space-16);
          padding-top: var(--space-8);
        }

        .test-section-title {
          font-size: var(--font-size-small);
          font-weight: 600;
          color: var(--ink);
          margin-bottom: var(--space-8);
        }

        .test-includes-bullets {
          margin: 0;
          padding-left: 20px;
          color: var(--ink-soft);
          font-size: var(--font-size-small);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* Preparation Box */
        .test-prep-box {
          display: flex;
          align-items: flex-start;
          gap: var(--space-12);
          background-color: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--rule);
          border-radius: var(--radius-row);
          padding: var(--space-12) var(--space-16);
          margin-bottom: var(--space-20);
        }

        .prep-icon {
          color: var(--primary);
          margin-top: 2px;
          display: flex;
        }

        .prep-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .prep-title {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--ink);
        }

        .prep-text {
          font-size: var(--font-size-small);
          color: var(--ink-soft);
          margin: 0;
        }

        .test-action-wrap {
          display: flex;
        }

        .full-width-btn {
          width: 100%;
          min-height: 48px;
        }

        @media (max-width: 480px) {
          .test-row-toggle {
            padding: var(--space-12);
          }
          .test-summary {
            padding-right: var(--space-8);
          }
          .test-name {
            font-size: 0.9375rem;
          }
          .test-blurb {
            font-size: 0.8125rem;
          }
          .test-panel-inner {
            padding: var(--space-16);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .test-chevron {
            transition: none !important;
          }
          .test-panel {
            transition: none !important;
          }
          .test-panel-inner {
            filter: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
