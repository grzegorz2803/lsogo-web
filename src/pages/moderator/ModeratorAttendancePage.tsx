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
import {
  ModeratorAttendanceTabs,
  type AttendanceTab,
} from "../../components/moderator/attendance/ModeratorAttendanceTabs";
import {
  moderatorMeetingAttendanceMock,
  type MeetingAttendanceStatus,
} from "../../mocks/moderatorMeetingAttendanceMock";
import { moderatorUsersMock } from "../../mocks/moderatorUsersMock";
import { ManualMeetingAttendance } from "../../components/moderator/attendance/ManualMeetingAttendance";
import { MeetingAttendanceUserList } from "../../components/moderator/attendance/MeetingAttendanceUserList";
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

  const [activeTab, setActiveTab] = useState<AttendanceTab>("history");

  const [meetingStatuses, setMeetingStatuses] = useState<
    Record<number, MeetingAttendanceStatus>
  >({});

  const now = new Date();

  const [meetingDate, setMeetingDate] = useState(formatLocalDate(now));
  const [meetingTime, setMeetingTime] = useState(formatLocalTime(now));
  const [meetingPoints, setMeetingPoints] = useState(
    moderatorMeetingAttendanceMock.defaultPOints,
  );

  const [meetingSearch, setMeetingSearch] = useState("");
  const [meetingFunction, setMeetingFunction] = useState("all");

  const allMeetingUsers = [...moderatorUsersMock]
    .sort((a, b) => a.name.localeCompare(b.name, "pl"))
    .map((user) => ({
      id: user.id,
      name: user.name,
      functionName: user.function.name,
      functionCode: user.function.code,
    }));

  const meetingUsers = allMeetingUsers.filter((user) => {
    const matchesSearch = user.name
      .toLocaleLowerCase("pl")
      .includes(meetingSearch.toLocaleLowerCase("pl"));

    const matchesFunction =
      meetingFunction === "all" || user.functionCode === meetingFunction;
    return matchesSearch && matchesFunction;
  });

  const markedMeetingUsersCount = allMeetingUsers.filter(
    (user) => meetingStatuses[user.id] !== undefined,
  ).length;

  const allMeetingUsersMarked =
    markedMeetingUsersCount === allMeetingUsers.length;

  const [meetingValidationError, setMeetingValidationError] = useState(false);
  function handleSaveMeetingAttendance() {
    const unmarkedUsers = allMeetingUsers.filter(
      (user) => meetingStatuses[user.id] === undefined,
    );
    if (unmarkedUsers.length > 0) {
      setMeetingValidationError(true);
      return;
    }

    setMeetingValidationError(false);

    const payload = {
      date: meetingDate,
      time: meetingTime,
      points: meetingPoints,
      attendance: allMeetingUsers.map((user) => ({
        userId: user.id,
        status: meetingStatuses[user.id],
      })),
    };
    console.log("Mock meeting attendance:", payload);
  }
  function handleMeetingStatusChange(
    userId: number,
    status: MeetingAttendanceStatus,
  ) {
    setMeetingStatuses((current) => {
      if (current[userId] === status) {
        const updated = { ...current };
        delete updated[userId];
        return updated;
      }
      return {
        ...current,
        [userId]: status,
      };
    });
  }
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
      <ModeratorAttendanceTabs activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === "history" && (
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
      )}
      {activeTab === "service" && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/60">
          Ręczne sprawdzanie obecności na nabożeństwie
        </div>
      )}

      {activeTab === "meeting" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-white">
              {moderatorContent.attendance.manualMeeting.title}
            </h2>
            <p className="mt-1 text-sm text-white/50">
              {moderatorContent.attendance.manualMeeting.description}
            </p>
          </div>
          <ManualMeetingAttendance
            date={meetingDate}
            time={meetingTime}
            points={meetingPoints}
            search={meetingSearch}
            selectedFunction={meetingFunction}
            onDateChange={setMeetingDate}
            onTimeChange={setMeetingTime}
            onPointsChange={setMeetingPoints}
            onSearchChange={setMeetingSearch}
            onFunctionChange={setMeetingFunction}
          />

          <MeetingAttendanceUserList
            users={meetingUsers}
            statuses={meetingStatuses}
            onStatusChange={handleMeetingStatusChange}
          />
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white/70">
                {moderatorContent.attendance.manualMeeting.progress.marked}{" "}
                <span
                  className={
                    allMeetingUsersMarked
                      ? "font-medium text-emerald-300"
                      : "font-medium text-amber-300"
                  }
                >
                  {markedMeetingUsersCount}
                </span>{" "}
                {moderatorContent.attendance.manualMeeting.progress.of}{" "}
                {allMeetingUsers.length}{" "}
                {moderatorContent.attendance.manualMeeting.progress.users}
              </p>
              {meetingValidationError && !allMeetingUsersMarked && (
                <p className="mt-2 text-sm, text-red-300">
                  {
                    moderatorContent.attendance.manualMeeting.validation
                      .incomplete
                  }
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handleSaveMeetingAttendance}
              className="cursor-pointer rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-amber-300"
            >
              {moderatorContent.attendance.manualMeeting.save}
            </button>
          </div>
        </div>
      )}
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

function formatLocalDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatLocalTime(date: Date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}
