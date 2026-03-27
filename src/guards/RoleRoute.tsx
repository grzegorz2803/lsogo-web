import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import type { UserRole } from "../types/auth";

type Props = {
  allowedRoles: UserRole[];
};

export function RoleRoute({ allowedRoles }: Props) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/brak-dostepu" replace />;
  }
  return <Outlet />;
}
