import { useAuth } from "../../hooks/useAuth";

export function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header
      className="border-b border-slate-800/80  px-6 py-5 bg-slate-950/80 backdrop-blur-xl
shadow-[0_10px_40px_rgba(2,6,23,0.6)]"
    >
      <div className="flex items-center justify-between">
        <div className="font-serif text-2xl text-amber-200">
          Panel {user?.role}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">{user?.name}</span>

          <button
            onClick={logout}
            className="rounded-xl border border-amber-400/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-200 transition hover:bg-amber-500/20"
          >
            Wyloguj
          </button>
        </div>
      </div>
    </header>
  );
}
