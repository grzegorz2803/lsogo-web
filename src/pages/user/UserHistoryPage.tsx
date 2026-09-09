import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
import { userHistoryContent } from "../../content/userHistory";
import { UserHistoryList } from "../../components/UserHistory/UserHistoryList";
import { userHistoryMock } from "../../mocks/userHistoryMock";
export function UserHistoryPage() {
  return (
    <div>
      <PanelPageHeader
        title={userHistoryContent.page.title}
        subtitle={userHistoryContent.page.description}
      />
      <div className="mt-8">
        <UserHistoryList items={userHistoryMock} />
      </div>
    </div>
  );
}
