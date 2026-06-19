import { RouteShell } from "@/components/RouteShell";
import { EcosystemSection } from "@/components/sections";

export const metadata = { title: "Ecosystem Map" };

export default function Page() {
  return (
    <RouteShell>
      <EcosystemSection full={false} />
    </RouteShell>
  );
}
