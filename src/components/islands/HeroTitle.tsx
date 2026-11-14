import { useEffect, useState } from 'react';

interface HeroTitleProps {
  title: string;
}

export default function HeroTitle({ title }: HeroTitleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = title.split(' ');

  return (
    <h1 className="hero-heading">
      {words.map((word, i) => (
        <span
          key={i}
          className={`hero-word ${mounted ? 'visible' : ''}`}
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
      <style>{`
        .hero-heading {
          margin: 0 0 var(--space-16) 0;
          font-size: var(--font-size-h1);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .hero-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-word.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-word {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </h1>
  );
}
