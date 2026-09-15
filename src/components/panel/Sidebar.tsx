import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Logo } from "../UI/Logo";
import { sidebarContent } from "../../content/sidebar";
import { X } from "lucide-react";
import { useEffect } from "react";
function getLinkClass(isActive: boolean) {
  return [
    "block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium transition-colors",
    isActive
      ? " border-amber-400/20 bg-linear-to-r from-amber-500/18 to-amber-400/5 text-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.12)]"
      : "text-slate-300 hover:border-white/8 hover:bg-white/4 hover:text-amber-100",
  ].join(" ");
}
type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user } = useAuth();
  const role = user?.role;
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 w-72 shrink-0 border-r border-slate-800/80 bg-slate-950/95 px-6 py-8 backdrop-blur-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:z-auto lg:block lg:translate-x-0 lg:bg-slate-950/80",
        ].join(" ")}
      >
        <div className="mb-3 flex justify-end lg:hidden">
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 cursor-pointer items-center justify-center rounded-xl border border-slate-700/60 text-slate-400 transition hover:border-amber-400/30 hover:text-amber-200"
            aria-label="Zamknij menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="mb-8 flex items-center gap-4 rounded-[1.75rem] border border-slate-700/50 bg-slate-950/60 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.45)]">
          <Logo className="h-12 w-12 shrink-0" />
          <span className="font-serif text-3xl font-semibold tracking-[0.12em] text-transparent bg-clip-text bg-linear-to-b from-amber-200 to-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]">
            {sidebarContent.logo}
          </span>
        </div>

        <div className="rounded-[1.75rem] border border-slate-700/40 bg-slate-950/50 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
          <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {sidebarContent.title}
          </p>
          <nav className="flex flex-col gap-2">
            {role === "user" && (
              <>
                <NavLink
                  to="/panel/user"
                  end
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.dashboard}
                </NavLink>
                <NavLink
                  to="/panel/user/calendar"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.calendar}
                </NavLink>
                <NavLink
                  to="/panel/user/schedule"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.schedule}
                </NavLink>
                <NavLink
                  to="/panel/user/ranking"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.ranking}
                </NavLink>
                <NavLink
                  to="/panel/user/history"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.history}
                </NavLink>
                <NavLink
                  to="/panel/user/messages"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.messages}
                </NavLink>
                <NavLink
                  to="/panel/user/notifications"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.notifications}
                </NavLink>
                <NavLink
                  to="/panel/user/profile"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {sidebarContent.profile}
                </NavLink>
              </>
            )}

            {role === "moderator" && (
              <>
                <NavLink
                  to="/panel/moderator"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/panel/moderator/attendance"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  Obecności
                </NavLink>

                <NavLink
                  to="/panel/moderator/schedule"
                  onClick={onClose}
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
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/panel/admin/users"
                  onClick={onClose}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  Użytkownicy
                </NavLink>

                <NavLink
                  to="/panel/admin/settings"
                  onClick={onClose}
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
            {sidebarContent.footer}
          </p>
          <p className="mt-1 text-xs text-slate-600">
            {sidebarContent.version}
          </p>
        </div>
      </aside>
    </>
  );
}
