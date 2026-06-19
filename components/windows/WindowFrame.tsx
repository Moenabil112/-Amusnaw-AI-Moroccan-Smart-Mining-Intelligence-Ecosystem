"use client";

import { motion, useReducedMotion } from "framer-motion";
import { THEMES } from "@/lib/themes";
import type { ThemeKey } from "@/types";
import { cn } from "@/lib/utils";
import { ThemeTokenProvider } from "@/components/ThemeTokenProvider";

interface WindowFrameProps {
  theme: ThemeKey;
  /** Window ID e.g. "01" */
  windowId?: string;
  /** Theme label override; defaults to the theme's label. */
  label?: string;
  /** Optional eyebrow above the title, usually the question. */
  question?: string;
  title: string;
  /** Window state label shown as a status indicator in the header. */
  state?: string;
  children: React.ReactNode;
  className?: string;
  /** When true the frame stretches to near full-screen (homepage windows). */
  fullScreen?: boolean;
  id?: string;
}

/**
 * WindowFrame — the OS-style window chrome reused by every section.
 * Renders a window header (controls, ID, layer label, live status indicator),
 * a theme accent line, a question eyebrow, a title, and the body. Applies the
 * per-window theme tokens. Open motion is a controlled scale + fade + rise.
 */
export function WindowFrame({
  theme,
  windowId,
  label,
  question,
  title,
  state,
  children,
  className,
  fullScreen = false,
  id,
}: WindowFrameProps) {
  const reduce = useReducedMotion();
  const tokens = THEMES[theme];

  return (
    <ThemeTokenProvider
      theme={theme}
      as="section"
      className={cn(
        "window-snap relative w-full px-4 py-10 sm:px-6 lg:px-8",
        fullScreen && "flex min-h-[100svh] items-center",
        className,
      )}
    >
      {id ? <span id={id} className="absolute -top-20" aria-hidden /> : null}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-window backdrop-blur-md",
        )}
        style={{ backgroundColor: "color-mix(in srgb, var(--win-base) 80%, transparent)" }}
      >
        {/* Window header bar */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-black/40 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: tokens.accent }}
            />
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
            <span className="truncate font-mono text-[11px] uppercase tracking-[0.2em] text-graphite-300">
              {label ?? tokens.label}
            </span>
            <div className="flex shrink-0 items-center gap-2">
              {state ? (
                <span
                  className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-graphite-200 sm:inline-flex"
                  title={state}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      reduce ? "" : "animate-pulse-node",
                    )}
                    style={{ backgroundColor: tokens.accent }}
                  />
                  {state}
                </span>
              ) : null}
              {windowId ? (
                <span className="rounded border border-white/10 px-2 py-0.5 font-mono text-[11px] text-accent">
                  WIN_{windowId}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Theme accent line */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--win-accent), transparent)",
            opacity: 0.7,
          }}
          aria-hidden
        />

        {/* Window body */}
        <div className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-[0.18]"
            style={{
              background:
                "radial-gradient(80% 100% at 50% 0%, var(--win-glow), transparent 70%)",
            }}
            aria-hidden
          />
          <header className="relative mb-6 max-w-3xl">
            {question ? (
              <p className="mb-2 text-sm font-medium text-accent/90">{question}</p>
            ) : null}
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
          </header>
          <div className="relative">{children}</div>
        </div>
      </motion.div>
    </ThemeTokenProvider>
  );
}
