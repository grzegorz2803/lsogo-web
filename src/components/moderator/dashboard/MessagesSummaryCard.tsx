import { ModeratorDashboardCard } from "./ModeratorDashboardCard";
import { moderatorContent } from "../../../content/moderator";

import { moderatorDashboardMock } from "../../../mocks/moderatorDashboardMock";
import { ModeratorDaschboardAction } from "./ModeratorDashboardAction";

export function MessageSummaryCard() {
  const { messages } = moderatorContent.dashboard;
  const data = moderatorDashboardMock.messages;

  return (
    <ModeratorDashboardCard
      title={messages.title}
      action={
        <ModeratorDaschboardAction
          to="/panel/moderator/messages"
          label={messages.action}
        />
      }
    >
      {data.unreadCount > 0 ? (
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-white/60">{messages.unread}</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            {data.unreadCount}
          </p>
        </div>
      ) : (
        <p className="text-sm text-white/60">{messages.empty}</p>
      )}
    </ModeratorDashboardCard>
  );
}
