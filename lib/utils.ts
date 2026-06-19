/** Lightweight className combiner (no external dep). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Build inline CSS variable style object from a record. */
export function cssVars(vars: Record<string, string>): React.CSSProperties {
  return vars as React.CSSProperties;
}
