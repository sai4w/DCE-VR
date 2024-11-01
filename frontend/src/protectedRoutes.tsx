import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { toast } from "sonner";
import useUserStore from "./store/userStore";

const useAuth = () => {
  const { isLogged } = useUserStore();
  return isLogged();
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLogged = useAuth();
  const location = useLocation();

  if (!isLogged) {
    toast.error("Vous devez vous connecter pour accéder à cette page");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
