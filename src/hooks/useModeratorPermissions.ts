import { useAuth } from "./useAuth";
import type { ModeratorPermission } from "../types/moderator";

export function useModeratorPermissions() {
  const { user } = useAuth();
  function hasPermission(permission: ModeratorPermission) {
    if (user?.role !== "moderator") {
      return false;
    }
    return user.permissions?.includes(permission) ?? false;
  }

  return {
    permissions: user?.role === "moderator" ? (user.permissions ?? []) : [],
    hasPermission,
  };
}
