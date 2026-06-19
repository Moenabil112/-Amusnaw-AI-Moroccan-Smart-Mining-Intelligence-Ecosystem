"use client";

import { useI18n } from "@/lib/i18n";
import { ModuleGrid } from "./ModuleGrid";

/** ZyntraIntelligenceStack — Window 09. Technology & AI enablement modules. */
export function ZyntraIntelligenceStack() {
  const { content } = useI18n();
  return <ModuleGrid modules={content.windows.zyntra.modules} columns={3} />;
}
