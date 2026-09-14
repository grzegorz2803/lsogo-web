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
    <section className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <div className="mb-5">
        <h2 className="font-serif text-2xl font-medium text-amber-100">
          {history.title}
        </h2>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-6 items-center justify-between rounded-2xl border border-white/8 bg-slate-950/20 px-5 py-4 md:grid-cols-[1fr_100px_240px] md:items-center"
          >
            <div>
              <p className="font-medium text-slate-100">{item.serviceName}</p>
              <p className="mt-1 text-sm text-slate-500">
                {item.date} • {item.time}
              </p>
            </div>
            <div className="grid grid-cols-[80px_280px] items-center gap-6">
              <div className="text-right">
                <p
                  className={`text-lg font-semibold ${getPointsClass(item.points)}`}
                >
                  {formatPoints(item.points)}{" "}
                  <span className="text-sm font-normal">{history.points}</span>
                </p>
              </div>
              <div className="flex justify-end">
                <div className="flex justify-end md:min-w-56">
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
                          "rounded-xl border px-4 py-2 text-sm font-medium",
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
                    <span className="whitespace-nowrap rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-center text-sm font-medium text-amber-300">
                      Sprzeciw oczekuje na rozpatrzenie
                    </span>
                  )}
                  {item.appealStatus === "accepted" && (
                    <span className="whitespace-nowrap rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-center text-sm font-medium text-emerald-400">
                      Sprzeciw zaakceptowany
                    </span>
                  )}
                  {item.appealStatus === "rejected" && (
                    <span className="whitespace-nowrap rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-2 text-center text-sm font-medium text-red-400">
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
