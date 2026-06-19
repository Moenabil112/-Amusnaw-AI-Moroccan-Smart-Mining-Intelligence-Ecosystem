import { RouteShell } from "@/components/RouteShell";
import { ZyntraSection } from "@/components/sections";

export const metadata = { title: "ZYNTRA Intelligence Stack" };

export default function Page() {
  return (
    <RouteShell>
      <ZyntraSection full={false} />
    </RouteShell>
  );
}
