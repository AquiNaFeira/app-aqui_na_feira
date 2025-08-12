import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useSegments, useRouter } from "expo-router";
import { s } from "@/components/bancoBottomSheet/style";

type User = {
  id: string;
  email: string;
}

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const segments = useSegments();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    console.log("Tocando a campainha...");
    
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    
    const fakeToken = "abc-123-def-456";
    const fakeUser = { id: "user-123", email: email };
    
    setUser(fakeUser);
    setToken(fakeToken);
    
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    console.log("Saindo...");

    await new Promise(resolve => setTimeout(resolve, 500));

    setUser(null);
    setToken(null);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      const isSignedIn = !!user;
      const isAuthRoute = segments[0] === "( auth )";

      if (isSignedIn && isAuthRoute) {
        router.replace("/( tabs )/home");
      } else if (!isSignedIn && !isAuthRoute) {
        router.replace("/( auth )/login");
      }
    }
  } , [loading, user, segments]);

  useEffect (() => {
    const checkInitialAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setUser(null);
      setToken(null);
      setLoading(false);
    };
    checkInitialAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
