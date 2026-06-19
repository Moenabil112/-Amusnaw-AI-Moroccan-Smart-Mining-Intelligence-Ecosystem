import { RouteShell } from "@/components/RouteShell";
import { StrategicEntrySection } from "@/components/sections";

export const metadata = { title: "Strategic Entry" };

export default function Page() {
  return (
    <RouteShell>
      <StrategicEntrySection full={false} />
    </RouteShell>
  );
}
