import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { setUser } from "../store/slices/userSlice";

import { auth } from "../firebase";

const SignUpForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleRegister = (email, password, name) => {
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
        onClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
      });
  };
  return (
    <Form
      onClose={onClose}
      title="Registration"
      handleClick={handleRegister}
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
      isRegistration={true}
    />
  );
};

export default SignUpForm;
