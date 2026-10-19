import { PanelPageHeader } from "../../components/Panel/PanelPageHeader";
import { ModeratorUsersList } from "../../components/moderator/users/ModeratorUsersList";
import { moderatorContent } from "../../content/moderator";

export function ModeratorUsersPage() {
  const { users } = moderatorContent;

  return (
    <div className="space-y-6">
      <PanelPageHeader title={users.title} subtitle={users.subtitle} />
      <ModeratorUsersList />
    </div>
  );
}
