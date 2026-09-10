import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/panel/user": "Dashboard",

  "/panel/user/profile": "Profil",

  "/panel/user/schedule": "Harmonogram",

  "/panel/user/ranking": "Ranking",

  "/panel/user/history": "Historia obecności",

  "/panel/user/notifications": "Powiadomienia",

  "/panel/user/messages": "Wiadomości",

  "/panel/moderator": "Dashboard",

  "/panel/moderator/attendance": "Obecności",

  "/panel/moderator/schedule": "Harmonogram",

  "/panel/moderator/messages": "Wiadomości",

  "/panel/admin": "Dashboard",

  "/panel/admin/users": "Użytkownicy",

  "/panel/admin/settings": "Ustawienia",
  "/panel/user/calendar": "Kalendarz",
};

function getPageTitle(pathname: string) {
  return pageTitles[pathname] ?? "Panel";
}

export function Topbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="border-b border-slate-800/70  px-6 py-5 bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.6)]">
      <div className="flex items-center justify-between">
        <div className="font-serif text-2xl text-amber-200">
          {getPageTitle(location.pathname)}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">{user?.name}</span>

          <button
            onClick={logout}
            className="rounded-2xl cursor-pointer bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(251,191,36,0.28)] transition hover:from-amber-300 hover:via-amber-400 hover:to-amber-500"
          >
            Wyloguj
          </button>
        </div>
      </div>
    </header>
  );
}
