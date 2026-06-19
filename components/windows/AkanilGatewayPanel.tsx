"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ModuleGrid } from "./ModuleGrid";

/**
 * AkanilGatewayPanel — Window 10.
 * Strategic originator & institutional gateway. A concentric "gateway" motif
 * frames the origination modules — obsidian / muted gold / ivory.
 */
export function AkanilGatewayPanel() {
  const { content } = useI18n();
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      {/* Gateway motif */}
      <div className="relative mx-auto aspect-square w-full max-w-[18rem]">
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3].map((ring) => (
            <span
              key={ring}
              className="absolute rounded-full border border-accent/20"
              style={{ inset: `${ring * 12}%` }}
            />
          ))}
          {!reduce && (
            <motion.span
              className="absolute rounded-full border border-accent/40"
              style={{ inset: "0%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <span
                className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
                style={{ boxShadow: "0 0 12px var(--win-accent)" }}
              />
            </motion.span>
          )}
          <div className="relative flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-graphite-950/80 px-5 py-4 text-center backdrop-blur win-glow">
            <span className="text-sm font-semibold text-white">AKANIL</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
              {content.micro.gatewayConsole}
            </span>
          </div>
        </div>
      </div>

      {/* Origination modules */}
      <div>
        <ModuleGrid modules={content.windows.akanil.modules} columns={2} />
      </div>
    </div>
  );
}
