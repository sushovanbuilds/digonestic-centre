import { centre } from '../config/centre';

export function getThemeVariables(): Record<string, string> {
  return {
    '--paper': centre.theme.paper,
    '--ink': centre.theme.ink,
    '--primary': centre.theme.primary,
    '--tint': centre.theme.tint,
    '--rule': centre.theme.rule,
    '--wa': centre.theme.wa,
  };
}

export function getThemeStyleString(): string {
  const vars = getThemeVariables();
  return Object.entries(vars)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
}
