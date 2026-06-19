"use client";

import { THEMES, themeToCssVars } from "@/lib/themes";
import type { ThemeKey } from "@/types";
import { cn, cssVars } from "@/lib/utils";

/**
 * ThemeTokenProvider
 * Applies a window's theme as CSS custom properties to its subtree.
 * Every window renders inside one of these so `--win-accent` etc. resolve
 * to that window's palette (consumed via .text-accent, .win-glow, etc.).
 */
export function ThemeTokenProvider({
  theme,
  as: Tag = "div",
  className,
  id,
  children,
}: {
  theme: ThemeKey;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const tokens = THEMES[theme];
  const Component = Tag as React.ElementType;
  return (
    <Component
      id={id}
      data-theme={theme}
      style={cssVars(themeToCssVars(tokens))}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
