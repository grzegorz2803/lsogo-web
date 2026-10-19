import type { ModeratorAttendanceEntry } from "../mocks/moderatorAttendanceMock";
import type {
  AttendanceEventTypeFilter,
  AttendanceSourceFilter,
  AttendanceStatusFilter,
} from "../components/moderator/attendance/ModeratorAttendanceFilters";

type GetModeratorAttendanceParams = {
  data: ModeratorAttendanceEntry[];
  dateFrom: string;
  dateTo: string;
  userId: number | null;
  eventId: number | null;
  eventType: AttendanceEventTypeFilter;
  status: AttendanceStatusFilter;
  source: AttendanceSourceFilter;
};

export function getModeratorAttendance({
  data,
  dateFrom,
  dateTo,
  userId,
  eventId,
  eventType,
  status,
  source,
}: GetModeratorAttendanceParams) {
  return data
    .filter((entry) => {
      if (dateFrom && entry.date < dateFrom) {
        return false;
      }
      if (dateTo && entry.date > dateTo) {
        return false;
      }
      if (userId !== null && entry.user.id !== userId) {
        return false;
      }

      if (eventId !== null && entry.event.id !== eventId) {
        return false;
      }
      if (eventType !== "all" && entry.event.type !== eventType) {
        return false;
      }
      if (status !== "all" && entry.status !== status) {
        return false;
      }
      if (source !== "all" && entry.source !== source) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      const first = `${a.date}T${a.time}`;
      const second = `${b.date}T${b.time}`;
      return second.localeCompare(first);
    });
}

export function getAttendanceUserOptions(data: ModeratorAttendanceEntry[]) {
  const users = new Map<number, string>();

  data.forEach((entry) => {
    users.set(entry.user.id, entry.user.name);
  });

  return [...users.entries()]
    .map(([value, label]) => ({
      value,
      label,
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "pl"));
}

type GetAttendanceEventOptionsParams = {
  data: ModeratorAttendanceEntry[];
  dateFrom: string;
  dateTo: string;
  eventType: AttendanceEventTypeFilter;
};
export function getAttendanceEventOptions({
  data,
  dateFrom,
  dateTo,
  eventType,
}: GetAttendanceEventOptionsParams) {
  const events = new Map<number, string>();

  data
    .filter((entry) => {
      if (dateFrom && entry.date < dateFrom) {
        return false;
      }
      if (dateTo && entry.date > dateTo) {
        return false;
      }
      if (eventType !== "all" && entry.event.type !== eventType) {
        return false;
      }
      return true;
    })
    .forEach((entry) => {
      events.set(
        entry.event.id,
        `${entry.event.name} • ${entry.date} • ${entry.time} `,
      );
    });
  return [...events.entries()].map(([value, label]) => ({
    value,
    label,
  }));
}
export function getDefaultAttendanceDateRange() {
  const today = new Date();

  const dateFrom = new Date(today);
  dateFrom.setDate(today.getDate() - 6);
  return {
    dateFrom: formatDate(dateFrom),
    dateTo: formatDate(today),
  };
}
function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
