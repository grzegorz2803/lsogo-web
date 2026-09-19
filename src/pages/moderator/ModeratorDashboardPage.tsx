import { PanelPageHeader } from "../../components/Panel/PanelPageHeader";
import { moderatorContent } from "../../content/moderator";
import { useModeratorPermissions } from "../../hooks/useModeratorPermissions";
import { PendingCasesCard } from "../../components/moderator/dashboard/PendingCasesCard";
import { SchedulesStatusCard } from "../../components/moderator/dashboard/SchedulesStatusCard";
import { TodayServicesCard } from "../../components/moderator/dashboard/TodayServicesCard";
import { UpcommingAssignmentsCard } from "../../components/moderator/dashboard/UpcomingAssignmentsCard";
import { RecentAttendanceCard } from "../../components/moderator/dashboard/RecentAttendanceCard";
import { MessageSummaryCard } from "../../components/moderator/dashboard/MessagesSummaryCard";

export function ModeratorDashboardPage() {
  const { hasPermission } = useModeratorPermissions();
  const { dashboard } = moderatorContent;

  return (
    <div className="space-y-6">
      <PanelPageHeader title={dashboard.title} subtitle={dashboard.subtitle} />
      <div className="grid gap-6 xl:grid-cols-2">
        {hasPermission("excuses.manage") && <PendingCasesCard />}
        {hasPermission("attendance.service.check") && <TodayServicesCard />}
        {hasPermission("schedule.view") && <SchedulesStatusCard />}
        {hasPermission("schedule.view") && <UpcommingAssignmentsCard />}
        {hasPermission("attendance.history.view") && <RecentAttendanceCard />}
        {hasPermission("messages.view") && <MessageSummaryCard />}
      </div>
    </div>
  );
}
