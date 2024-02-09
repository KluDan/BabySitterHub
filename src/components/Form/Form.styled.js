import { styled } from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  width: 566px;
  background: #fbfbfb;
  border-radius: 30px;
  padding: 64px;
`;
export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
  margin-bottom: 20px;
`;
export const StyledText = styled.p`
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 40px;
`;
export const StyledInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`;

export const StyledFormBtn = styled.button`
  width: 100%;
  font-size: 16px;
  background: #103931;
  border-radius: 30px;
  padding-block: 16px;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border: none;
  &:hover {
    box-shadow: inset 0 0 10px #103931, 0 0 0 1px #103931;
  }
`;
