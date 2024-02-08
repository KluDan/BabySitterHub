import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "./Form/Form";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
  return (
    <Form
      title="Registration"
      handleClick={handleRegister}
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
      isRegistration={true}
    />
  );
};

export default SignUpForm;
