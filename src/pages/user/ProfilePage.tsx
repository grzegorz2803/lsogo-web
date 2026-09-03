import { profileContent } from "../../content/profileContent";
import { profileMock } from "../../mocks/profileMock";
import { ProfileUserDataCard } from "../../components/Profile/ProfileUserDataCard";
import { ProfileCommunityCard } from "../../components/Profile/ProfileCommunityCard";
import { ChangePasswordCard } from "../../components/Profile/ChangePasswordCard";
import { PanelPageHeader } from "../../components/panel/PanelPageHeader";

export function ProfilePage() {
  return (
    <section>
      <PanelPageHeader
        title={profileContent.page.title}
        subtitle={profileContent.page.subtitle}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <ProfileUserDataCard profile={profileMock} />
        <ProfileCommunityCard profile={profileMock} />
      </div>
      <div className="mt-6">
        <ChangePasswordCard />
      </div>
    </section>
  );
}
