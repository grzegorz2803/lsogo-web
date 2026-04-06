import { useAuth } from "../../hooks/useAuth";

export function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-4">
      <div className="font-medium text-slate-200">Panel {user?.role}</div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-400">{user?.name}</span>
        <button
          onClick={logout}
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm text-white hover:bg-amber-600"
        >
          Wyloguj
        </button>
      </div>
    </header>
  );
}
