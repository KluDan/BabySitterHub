import { styled } from "styled-components";

export const StyledAuthUserBlock = styled.div`
  display: flex;
  gap: 9px;
  @media (max-width: 1024px) {
    display: none;
  }
  button {
    ${({ $main }) => !$main && `border:1px solid rgba(251, 251, 251, 0.4);`}
    &:hover {
      ${({ $main }) => !$main && `background-color:rgba(251, 251, 251, 0.4);`}
    }
  }
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  button {
    &:hover {
      background-color: ${(p) => p.theme.colors.headerText};
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
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
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.headerText};
  cursor: pointer;
`;

export const LogoutModal = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  border: 2px solid white;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
  border-radius: 10px;
  width: 100%;
  height: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.headerText};

  @media (max-width: 1024px) {
    top: -21px;
    right: -22px;
    width: auto;
    height: 130px;
    justify-content: center;
    font-size: 14px;
    padding-inline: 10px;
  }
  @media (max-width: 768px) {
    top: 105%;
    right: 0;
    width: 100%;
    height: auto;
    text-align: center;
    background-color: transparent;
    color: ${(p) => p.theme.colors.primaryBodyText};
    border-color: ${(p) => p.theme.colors.primaryGreenColor};
  }
`;
export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 1024px) {
    gap: 10px;
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
  button {
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid ${(p) => p.theme.colors.buttonBorder};
    background-color: inherit;
    padding: 5px 15px;
    color: ${(p) => p.theme.colors.headerText};
    transition: ${(p) => p.theme.transition.customTrans};
    &:hover {
      background-color: ${(p) => p.theme.colors.headerText};
      color: ${(p) => p.theme.colors.primaryBodyText};
    }
    @media (max-width: 1024px) {
      font-size: 12px;
      padding-inline: 12px;
    }
  }
`;

export const TabletAuthMenu = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${(p) => p.theme.colors.headerText};
  border-radius: 10px;
  padding: 20px;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
  button {
    border: 1px solid rgba(251, 251, 251, 0.4);
    &:hover {
      background-color: rgba(251, 251, 251, 0.4);
    }
  }
`;

export const MobileAuthBlock = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    color: ${(p) => p.theme.colors.primaryGreenColor};
  }

  button {
    background-color: ${(p) => p.theme.colors.primaryGreenColor};
    border: 1px solid ${(p) => p.theme.colors.primaryGreenColor};
  }
`;
