import { StyledButton } from "./Button.styled";

const Button = ({ title, border, onClick, padding, type }) => {
  return (
    <StyledButton
      $border={border}
      onClick={onClick}
      $padding={padding}
      type={type}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
