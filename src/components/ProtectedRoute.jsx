import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthProvider.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/BabySitterHub", { replace: true });
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
}
