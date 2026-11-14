import { useState } from 'react';

export interface TestItem {
  id: string;
  name: string;
  blurb: string;
  includes: string[];
  waUrl: string;
}

interface TestListProps {
  tests: TestItem[];
  bookTestLabel?: string;
  whatsIncludedLabel?: string;
}

export default function TestList({
  tests,
  bookTestLabel = 'Book this test',
  whatsIncludedLabel = "What's included",
}: TestListProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="test-list-ruled">
      {tests.map((test) => {
        const isOpen = openId === test.id;
        const panelId = `panel-${test.id}`;
        const buttonId = `button-${test.id}`;

        return (
          <div key={test.id} className="test-row-item">
            <button
              id={buttonId}
              type="button"
              className="test-row-button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleRow(test.id)}
            >
              <div className="test-row-info">
                <span className="test-row-name">{test.name}</span>
                <span className="test-row-blurb">{test.blurb}</span>
              </div>
              <span className={`test-chevron ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`test-panel ${isOpen ? 'open' : ''}`}
            >
              <div className="test-panel-inner">
                <p className="test-includes-heading">{whatsIncludedLabel}:</p>
                <ul className="test-includes-list">
                  {test.includes.map((item, idx) => (
                    <li key={idx} className="test-includes-item">{item}</li>
                  ))}
                </ul>
                <div className="test-panel-actions">
                  <a
                    href={test.waUrl}
                    className="btn btn-wa btn-row-book"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {bookTestLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .test-list-ruled {
          border-top: 1px solid var(--rule);
        }
        .test-row-item {
          border-bottom: 1px solid var(--rule);
        }
        .test-row-button {
          width: 100%;
          min-height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-16) var(--space-12);
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          border-radius: var(--radius-row);
          transition: background-color 0.15s ease;
        }
        .test-row-button:hover,
        .test-row-button:focus-visible {
          background-color: var(--tint);
        }
        .test-row-button:focus-visible {
          outline: 3px solid var(--primary);
          outline-offset: -2px;
        }
        .test-row-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .test-row-name {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--ink);
        }
        .test-row-blurb {
          font-size: var(--font-size-small);
          color: var(--ink-soft);
        }
        .test-chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          color: var(--ink-soft);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .test-chevron.rotated {
          transform: rotate(180deg);
        }
        /* AutoHeight + blur swap (CSS Grid 0fr -> 1fr with opacity blur) */
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
          padding: 0 var(--space-12);
          opacity: 0;
          filter: blur(4px);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .test-panel.open .test-panel-inner {
          padding-bottom: var(--space-24);
          opacity: 1;
          filter: blur(0);
        }
        .test-includes-heading {
          font-size: var(--font-size-small);
          font-weight: 600;
          color: var(--ink);
          margin-bottom: var(--space-8);
        }
        .test-includes-list {
          margin: 0 0 var(--space-16) 0;
          padding-left: 20px;
          color: var(--ink-soft);
          font-size: var(--font-size-small);
        }
        .test-includes-item {
          margin-bottom: 4px;
        }
        .test-panel-actions {
          display: flex;
        }
        .btn-row-book {
          min-height: 48px;
          padding: 0 var(--space-20);
          font-size: var(--font-size-small);
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
