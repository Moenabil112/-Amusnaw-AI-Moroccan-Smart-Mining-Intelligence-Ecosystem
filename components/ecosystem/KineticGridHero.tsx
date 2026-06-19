"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ThemeTokenProvider } from "@/components/ThemeTokenProvider";
import { LogoBlock } from "@/components/LogoBlock";
import { ECOSYSTEM_NODES } from "@/lib/ecosystem";
import { THEMES } from "@/lib/themes";

/**
 * KineticGridHero — Window 00 hero surface.
 * Dark boot screen with a kinetic engineering grid, a central Amusnaw AI hub
 * and the system-boot question. Motion is restrained on mobile / reduced-motion.
 */
export function KineticGridHero() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const w = content.windows.boot;

  return (
    <ThemeTokenProvider
      theme="amusnaw"
      as="section"
      className="window-snap relative flex min-h-[100svh] items-center overflow-hidden px-4 py-20 sm:px-6"
      id="boot"
    >
      <div className="bg-engineering-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--win-glow), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-graphite-900/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-graphite-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse-node rounded-full bg-accent" />
            WIN_00 · {w.title}
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-3 text-sm font-medium text-accent"
          >
            {w.question}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {content.meta.name}
            <span className="mt-2 block bg-gradient-to-r from-gold via-gold-soft to-teal-bright bg-clip-text text-2xl font-medium text-transparent sm:text-3xl">
              {content.meta.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-graphite-200 sm:text-lg"
          >
            {content.meta.definition}
          </motion.p>

          {/* Ecosystem layer chips */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-2"
            aria-label="Ecosystem layers"
          >
            {ECOSYSTEM_NODES.map((node) => (
              <Link
                key={node.id}
                href={node.route}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-graphite-900/60 px-3 py-1.5 text-xs font-medium text-graphite-200 transition-colors hover:border-white/25 hover:text-white"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: THEMES[node.theme].accent }}
                />
                {node.name}
              </Link>
            ))}
          </motion.div>

          {/* Primary + secondary CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/ecosystem"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-graphite-950 transition-transform hover:-translate-y-0.5"
            >
              {content.nav.enter}
            </Link>
            <Link
              href="/market-value"
              className="rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-accent/50"
            >
              {content.windows.marketValue.title}
            </Link>
            <Link
              href="/hyrion"
              className="rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-accent/50"
            >
              {content.windows.hyrion.title}
            </Link>
            <Link
              href="/strategic-entry"
              className="rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-accent/50"
            >
              {content.windows.strategicEntry.submit}
            </Link>
          </motion.div>
        </div>

        {/* Central hub visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-8 rounded-full border border-white/[0.07]" />
          <div className="absolute inset-16 rounded-full border border-white/[0.05]" />
          {!reduce &&
            [0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-accent/20"
                style={{ inset: 8 + ring * 32 }}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 40 + ring * 16, repeat: Infinity, ease: "linear" }}
              >
                <span
                  className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 12px var(--win-accent)" }}
                />
              </motion.div>
            ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-graphite-900/70 px-6 py-5 backdrop-blur win-glow">
              <LogoBlock label="A" size={44} />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-300">
                Central Hub
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </ThemeTokenProvider>
  );
}
