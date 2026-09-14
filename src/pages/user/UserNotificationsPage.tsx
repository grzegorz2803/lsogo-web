import { useState } from "react";
import { PanelPageHeader } from "../../components/Panel/PanelPageHeader";
import { userNotificationsContent } from "../../content/userNotifications";
import { UserNotificationList } from "../../components/UserNotifications/UserNotificationsList";
import {
  userNotificationsMock,
  type UserNotification,
} from "../../mocks/userNotificationsMock";
import { useNavigate } from "react-router-dom";

export default function UserNotificationsPage() {
  const [notifications, setNotifications] = useState<UserNotification[]>(
    userNotificationsMock,
  );
  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;
  const navigate = useNavigate();
  function handleNotificationCLick(id: number) {
    const notification = notifications.find(
      (notification) => notification.id === id,
    );

    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
    if (notification?.link) {
      navigate(notification.link);
    }
  }
  function handelMarkAllAsRead() {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  }
  return (
    <div>
      <PanelPageHeader
        title={userNotificationsContent.title}
        subtitle={userNotificationsContent.subtitle}
      />
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            Nieprzeczytane:{" "}
            <span className="font-medium text-amber-300">{unreadCount}</span>
          </p>
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={handelMarkAllAsRead}
              className="cursor-pointer text-sm text-amber-300 transition hover:text-amber-200"
            >
              Oznacz wszystkie jako przeczytane
            </button>
          )}
        </div>
        <UserNotificationList
          notifications={notifications}
          onNotificationClick={handleNotificationCLick}
        />
      </div>
    </div>
  );
}
