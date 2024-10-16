"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";

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
        alert("CEP inválido");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    // Lógica de envio dos dados de cadastro para a API
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
      <Form onSubmit={handleSubmit}>
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
        <Input label="CEP" type="text" value={cep} onChange={handleCepChange} />
        <Input
          label="Rua"
          type="text"
          value={address.street}
          onChange={() => {}}
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
        <Button label="Cadastrar" onClick={() => {}} />
      </Form>
    </div>
  );
};

export default Register;
