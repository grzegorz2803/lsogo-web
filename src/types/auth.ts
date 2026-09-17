export type UserRole = "user" | "moderator" | "parish_admin" | "system_admin";

export type AuthUser = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: UserRole;
};
