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
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/services/firebaseConfig";

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
  const SESSION_KEY = "userAuthenticated";

  useEffect(() => {
    const publicRoutes = ["/login", "/register", "/reset-password"];
    const isUserLoggedIn = sessionStorage.getItem(SESSION_KEY) === "true";
    setIsAuthenticated(isUserLoggedIn);
    setLoading(false);

    if (!isUserLoggedIn && !publicRoutes.includes(pathname)) {
      router.push("/login");
    }
  }, [pathname, router]);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (
      email === "teste-gustavo-vasconcelos@investimentos.com" &&
      password === "123456"
    ) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
      router.push("/");
      return true;
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        sessionStorage.setItem(SESSION_KEY, "true");
        setIsAuthenticated(true);
        toast.success("Login realizado com sucesso!");
        router.push("/");
        return true;
      } catch {
        toast.error("Credenciais inválidas.");
        return false;
      }
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem(SESSION_KEY);
        setIsAuthenticated(false);
        toast("Você foi desconectado.", { icon: "👋" });
        router.push("/login");
      })
      .catch(() => {
        toast.error("Erro ao desconectar.");
      });
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
