import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
import { userRankingContent } from "../../content/userRanking";
import { userRankingMock } from "../../mocks/userRankingMock";
import { RankingPositionCard } from "../../components/UserRanking/RankingPositionCard";

export function UserRankingPage() {
  const { page } = userRankingContent;
  return (
    <div>
      <PanelPageHeader title={page.title} subtitle={page.description} />
      <div className="mt-8 space-y-6">
        <RankingPositionCard
          month={userRankingMock.month}
          year={userRankingMock.year}
        />
      </div>
    </div>
  );
}
