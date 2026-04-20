import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Logo } from "../Logo";
function getLinkClass(isActive: boolean) {
  return [
    "block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium transition-colors",
    isActive
      ? " border-amber-400/20 bg-linear-to-r from-amber-500/18 to-amber-400/5 text-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.12)]"
      : "text-slate-300 hover:border-white/8 hover:bg-white/4 hover:text-amber-100",
  ].join(" ");
}

export function Sidebar() {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <aside className="w-72  shrink-0 border-r border-slate-800/80 bg-slate-950/80 backdrop-blur-xl px-6 py-8 ">
      <div className="mb-8 flex items-center gap-4 rounded-[1.75rem] border border-slate-700/50 bg-slate-950/60 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.45)]">
        <Logo className="h-12 w-12 shrink-0" />
        <span className="font-serif text-3xl font-semibold tracking-[0.12em] text-transparent bg-clip-text bg-linear-to-b from-amber-200 to-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]">
          LSOgo
        </span>
      </div>

      <div className="rounded-[1.75rem] border border-slate-700/40 bg-slate-950/50 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
        <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Menu
        </p>
        <nav className="flex flex-col gap-2">
          {role === "user" && (
            <>
              <NavLink
                to="/panel/user"
                end
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/panel/user/schedule"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Harmonogram
              </NavLink>
              <NavLink
                to="/panel/user/profile"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Profil
              </NavLink>
            </>
          )}

          {role === "moderator" && (
            <>
              <NavLink
                to="/panel/moderator"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/panel/moderator/attendance"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Obecności
              </NavLink>

              <NavLink
                to="/panel/moderator/schedule"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Harmonogram
              </NavLink>
            </>
          )}

          {role === "admin" && (
            <>
              <NavLink
                to="/panel/admin"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/panel/admin/users"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Użytkownicy
              </NavLink>

              <NavLink
                to="/panel/admin/settings"
                className={({ isActive }) => getLinkClass(isActive)}
              >
                Ustawienia
              </NavLink>
            </>
          )}
        </nav>
      </div>
      <div className="mt-10 h-px bg-linear-to-r from-transparent via-slate-700/70 to-transparent" />
      <div className="mt-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          LSOgo
        </p>
        <p className="mt-1 text-xs text-slate-600">v1.0</p>
      </div>
    </aside>
  );
}
