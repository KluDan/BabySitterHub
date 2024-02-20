import {
  InputBlock,
  InputError,
  StyledHideShowButton,
  StyledInput,
} from "./FormInput.styled";
import OpenedEye from "../../assets/icons/eye-opened.svg?react";
import ClosedEye from "../../assets/icons/eye-closed.svg?react";
import { useState } from "react";

const FormInput = ({ name, type, handleChange, value, formik }) => {
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
      {formik.touched[name] && formik.errors[name] && (
        <InputError>{formik.errors[name]}</InputError>
      )}
      {formik.touched[name] && name === "name" && value.length < 2 && (
        <InputError>Required and at least 2 symbols</InputError>
      )}
    </InputBlock>
  );
};

export default FormInput;
