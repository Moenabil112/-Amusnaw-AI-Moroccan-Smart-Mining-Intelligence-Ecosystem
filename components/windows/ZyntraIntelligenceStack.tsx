"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/**
 * ZyntraIntelligenceStack — Window 09.
 * Technology & AI enablement rendered as a connected vertical stack: each
 * module is a "block" wired to the next by an illuminated spine, evoking an
 * interface/enablement stack rather than a flat list.
 */
export function ZyntraIntelligenceStack() {
  const { content } = useI18n();
  const reduce = useReducedMotion();
  const modules = content.windows.zyntra.modules;

  return (
    <div>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1">
        <span
          className={`h-1.5 w-1.5 rounded-full bg-accent ${reduce ? "" : "animate-pulse-node"}`}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-300">
          {content.micro.stackOnline}
        </span>
      </div>

      <div className="relative">
        {/* Connection spine */}
        <span
          className="absolute bottom-4 start-[15px] top-4 w-px bg-white/10"
          aria-hidden
        />
        <motion.span
          className="absolute start-[15px] top-4 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"
          initial={reduce ? false : { height: 0 }}
          whileInView={{ height: "calc(100% - 2rem)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          aria-hidden
        />

        <ul className="space-y-2">
          {modules.map((m, i) => (
            <motion.li
              key={m}
              initial={reduce ? false : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="relative flex items-center gap-3 ps-0"
            >
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-graphite-950 font-mono text-[10px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-graphite-100 transition-colors hover:border-accent/40">
                {m}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
