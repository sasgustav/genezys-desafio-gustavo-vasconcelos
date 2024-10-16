import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Genezys App - Gustavo Vasconcelos - Teste Frontend</Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/register" label="Cadastro" />
          <NavItem href="/login" label="Login" />
          <NavItem href="/reset-password" label="Recuperar Senha" />
        </ul>
        <div className="md:hidden">
          <MobileMenu />
        </div>
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

const MobileMenu: React.FC = () => (
  <button className="text-white focus:outline-none">
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
);

export default NavBar;
