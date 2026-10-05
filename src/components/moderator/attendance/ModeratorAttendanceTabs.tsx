import { moderatorContent } from "../../../content/moderator";

export type AttendanceTab = "history" | "service" | "meeting";

type ModeratorAttendanceTabsProps = {
  activeTab: AttendanceTab;
  onChange: (tab: AttendanceTab) => void;
};

export function ModeratorAttendanceTabs({
  activeTab,
  onChange,
}: ModeratorAttendanceTabsProps) {
  const { tabs } = moderatorContent.attendance;

  const items: {
    value: AttendanceTab;
    label: string;
  }[] = [
    { value: "history", label: tabs.history },
    { value: "service", label: tabs.service },
    { value: "meeting", label: tabs.meeting },
  ];

  return (
    <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
      {items.map((item) => {
        const active = activeTab === item.value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm transition ${
              active
                ? "bg-amber-400 font-medium text-slate-950"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
