export interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  // Simulação de login. Aqui você pode integrar com sua API de autenticação.
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
  // Aqui você pode implementar a lógica de logout, como remover o token de armazenamento local
  console.log("Usuário deslogado");
};

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  // Simulação de registro de usuário. Pode ser substituído por integração com API.
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
