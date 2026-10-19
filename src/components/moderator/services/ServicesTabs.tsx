import type { ServiceCategory } from "../../../types/moderatorServices";
import { moderatorContent } from "../../../content/moderator";

type ServicesTabsProps = {
  activeTab: ServiceCategory;
  onTabChange: (tab: ServiceCategory) => void;
};

export function ServicesTabs({ activeTab, onTabChange }: ServicesTabsProps) {
  const content = moderatorContent.services.tabs;

  const tabs: {
    id: ServiceCategory;
    label: string;
  }[] = [
    { id: "weekly_mass", label: content.weeklyMass },
    { id: "weekly", label: content.weekly },
    { id: "monthly", label: content.monthly },
    { id: "seasonal", label: content.seasonal },
    { id: "yearly", label: content.yearly },
    { id: "on_time", label: content.oneTime },
  ];

  return (
    <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          aria-pressed={activeTab === tab.id}
          className={`cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            activeTab === tab.id
              ? "bg-amber-400 text-slate-950"
              : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
