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
  @media (max-width: 1024px) {
    gap: 24px;
    margin-bottom: 40px;
  }
`;
