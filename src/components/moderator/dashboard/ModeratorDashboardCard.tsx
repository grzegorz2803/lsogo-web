import type { ReactNode } from "react";

type ModeratorDashboardCardProps = {
  title: string;
  children: ReactNode;
};

export function ModeratorDashboardCard({
  title,
  children,
}: ModeratorDashboardCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
