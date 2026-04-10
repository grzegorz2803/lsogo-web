import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Logo } from "../Logo";
const baseLinkClass =
  "rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-amber-500/10 hover:text-amber-200";
export function Sidebar() {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <aside
      className="w-64 border-r border-slate-800/80 bg-slate-950/80 backdrop-blur-xl
shadow-[inset_-1px_0_0_rgba(255,255,255,0.05)] px-6 py-8 "
    >
      <div className="mb-10 flex items-center gap-4">
        <Logo className="h-12 w-12 shrink-0" />
        <span className="font-serif text-2xl font-semibold tracking-[0.12em] text-transparent bg-clip-text bg-linear-to-b from-amber-200 to-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]">
          LSOgo
        </span>
      </div>

      <nav className="flex flex-col gap-2">
        {role === "user" && (
          <>
            <NavLink
              to="/panel/user"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
              end
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/panel/user/profile"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
            >
              Profil
            </NavLink>
          </>
        )}

        {role === "moderator" && (
          <>
            <NavLink
              to="/panel/moderator"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
              end
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/panel/moderator/attendance"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
            >
              Obecności
            </NavLink>

            <NavLink
              to="/panel/moderator/schedule"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
            >
              Harmonogram
            </NavLink>
          </>
        )}

        {role === "admin" && (
          <>
            <NavLink
              to="/panel/admin"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
              end
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/panel/admin/users"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
            >
              Użytkownicy
            </NavLink>

            <NavLink
              to="/panel/admin/settings"
              className={({ isActive }) =>
                `${baseLinkClass} ${
                  isActive
                    ? "bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/20"
                    : ""
                }`
              }
            >
              Ustawienia
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
}
