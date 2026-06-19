import { RouteShell } from "@/components/RouteShell";
import { MarketValueSection } from "@/components/sections";

export const metadata = { title: "Market Value Board" };

export default function Page() {
  return (
    <RouteShell>
      <MarketValueSection full={false} />
    </RouteShell>
  );
}
