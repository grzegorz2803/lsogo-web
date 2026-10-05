import { moderatorContent } from "../../../content/moderator";
import { parishFunctionsMock } from "../../../mocks/parishFunctionsMock";

type ManualMeetingAttendanceProps = {
  date: string;
  time: string;
  points: number;
  search: string;
  selectedFunction: string;

  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onPointsChange: (points: number) => void;
  onSearchChange: (search: string) => void;
  onFunctionChange: (functionCode: string) => void;
};

export function ManualMeetingAttendance({
  date,
  time,
  points,
  search,
  selectedFunction,
  onDateChange,
  onTimeChange,
  onPointsChange,
  onSearchChange,
  onFunctionChange,
}: ManualMeetingAttendanceProps) {
  const { manualMeeting } = moderatorContent.attendance;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="grid gap-4 md:grid-cols-2 xl: grid-cols-5">
        <div>
          <label className="text-sm text-white/60">
            {manualMeeting.fields.date}
          </label>
          <input
            type="date"
            value={date}
            onChange={(event) => onDateChange(event.target.value)}
            onClick={(event) => event.currentTarget.showPicker?.()}
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-white/60">
            {manualMeeting.fields.time}
          </label>
          <input
            type="time"
            value={time}
            onChange={(event) => onTimeChange(event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-white/60">
            {manualMeeting.fields.points}
          </label>
          <input
            type="number"
            min={0}
            value={points}
            onChange={(event) => onPointsChange(Number(event.target.value))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-white/60">
            {manualMeeting.filters.function}
          </label>
          <select
            value={selectedFunction}
            onChange={(event) => onFunctionChange(event.target.value)}
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="all">{manualMeeting.filters.allFunctions}</option>
            {parishFunctionsMock.map((parishFunction) => (
              <option key={parishFunction.id} value={parishFunction.code}>
                {parishFunction.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {manualMeeting.filters.search}
          </label>
          <input
            type="search"
            value={search}
            placeholder={manualMeeting.filters.searchPlaceholder}
            onChange={(event) => onSearchChange(event.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none placeholder:text-white/30"
          />
        </div>
      </div>
    </div>
  );
}
