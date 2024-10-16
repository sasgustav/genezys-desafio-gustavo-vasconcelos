"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success(`Link de recuperação enviado para ${email}`, { icon: "📧" });

    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700"
      aria-labelledby="reset-password-title"
    >
      <div
        className="max-w-md w-full bg-white shadow-2xl rounded-lg p-8 border border-gray-200"
        role="form"
        aria-describedby="reset-password-description"
      >
        <div className="text-center mb-6">
          <h1
            id="reset-password-title"
            className="text-3xl font-bold text-gray-800"
          >
            Recuperar Senha
          </h1>
          <p id="reset-password-description" className="text-gray-500 mt-2">
            Informe o e-mail associado à sua conta para receber o link de
            recuperação.
          </p>
        </div>
        {!isSubmitted ? (
          <Form onSubmit={handleSubmit}>
            <Input
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              aria-required="true"
              aria-label="E-mail para recuperação de senha"
            />
            <Button
              label="Enviar Link de Recuperação"
              onClick={() => {}}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow-lg w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </Form>
        ) : (
          <div className="text-center" role="status">
            <h2 className="text-xl font-semibold text-green-600">
              Link de recuperação enviado!
            </h2>
            <p className="text-gray-500 mt-2">
              Verifique sua caixa de entrada para continuar o processo de
              redefinição.
            </p>
          </div>
        )}
        <div className="text-center mt-6">
          <a
            href="/login"
            className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Voltar para o login"
          >
            Voltar para o Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
