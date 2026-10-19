import { formatDate } from "../../../utils/date";
import { moderatorContent } from "../../../content/moderator";
type ModeratorUserProfileCardProps = {
  user: {
    profile: {
      accountStatus: string;
      login: string;
      email: string;
      joinedAt: string;
      function: {
        name: string;
      };
    };
  };
};

export function ModeratorUserProfileCard({
  user,
}: ModeratorUserProfileCardProps) {
  const { profile: content } = moderatorContent.users.details;
  const isActive = user.profile.accountStatus == "ACTIVE";
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">
        {content.title}
      </h2>
      <div className="mt-5 grid gap-x-10 gap-y-5 md:grid-cols-2">
        <ProfileItem
          label={content.function}
          value={user.profile.function.name}
        />
        <div>
          <p className="text-sm text-white/50">{content.accountStatus}</p>
          <p
            className={`mt-1 font-medium ${
              isActive ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {isActive ? `${content.active}` : `${content.disActive}`}
          </p>
        </div>
        <ProfileItem label={content.login} value={user.profile.login} />
        <ProfileItem label={content.email} value={user.profile.email} />
        <ProfileItem
          label={content.joinedAt}
          value={formatDate(user.profile.joinedAt)}
        />
      </div>
    </section>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-white/50">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );
}
