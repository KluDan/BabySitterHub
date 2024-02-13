import { StyledInput } from "../FormInput/FormInput.styled";

const PopUpInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  isGridStretchRow,
}) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      $isGridStretchRow={isGridStretchRow}
    />
  );
};

export default PopUpInput;
