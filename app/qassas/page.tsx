import { RouteShell } from "@/components/RouteShell";
import { QassasSection } from "@/components/sections";

export const metadata = { title: "QASSAS Targeting Engine" };

export default function Page() {
  return (
    <RouteShell>
      <QassasSection full={false} />
    </RouteShell>
  );
}
