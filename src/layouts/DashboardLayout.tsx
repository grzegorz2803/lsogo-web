import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { Topbar } from "../components/Dashboard/Topbar";

export function DashboardLayout() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>
      <div className="relative flex min-h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Topbar />
          <main className="flex-1 p-6 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
