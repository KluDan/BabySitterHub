import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "./Form";

import { setUser } from "../store/slices/userSlice";
import { auth } from "../firebase";

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const displayName = user.displayName || "";
        dispatch(
          setUser({
            name: displayName,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Form
      onClose={onClose}
      title="Log In"
      handleClick={handleLogin}
      text="Welcome back! Please enter your credentials to access your account and continue your babysitter search."
    />
  );
};

export default LoginForm;
