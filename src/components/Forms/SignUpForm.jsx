import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "../Form";
import { setUser } from "../../store/slices/userSlice";

import { auth } from "../../firebase";
import { useState } from "react";

const SignUpForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, { displayName: name }).catch(
          (error) => {
            console.error("Error updating name:", error);
          }
        );
        dispatch(
          setUser({
            name: name,
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
        if (error.code === "auth/email-already-in-use") {
          setError(
            "A user with this email already exists. Please enter a new email or log in to your account."
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
    <Form
      onClose={onClose}
      title="Registration"
      handleClick={handleRegister}
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
      isRegistration={true}
      errorMessage={error}
      loading={loading}
    />
  );
};

export default SignUpForm;
