import { useState } from "react";
import { ExcuseModal } from "../../components/UserHistory/ExcuseModal";
import { PanelPageHeader } from "../../components/panel/PanelPageHeader";
import { userHistoryContent } from "../../content/userHistory";
import { UserHistoryList } from "../../components/UserHistory/UserHistoryList";
import {
  userHistoryMock,
  type UserHistoryItem,
} from "../../mocks/userHistoryMock";
export function UserHistoryPage() {
  const [historyItems, setHistoryItems] =
    useState<UserHistoryItem[]>(userHistoryMock);
  const [selectedItem, setSelectedItem] = useState<UserHistoryItem | null>(
    null,
  );
  function handleSubmitExcuse(reason: string) {
    if (!selectedItem) return;
    console.log("Excuse reason:", reason);

    setHistoryItems((currentItems) =>
      currentItems.map((item) =>
        item.id === selectedItem.id
          ? {
              ...item,
              excuseStatus: "pending",
            }
          : item,
      ),
    );
    setSelectedItem(null);
  }
  return (
    <>
      <div>
        <PanelPageHeader
          title={userHistoryContent.page.title}
          subtitle={userHistoryContent.page.description}
        />
        <div className="mt-8">
          <UserHistoryList
            items={historyItems}
            onExcuseClick={setSelectedItem}
          />
        </div>
      </div>
      {selectedItem && (
        <ExcuseModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onSubmit={handleSubmitExcuse}
        />
      )}
    </>
  );
}
