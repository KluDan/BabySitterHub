import { useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import AuthUserBlock from "./AuthUserBlock";

import {
  HeaderLogo,
  HeaderNavBlock,
  HeaderNavAuthBlock,
  HeaderStyled,
  StyledLink,
  StyledNavigation,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const { isAuth } = useAuth();

  const shouldApplyStyles = pathname === "/BabySitterHub";
  return (
    <HeaderStyled $main={shouldApplyStyles}>
      <HeaderNavBlock $main={shouldApplyStyles}>
        <HeaderLogo to="/BabySitterHub">Nanny.Services</HeaderLogo>
        <HeaderNavAuthBlock>
          <StyledNavigation>
            <StyledLink to="/BabySitterHub" end>
              Home
            </StyledLink>
            <StyledLink to="/BabySitterHub/nannies">Nannies</StyledLink>
            {isAuth && (
              <StyledLink to="/BabySitterHub/favourites">Favourites</StyledLink>
            )}
          </StyledNavigation>
          <AuthUserBlock />
        </HeaderNavAuthBlock>
      </HeaderNavBlock>
    </HeaderStyled>
  );
};

export default Header;
