import { createContext } from "react";
import type { UserRole } from "../types/auth";
import type {
  ModeratorPermission,
  ModeratorPermissionPreset,
} from "../types/moderator";

export type SafeUser = {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  moderatorPreset?: ModeratorPermissionPreset;
  permissions?: ModeratorPermission[];
};

export type AuthContextValue = {
  user: SafeUser | null;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
    rememberME: boolean,
  ) => Promise<SafeUser>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
