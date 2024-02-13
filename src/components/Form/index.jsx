import { useFormik } from "formik";

import FormInput from "../FormInput";

import {
  StyledForm,
  StyledFormBtn,
  StyledText,
  StyledTitle,
  StyledInputBlock,
  CloseBtn,
} from "./Form.styled";

export const Form = ({ title, handleClick, text, isRegistration, onClose }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: () =>
      handleClick(
        formik.values.email,
        formik.values.password,
        formik.values.name
      ),
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <CloseBtn onClick={onClose} />
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      <StyledInputBlock>
        {isRegistration && (
          <FormInput
            name="name"
            type="text"
            handleChange={formik.handleChange}
            value={formik.values.name}
          />
        )}

        <FormInput
          name="email"
          type="email"
          handleChange={formik.handleChange}
          value={formik.values.email}
        />
        <FormInput
          name="password"
          type="password"
          handleChange={formik.handleChange}
          value={formik.values.password}
        />
      </StyledInputBlock>
      <StyledFormBtn type="submit">
        {isRegistration ? "Sign Up" : "Log In"}
      </StyledFormBtn>
    </StyledForm>
  );
};
