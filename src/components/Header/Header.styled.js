import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  position: ${({ $main }) => ($main ? "absolute" : "static")};
  top: 0;
  left: 128px;
  z-index: 1000;
  width: ${({ $main }) => ($main ? "1184px" : "100%")};
  background-color: ${({ $main, theme }) =>
    $main ? "transparent" : theme.colors.primaryGreenColor};
`;

export const HeaderNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  padding-inline: ${({ $main }) => ($main ? "0" : "128px")};
`;

export const HeaderLogo = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.headerText};
`;
export const HeaderNavAuthBlock = styled.div`
  display: flex;
  gap: 92px;
  align-items: center;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 40px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
`;

export const StyledLink = styled(NavLink)`
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
`;
