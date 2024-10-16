export interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  if (email === "admin@example.com" && password === "password") {
    return {
      success: true,
      token: "fake-jwt-token",
    };
  } else {
    return {
      success: false,
      message: "Credenciais inválidas",
    };
  }
};

export const logout = () => {
  console.log("Usuário deslogado");
};

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  if (email && password && name) {
    return {
      success: true,
      token: "fake-jwt-token",
    };
  } else {
    return {
      success: false,
      message: "Falha no registro. Verifique os dados.",
    };
  }
};
