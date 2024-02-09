import { styled } from "styled-components";

export const StyledHeroMain = styled.section`
  position: relative;
  width: 100%;
  max-width: 1370px;
  margin: 30px;
  border-radius: 30px;
  height: calc(100lvh - 64px);
  display: flex;
  overflow: auto;
  background-color: ${(p) => p.theme.colors.primaryGreenColor};
`;
export const InfoBlock = styled.div`
  width: 517px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 251px 64px 15px 96px;
  color: ${(p) => p.theme.colors.headerText};
`;
export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
`;
export const HeroText = styled.p`
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
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
`;
export const MediaBlock = styled.div`
  width: 699px;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    box-shadow: inset 0 4px 4px 0 rgba(18, 20, 23, 0.6);
  }
`;
