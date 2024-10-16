"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        setShouldRender(true);
      } else {
        router.push("/login");
      }
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
        <p className="text-white text-xl font-semibold animate-pulse">
          Carregando...
        </p>
      </div>
    );
  }

  if (!shouldRender) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
