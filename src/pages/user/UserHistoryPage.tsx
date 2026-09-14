import { useState } from "react";
import { ExcuseModal } from "../../components/UserHistory/ExcuseModal";
import { PanelPageHeader } from "../../components/Panel/PanelPageHeader";
import { userHistoryContent } from "../../content/userHistory";
import { UserHistoryList } from "../../components/UserHistory/UserHistoryList";
import {
  userHistoryMock,
  type UserHistoryItem,
} from "../../mocks/userHistoryMock";
import { AppealModal } from "../../components/UserHistory/AppealModal";
export function UserHistoryPage() {
  const [historyItems, setHistoryItems] =
    useState<UserHistoryItem[]>(userHistoryMock);
  const [selectedAppealItem, setSelectedAppealItem] =
    useState<UserHistoryItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<UserHistoryItem | null>(
    null,
  );
  function handleSubmitAppeal(reason: string) {
    if (!setSelectedAppealItem) return;

    setHistoryItems((currentItems) =>
      currentItems.map((item) =>
        item.id === selectedAppealItem?.id
          ? {
              ...item,
              appealStatus: "pending",
              appealReason: reason,
            }
          : item,
      ),
    );
    setSelectedAppealItem(null);
  }
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
            onAppealClick={setSelectedAppealItem}
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
      {selectedAppealItem && (
        <AppealModal
          item={selectedAppealItem}
          onClose={() => setSelectedAppealItem(null)}
          onSubmit={handleSubmitAppeal}
        />
      )}
    </>
  );
}
