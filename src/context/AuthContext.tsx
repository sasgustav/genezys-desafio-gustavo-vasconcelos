"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { toast } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const publicRoutes = ["/login", "/register", "/reset-password"];

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = !!localStorage.getItem("isAuthenticated");
      setIsAuthenticated(loggedIn);
      setLoading(false);

      if (!loggedIn && !publicRoutes.includes(pathname)) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router, pathname]);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (
      email === "teste-gustavo-vasconcelos@investimentos.com" &&
      password === "123456"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      router.push("/");
      return true;
    } else {
      toast.error("Credenciais inválidas.");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    toast("Você foi desconectado.", { icon: "👋" });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
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
