import { useState } from "react";
import {
  getAttendanceEventOptions,
  getAttendanceUserOptions,
  getDefaultAttendanceDateRange,
  getModeratorAttendance,
} from "../../utils/moderatorAttendance";
import {
  ModeratorAttendanceFilters,
  type AttendanceEventTypeFilter,
  type AttendanceSourceFilter,
  type AttendanceStatusFilter,
} from "../../components/moderator/attendance/ModeratorAttendanceFilters";
import {
  type ModeratorAttendanceEntry,
  moderatorAttendanceMock,
} from "../../mocks/moderatorAttendanceMock";
import { moderatorContent } from "../../content/moderator";
import { ModeratorAttendanceTable } from "../../components/moderator/attendance/ModeratorAttendanceTable";
import { useModeratorPermissions } from "../../hooks/useModeratorPermissions";
import { ExcuseAttendanceModal } from "../../components/moderator/attendance/ExcuseAttendanceModal";

export function ModeratorAttendancePage() {
  const defaultDateRange = getDefaultAttendanceDateRange();

  const [dateFrom, setDateFrom] = useState(defaultDateRange.dateFrom);
  const [dateTo, setDateTo] = useState(defaultDateRange.dateTo);

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const [eventType, setEventType] = useState<AttendanceEventTypeFilter>("all");

  const [status, setStatus] = useState<AttendanceStatusFilter>("all");

  const [source, setSource] = useState<AttendanceSourceFilter>("all");
  const users = getAttendanceUserOptions(moderatorAttendanceMock);
  const [selectedAbsence, setSelectedAbsence] =
    useState<ModeratorAttendanceEntry | null>(null);
  const { hasPermission } = useModeratorPermissions();

  const events = getAttendanceEventOptions({
    data: moderatorAttendanceMock,
    dateFrom,
    dateTo,
    eventType,
  });

  const entries = getModeratorAttendance({
    data: moderatorAttendanceMock,
    dateFrom,
    dateTo,
    userId: selectedUserId,
    eventId: selectedEventId,
    eventType,
    status,
    source,
  });
  function handleClearFilters() {
    const defaultRange = getDefaultAttendanceDateRange();

    setDateFrom(defaultRange.dateFrom);
    setDateTo(defaultRange.dateTo);
    setSelectedUserId(null);
    setSelectedEventId(null);
    setEventType("all");
    setStatus("all");
    setSource("all");
  }
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">
          {moderatorContent.attendance.title}
        </h1>
        <p className="mt-1 text-sm text-white/50">
          {moderatorContent.attendance.description}
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-medium text-white">
          {moderatorContent.attendance.history.title}
        </h2>
        <ModeratorAttendanceFilters
          dateFrom={dateFrom}
          dateTo={dateTo}
          selectedUserId={selectedUserId}
          selectedEventId={selectedEventId}
          eventType={eventType}
          status={status}
          source={source}
          users={users}
          events={events}
          onDateFromChange={(date) => {
            setDateFrom(date);
            if (dateTo && date > dateTo) {
              setDateTo(date);
            }
          }}
          onDateToChange={setDateTo}
          onUserChange={setSelectedUserId}
          onEventChange={setSelectedEventId}
          onEventTypeChange={(type) => {
            setEventType(type);
            setSelectedEventId(null);
          }}
          onStatusChange={setStatus}
          onSourceChange={setSource}
          onClear={handleClearFilters}
        />

        <div className="mt-4">
          <ModeratorAttendanceTable
            entries={entries}
            canManageExcuses={hasPermission("excuses.manage")}
            onExcuse={setSelectedAbsence}
          />
          {selectedAbsence && (
            <ExcuseAttendanceModal
              entry={selectedAbsence}
              excuseAt={getTodayDate()}
              onClose={() => setSelectedAbsence(null)}
              onConfirm={() => {
                console.log("Mock excuse attendance:", selectedAbsence);
                setSelectedAbsence(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
