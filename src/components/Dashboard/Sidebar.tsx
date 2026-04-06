import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Sidebar() {
  const { user } = useAuth();

  const role = user?.role;
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 font-serif text-2xl text-amber-200">LSOgo</h2>
      <nav className="flex flex-col gap-3 text-sm">
        {role === "user" && (
          <>
            <NavLink to="/panel/user">Dashboard</NavLink>
            <NavLink to="/panel/user/profile">Profil</NavLink>
          </>
        )}
        {role === "moderator" && (
          <>
            <NavLink to="/panel/moderator">Dashboard</NavLink>
            <NavLink to="/panel/moderator/attendance">Obecności</NavLink>
            <NavLink to="/panel/moderator/schedule">Harmonogram</NavLink>
          </>
        )}
        {role === "admin" && (
          <>
            <NavLink to="/panel/admin">Dashboard</NavLink>
            <NavLink to="/panel/admin/users">Użytkownicy</NavLink>
            <NavLink to="/panel/admin/settings">Ustawienia</NavLink>
          </>
        )}
      </nav>
    </aside>
  );
}
