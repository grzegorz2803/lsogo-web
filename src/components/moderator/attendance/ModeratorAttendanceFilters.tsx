import { moderatorContent } from "../../../content/moderator";

export type AttendanceEventTypeFilter = "all" | "SERVICE" | "MEETING";

export type AttendanceStatusFilter = "all" | "PRESENT" | "ABSENT" | "EXCUSED";

export type AttendanceSourceFilter = "all" | "RFID" | "MANUAL";

type FilterOption = {
  value: number;
  label: string;
};

type ModeratorAttendanceFiltersProps = {
  dateFrom: string;
  dateTo: string;

  selectedUserId: number | null;
  selectedEventId: number | null;

  eventType: AttendanceEventTypeFilter;
  status: AttendanceStatusFilter;
  source: AttendanceSourceFilter;

  users: FilterOption[];
  events: FilterOption[];

  onDateFromChange: (date: string) => void;
  onDateToChange: (date: string) => void;
  onUserChange: (userId: number | null) => void;
  onEventChange: (eventId: number | null) => void;
  onEventTypeChange: (type: AttendanceEventTypeFilter) => void;
  onStatusChange: (status: AttendanceStatusFilter) => void;
  onSourceChange: (source: AttendanceSourceFilter) => void;
  onClear: () => void;
};

export function ModeratorAttendanceFilters({
  dateFrom: dateFrom,
  dateTo: dateTo,
  selectedUserId,
  selectedEventId,
  eventType,
  status,
  source,
  users,
  events,
  onDateFromChange,
  onDateToChange,
  onUserChange,
  onEventChange,
  onEventTypeChange,
  onStatusChange,
  onSourceChange,
  onClear,
}: ModeratorAttendanceFiltersProps) {
  const { history } = moderatorContent.attendance;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <label className="text-sm text-white/60">
            {history.filters.dateFrom}
          </label>
          <div className="relative mt-2">
            <input
              type="date"
              value={dateFrom}
              onChange={(event) => onDateFromChange(event.target.value)}
              onClick={(event) => event.currentTarget.showPicker?.()}
              className="cursor-pointer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5  text-white outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {history.filters.dateTo}
          </label>
          <div className="relative mt-2">
            <input
              type="date"
              min={dateFrom}
              value={dateTo}
              onChange={(event) => onDateToChange(event.target.value)}
              onClick={(event) => event.currentTarget.showPicker?.()}
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5  text-white outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {history.filters.user}
          </label>
          <select
            value={selectedUserId ?? ""}
            onChange={(event) =>
              onUserChange(
                event.target.value ? Number(event.target.value) : null,
              )
            }
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="">{history.filters.allUsers}</option>
            {users.map((user) => (
              <option key={user.value} value={user.value}>
                {user.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="tetx-sm text-white/60">
            {history.filters.eventType}
          </label>
          <select
            value={eventType}
            onChange={(event) =>
              onEventTypeChange(event.target.value as AttendanceEventTypeFilter)
            }
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="all">{history.filters.allEventTypes}</option>
            <option value="SERVICE">{history.eventTypes.service}</option>
            <option value="MEETING">{history.eventTypes.meeting}</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {history.filters.event}
          </label>
          <select
            value={selectedEventId ?? ""}
            onChange={(event) =>
              onEventChange(
                event.target.value ? Number(event.target.value) : null,
              )
            }
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="">{history.filters.allEvents}</option>
            {events.map((event) => (
              <option key={event.value} value={event.value}>
                {event.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {history.filters.status}
          </label>
          <select
            value={status}
            onChange={(event) =>
              onStatusChange(event.target.value as AttendanceStatusFilter)
            }
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="all">{history.filters.allStatuses}</option>
            <option value="PRESENT">{history.statuses.present}</option>
            <option value="ABSENT">{history.statuses.absent}</option>
            <option value="EXCUSED">{history.statuses.excused}</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-white/60">
            {history.filters.source}
          </label>
          <select
            value={source}
            onChange={(event) =>
              onSourceChange(event.target.value as AttendanceSourceFilter)
            }
            className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
          >
            <option value="all">{history.filters.allSources}</option>
            <option value="RFID">{history.sources.rfid}</option>
            <option value="MANUAL">{history.sources.manual}</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="button"
            onClick={onClear}
            className="w-full cursor-pointer rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            {history.filters.clear}
          </button>
        </div>
      </div>
    </div>
  );
}
