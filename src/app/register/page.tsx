"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import { toast } from "react-hot-toast";
import { fetchAddressByCep } from "@/services/cepService";

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
    number: "",
  });

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCep(value);

    if (value.length === 8) {
      try {
        const addressData = await fetchAddressByCep(value);
        if (addressData) {
          setAddress((prev) => ({
            ...prev,
            ...addressData,
            number: "",
          }));
          toast.success("Endereço encontrado com sucesso!");
        } else {
          toast.error("Endereço não encontrado.");
        }
      } catch (error: unknown) {
        toast.error(
          error instanceof Error ? error.message : "Erro desconhecido."
        );
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

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Crie sua Conta
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Preencha as informações abaixo para criar sua conta.
        </p>

        <Form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Dados do Usuário:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nome Completo"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Endereço:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="CEP"
                type="text"
                value={cep}
                onChange={handleCepChange}
              />
              <Input
                label="Rua"
                type="text"
                value={address.street}
                onChange={() => {}}
              />
              <Input
                label="Número"
                type="text"
                value={address.number}
                onChange={(e) =>
                  setAddress((prev) => ({ ...prev, number: e.target.value }))
                }
              />
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
          </div>

          <Button
            label="Cadastrar"
            onClick={() => {}}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition duration-300"
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
