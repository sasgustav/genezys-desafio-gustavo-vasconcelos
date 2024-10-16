"use client";

import React from "react";

const Home = () => {
  const users = [
    {
      name: "João Silva",
      email: "joao@gmail.com",
      address: "Rua A, Bairro B, Cidade C",
    },
    {
      name: "Maria Souza",
      email: "maria@gmail.com",
      address: "Rua X, Bairro Y, Cidade Z",
    },
    {
      name: "Carlos Pereira",
      email: "carlos@gmail.com",
      address: "Avenida 1, Bairro 2, Cidade 3",
    },
    {
      name: "Ana Clara",
      email: "ana@gmail.com",
      address: "Rua das Flores, Bairro Primavera, Cidade Jardim",
    },
    {
      name: "Lucas Fernandes",
      email: "lucas@gmail.com",
      address: "Rua Nova, Bairro Antigo, Cidade Velha",
    },
    {
      name: "Fernanda Lima",
      email: "fernanda@gmail.com",
      address: "Rua Verde, Bairro Azul, Cidade Colorida",
    },
    {
      name: "Pedro Henrique",
      email: "pedro@gmail.com",
      address: "Rua Afonso Pena, Bairro Centro, Cidade Metropolitana",
    },
    {
      name: "Juliana Santos",
      email: "juliana@gmail.com",
      address: "Rua dos Lírios, Bairro dos Sonhos, Cidade Feliz",
    },
    {
      name: "Rafael Almeida",
      email: "rafael@gmail.com",
      address: "Rua Principal, Bairro Alto, Cidade Nova",
    },
    {
      name: "Camila Nunes",
      email: "camila@gmail.com",
      address: "Rua da Paz, Bairro Esperança, Cidade da Luz",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex items-start justify-center py-10 px-4"
      aria-labelledby="user-list-title"
    >
      <div className="max-w-4xl w-full bg-white text-gray-800 shadow-lg rounded-lg p-6 border border-gray-300">
        <h1
          id="user-list-title"
          className="text-3xl font-bold text-center mb-6"
        >
          Lista de Usuários
        </h1>
        <div className="overflow-x-auto">
          <table
            className="w-full table-auto border-collapse rounded-lg shadow-md"
            aria-describedby="user-list-description"
          >
            <caption id="user-list-description" className="sr-only">
              Esta tabela contém uma lista de usuários com seus nomes, e-mails e
              endereços.
            </caption>
            <thead>
              <tr className="bg-blue-600 text-white">
                <th scope="col" className="px-6 py-3 text-left">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  E-mail
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Endereço
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                  } hover:bg-blue-100 transition duration-200`}
                >
                  <td className="px-6 py-4 whitespace-nowrap" role="cell">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" role="cell">
                    {user.email}
                  </td>
                  <td className="px-6 py-4" role="cell">
                    {user.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
