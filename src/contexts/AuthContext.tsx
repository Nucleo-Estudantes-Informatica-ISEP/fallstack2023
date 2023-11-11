"use client";

import { createContext, useEffect, useState } from "react";

import { UserWithProfile } from "@/types/UserWithProfile";
import getSession from "@/services/getSession";

export interface AuthContextData {
  user: UserWithProfile | null;
  clear: () => void;
  fetchSession: () => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthContextProvider({
  children,
  ...props
}: AuthContextProviderProps) {
  const [user, setUser] = useState<UserWithProfile | null>(null);

  const fetchSession = async () => {
    const user = await getSession();
    setUser(user);
  };

  const clear = () => setUser(null);

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, clear, fetchSession }} {...props}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
