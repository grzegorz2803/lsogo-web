import { moderatorContent } from "../../../content/moderator";
import type { MeetingAttendanceStatus } from "../../../mocks/moderatorMeetingAttendanceMock";

export type MeetingAttendanceUser = {
  id: number;
  name: string;
  functionName: string;
};

type MeetingAttendanceUserListProps = {
  users: MeetingAttendanceUser[];
  statuses: Record<number, MeetingAttendanceStatus>;
  onStatusChange: (userId: number, status: MeetingAttendanceStatus) => void;
};

export function MeetingAttendanceUserList({
  users,
  statuses,
  onStatusChange,
}: MeetingAttendanceUserListProps) {
  const { manualMeeting } = moderatorContent.attendance;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="grid grid-cols-[1fr_1fr_2fr] border-b border-white/10 bg-white/5 px-5 py-4 text-xx uppercase tracking-wider text-white/40">
        <span> {manualMeeting.table.user}</span>
        <span> {manualMeeting.table.function}</span>
        <span>{manualMeeting.table.status}</span>
      </div>
      <div className="divide-y divide-white/5">
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-[1fr_1fr_2fr] items-center gap-4 px-5 py-4"
          >
            <span className="font-medium text-white">{user.name}</span>
            <span className="text-sm text-white/60">{user.functionName}</span>
            <div className="flex gap-2">
              <StatusButton
                status="PRESENT"
                active={statuses[user.id] === "PRESENT"}
                onClick={() => onStatusChange(user.id, "PRESENT")}
              >
                {manualMeeting.statuses.present}
              </StatusButton>
              <StatusButton
                status="EXCUSED"
                active={statuses[user.id] === "EXCUSED"}
                onClick={() => onStatusChange(user.id, "EXCUSED")}
              >
                {manualMeeting.statuses.excused}
              </StatusButton>
              <StatusButton
                status="ABSENT"
                active={statuses[user.id] === "ABSENT"}
                onClick={() => onStatusChange(user.id, "ABSENT")}
              >
                {manualMeeting.statuses.absent}
              </StatusButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
type StatusButtonProps = {
  status: MeetingAttendanceStatus;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

function StatusButton({
  status,
  active,
  children,
  onClick,
}: StatusButtonProps) {
  const activeClassName = {
    PRESENT: "border-emerald-400/30 bg-emerald-400/15 text-emerald-300",
    EXCUSED: "border-white/20 bg-white/10 text-white",
    ABSENT: "border-red-400/30 bg-red-400/15 text-red-300",
  }[status];
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition ${
        active
          ? activeClassName
          : "border-white/10 text-white/60 hover:bg-white/5 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
