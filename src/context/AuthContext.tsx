import React, { useMemo, useState } from "react";
import { mockLogin } from "../mocks/authMock";
import { AuthContext } from "./auth-context";
import type { SafeUser } from "./auth-context";

const STORAGE_KEY = "lso-auth-user";
const REMEMBER_ME_DURATION = 24 * 60 * 60 * 1000;
type StoredAuthUser = {
  user: SafeUser;
  expiresAt: number | null;
};
function getStoredUser(): SafeUser | null {
  const sessionSaved = sessionStorage.getItem(STORAGE_KEY);
  const localSaved = localStorage.getItem(STORAGE_KEY);
  const raw = sessionSaved ?? localSaved;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredAuthUser;
    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed.user;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SafeUser | null>(() => getStoredUser());

  async function login(email: string, password: string, rememberMe: boolean) {
    const loggedUser = await mockLogin(email, password);
    setUser(loggedUser);
    const payload: StoredAuthUser = {
      user: loggedUser,
      expiresAt: rememberMe ? Date.now() + REMEMBER_ME_DURATION : null,
    };
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } else {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    }
    return loggedUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
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
