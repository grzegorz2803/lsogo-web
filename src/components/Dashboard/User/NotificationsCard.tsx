import { userDashboardContent } from "../../../content/userDashboard";

import type { NotificationItem } from "../../../mocks/userDashboardMock";

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
export function NotificationsCard({ items }: Props) {
  const { notifications } = userDashboardContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <h2 className="font-serif text-2xl text-amber-100">
        {notifications.title}
      </h2>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">{notifications.empty}</p>
      ) : (
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-700/30 bg-slate-950/40 px-4 py-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                {getTypeLabel(item.type)}
              </p>
              <p className="mt-2 tetx-sm text-slate-200">{item.title}</p>
              <p className="mt-1 text-xs text-slate-400">{item.dateLabel}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
