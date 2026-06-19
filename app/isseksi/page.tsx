import { RouteShell } from "@/components/RouteShell";
import { IsseksiSection } from "@/components/sections";

export const metadata = { title: "Isseksi Copper Value Product" };

export default function Page() {
  return (
    <RouteShell>
      <IsseksiSection full={false} />
    </RouteShell>
  );
}
