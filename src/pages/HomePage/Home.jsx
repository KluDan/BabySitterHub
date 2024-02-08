import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header";
import Layout from "../../components/Hero";
import LoginForm from "../../components/LoginForm";
import Modal from "../../components/Modal";
import useAuth from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import { Container } from "./HomePage.styled";
import ModalContext from "../../components/ModalContext";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ showModal, toggleModal }}>
      <Container>
        <Header />
        <Layout />
        {showModal && (
          <Modal onClose={toggleModal}>
            <LoginForm onClose={toggleModal} />
          </Modal>
        )}
      </Container>
    </ModalContext.Provider>
  );
}

export default Home;
