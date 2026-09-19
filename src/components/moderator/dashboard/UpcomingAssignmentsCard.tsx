import { ModeratorDashboardCard } from "./ModeratorDashboardCard";
import { moderatorContent } from "../../../content/moderator";
import { moderatorDashboardMock } from "../../../mocks/moderatorDashboardMock";
import { formatDate } from "../../../utils/date";
import { ModeratorDaschboardAction } from "./ModeratorDashboardAction";

export function UpcommingAssignmentsCard() {
  const { assignments } = moderatorContent.dashboard;
  const data = moderatorDashboardMock.upcomingAssignments;

  return (
    <ModeratorDashboardCard
      title={assignments.title}
      action={
        <ModeratorDaschboardAction
          to="/panel/moderator/schedule"
          label={assignments.action}
        />
      }
    >
      <div className="space-y-3">
        {data.length > 0 ? (
          data.map((assignment) => (
            <div
              key={assignment.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-white/5 p-4"
            >
              <div>
                <p className="font-medium text-white">{assignment.name}</p>
                <p className="mt-1 text-sm text-white/60">
                  {formatDate(assignment.date)} • {assignment.time}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-white">
                  {assignment.assignedCount}
                </p>
                <p className="tetx-sm text-white/60">{assignments.assigned}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-white/60">{assignments.empty}</p>
        )}
      </div>
    </ModeratorDashboardCard>
  );
}
