import { centre as centreDefault } from './centre.ts';
import { centreDemo } from './centre.demo.ts';

const isDemo =
  (typeof import.meta !== 'undefined' &&
    Boolean((import.meta as Record<string, any>).env?.PUBLIC_DEMO === '1')) ||
  Boolean((globalThis as Record<string, any>).process?.env?.PUBLIC_DEMO === '1');

export const centre = isDemo ? centreDemo : centreDefault;
export * from './types.ts';
export * from './ui.ts';
