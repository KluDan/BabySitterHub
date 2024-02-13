import { StyledButton } from "./Button.styled";

const Button = ({ title, border, onClick, padding }) => {
  return (
    <StyledButton $border={border} onClick={onClick} $padding={padding}>
      {title}
    </StyledButton>
  );
};

export default Button;
