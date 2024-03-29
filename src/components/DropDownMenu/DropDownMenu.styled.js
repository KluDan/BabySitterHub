import { styled } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 32px;
  z-index: 1;
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: ${(p) => p.theme.colors.titleText};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const DropdownButton = styled.button`
  padding: 16px 23px 16px 18px;
  width: 226px;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
  border-radius: 14px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: ${(p) => p.theme.colors.headerText};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    min-width: 150px;
    gap: 20px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  padding: 14px 18px;
  list-style: none;
  border-radius: 14px;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  background: ${(p) => p.theme.colors.primaryWhite};
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const DropdownListItem = styled.li`
  font-size: 18px;
  line-height: 111%;
  color: rgba(17, 16, 28, 0.3);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${(p) =>
    p.selected &&
    `
    color: ${p.theme.colors.primaryBodyText};
  `}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
