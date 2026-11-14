import { useEffect, useState, useRef } from 'react';

interface TextAnimationProps {
  text: string;
  className?: string;
  id?: string;
}

export default function TextAnimation({ text, className = '', id }: TextAnimationProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <h2
      ref={ref}
      id={id}
      className={`text-animated-h2 ${className} ${animated ? 'is-animated' : ''}`}
    >
      {text}
      <style>{`
        .text-animated-h2 {
          color: var(--ink);
          font-weight: 650;
          font-size: var(--font-size-h2);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        @media (prefers-reduced-motion: no-preference) {
          .text-animated-h2.is-animated {
            animation: text-reveal-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
        }
        @keyframes text-reveal-in {
          from {
            opacity: 0.2;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </h2>
  );
}
