import { centre as centreDefault } from './centre.ts';
import { centreDemo } from './centre.demo.ts';

// Default to the pitch demo configuration unless explicitly disabled
const usePlaceholders =
  (typeof import.meta !== 'undefined' &&
    Boolean((import.meta as Record<string, any>).env?.PUBLIC_DEMO === '0')) ||
  Boolean((globalThis as Record<string, any>).process?.env?.PUBLIC_DEMO === '0');

export const centre = usePlaceholders ? centreDefault : centreDemo;
export * from './types.ts';
export * from './ui.ts';
