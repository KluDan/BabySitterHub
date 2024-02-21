import { styled } from "styled-components";

export const InfoCard = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1200px) {
    padding: 24px;
    bottom: 40px;
    right: 40px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 100px;
    top: 300px;
    left: 15px;
  }
  @media (max-width: 640px) {
    top: 380px;
    left: 20px;
  }
  @media (max-width: 480px) {
    top: 400px;
  }
`;
export const CardIcon = styled.div`
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background: ${(p) => p.theme.colors.primaryGreenColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${(p) => p.theme.colors.secondaryBodyText};
    margin-bottom: 6px;
  }
  span {
    font-weight: 700;
    font-size: 24px;
    color: ${(p) => p.theme.colors.primaryBodyText};
  }
`;
