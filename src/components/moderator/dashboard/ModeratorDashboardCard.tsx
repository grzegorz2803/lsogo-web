import type { ReactNode } from "react";

type ModeratorDashboardCardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export function ModeratorDashboardCard({
  title,
  children,
  action,
}: ModeratorDashboardCardProps) {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-serif text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
      {action && (
        <div className="mt-4 border-t border-white/10 pt-4">{action}</div>
      )}
    </section>
  );
}
