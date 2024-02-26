import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { setUser } from "../store/slices/userSlice";
import { ModalProvider } from "../utils/helpers/ModalContext";
import Header from "./Header";

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
`;
const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          id: user.uid,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ModalProvider>
      <Container>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </ModalProvider>
  );
};

export default Layout;
