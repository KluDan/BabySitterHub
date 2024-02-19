import { styled } from "styled-components";

export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  & > button {
    align-self: center;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`;
