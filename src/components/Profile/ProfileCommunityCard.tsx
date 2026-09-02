import { profileContent } from "../../content/profileContent";
import type { UserProfileData } from "../../mocks/profileMock";

type Props = {
  profile: UserProfileData;
};

export function ProfileCommunityCard({ profile }: Props) {
  const { community } = profileContent;

  return (
    <section className="rounded-3xl border border-slate-700/40 bg-slate-950/55 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
      <h2 className="font-serif text-2xl text-amber-100">{community.title}</h2>

      <div className="mt-6 divide-y divide-slate-700/30">
        <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
          <p className="text-sm text-slate-400">{community.parishLabel}</p>
          <p className="text-base font-medium text-slate-100">
            {profile.parish}
          </p>
        </div>
        <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
          <p className="text-sm text-slate-400">{community.dioceseLabel}</p>
          <p className="text-base font-medium text-slate-100">
            {profile.diocese}
          </p>
        </div>

        <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
          <p className="text-sm text-slate-400">{community.guardianLabel}</p>
          <p className="text-base font-medium text-slate-100">
            {profile.guardian}
          </p>
        </div>
      </div>
    </section>
  );
}
