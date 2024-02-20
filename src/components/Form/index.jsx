import { useFormik } from "formik";
import { validationSchema } from "../../utils/schemes/authSchema";

import FormInput from "../FormInput";
import LoaderWithBackdrop from "../LoaderSpinner";

import {
  StyledForm,
  StyledFormBtn,
  StyledText,
  StyledTitle,
  StyledInputBlock,
  CloseBtn,
  StyledError,
} from "./Form.styled";

export const Form = ({
  title,
  handleClick,
  text,
  isRegistration,
  onClose,
  errorMessage,
  loading,
}) => {
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
    validationSchema: validationSchema,
  });
  if (loading) {
    return <LoaderWithBackdrop />;
  }
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
            formik={formik}
          />
        )}

        <FormInput
          name="email"
          type="email"
          handleChange={formik.handleChange}
          value={formik.values.email}
          formik={formik}
        />

        <FormInput
          name="password"
          type="password"
          handleChange={formik.handleChange}
          value={formik.values.password}
          formik={formik}
        />
      </StyledInputBlock>
      <StyledFormBtn type="submit">
        {isRegistration ? "Sign Up" : "Log In"}
      </StyledFormBtn>
      {errorMessage && <StyledError>{errorMessage}</StyledError>}
    </StyledForm>
  );
};
