import { Link } from "react-router-dom";
import AuthUserBlock from "./AuthUserBlock";
import {
  HeaderLogo,
  HeaderNavAuthBlock,
  HeaderStyled,
  StyledLink,
  StyledNavigation,
} from "./Header.styled";
const Header = ({ onClick }) => {
  return (
    <HeaderStyled>
      <HeaderLogo>Nanny.Services</HeaderLogo>
      <HeaderNavAuthBlock>
        <StyledNavigation>
          <StyledLink to="/BabySitterHub/">Home</StyledLink>
          <StyledLink to="/BabySitterHub/catalog">Nannies</StyledLink>

          {/* <Link to="/BabySitterHub/login">Login</Link>
          {" | "}
          <Link to="/BabySitterHub/register">Register</Link> */}
        </StyledNavigation>
        <AuthUserBlock />
      </HeaderNavAuthBlock>
    </HeaderStyled>
  );
};

export default Header;
