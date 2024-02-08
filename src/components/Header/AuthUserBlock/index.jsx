import useAuth from "../../../hooks/useAuth";
import Button from "../../Button";
import { StyledAuthUserBlock } from "./AuthUserBlock.styled";

const AuthUserBlock = ({ onClick }) => {
  const { isAuth, email } = useAuth();
  return (
    <StyledAuthUserBlock>
      {!isAuth ? (
        <>
          <Button title="Log in" border={true} />
          <Button title="Registration" border={false} />
        </>
      ) : (
        <>
          {/*  <Button title="Logout" border={true} /> */}
          <Button title="Log In" border={true} />
          <Button title="Registration" border={false} />
        </>
      )}
    </StyledAuthUserBlock>
  );
};

export default AuthUserBlock;
