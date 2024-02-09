import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ModalProvider } from "../utils/helpers/ModalContext";
import Header from "./Header";

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
const Layout = () => {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
      </Container>
    </ModalProvider>
  );
};

export default Layout;
