import { userDashboardContent } from "../../../content/userDashboard";

import type { NotificationItem } from "../../../mocks/userDashboardMock";
import { Link } from "react-router-dom";

type Props = {
  items: NotificationItem[];
};

function getTypeLabel(type: NotificationItem["type"]) {
  switch (type) {
    case "message":
      return "Wiadomość";
    case "schedule":
      return "Harmonogram";
    case "justification":
      return "Usprawiedliwienie";
    case "info":
      return "Informacja";
    default:
      return "Powiadomienie";
  }
}
function getTypeClass(type: NotificationItem["type"]) {
  switch (type) {
    case "message":
      return "text-slate-200";

    case "schedule":
      return "text-sky-300";

    case "justification":
      return "text-amber-200";

    case "info":
      return "text-violet-300";

    default:
      return "text-slate-200";
  }
}
function getBorderClass(type: NotificationItem["type"]) {
  switch (type) {
    case "message":
      return "border-l-slate-500";

    case "schedule":
      return "border-l-sky-400";

    case "justification":
      return "border-l-amber-400";

    case "info":
      return "border-l-violet-400";

    default:
      return "border-l-slate-500";
  }
}
export function NotificationsCard({ items }: Props) {
  const { notifications } = userDashboardContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl text-amber-100">
          {notifications.title}
        </h2>
        <Link
          to="/panel/user/notifications"
          className="text-sm font-medium text-amber-200 transition hover:text-amber-100"
        >
          {notifications.button}
        </Link>
      </div>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">{notifications.empty}</p>
      ) : (
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border border-slate-700/30 border-l-2 ${getBorderClass(item.type)} bg-slate-950/40 px-4 py-4 transition-all duration-300 hover:bg-white/5`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.16em] ${getTypeClass(item.type)}`}
              >
                {getTypeLabel(item.type)}
              </p>
              <p className="mt-2 tetx-base text-slate-200">{item.title}</p>
              <p className="mt-2 text-xs text-slate-400">{item.dateLabel}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
