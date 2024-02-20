import { styled } from "styled-components";
import { InputError, StyledInput } from "../FormInput/FormInput.styled";

const Div = styled.div`
  grid-column: ${({ $isGridStretchRow }) =>
    $isGridStretchRow ? "span 2" : "span 1"};
`;

const PopUpInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  isGridStretchRow,
  formik,
}) => {
  return (
    <Div $isGridStretchRow={isGridStretchRow}>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {formik.touched[name] && formik.errors[name] && (
        <InputError>{formik.errors[name]}</InputError>
      )}
    </Div>
  );
};

export default PopUpInput;
