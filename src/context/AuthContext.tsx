import React, { useMemo, useState } from "react";
import { mockLogin } from "../mocks/authMock";
import { AuthContext } from "./auth-context";
import type { SafeUser } from "./auth-context";

const STORAGE_KEY = "lso-auth-user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SafeUser | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    try {
      return JSON.parse(saved) as SafeUser;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  });

  async function login(email: string, password: string) {
    const loggedUser = await mockLogin(email, password);
    setUser(loggedUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
    return loggedUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
