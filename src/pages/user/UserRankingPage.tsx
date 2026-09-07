import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
import { userRankingContent } from "../../content/userRanking";
import { userRankingMock } from "../../mocks/userRankingMock";
import { RankingPositionCard } from "../../components/UserRanking/RankingPositionCard";
import { RankingDetailsCard } from "../../components/UserRanking/RankingDetailsCard";
import { RankingPodiumHero } from "../../components/UserRanking/RankingPodiumHero";

export function UserRankingPage() {
  const { page } = userRankingContent;
  const isMonthOnPodium =
    userRankingMock.month.position >= 1 && userRankingMock.month.position <= 3;
  const isYearOnPodium =
    userRankingMock.year.position >= 1 && userRankingMock.year.position <= 3;
  const bothOnPodium = isMonthOnPodium && isYearOnPodium;
  return (
    <div>
      <PanelPageHeader title={page.title} subtitle={page.description} />
      <div className="mt-8 space-y-6">
        {bothOnPodium ? (
          <RankingPodiumHero
            month={userRankingMock.month}
            year={userRankingMock.year}
          />
        ) : (
          <RankingPositionCard
            month={userRankingMock.month}
            year={userRankingMock.year}
          />
        )}
        <div className="grid gap-6 lg:grid-cols-2">
          <RankingDetailsCard
            title={userRankingContent.details.monthTitle}
            ranking={userRankingMock.month}
          />
          <RankingDetailsCard
            title={userRankingContent.details.yearTitle}
            ranking={userRankingMock.year}
          />
        </div>
      </div>
    </div>
  );
}
