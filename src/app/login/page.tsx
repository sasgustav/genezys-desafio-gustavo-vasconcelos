"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";

const Login = () => {
  const { login } = useAuth();

  // Inicializar com o email e senha de teste
  const router = useRouter();
  const [email, setEmail] = useState("teste-gustavo-vasconcelos@investimentos.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);

    // Redireciona para a página inicial após login bem-sucedido
    router.push("/"); // Altere '/home' para a rota desejada
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-lg p-10 border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Bem-vindo de volta</h1>
          <p className="text-gray-500 mt-2">Acesse sua conta de investimentos com segurança</p>
        </div>
        <Form onSubmit={handleLogin}>
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email para login"
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Senha para login"
          />
          <div className="flex justify-between items-center mt-4">
            <Button label="Entrar" onClick={() => {}} />
          </div>
          <div className="text-center mt-6">
            <a
              href="/reset-password"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
              aria-label="Esqueceu sua senha? Clique para recuperar"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </Form>
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">Protegido por autenticação multifator (MFA)</p>
        </div>
      </div>
    </div>
  );
};

export default Login;