import { RouteShell } from "@/components/RouteShell";
import { AkanilSection } from "@/components/sections";

export const metadata = { title: "AKANIL Strategic Gateway" };

export default function Page() {
  return (
    <RouteShell>
      <AkanilSection full={false} />
    </RouteShell>
  );
}
