import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  position: ${({ $main }) => ($main ? "absolute" : "static")};
  top: 0;
  left: 0;
  z-index: 1000;
  max-width: 100%;
  padding-inline: ${({ $main }) => ($main ? "128px" : "0")};
  width: ${({ $main }) => ($main ? "100%" : "100%")};
  background-color: ${({ $main, theme }) =>
    $main ? "transparent" : theme.colors.primaryGreenColor};

  @media (max-width: 1210px) {
    padding-inline: ${({ $main }) => ($main ? "100px" : "30px")};
  }
  @media (max-width: 1024px) {
    padding-inline: ${({ $main }) => ($main ? "80px" : "20px")};
  }
  @media (max-width: 768px) {
    padding-inline: 20px;
    position: static;
    background-color: ${(p) => p.theme.colors.primaryGreenColor};
  }
`;

export const HeaderNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  margin: 0 auto;
  max-width: 1184px;
  @media (max-width: 768px) {
    padding-block: 14px;
  }
`;

export const HeaderLogo = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.headerText};
  /*  padding-right: 200px; */
  padding-right: ${({ $main }) => ($main ? "0px" : "180px")};
  @media (max-width: 480px) {
    padding-right: ${({ $main }) => ($main ? "0px" : "100px")};
  }
`;
export const HeaderNavAuthBlock = styled.div`
  width: ${({ $main }) => ($main ? "auto" : "100%")};
  display: flex;
  gap: ${({ $main }) => ($main ? "92px" : "0")};
  justify-content: ${({ $main }) => ($main ? "stretch" : "space-between")};
  align-items: center;
  max-width: 715px;
  @media (max-width: 1200px) {
    gap: 70px;
  }
  @media (max-width: 1024px) {
    gap: 100px;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 40px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  &.active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      right: 50%;
      transform: translate(50%, 100%);
      width: 8px;
      height: 8px;
      background-color: #fbfbfb;
      border-radius: 50%;
    }
  }
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    transform: scale(1.1);
  }
`;
