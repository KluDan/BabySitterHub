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
  &:focus,
  &:hover {
    outline: #103931 solid 1px;
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
  /* ${(props) =>
    props.error &&
    css`
      right: 30px;

      ${(props) =>
        props.$isVisible &&
        css`
          right: 10px;
        `}
    `} */
`;
