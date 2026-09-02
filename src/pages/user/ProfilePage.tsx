import { profileContent } from "../../content/profileContent";
import { profileMock } from "../../mocks/profileMock";
import { ProfileUserDataCard } from "../../components/Profile/ProfileUserDataCard";
import { ProfileCommunityCard } from "../../components/Profile/ProfileCommunityCard";
import { ChangePasswordCard } from "../../components/Profile/ChangePasswordCard";

export function ProfilePage() {
  return (
    <section>
      <h1 className="font-serif text-4xl text-amber-100">
        {profileContent.page.title}
      </h1>

      <p className="mt-2 text-base text-slate-300">
        {profileContent.page.subtitle}
      </p>

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
