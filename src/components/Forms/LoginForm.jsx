import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "../Form";

import { setUser } from "../../store/slices/userSlice";
import { auth } from "../../firebase";
import { useState } from "react";

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (email, password) => {
    setLoading(true);
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
        localStorage.setItem("userToken", user.accessToken);
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error.code);
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-credential"
        ) {
          setError(
            "The email or password you entered is incorrect. Please check your credentials or sign up."
          );
        } else {
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Form
        onClose={onClose}
        title="Log In"
        handleClick={handleLogin}
        text="Welcome back! Please enter your credentials to access your account and continue your babysitter search."
        errorMessage={error}
        loading={loading}
      />
    </>
  );
};

export default LoginForm;
