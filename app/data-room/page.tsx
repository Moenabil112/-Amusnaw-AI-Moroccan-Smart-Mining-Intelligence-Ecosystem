import { RouteShell } from "@/components/RouteShell";
import { DataRoomSection } from "@/components/sections";

export const metadata = { title: "Secure Data Room" };

export default function Page() {
  return (
    <RouteShell>
      <DataRoomSection full={false} />
    </RouteShell>
  );
}
