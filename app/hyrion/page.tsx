import { RouteShell } from "@/components/RouteShell";
import { HyrionSection } from "@/components/sections";

export const metadata = { title: "HYRION Value Governance" };

export default function Page() {
  return (
    <RouteShell>
      <HyrionSection full={false} />
    </RouteShell>
  );
}
