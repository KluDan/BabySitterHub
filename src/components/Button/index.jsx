import { StyledButton } from "./Button.styled";

const Button = ({ title, border, onClick }) => {
  return (
    <StyledButton $border={border} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
