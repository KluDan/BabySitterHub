import { useSelector } from "react-redux";

function useAuth() {
  const { name, email, token, id } = useSelector((state) => state.user);

  return {
    name,
    isAuth: !!email,
    email,
    token,
    id,
  };
}

export default useAuth;
