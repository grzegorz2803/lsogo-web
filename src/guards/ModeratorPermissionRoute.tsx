import { Navigate, Outlet } from "react-router-dom";
import { useModeratorPermissions } from "../hooks/useModeratorPermissions";
import type { ModeratorPermission } from "../types/moderator";

type ModeratorPermissionRouteProps = {
  permissions: ModeratorPermission[];
  requireAll?: boolean;
};

export function ModeratorPermissionRoute({
  permissions,
  requireAll = false,
}: ModeratorPermissionRouteProps) {
  const { hasPermission } = useModeratorPermissions();

  const hasAccess = requireAll
    ? permissions.every(hasPermission)
    : permissions.some(hasPermission);

  if (!hasAccess) {
    return <Navigate to="/panel/moderator" replace />;
  }
  return <Outlet />;
}
