import { useState, useRef, type ReactNode, type MouseEvent } from 'react';

interface Ring {
  id: number;
  x: number;
  y: number;
}

interface PressProps {
  children: ReactNode;
  className?: string;
}

export default function Press({ children, className = '' }: PressProps) {
  const [rings, setRings] = useState<Ring[]>([]);
  const nextId = useRef(0);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextId.current++;

    setRings((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRings((prev) => prev.filter((r) => r.id !== id));
    }, 400);
  };

  return (
    <div className={`press-wrapper ${className}`} onClick={handleClick}>
      {children}
      {rings.map((ring) => (
        <span
          key={ring.id}
          className="press-ring"
          style={{
            left: ring.x,
            top: ring.y,
          }}
        />
      ))}
      <style>{`
        .press-wrapper {
          position: relative;
          display: inline-flex;
          width: 100%;
          overflow: hidden;
          border-radius: inherit;
        }
        @media (min-width: 640px) {
          .press-wrapper {
            width: auto;
          }
        }
        .press-ring {
          position: absolute;
          width: 80px;
          height: 80px;
          margin-left: -40px;
          margin-top: -40px;
          border-radius: 50%;
          border: 2px solid currentColor;
          opacity: 0.8;
          pointer-events: none;
          animation: press-ring-expand 400ms ease-out forwards;
        }
        @keyframes press-ring-expand {
          0% {
            transform: scale(0.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .press-ring {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
