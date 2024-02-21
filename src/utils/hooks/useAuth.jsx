import { useSelector } from "react-redux";
import { selectUsers } from "../../store/slices/userSlice";

function useAuth() {
  const { currentUser } = useSelector(selectUsers);

  return {
    currentUser,
    name: currentUser?.name,
    isAuth: !!currentUser?.email,
    email: currentUser.email,
  };
}

export default useAuth;
