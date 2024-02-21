import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CloseIcon from "../../assets/icons/close.svg?react";
import styled from "styled-components";
import { StyledLink, StyledNavigation } from "./Header.styled";
import useAuth from "../../utils/hooks/useAuth";
import AuthUserBlock from "./AuthUserBlock";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const OpenedMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-50%")};
  width: 50%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.mainBackground};
  transition: right 0.3s ease-in-out;
  z-index: 3;
  padding: 80px 20px;
  @media (max-width: 480px) {
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-70%")};
    width: 70%;
  }
`;

const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    bottom: -20px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(p) => p.theme.colors.primaryGreenColor};
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const StyledLinkBurger = styled(StyledLink)`
  color: ${(p) => p.theme.colors.primaryGreenColor};
  font-size: 30px;
  &.active {
    &::after {
      width: 14px;
      height: 14px;
      top: 50%;
      left: -30px;
      transform: translateY(-50%);
      background-color: ${(p) => p.theme.colors.primaryGreenColor};
    }
  }
`;

const StyledNavigationBurger = styled(StyledNavigation)`
  flex-direction: column;
`;

const BurgerMenu = () => {
  const { isAuth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <RxHamburgerMenu color="#FBFBFB" size={34} onClick={toggleMenu} />
      {isOpen && <Overlay onClick={toggleMenu} />}
      <OpenedMenu $isOpen={isOpen}>
        <StyledCloseIcon onClick={toggleMenu} />
        <MenuContent>
          <StyledNavigationBurger>
            <StyledLinkBurger to="/BabySitterHub" end>
              Home
            </StyledLinkBurger>
            <StyledLinkBurger to="/BabySitterHub/nannies">
              Nannies
            </StyledLinkBurger>
            {isAuth && (
              <StyledLinkBurger to="/BabySitterHub/favorites">
                Favorites
              </StyledLinkBurger>
            )}
          </StyledNavigationBurger>
        </MenuContent>
        <AuthUserBlock />
      </OpenedMenu>
    </Container>
  );
};

export default BurgerMenu;
