"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DATA_ROOM_DOCUMENTS } from "@/lib/ecosystem";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui";
import type { DataRoomAccess } from "@/types";

/**
 * SecureDataRoom — Window 14.
 * Governed document cards with controlled access statuses. Architecture is
 * ready for future Supabase/Auth gating: replace the static list + add an
 * access check before revealing document links.
 */
const ACCESS_TONE: Record<DataRoomAccess, "accent" | "neutral" | "warn" | "ok"> = {
  publicPreview: "ok",
  ndaRequired: "warn",
  restricted: "warn",
  partnerOnly: "accent",
  governanceLayer: "neutral",
  decisionLayer: "accent",
};

export function SecureDataRoom() {
  const { content } = useI18n();
  const reduce = useReducedMotion();

  return (
    <div>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-graphite-300">
          {content.global.poweredByHyrion}
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {DATA_ROOM_DOCUMENTS.map((doc, i) => (
          <motion.article
            key={doc.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
            className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-black/30 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Badge tone={ACCESS_TONE[doc.access]}>
                {content.accessLabels[doc.access]}
              </Badge>
            </div>
            <h3 className="text-sm font-semibold text-white">{doc.title}</h3>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-graphite-300">
              {doc.description}
            </p>
            <button
              type="button"
              disabled={doc.access !== "publicPreview"}
              className="mt-3 inline-flex items-center gap-1.5 self-start rounded-md border border-white/10 px-2.5 py-1.5 text-xs font-medium text-graphite-200 transition-colors enabled:hover:border-accent/50 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {doc.access === "publicPreview" ? "Open preview" : "Locked"} →
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
