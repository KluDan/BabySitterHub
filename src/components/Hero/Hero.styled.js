import { styled } from "styled-components";

export const StyledHeroMain = styled.section`
  position: relative;
  max-width: 1376px;
  margin: 32px;
  border-radius: 30px;
  height: calc(100lvh - 64px);
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
    margin: 0;
  }
`;
export const InfoBlock = styled.div`
  width: 517px;
  flex: 1 1 49.2%;
  display: flex;
  flex-direction: column;
  padding-top: 251px;
  padding-right: 64px;
  padding-bottom: 15px;
  padding-left: 96px;
  color: ${(p) => p.theme.colors.headerText};
  @media (max-width: 1200px) {
    max-width: 517px;
    padding-top: 200px;
    padding-right: 64px;
    padding-bottom: 15px;
    padding-left: 68px;
    flex: 1 1 45%;
  }
  @media (max-width: 1024px) {
    padding-top: 170px;
    padding-right: 44px;
    padding-bottom: 15px;
    padding-left: 48px;
    flex: 1 1 40%;
  }
  @media (max-width: 768px) {
    position: relative;
    max-width: none;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 30px;
    padding-inline: 20px;
    justify-content: space-between;
  }
  @media (max-height: 640px) {
    width: 100%;
    padding-top: 150px;
    padding-bottom: 30px;
  }
  @media (max-height: 430px) {
    padding-top: 80px;
  }
`;
export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: clamp(40px, 4.1vw, 70px);
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  @media (max-width: 768px) {
    max-width: 600px;
    font-size: clamp(30px, 8vw, 50px);
  }
  @media (max-height: 400px) {
    font-size: 30px;
  }
`;
export const HeroText = styled.p`
  font-size: clamp(22px, 2vw, 28px);
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
  @media (max-height: 640px) {
    margin-bottom: 16px;
  }
`;
export const HeroBtn = styled.button`
  max-width: 231px;
  display: inline-block;
  color: ${(p) => p.theme.colors.headerText};
  border: 1px solid ${(p) => p.theme.colors.buttonBorder};
  border-radius: 30px;
  padding: 18px 50px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 1024px) {
    padding: 14px 30px;
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 18%;
    right: 20px;
  }
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    max-width: 100%;
  }
`;
export const MediaBlock = styled.div`
  flex: 1 1 50.8%;
  height: auto;
  img {
    height: calc(100lvh - 64px);
    width: 100%;
    box-shadow: inset 0 4px 4px 0 rgba(18, 20, 23, 0.6);
    @media (max-width: 640px) {
      height: 100%;
    }
  }
`;
