import { styled } from "styled-components";

export const StyledAuthUserBlock = styled.div`
  display: flex;
  gap: 9px;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    letter-spacing: -0.01em;
    color: ${(p) => p.theme.colors.headerText};
  }
`;
export const IconBlock = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.headerText};
`;
