import type { InputStyles } from "../components/inputs";

export const cssPropertiesToString = (
  styles: React.CSSProperties | InputStyles
): string => {
  return Object.entries(styles)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value};`;
    })
    .join("\n  ");
};