import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 96px;
  z-index: 1000;
  display: flex;
  width: 1184px;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
`;

export const HeaderLogo = styled.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
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
