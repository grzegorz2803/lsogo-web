import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { Topbar } from "../components/Dashboard/Topbar";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-950 text-slate-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
