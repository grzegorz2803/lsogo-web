import { moderatorContent } from "../../../content/moderator";
import { formatDate } from "../../../utils/date";

type AttendanceStatus = "PRESENT" | "ABSENT" | "EXCUSED";
type AttendanceSource = "RFID" | "MANUAL" | null;

type AttendanceItem = {
  id: number;
  name: string;
  date: string;
  time: string;
  status: AttendanceStatus;
  source: AttendanceSource;
  points: number;
};

type ModeratorUserRencentAttendanceProps = {
  attendance: readonly AttendanceItem[];
};

export function ModeratorUserRencentAttendance({
  attendance,
}: ModeratorUserRencentAttendanceProps) {
  const content = moderatorContent.users.details.recentAttendance;

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">
        {content.title}
      </h2>

      <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_100px] bg-white/5 px-4 py-3 text-sm text-white/50">
          <span>{content.columns.event}</span>
          <span>{content.columns.date}</span>
          <span>{content.columns.status}</span>
          <span className="text-right">{content.columns.points}</span>
        </div>
        {attendance.map((item) => (
          <AttendanceRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function AttendanceRow({ item }: { item: AttendanceItem }) {
  const content = moderatorContent.users.details.recentAttendance;

  const statusLabel = content.statuses[item.status];
  const sourceLabel = item.source ? content.sources[item.source] : null;

  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_100px] items-center border-t border-white/10 px-4 py-3">
      <span className="font-medium text-white">{item.name}</span>
      <span className="text-sm text-white/60">
        {formatDate(item.date)} · {item.time}
      </span>
      <div>
        <span
          className={
            item.status === "PRESENT"
              ? "text-emerald-400"
              : item.status === "ABSENT"
                ? "text-red-400"
                : "text-amber-300"
          }
        >
          {statusLabel}
        </span>
        {sourceLabel && (
          <span className="ml-2 text-xs text-white/40">· {sourceLabel}</span>
        )}
      </div>
      <span
        className={`text-right font-medium ${item.points > 0 ? "text-emerald-400" : item.points < 0 ? "text-red-400" : "text-white"}`}
      >
        {item.points > 0 ? `+${item.points}` : item.points}
      </span>
    </div>
  );
}
