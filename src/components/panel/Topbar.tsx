import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

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
type TopbarProps = {
  onMenuClick: () => void;
};
export function Topbar({ onMenuClick }: TopbarProps) {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="border-b border-slate-800/70  px-6 py-5 bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.6)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex size-10 cursor-pointer items-center justify-center rounded-xl border border-slate-700/60 text-amber-200 transition hover:border-amber-400/30 hover:bg-amber-400/5 lg:hidden"
            aria-label="Otwórz menu"
          >
            <Menu className="size-5" />
          </button>
          <div className="font-serif text-2xl text-amber-200">
            {getPageTitle(location.pathname)}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-slate-400">
            {user?.name}
          </span>

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
