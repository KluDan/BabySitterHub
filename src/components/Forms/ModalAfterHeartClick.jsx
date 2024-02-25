import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { Form } from "../Form";

import { setUser } from "../../store/slices/userSlice";
import { auth } from "../../firebase";
import { useState } from "react";
import { useModal } from "../../utils/helpers/ModalContext";
import { styled } from "styled-components";

const FormBlock = styled.div`
  position: relative;
`;
const StyledText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 64px;
  color: ${(p) => p.theme.colors.secondaryBodyText};
  font-size: 18px;
  span {
    color: ${(p) => p.theme.colors.primaryBodyText};
    text-decoration: underline;
    cursor: pointer;
  }
`;

const HeartForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { openModal } = useModal();

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
      });
  };
  const onBtnClick = () => {
    openModal("registration");
  };

  return (
    <FormBlock>
      <Form
        onClose={onClose}
        title="Add to favorites"
        handleClick={handleLogin}
        text="To add nannies to your favorites, you need to log in to your account."
        errorMessage={error}
      />
      <StyledText>
        If you don't have an account yet, please{" "}
        <span onClick={onBtnClick}>register</span>.
      </StyledText>
    </FormBlock>
  );
};

export default HeartForm;
