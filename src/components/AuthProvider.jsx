import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../store/slices/userSlice";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const { currentUser } = useSelector(selectUsers);
  const [user] = useState(currentUser || null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const currentUser = useContext(AuthContext);
  const userToken = localStorage.getItem("userToken");
  const isAuth = !!userToken;

  return {
    currentUser,
    name: currentUser?.name,
    isAuth,
  };
};
