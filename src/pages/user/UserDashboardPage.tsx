import { NotificationsCard } from "../../components/Dashboard/User/NotificationsCard";
import { RankingCard } from "../../components/Dashboard/User/RankingCard";
import { RecentServicesCard } from "../../components/Dashboard/User/RecentServicesCard";
import { userDashboardContent } from "../../content/userDashboard";
import {
  getUpcomingServices,
  userDashboardMock,
  userWeeklyScheduleMock,
} from "../../mocks/userDashboardMock";
import { UpcomingServicesCard } from "../../components/Dashboard/User/UpcomingServicesCard";
import { LiturgyTodayCard } from "../../components/Dashboard/User/LiturgyTodayCard";
import { PanelPageHeader } from "../../components/panel/PanelPageHeader";

export function UserDashboardPage() {
  const upcomingServices = getUpcomingServices(userWeeklyScheduleMock, 2);

  return (
    <section>
      <PanelPageHeader
        title={userDashboardContent.pageTitle}
        subtitle={userDashboardContent.pageSubtitle}
      />
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <UpcomingServicesCard services={upcomingServices} />
        <LiturgyTodayCard liturgy={userDashboardMock.liturgyToday} />
        <RankingCard ranking={userDashboardMock.ranking} />
        <RecentServicesCard items={userDashboardMock.recentServices} />
        <NotificationsCard items={userDashboardMock.notifications} />
      </div>
    </section>
  );
}
