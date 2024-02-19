import { Navigate } from "react-router-dom";
import useAuth from "../utils/hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();

  return isAuth ? children : <Navigate to="/BabySitterHub" />;
};
