import type { ModeratorServiceAttendanceOption } from "../../../mocks/moderatorServiceAttendance";
import { moderatorContent } from "../../../content/moderator";

type ManualServiceAttendanceProps = {
  date: string;
  time: string;
  points: number;
  services: ModeratorServiceAttendanceOption[];
  selectedService: ModeratorServiceAttendanceOption | null;
  isAutomaticalllyMatched: boolean;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onPointsChange: (points: number) => void;
  onServiceChange: (serviceId: number | null) => void;
  onCreateService: () => void;
};

export function ManualServiceAttendance({
  date,
  time,
  services,
  points,
  selectedService,
  isAutomaticalllyMatched,
  onDateChange,
  onTimeChange,
  onPointsChange,
  onServiceChange,
  onCreateService,
}: ManualServiceAttendanceProps) {
  const { manualService } = moderatorContent.attendance;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-medium text-white">
          {manualService.title}
        </h2>
        <p className="mt-1 text-sm text-white/50">
          {manualService.description}
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="service-date" className="text-sm text-white/60">
              {manualService.fields.date}
            </label>
            <input
              id="service-date"
              type="date"
              value={date}
              onChange={(event) => onDateChange(event.target.value)}
              onClick={(event) => event.currentTarget.showPicker?.()}
              className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
            />
          </div>
          <div>
            <label htmlFor="service-time" className="text-sm text-white/60">
              {manualService.fields.time}
            </label>
            <input
              id="service-time"
              type="time"
              value={time}
              onChange={(event) => onTimeChange(event.target.value)}
              className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
            />
          </div>
          <div>
            <label htmlFor="service-select" className="text-sm text-white/60">
              {manualService.fields.service}
            </label>
            <select
              id="service-select"
              value={selectedService?.id ?? ""}
              onChange={(event) =>
                onServiceChange(
                  event.target.value ? Number(event.target.value) : null,
                )
              }
              className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
            >
              <option value="">{manualService.selectService}</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.time} - {service.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="service-points" className="text-sm text-white/60">
              {manualService.fields.points}
            </label>
            <input
              id="service-points"
              type="number"
              value={points}
              min={0}
              onChange={(event) =>
                onPointsChange(Math.max(0, Number(event.target.value)))
              }
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/70 outline-none disabled:opacity-70"
            />
          </div>
        </div>
        {selectedService && isAutomaticalllyMatched && (
          <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
            <p className="text-sm text-emerald-300">{manualService.detected}</p>
            <p className="mt-1 text-sm text-white/70">
              {selectedService.name} - {selectedService.time}
            </p>
          </div>
        )}
        {!selectedService && (
          <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="text-sm text-amber-200">{manualService.noService}</p>
            <button
              type="button"
              onClick={onCreateService}
              className="mt-3 cursor-pointer text-sm font-medium text-amber-300 transition hover:text-amber-200"
            >
              + {manualService.createService}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
