import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/BabySitterHub/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return <Form title="Login" handleClick={handleLogin} />;
};

export default LoginForm;
