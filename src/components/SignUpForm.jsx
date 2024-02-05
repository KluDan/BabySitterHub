import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "./Form";
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
  return <Form title="Register" handleClick={handleRegister} />;
};

export default SignUpForm;
