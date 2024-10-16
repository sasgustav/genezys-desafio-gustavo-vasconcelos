import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, password: string) => {
    // Atualizamos as credenciais de teste
    if (email === "teste-gustavo-vasconcelos@investimentos.com" && password === "123456") {
      setIsAuthenticated(true);
      alert("Login bem-sucedido!"); // Alerta para indicar que o login foi bem-sucedido (pode ser substituído por redirecionamento)
    } else {
      alert("Credenciais inválidas");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
