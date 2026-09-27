import { Navigate, useParams } from "react-router-dom";
import { moderatorUserDetailsMock } from "../../mocks/moderatorUserDetailsMock";
import { ModeratorUserProfileHeader } from "../../components/moderator/users/ModeratorUserProfileHeader";
import { ModeratorUserSummary } from "../../components/moderator/users/ModeratorUserSummary";
import { ModeratorUserPointsCard } from "../../components/moderator/users/ModeratorUserPointsCard";
import { ModeratorUserRankingCard } from "../../components/moderator/users/ModeratorUserRankingCard";
import { ModeratorUserRencentAttendance } from "../../components/moderator/users/ModeratorUserRecentAttendance";
import { useModeratorPermissions } from "../../hooks/useModeratorPermissions";
import { ModeratorUserExcusesCard } from "../../components/moderator/users/ModeratorUserExcusesCard";
import { ModeratorUserProfileCard } from "../../components/moderator/users/ModeratorUserProfileCard";

export function ModeratorUserDetailsPage() {
  const { userId } = useParams();
  const { hasPermission } = useModeratorPermissions();
  const user = moderatorUserDetailsMock.find(
    (item) => item.id === Number(userId),
  );
  
  if (!user) {
    return <Navigate to="/panel/moderator/users" replace />;
  }
  return (
    <div className="space-y-6">
      <ModeratorUserProfileHeader user={user} />
      <ModeratorUserSummary summary={user.summary} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ModeratorUserPointsCard points={user.summary.points} />
        <ModeratorUserRankingCard ranking={user.summary.ranking} />
      </div>
      <ModeratorUserRencentAttendance attendance={user.recentAttendance} />
      {hasPermission("excuses.manage") && (
        <ModeratorUserExcusesCard excuses={user.excuses} />
      )}
      <ModeratorUserProfileCard user={user} />
    </div>
  );
}
