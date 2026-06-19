import { RouteShell } from "@/components/RouteShell";
import { AguelmousSection } from "@/components/sections";

export const metadata = { title: "Aguelmous Smart Fault R&D" };

export default function Page() {
  return (
    <RouteShell>
      <AguelmousSection full={false} />
    </RouteShell>
  );
}
