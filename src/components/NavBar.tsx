"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUserPlus,
  FaSignInAlt,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 p-4 shadow-lg"
      aria-label="Barra de Navegação"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-white text-2xl font-bold"
            aria-label="Página Inicial"
          >
            Gustavo Vasconcelos
          </Link>
          <p className="text-white font-light text-sm">
            Teste Frontend - Genezys App
          </p>
        </div>
        <ul className="hidden md:flex space-x-8 items-center" role="menubar">
          <NavItem href="/" label="Home" icon={<FaHome />} />
          <NavItem href="/register" label="Cadastro" icon={<FaUserPlus />} />
          <NavItem href="/login" label="Login" icon={<FaSignInAlt />} />
          <NavItem
            href="/reset-password"
            label="Recuperar Senha"
            icon={<FaKey />}
          />
          {isAuthenticated && (
            <li role="none">
              <button
                onClick={logout}
                className="text-white hover:text-gray-200 text-lg font-medium flex items-center space-x-2 transition duration-300"
                aria-label="Sair da Conta"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          aria-label="Abrir Menu"
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
        role="menu"
      >
        <ul className="space-y-4 p-4">
          <NavItem href="/" label="Home" icon={<FaHome />} />
          <NavItem href="/register" label="Cadastro" icon={<FaUserPlus />} />
          <NavItem href="/login" label="Login" icon={<FaSignInAlt />} />
          <NavItem
            href="/reset-password"
            label="Recuperar Senha"
            icon={<FaKey />}
          />
          {isAuthenticated && (
            <li role="none">
              <button
                onClick={logout}
                className="text-white hover:text-gray-200 text-lg font-medium flex items-center space-x-2 transition duration-300"
                aria-label="Sair da Conta"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <li role="none">
    <Link
      href={href}
      className="text-white hover:text-gray-200 text-lg font-medium flex items-center space-x-2 transition duration-300"
      aria-label={label}
      role="menuitem"
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

export default NavBar;
