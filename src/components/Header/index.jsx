import { useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import AuthUserBlock from "./AuthUserBlock";
import { useMediaQuery } from "react-responsive";

import {
  HeaderLogo,
  HeaderNavBlock,
  HeaderNavAuthBlock,
  HeaderStyled,
  StyledLink,
  StyledNavigation,
} from "./Header.styled";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log("pathname", pathname);
  const { isAuth } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const shouldApplyStyles = pathname === "/BabySitterHub/";

  return (
    <HeaderStyled $main={shouldApplyStyles}>
      <HeaderNavBlock $main={shouldApplyStyles}>
        <HeaderLogo to="/BabySitterHub/" $main={shouldApplyStyles}>
          BabySitterHub
        </HeaderLogo>
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <HeaderNavAuthBlock $main={shouldApplyStyles}>
            <StyledNavigation>
              <StyledLink to="/BabySitterHub/" end>
                Home
              </StyledLink>
              <StyledLink to="/BabySitterHub/nannies">Nannies</StyledLink>
              {isAuth && (
                <StyledLink to="/BabySitterHub/favorites">Favorites</StyledLink>
              )}
            </StyledNavigation>
            <AuthUserBlock main={shouldApplyStyles} />
          </HeaderNavAuthBlock>
        )}
      </HeaderNavBlock>
    </HeaderStyled>
  );
};

export default Header;
