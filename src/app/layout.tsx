"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublicRoute = ["/login", "/register", "/reset-password"].includes(
    pathname
  );

  return (
    <html lang="pt-BR">
      <head>
        <title>Genezys App - Gustavo Vasconcelos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          {!isPublicRoute && <NavBar />}
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
