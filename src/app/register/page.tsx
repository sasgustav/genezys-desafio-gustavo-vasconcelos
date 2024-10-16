"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import { toast } from "react-hot-toast"; // Importa o toast

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCep(value);

    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();
        setAddress({
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        });
      } catch {
        toast.error("CEP inválido. Por favor, tente novamente.");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    toast.success("Cadastro realizado com sucesso!");

    // Simula redirecionamento após 2 segundos
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Crie sua Conta
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Preencha o formulário abaixo para criar sua conta.
        </p>
        <Form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Input
                label="Nome Completo"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Input
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirmar Senha"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Input
              label="CEP"
              type="text"
              value={cep}
              onChange={handleCepChange}
            />
            <div className="col-span-1 md:col-span-2">
              <Input
                label="Rua"
                type="text"
                value={address.street}
                onChange={() => {}}
              />
            </div>
            <Input
              label="Bairro"
              type="text"
              value={address.neighborhood}
              onChange={() => {}}
            />
            <Input
              label="Cidade"
              type="text"
              value={address.city}
              onChange={() => {}}
            />
            <Input
              label="Estado"
              type="text"
              value={address.state}
              onChange={() => {}}
            />
          </div>
          <Button
            label="Cadastrar"
            onClick={() => {}}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mt-6 transition duration-300"
          />
        </Form>
        <p className="text-center text-gray-500 mt-4">
          Já possui uma conta?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
