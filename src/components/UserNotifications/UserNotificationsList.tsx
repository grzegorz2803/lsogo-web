import { CalendarDays, CircleCheck, Mail, UserRoundCheck } from "lucide-react";

import type {
  UserNotification,
  UserNotificationType,
} from "../../mocks/userNotificationsMock";

type UserNotificationListProps = {
  notifications: UserNotification[];
  onNotificationClick: (id: number) => void;
};

function getNotificationIcon(type: UserNotificationType) {
  switch (type) {
    case "schedule":
      return CalendarDays;
    case "assignment":
      return UserRoundCheck;
    case "excuse":
      return CircleCheck;
    case "message":
      return Mail;
  }
}

export function UserNotificationList({
  notifications,
  onNotificationClick,
}: UserNotificationListProps) {
  if (notifications.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-8 text-center text-slate-400">
        Nie masz żadnych powiadomień
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {notifications.map((notification) => {
        const Icon = getNotificationIcon(notification.type);
        return (
          <div
            key={notification.id}
            onClick={() => onNotificationClick(notification.id)}
            className={`rounded-2xl border p-5 transition cursor-pointer ${
              notification.read
                ? "border-white/10 bg-slate-950/25"
                : "border-amber-400/25 bg-amber-400/5"
            }`}
          >
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                <Icon className="h-5 w-5 text-amber-300" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 ">
                      <h3 className="font-medium text-slate-100">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {notification.message}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500">
                    {notification.date} · {notification.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
