import type { AuthUser } from "../types/auth";

export const mockUsers: AuthUser[] = [
  {
    id: 1,
    email: "user@test.pl",
    password: "1234",
    name: "Jan Kowalski",
    role: "user",
  },
  {
    id: 2,
    email: "moderator@test.pl",
    password: "1234",
    name: "Piotr Nowak",
    role: "moderator",
  },
  {
    id: 3,
    email: "admin@test.pl",
    password: "1234",
    name: "Grzegorz Admin",
    role: "admin",
  },
];

export async function mockLogin(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = mockUsers.find(
    (item) => item.email === email && item.password === password,
  );
  if (!user) {
    throw new Error("Nieprawidłowe dane logowania");
  }
  const { password: _password, ...safeUser } = user;
  return safeUser;
}
