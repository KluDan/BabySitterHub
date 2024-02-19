import { useModal } from "../../../utils/helpers/ModalContext";

import Button from "../../Button";
import LoginForm from "../../LoginForm";
import Modal from "../../Modal";
import SignUpForm from "../../SignUpForm";

import UserIcon from "../../../assets/icons/user-icon.svg?react";
import {
  StyledAuthUserBlock,
  UserInfo,
  UserBlock,
  IconBlock,
} from "./AuthUserBlock.styled";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { setUser } from "../../../store/slices/userSlice";
import useAuth from "../../../utils/hooks/useAuth";

const AuthUserBlock = () => {
  const { name, isAuth } = useAuth();
  const { modalConfig, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => dispatch(setUser(null)))
      .catch((error) => console.log(error));
  };

  return (
    <StyledAuthUserBlock>
      {!isAuth ? (
        <>
          <Button
            title="Log in"
            border={true}
            onClick={() => openModal("login")}
          />
          <Button
            title="Registration"
            border={false}
            onClick={() => openModal("registration")}
          />
        </>
      ) : (
        <UserBlock>
          <UserInfo>
            <IconBlock>
              <UserIcon />
            </IconBlock>
            <span>{name}</span>
          </UserInfo>
          <Button title="Logout" border={true} onClick={handleLogOut} />
        </UserBlock>
      )}
      {modalConfig.isOpen && (
        <Modal onClose={closeModal}>
          {modalConfig.formType === "login" ? (
            <LoginForm onClose={closeModal} />
          ) : modalConfig.formType === "registration" ? (
            <SignUpForm onClose={closeModal} />
          ) : null}
        </Modal>
      )}
    </StyledAuthUserBlock>
  );
};

export default AuthUserBlock;
