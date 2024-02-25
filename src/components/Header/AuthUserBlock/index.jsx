import { useModal } from "../../../utils/helpers/ModalContext";

import Button from "../../Button";
import LoginForm from "../../Forms/LoginForm";
import Modal from "../../Modal";
import SignUpForm from "../../Forms/SignUpForm";

import UserIcon from "../../../assets/icons/user-icon.svg?react";
import {
  StyledAuthUserBlock,
  UserInfo,
  UserBlock,
  IconBlock,
  LogoutModal,
  ButtonBlock,
  TabletAuthMenu,
  MobileAuthBlock,
} from "./AuthUserBlock.styled";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { setUser } from "../../../store/slices/userSlice";
import useAuth from "../../../utils/hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const AuthUserBlock = ({ main }) => {
  const { name, email, isAuth } = useAuth();
  const { modalConfig, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const [showAuth, setShowAuth] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleClickOutside = (event) => {
      const authUserBlock = document.getElementById("authUserBlock");

      if (authUserBlock && !authUserBlock.contains(event.target)) {
        setShowAuth(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowAuth]);

  const handleOpenConfirmLogout = () => {
    setConfirmLogout(true);
  };

  const handleCloseConfirmLogout = () => {
    setConfirmLogout(false);
  };

  const handleLogout = () => {
    if (confirmLogout) {
      signOut(auth)
        .then(() => {
          dispatch(setUser(null));
          handleCloseConfirmLogout();
          localStorage.removeItem("userToken");
          navigate("/BabySitterHub/", { replace: true });
        })
        .catch((error) => console.log(error));
    }
  };
  const handleClick = () => {
    setShowAuth((prevState) => !prevState);
  };
  const handleModalOpen = (formType) => {
    openModal(formType);
    setShowAuth(true);
  };

  const handleToggleLogoutModal = () => {
    setShowAuth(false);
    setConfirmLogout((prevState) => !prevState);
  };

  if (isMobile) {
    return (
      <MobileAuthBlock>
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
            <Button
              title="Logout"
              border={true}
              onClick={handleOpenConfirmLogout}
            />
            {confirmLogout && (
              <LogoutModal onClose={handleCloseConfirmLogout}>
                <div onClick={handleCloseConfirmLogout}>
                  <p>Are you sure you want to log out?</p>
                  <ButtonBlock>
                    <button onClick={handleLogout}>Confirm</button>
                    <button onClick={handleCloseConfirmLogout}>Cancel</button>
                  </ButtonBlock>
                </div>
              </LogoutModal>
            )}
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
      </MobileAuthBlock>
    );
  }

  return isTablet ? (
    <UserInfo>
      <span>{name}</span>
      <IconBlock id="authUserBlock" onClick={handleClick}>
        <UserIcon />
        {showAuth && (
          <TabletAuthMenu $main={main}>
            {!isAuth ? (
              <>
                <Button
                  title="Log in"
                  border={true}
                  onClick={() => handleModalOpen("login")}
                />
                <Button
                  title="Registration"
                  border={false}
                  onClick={() => handleModalOpen("registration")}
                />
              </>
            ) : (
              <UserBlock>
                <UserInfo>
                  <span>{email}</span>
                </UserInfo>
                <Button
                  title="Logout"
                  border={true}
                  onClick={handleToggleLogoutModal}
                />
                {confirmLogout && (
                  <LogoutModal onClose={handleCloseConfirmLogout}>
                    <div onClick={handleCloseConfirmLogout}>
                      <p>Are you sure you want to log out?</p>
                      <ButtonBlock>
                        <button onClick={handleLogout}>Confirm</button>
                        <button onClick={handleCloseConfirmLogout}>
                          Cancel
                        </button>
                      </ButtonBlock>
                    </div>
                  </LogoutModal>
                )}
              </UserBlock>
            )}
          </TabletAuthMenu>
        )}
      </IconBlock>
      {modalConfig.isOpen && (
        <Modal onClose={closeModal}>
          {modalConfig.formType === "login" ? (
            <LoginForm onClose={closeModal} />
          ) : modalConfig.formType === "registration" ? (
            <SignUpForm onClose={closeModal} />
          ) : null}
        </Modal>
      )}
    </UserInfo>
  ) : (
    <StyledAuthUserBlock $main={main}>
      {!isAuth ? (
        <>
          <Button
            $main={main}
            title="Log in"
            border={true}
            onClick={() => openModal("login")}
          />
          <Button
            $main={main}
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
          <Button
            title="Logout"
            border={true}
            onClick={handleOpenConfirmLogout}
          />
          {confirmLogout && (
            <LogoutModal onClose={handleCloseConfirmLogout}>
              <div onClick={handleCloseConfirmLogout}>
                <p>Are you sure you want to log out?</p>
                <ButtonBlock>
                  <button onClick={handleLogout}>Confirm</button>
                  <button onClick={handleCloseConfirmLogout}>Cancel</button>
                </ButtonBlock>
              </div>
            </LogoutModal>
          )}
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
