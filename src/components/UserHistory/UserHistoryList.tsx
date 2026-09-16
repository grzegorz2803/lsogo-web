import type { UserHistoryItem } from "../../mocks/userHistoryMock";
import { userHistoryContent } from "../../content/userHistory";

type UserHistoryListProps = {
  items: UserHistoryItem[];
  onExcuseClick: (item: UserHistoryItem) => void;
  onAppealClick: (item: UserHistoryItem) => void;
};

function getPointsClass(points: number) {
  if (points > 0) return "text-emerald-300";
  if (points < 0) return "text-red-300";
  return "text-slate-400";
}
function getExcuseStatusClass(status: UserHistoryItem["excuseStatus"]) {
  switch (status) {
    case "pending":
      return "border-amber-400/20 bg-amber-400/8 text-amber-200";
    case "accepted":
      return "border-emerald-400/20 bg-emerald-400/8 text-emerald-300";
    case "rejected":
      return "border-red-400/20 bg-red-400/8 text-red-300";
    default:
      return "";
  }
}

function formatPoints(points: number) {
  if (points > 0) return `+${points}`;
  return `${points}`;
}

export function UserHistoryList({
  items,
  onExcuseClick,
  onAppealClick,
}: UserHistoryListProps) {
  const { history } = userHistoryContent;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/3 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <div className="mb-5">
        <h2 className="font-serif text-2xl font-medium text-amber-100">
          {history.title}
        </h2>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/8 bg-slate-950/20 px-4 py-4 sm:px-5 md:grid md:grid-cols-[minmax(0,1fr)_100px_240px] md:items-center md:gap-6"
          >
            <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-medium text-slate-100">{item.serviceName}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.date} • {item.time}
                </p>
              </div>

              <p
                className={`shrink-0 text-lg font-semibold md:hidden ${getPointsClass(item.points)}`}
              >
                {formatPoints(item.points)}{" "}
                <span className="text-sm font-normal">{history.points}</span>
              </p>
            </div>

            <div className="mt-3 contents md:mt-0">
              <div className="hidden mt-3 md:mt-0 md:block md:text-right">
                <p
                  className={`text-lg font-semibold ${getPointsClass(item.points)}`}
                >
                  {formatPoints(item.points)}{" "}
                  <span className="text-sm font-normal">{history.points}</span>
                </p>
              </div>
              <div className="flex w-full flex-col gap-2 md:w-auto md:min-w-56 md:flex-row md:justify-end">
                <div className="flex min-w-0 flex-col gap-2 md:min-w-56 md:flex-row md:justify-end">
                  {item.points < 0 && item.excuseStatus === "none" && (
                    <button
                      type="button"
                      onClick={() => onExcuseClick(item)}
                      className="cursor-pointer rounded-xl border border-amber-400/20 bg-amber-400/8 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-400/12"
                    >
                      {history.excuse}
                    </button>
                  )}
                  {item.excuseStatus !== "none" &&
                    (!item.appealStatus || item.appealStatus === "none") && (
                      <span
                        className={[
                          "w-full rounded-xl border px-4 py-2 text-center text-sm font-medium md:w-auto",
                          getExcuseStatusClass(item.excuseStatus),
                        ].join(" ")}
                      >
                        {userHistoryContent.excuseStatus[item.excuseStatus]}
                      </span>
                    )}
                  {item.excuseStatus === "rejected" &&
                    (!item.appealStatus || item.appealStatus === "none") && (
                      <button
                        type="button"
                        onClick={() => onAppealClick(item)}
                        className="cursor-pointer rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300 transition hover:bg-amber-400/15"
                      >
                        Zgłoś sprzeciw
                      </button>
                    )}
                  {item.appealStatus === "pending" && (
                    <span className="w-full rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-center text-sm font-medium md:w-auto text-amber-300">
                      Sprzeciw oczekuje na rozpatrzenie
                    </span>
                  )}
                  {item.appealStatus === "accepted" && (
                    <span className="w-full rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-center text-sm font-medium text-emerald-400 md:w-auto">
                      Sprzeciw zaakceptowany
                    </span>
                  )}
                  {item.appealStatus === "rejected" && (
                    <span className="w-full rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-2 text-center text-sm font-medium text-red-400 md:w-auto">
                      Sprzeciw odrzucony
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
