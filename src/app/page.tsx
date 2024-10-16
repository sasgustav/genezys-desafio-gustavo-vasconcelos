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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white text-gray-800 shadow-lg rounded-lg p-8 border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-8">
          Lista de Usuários
        </h1>
        <table className="w-full table-auto border-collapse overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-6 py-3 text-left">Nome</th>
              <th className="px-6 py-3 text-left">E-mail</th>
              <th className="px-6 py-3 text-left">Endereço</th>
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
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
