import { userDashboardContent } from "../../../content/userDashboard";
import type { RecentServiceItem } from "../../../mocks/userDashboardMock";

type Props = {
  items: RecentServiceItem[];
};

function getPointsClass(points: number) {
  if (points > 0) return "text-emerald-300";
  if (points < 0) return "text-red-300";
  return "text-slate-400";
}

export function RecentServicesCard({ items }: Props) {
  const { recentServices } = userDashboardContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <h2 className="font-serif text-2xl text-amber-100">
        {recentServices.title}
      </h2>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">{recentServices.empty}</p>
      ) : (
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-slate-700/30 bg-slate-950/40 px-4 py-3"
            >
              <div>
                <p className="text-sm text-slate-200">{item.serviceName}</p>
                <p className="mt-1 text-xs text-slate-400">
                  {item.dateLabel} • {item.time}
                </p>
              </div>
              <span
                className={`text-sm font-semibold ${getPointsClass(item.points)}`}
              >
                {item.points > 0 ? `+${item.points}` : item.points}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
