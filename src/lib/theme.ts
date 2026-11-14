import { centre } from '../config/centre';

export function getThemeVariables(): Record<string, string> {
  return {
    '--color-primary': centre.theme.primary,
    '--color-ink': centre.theme.ink,
    '--color-paper': centre.theme.paper,
    '--color-tint': centre.theme.tint,
    '--color-rule': centre.theme.rule,
    '--color-wa': centre.theme.wa,
  };
}

export function getThemeStyleString(): string {
  const vars = getThemeVariables();
  return Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
}
