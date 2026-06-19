import { RouteShell } from "@/components/RouteShell";
import { MineralsSection } from "@/components/sections";

export const metadata = { title: "Mineral Universe" };

export default function Page() {
  return (
    <RouteShell>
      <MineralsSection full={false} />
    </RouteShell>
  );
}
