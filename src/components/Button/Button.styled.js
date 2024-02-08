import { styled } from "styled-components";

export const StyledButton = styled.button`
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  padding: 14px 40px;
  border-radius: 30px;
  border: ${({ $border }) =>
    $border ? "1px solid rgba(251, 251, 251, 0.4)" : "none"};
  background-color: ${({ $border }) => ($border ? "transparent" : "#103931")};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(16, 57, 49, 0.2);
    color: black;
  }
`;
