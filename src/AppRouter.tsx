import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ParishPage } from "./pages/ParishPage";
import { ContactPage } from "./pages/ContactPage";
import { CalendarPage } from "./pages/CalendarPage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./guards/ProtectedRoute";
import { RoleRoute } from "./guards/RoleRoute";
import { UserDashboardPage } from "./pages/user/UserDashboardPage";
import { ModeratorDashboardPage } from "./pages/moderator/ModeratorDashboardPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { AccessDeniedPage } from "./pages/AccessDeniedPage";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { SchedulePage } from "./pages/user/SchedulePage";
import { UserCalendarPage } from "./pages/user/UserCalendarPage";
import { ProfilePage } from "./pages/user/ProfilePage";
import { UserRankingPage } from "./pages/user/UserRankingPage";
import { UserHistoryPage } from "./pages/user/UserHistoryPage";
import UserNotificationsPage from "./pages/user/UserNotificationsPage";
import UserMessagesPage from "./pages/user/UserMessagesPage";
import { ModeratorPermissionRoute } from "./guards/ModeratorPermissionRoute";
import { ModeratorPlaceholderPage } from "./pages/moderator/ModeratorPlaceholderPage";
import { moderatorContent } from "./content/moderator";
import { ModeratorUsersPage } from "./pages/moderator/ModeratorUsersPage";
import { ModeratorUserDetailsPage } from "./pages/moderator/ModeratorUserDetailsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kalendarz" element={<CalendarPage />} />
      <Route path="/o-systemie" element={<AboutPage />} />
      <Route path="/dla-parafii" element={<ParishPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/brak-dostepu" element={<AccessDeniedPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route element={<RoleRoute allowedRoles={["user"]} />}>
            <Route path="/panel/user" element={<UserDashboardPage />} />
            <Route path="/panel/user/schedule" element={<SchedulePage />} />
            <Route path="/panel/user/calendar" element={<UserCalendarPage />} />
            <Route path="/panel/user/profile" element={<ProfilePage />} />
            <Route path="/panel/user/ranking" element={<UserRankingPage />} />
            <Route path="/panel/user/history" element={<UserHistoryPage />} />
            <Route
              path="/panel/user/notifications"
              element={<UserNotificationsPage />}
            />
            <Route path="/panel/user/messages" element={<UserMessagesPage />} />
          </Route>
          <Route element={<RoleRoute allowedRoles={["moderator"]} />}>
            <Route
              path="/panel/moderator"
              element={<ModeratorDashboardPage />}
            />
            <Route
              element={
                <ModeratorPermissionRoute permissions={["users.view"]} />
              }
            >
              <Route
                path="/panel/moderator/users"
                element={<ModeratorUsersPage />}
              />
              <Route
                path="/panel/moderator/users/:userId"
                element={<ModeratorUserDetailsPage />}
              />
            </Route>
            <Route
              element={
                <ModeratorPermissionRoute permissions={["ranking.view"]} />
              }
            >
              <Route
                path="/panel/moderator/ranking"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.ranking}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute
                  permissions={[
                    "attendance.service.check",
                    "attendance.meeting.check",
                    "attendance.history.view",
                  ]}
                />
              }
            >
              <Route
                path="/panel/moderator/attendance"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.attendance}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute permissions={["schedule.view"]} />
              }
            >
              <Route
                path="/panel/moderator/schedule"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.schedule}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute permissions={["services.manage"]} />
              }
            >
              <Route
                path="/panel/moderator/services"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.services}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute permissions={["calendar.view"]} />
              }
            >
              <Route
                path="/panel/moderator/calendar"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.calendar}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute permissions={["messages.view"]} />
              }
            >
              <Route
                path="/panel/moderator/messages"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.messages}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute permissions={["excuses.manage"]} />
              }
            >
              <Route
                path="/panel/moderator/notifications"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.notifications}
                  />
                }
              />
            </Route>

            <Route
              element={
                <ModeratorPermissionRoute permissions={["reports.view"]} />
              }
            >
              <Route
                path="/panel/moderator/reports"
                element={
                  <ModeratorPlaceholderPage
                    title={moderatorContent.pages.reports}
                  />
                }
              />
            </Route>

            <Route
              path="/panel/moderator/profile"
              element={
                <ModeratorPlaceholderPage
                  title={moderatorContent.pages.profile}
                />
              }
            />
          </Route>

          <Route element={<RoleRoute allowedRoles={["parish_admin"]} />}>
            <Route
              path="/panel/parish-admin"
              element={<AdminDashboardPage />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
