import type { ReactNode } from 'react';

export default function Press({ children }: { children?: ReactNode }) {
  return <div className="press-island">{children}</div>;
}
