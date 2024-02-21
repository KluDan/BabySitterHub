import { styled } from "styled-components";

export const InputBlock = styled.div`
  position: relative;
`;
export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  background-color: transparent;
  font-size: 16px;
  line-height: 125%;
  color: #11101c;
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus,
  &:hover {
    outline: #103931 solid 1px;
  }
  grid-column: ${({ $isGridStretchRow }) =>
    $isGridStretchRow ? "span 2" : "span 1"};
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export const StyledHideShowButton = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 16px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const InputError = styled.div`
  margin-top: 4px;
  color: red;
`;
