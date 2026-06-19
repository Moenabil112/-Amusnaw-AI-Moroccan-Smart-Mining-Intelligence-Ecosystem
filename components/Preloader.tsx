"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LogoBlock } from "./LogoBlock";

/**
 * Preloader — boot animation shown once per session.
 * Morocco-network dots converge into the central Amusnaw AI hub, then the
 * interface opens. Skipped instantly for reduced-motion users.
 */
export function Preloader() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  // Phase 0: connecting the network · Phase 1: system ready confirmation.
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("amusnaw.booted");
    if (seen) {
      setDone(true);
      return;
    }
    // Deliberate two-phase boot: connect (≈2.2s) → "system ready" hold (≈0.6s).
    const toReady = setTimeout(() => setPhase(1), 2200);
    const toDone = setTimeout(() => {
      setDone(true);
      window.sessionStorage.setItem("amusnaw.booted", "1");
    }, 2800);
    return () => {
      clearTimeout(toReady);
      clearTimeout(toDone);
    };
  }, [reduce]);

  // Deterministic node coordinates (a stylized Morocco network cloud).
  const nodes = [
    [22, 30], [34, 22], [48, 34], [60, 24], [72, 38],
    [28, 52], [44, 60], [58, 54], [70, 64], [38, 74],
    [54, 78], [66, 46], [18, 44], [80, 52], [50, 46],
  ];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite-950"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-engineering-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="relative flex w-full max-w-md flex-col items-center px-6">
            <svg
              viewBox="0 0 100 100"
              className="h-56 w-56"
              aria-hidden
            >
              {nodes.map(([x, y], i) => (
                <motion.line
                  key={`l-${i}`}
                  x1={50}
                  y1={50}
                  x2={x}
                  y2={y}
                  stroke="#c8a45c"
                  strokeWidth={0.3}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.35 }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.05 }}
                />
              ))}
              {nodes.map(([x, y], i) => (
                <motion.circle
                  key={`c-${i}`}
                  cx={x}
                  cy={y}
                  r={0.9}
                  fill="#1f8a7d"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                />
              ))}
              <motion.circle
                cx={50}
                cy={50}
                r={4}
                fill="#c8a45c"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </svg>

            <motion.div
              className="mt-6 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <LogoBlock label="A" size={32} />
              <div className="text-start">
                <p className="text-sm font-semibold tracking-tight text-white">
                  {content.meta.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-400">
                  {content.preloader.system}
                </p>
              </div>
            </motion.div>

            {/* Boot progress bar — fills across the connect phase */}
            <div className="mt-6 h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: phase === 1 ? "100%" : "92%" }}
                transition={{ duration: phase === 1 ? 0.4 : 2.2, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              key={phase}
              className="mt-3 flex items-center gap-2 font-mono text-xs text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{ boxShadow: "0 0 8px var(--win-accent)" }}
              />
              {phase === 1
                ? content.preloader.ready
                : `${content.preloader.booting}…`}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
