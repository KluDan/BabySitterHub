import {
  InputBlock,
  StyledHideShowButton,
  StyledInput,
} from "./FormInput.styled";
import OpenedEye from "../../assets/icons/eye-opened.svg?react";
import ClosedEye from "../../assets/icons/eye-closed.svg?react";
import { useState } from "react";

const FormInput = ({ name, type, handleChange, value }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputBlock>
      <StyledInput
        id={name}
        name={name}
        type={
          name === "password" ? (isPasswordVisible ? "text" : "password") : type
        }
        onChange={handleChange}
        value={value}
        placeholder={capitalized}
      />
      {name === "password" && (
        <StyledHideShowButton onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <OpenedEye /> : <ClosedEye />}
        </StyledHideShowButton>
      )}
    </InputBlock>
  );
};

export default FormInput;
