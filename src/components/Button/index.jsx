import { useContext } from "react";
import ModalContext from "../ModalContext";
import { StyledButton } from "./Button.styled";

const Button = ({ title, border, onClick }) => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <StyledButton $border={border} onClick={toggleModal}>
      {title}
    </StyledButton>
  );
};

export default Button;
