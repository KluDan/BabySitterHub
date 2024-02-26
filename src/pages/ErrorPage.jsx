import { Link, useRouteError } from "react-router-dom";
import { styled } from "styled-components";
import ErrorImg from "../assets/images/Error.png";

const Wrapper = styled.section`
  height: 100lvh;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(p) => p.theme.colors.headerText};
  img {
    text-align: center;
    opacity: 0.3;
  }
  h1 {
    font-size: 80px;
  }
  p {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  color: ${(p) => p.theme.colors.headerText};
  text-decoration: underline;
`;

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <h1>Oooops...</h1>
      <img src={ErrorImg} />
      {error.statusText === "Not Found" ? (
        <p>Sorry, the page you're looking for cannot be found.</p>
      ) : (
        <p>Sorry, something went wrong. "{error.statusText}"</p>
      )}

      <StyledLink to="/BabySitterHub/">Back to home</StyledLink>
    </Wrapper>
  );
};

export default ErrorPage;
