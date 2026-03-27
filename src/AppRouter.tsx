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
import { ModeratorDashboardPage } from "./pages/moderator/ModeratorBashboardPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { AccessDeniedPage } from "./pages/AccessDenidedPage";

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
        <Route element={<RoleRoute allowedRoles={["user"]} />}>
          <Route path="/panel/user" element={<UserDashboardPage />} />
        </Route>
        <Route element={<RoleRoute allowedRoles={["moderator"]} />}>
          <Route path="/panel/moderator" element={<ModeratorDashboardPage />} />
        </Route>
        <Route element={<RoleRoute allowedRoles={["admin"]} />}>
          <Route path="/panel/admin" element={<AdminDashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
