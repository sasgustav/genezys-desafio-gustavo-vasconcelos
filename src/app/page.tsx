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
    <div>
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">E-mail</th>
              <th className="px-4 py-2">Endereço</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
