import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "./store/userStore";

const useIsLogged = () => {
  const { isLogged } = useUserStore();
  return isLogged?.() ?? false; // Ensure isLogged is called safely
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isLogged = useIsLogged();
  const location = useLocation();

  if (isLogged) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }
  return children;
};

export default PublicRoute;
