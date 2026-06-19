"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Status badge with controlled accent. */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "accent" | "neutral" | "warn" | "ok";
  className?: string;
}) {
  const tones: Record<string, string> = {
    accent: "border-accent/40 text-accent bg-[color:var(--win-accent)]/10",
    neutral: "border-white/15 text-graphite-200 bg-white/5",
    warn: "border-amber-400/30 text-amber-200 bg-amber-400/10",
    ok: "border-emerald-400/30 text-emerald-200 bg-emerald-400/10",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Reusable data card with hover micro-interaction. */
export function DataCard({
  children,
  className,
  index = 0,
  interactive = true,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  interactive?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4), ease: "easeOut" }}
      whileHover={interactive && !reduce ? { y: -4 } : undefined}
      className={cn(
        "group relative rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors",
        interactive && "hover:border-accent/40 hover:bg-white/[0.05]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

/** Lead answer paragraph used under window headers. */
export function AnswerText({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-3xl text-pretty text-base leading-relaxed text-graphite-200 sm:text-lg">
      {children}
    </p>
  );
}

/** Highlighted ecosystem message callout. */
export function MessageCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl border border-accent/25 bg-[color:var(--win-accent)]/[0.06] p-5">
      <span
        className="absolute inset-y-0 start-0 w-1"
        style={{ backgroundColor: "var(--win-accent)" }}
        aria-hidden
      />
      <p className="ps-2 text-pretty text-sm font-medium leading-relaxed text-white sm:text-base">
        {children}
      </p>
    </div>
  );
}

/** Section eyebrow label. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
      {children}
    </p>
  );
}
