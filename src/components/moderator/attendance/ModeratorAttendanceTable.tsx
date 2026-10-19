import { moderatorContent } from "../../../content/moderator";
import type {
  AttendanceSource,
  AttendanceStatus,
  ModeratorAttendanceEntry,
} from "../../../mocks/moderatorAttendanceMock";
import { formatDate } from "../../../utils/date";

type ModeratorAttendanceTableProps = {
  entries: ModeratorAttendanceEntry[];
  onExcuse: (entry: ModeratorAttendanceEntry) => void;
  canManageExcuses: boolean;
};

function getStatusLabel(status: AttendanceStatus) {
  const { statuses } = moderatorContent.attendance.history;

  switch (status) {
    case "PRESENT":
      return statuses.present;
    case "ABSENT":
      return statuses.absent;
    case "EXCUSED":
      return statuses.excused;
  }
}

function getStatusClassName(status: AttendanceStatus) {
  switch (status) {
    case "PRESENT":
      return "bg-emerald-400/10 text-emerald-300";
    case "ABSENT":
      return "bg-red-400/10 text-red-300";
    case "EXCUSED":
      return "bg-amber-400/10 text-amber-300";
  }
}

function getSourceLabel(source: AttendanceSource) {
  const { sources } = moderatorContent.attendance.history;

  return source === "RFID" ? sources.rfid : sources.manual;
}

export function ModeratorAttendanceTable({
  entries,
  canManageExcuses,
  onExcuse,
}: ModeratorAttendanceTableProps) {
  const { history } = moderatorContent.attendance;

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/50">
        {history.empty}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-237.5">
          <thead className="border-b border-white/10 bg-white/5">
            <tr className="text-left text-xs uppercase tracking-wider text-white/40">
              <th className="px-5 py-4">{history.table.user}</th>
              <th className="px-5 py-4">{history.table.function}</th>
              <th className="px-5 py-4">{history.table.event}</th>
              <th className="px-5 py-4">{history.table.date}</th>
              <th className="px-5 py-4">{history.table.time}</th>
              <th className="px-5 py-4">{history.table.status}</th>
              <th className="px-5 py-4">{history.table.source}</th>
              <th className="px-5 py-4 text-right">{history.table.points}</th>
              <th className="px-5 py-4 text-right">{history.table.action}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {entries.map((entry) => (
              <tr key={entry.id} className="transition hover:bg-white/3">
                <td className="px-5 py-4 font-medium text-white">
                  {entry.user.name}
                </td>
                <td className="px-5 py-4 text-sm text-white/60">
                  {entry.user.function.name}
                </td>
                <td className="px-5 py-4">
                  <div className="text-sm text-white">{entry.event.name}</div>
                  <div className="mt-1 text-xs text-white/40">
                    {entry.event.type === "SERVICE"
                      ? history.eventTypes.service
                      : history.eventTypes.meeting}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-white/70">
                  {formatDate(entry.date)}
                </td>
                <td className="px-5 py-4 text-sm text-white/70">
                  {entry.time}
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClassName(
                      entry.status,
                    )}`}
                  >
                    {getStatusLabel(entry.status)}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-white/60">
                  {getSourceLabel(entry.source)}
                </td>
                <td
                  className={`px-5 py-4 text-right font-medium ${
                    entry.points > 0
                      ? "text-emerald-300"
                      : entry.points < 0
                        ? "text-red-300"
                        : "text-white/50"
                  }`}
                >
                  {entry.points > 0 ? "+" : ""}
                  {entry.points}
                </td>
                <td className="px-5 py-4 text-right">
                  {canManageExcuses && entry.status === "ABSENT" && (
                    <button
                      type="button"
                      onClick={() => onExcuse(entry)}
                      className="cursor-pointer text-sm font-medium text-amber-300 transition hover:text-amber-200"
                    >
                      {history.actions.excuse}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
