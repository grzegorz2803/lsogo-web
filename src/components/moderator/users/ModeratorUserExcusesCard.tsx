import { moderatorContent } from "../../../content/moderator";
import { formatDate } from "../../../utils/date";

type ExcuseStatus = "ACCEPTED" | "REJECTED";

type PendingExcuse = {
  id: number;
  eventName: string;
  date: string;
  time: string;
  reason: string;
};
type RecentExcuse = {
  id: number;
  eventName: string;
  date: string;
  time: string;
  status: ExcuseStatus;
};

type ModeratorUserExcusesCardProps = {
  excuses: {
    pending: readonly PendingExcuse[];
    recent: readonly RecentExcuse[];
  };
};

export function ModeratorUserExcusesCard({
  excuses,
}: ModeratorUserExcusesCardProps) {
  const content = moderatorContent.users.details.excuses;

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">
        {content.title}
      </h2>

      <div className="mt-5 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-medium text-white/60">
            {content.pending}
          </h3>
          <div className="space-y-3">
            {excuses.pending.map((excuse) => (
              <PendingExcuseRow key={excuse.id} excuse={excuse} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium text-white/60">
            {content.recent}
          </h3>
          <div className="space-y-3">
            {excuses.recent.map((execuse) => (
              <RecentExcuseRow key={execuse.id} excuse={execuse} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function PendingExcuseRow({ excuse }: { excuse: PendingExcuse }) {
  const content = moderatorContent.users.details.excuses;

  return (
    <div className="rounded-xl bg-white/5 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-white">{excuse.eventName}</p>
          <p className="mt-1 text-sm text-white/50">
            {formatDate(excuse.date)} · {excuse.time}
          </p>
          <p className="mt-3 text-sm text-white/70">
            {content.reason}: {excuse.reason}
          </p>
        </div>
        <button
          type="button"
          className="cursor-pointer rounded-lg border border-amber-400/30 px-3 py-2 text-sm text-amber-300 transition hover:bg-amber-400/10"
        >
          {content.review}
        </button>
      </div>
    </div>
  );
}

function RecentExcuseRow({ excuse }: { excuse: RecentExcuse }) {
  const content = moderatorContent.users.details.excuses;
  const statusLabel = content.statuses[excuse.status];

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-white/5 p-4">
      <div>
        <p className="font-medium text-white">{excuse.eventName}</p>
        <p className="mt-1 text-sm text-white/50">
          {formatDate(excuse.date)} · {excuse.time}
        </p>
      </div>
      <span
        className={
          excuse.status === "ACCEPTED"
            ? "text-sm text-emerald-400"
            : "text-sm text-red-400"
        }
      >
        {statusLabel}
      </span>
    </div>
  );
}
