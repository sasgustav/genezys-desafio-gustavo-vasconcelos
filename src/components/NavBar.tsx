"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Gustavo Vasconcelos</Link>
          <p className="text-white font-normal ">Teste Frontend</p>
        </div>
        <ul className="hidden md:flex space-x-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/register" label="Cadastro" />
          <NavItem href="/login" label="Login" />
          <NavItem href="/reset-password" label="Recuperar Senha" />
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="space-y-4 p-4">
          <NavItem href="/" label="Home" />
          <NavItem href="/register" label="Cadastro" />
          <NavItem href="/login" label="Login" />
          <NavItem href="/reset-password" label="Recuperar Senha" />
        </ul>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <li>
    <Link
      href={href}
      className="text-white hover:text-gray-200 text-lg font-medium transition duration-300"
    >
      {label}
    </Link>
  </li>
);

export default NavBar;
