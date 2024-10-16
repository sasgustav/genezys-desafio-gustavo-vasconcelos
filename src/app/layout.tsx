"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { usePathname } from "next/navigation";

// Definimos o layout principal
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="pt-BR">
      <head>
        <title>Genezys App - Gustavo Vasconcelos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AuthProvider>
          {pathname !== "/reset-password" && pathname !== "/login" && <NavBar />}
          <div>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
