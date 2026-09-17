export type ModeratorPermission =
  | "users.view"
  | "ranking.view"
  | "attendance.service.check"
  | "attendance.meeting.check"
  | "attendance.history.view"
  | "schedule.view"
  | "schedule.manage"
  | "calendar.view"
  | "calendar.notes.manage"
  | "messages.view"
  | "messages.send"
  | "excuses.manage"
  | "services.manage"
  | "reports.view";

export type ModeratorPermissionPreset = "basic" | "moderator" | "full";

export const ModeratorPermissionPresets: Record<
  ModeratorPermissionPreset,
  ModeratorPermission[]
> = {
  basic: ["attendance.service.check", "schedule.view", "calendar.view"],

  moderator: [
    "users.view",
    "ranking.view",
    "attendance.service.check",
    "attendance.meeting.check",
    "attendance.history.view",
    "schedule.view",
    "schedule.manage",
    "calendar.view",
    "calendar.notes.manage",
    "messages.view",
    "messages.send",
  ],

  full: [
    "users.view",
    "ranking.view",
    "attendance.service.check",
    "attendance.meeting.check",
    "attendance.history.view",
    "schedule.view",
    "schedule.manage",
    "calendar.view",
    "calendar.notes.manage",
    "messages.view",
    "messages.send",
    "excuses.manage",
    "services.manage",
    "reports.view",
  ],
};
