import { NextServiceCard } from "../../components/Dashboard/User/NextServiceCard";
import { NotificationsCard } from "../../components/Dashboard/User/NotificationsCard";
import { RankingCard } from "../../components/Dashboard/User/RankingCard";
import { RecentServicesCard } from "../../components/Dashboard/User/RecentServicesCard";
import { userDashboardContent } from "../../content/userDashboard";
import { userDashboardMock } from "../../mocks/userDashboardMock";

export function UserDashboardPage() {
  return (
    <section>
      <h1 className="font-serif text-4xl text-amber-100">
        {userDashboardContent.pageTitle}
      </h1>
      <p className="mt-3 text-slate-300">{userDashboardContent.pageSubtitle}</p>
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <NextServiceCard service={userDashboardMock.nextService} />
        <RankingCard ranking={userDashboardMock.ranking} />
        <RecentServicesCard items={userDashboardMock.recentServices} />
        <NotificationsCard items={userDashboardMock.notifications} />
      </div>
    </section>
  );
}
