"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8"
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold" aria-label="Desenvolvedor">
              Desenvolvido por Gustavo Vasconcelos - Genezys App
            </p>
            <p
              className="text-sm text-gray-400 mt-2"
              aria-label="Descrição do projeto"
            >
              Este projeto foi criado para demonstrar habilidades técnicas em
              frontend com Next.js e Tailwind CSS.
            </p>
          </div>

          <div
            className="flex space-x-6 mt-6 md:mt-0"
            role="navigation"
            aria-label="Links Sociais"
          >
            <a
              href="https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar perfil do LinkedIn de Gustavo Vasconcelos"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/sasgustav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar perfil do GitHub de Gustavo Vasconcelos"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6" role="separator"></div>

        <p className="text-center text-sm text-gray-500" aria-label="Copyright">
          © {new Date().getFullYear()} Gustavo Vasconcelos. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
