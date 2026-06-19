"use client";

import { useI18n } from "@/lib/i18n";
import { ModuleGrid } from "./ModuleGrid";

/** AkanilGatewayPanel — Window 10. Strategic origination & institutional gateway. */
export function AkanilGatewayPanel() {
  const { content } = useI18n();
  return <ModuleGrid modules={content.windows.akanil.modules} columns={3} />;
}
