import { ModeratorDashboardCard } from "./ModeratorDashboardCard";
import { moderatorContent } from "../../../content/moderator";
import { moderatorDashboardMock } from "../../../mocks/moderatorDashboardMock";
import { formatDate } from "../../../utils/date";
import { ModeratorDaschboardAction } from "./ModeratorDashboardAction";

export function RecentAttendanceCard() {
  const { attendance } = moderatorContent.dashboard;
  const data = moderatorDashboardMock.recentAttendance;

  return (
    <ModeratorDashboardCard
      title={attendance.title}
      action={
        <ModeratorDaschboardAction
          to="/panel/moderator/attendance"
          label={attendance.action}
        />
      }
    >
      <div className="space-y-3">
        {data.length > 0 ? (
          data.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-white/5 p-4"
            >
              <div>
                <p className="font-medium text-white">{entry.userName}</p>
                <p className="mt-1 text-sm text-white/60">
                  {entry.serviceName} • {formatDate(entry.date)} • {entry.time}
                </p>
              </div>

              <div className="text-right">
                <p
                  className={
                    entry.status === "PRESENT"
                      ? "text-sm font-medium text-emerald-300"
                      : "text-sm font-medium text-red-300"
                  }
                >
                  {entry.status === "PRESENT"
                    ? attendance.status.present
                    : attendance.status.absent}
                </p>
                <p className="mt-1 text-xs text-white/50">
                  {entry.source === "RFID"
                    ? attendance.source.rfid
                    : attendance.source.manual}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-white/60">{attendance.empty}</p>
        )}
      </div>
    </ModeratorDashboardCard>
  );
}
