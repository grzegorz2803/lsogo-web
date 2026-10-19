import { useState } from "react";
import type { ServiceCategory } from "../../types/moderatorServices";
import { moderatorContent } from "../../content/moderator";
import { ServicesTabs } from "../../components/moderator/services/ServicesTabs";
import WeeklyMassManager from "../../components/moderator/services/WeeklyMassManager";

export default function ModeratorServicesPage() {
  const content = moderatorContent.services;

  const [activeTab, setActiveTab] = useState<ServiceCategory>("weekly_mass");
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">{content.title}</h1>
        <p className="mt-2 text-sm text-white/50">{content.description}</p>
      </div>

      <ServicesTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={activeTab === "weekly_mass" ? "" : "hidden"}>
        <WeeklyMassManager />
      </div>

      {activeTab !== "weekly_mass" && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-white/50">Do przygotowania</p>
        </div>
      )}
    </div>
  );
}
