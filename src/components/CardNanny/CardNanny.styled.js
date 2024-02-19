import { styled } from "styled-components";
import HeartIcon from "../../assets/icons/heart-icon.svg?react";

export const ArticleNanny = styled.article`
  width: 100%;
  display: flex;
  padding: 24px;
  border-radius: 24px;
  background-color: ${(p) => p.theme.colors.headerText};
`;

export const ImageContainer = styled.div`
  border: 2px solid ${(p) => p.theme.colors.photoBorder};
  border-radius: 30px;
  max-width: 120px;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    border-radius: 15px;
    max-width: 96px;
    height: auto;
  }
  margin-right: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $fullInfo }) => ($fullInfo ? "48px" : "14px")};
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoBasic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${(p) => p.theme.colors.titleText};
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: ${(p) => p.theme.colors.primaryBodyText};
  }
`;

export const InfoOverview = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const TextInfo = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  p {
    position: relative;
  }
  & > *:not(:last-child)::before {
    content: "";
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: ${(p) => p.theme.colors.primaryBodyText};
  }
`;
export const Region = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.span`
  span {
    color: ${(p) => p.theme.colors.secondaryGreenColor};
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.secondaryBodyText};
`;
export const ButtonsBlock = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const ReadMoreBtn = styled.button`
  text-align: start;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.primaryBodyText};
  transition: ${(p) => p.theme.transition.customTrans};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(1);
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.primaryBodyText};
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  &:hover::after {
    transform: translateX(-50%) scaleX(0);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledHeartIcon = styled(HeartIcon)`
  fill: ${({ $clicked }) =>
    $clicked ? (p) => p.theme.colors.primaryGreenColor : "none"};
  stroke: ${({ $clicked }) =>
    $clicked ? (p) => p.theme.colors.primaryGreenColor : "#11101c"};

  cursor: pointer;
  transition: ${(p) => p.theme.transition.customTrans};
  &:hover {
    stroke: ${(p) => p.theme.colors.primaryGreenColor};
    transform: scale(1.1);
  }
`;
