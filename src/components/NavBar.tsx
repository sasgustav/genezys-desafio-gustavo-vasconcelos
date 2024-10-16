import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/register" className="text-white hover:text-gray-400">
            Cadastro
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/reset-password"
            className="text-white hover:text-gray-400"
          >
            Recuperar Senha
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
