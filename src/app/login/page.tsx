"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import { toast } from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState(
    "teste-gustavo-vasconcelos@investimentos.com"
  );
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);

    if (success) {
      toast.success(
        <div className="flex items-center space-x-2" role="status">
          <span>Login realizado com sucesso!</span>
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        </div>,
        { duration: 2000 }
      );

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setError("Usuário ou senha inválidos. Por favor, tente novamente.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700"
      aria-labelledby="login-title"
    >
      <div
        className="max-w-lg w-full bg-white shadow-2xl rounded-lg p-10 border border-gray-200"
        role="form"
        aria-describedby="login-description"
      >
        <div className="text-center mb-8">
          <h1 id="login-title" className="text-4xl font-bold text-gray-800">
            Bem-vindo de volta
          </h1>
          <p id="login-description" className="text-gray-500 mt-2">
            Acesse sua conta de investimentos com segurança
          </p>
        </div>
        <Form onSubmit={handleLogin}>
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
            aria-label="E-mail para login"
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-required="true"
            aria-label="Senha para login"
          />
          {error && (
            <p className="text-red-500 text-sm mt-2" role="alert">
              {error}
            </p>
          )}
          <div className="flex justify-between items-center mt-4">
            <Button
              label="Entrar"
              onClick={() => {}}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Entrar"
            />
          </div>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <a
              href="/register"
              className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Cadastre-se"
            >
              Cadastre-se
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/reset-password"
              className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Esqueceu sua senha? Clique para recuperar"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </Form>
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Protegido por autenticação multifator (MFA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
