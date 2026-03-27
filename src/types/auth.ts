export type UserRole = "user" | "moderator" | "admin";

export type AuthUser = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: UserRole;
};
