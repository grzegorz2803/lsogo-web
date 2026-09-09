import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
import { userHistoryContent } from "../../content/userHistory";

export function UserHistoryPage() {
  return (
    <div>
      <PanelPageHeader
        title={userHistoryContent.page.title}
        subtitle={userHistoryContent.page.description}
      />
      <div className="mt-8"></div>
    </div>
  );
}
