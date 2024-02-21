import { styled } from "styled-components";
import HeartIcon from "../../assets/icons/heart-icon.svg?react";

export const ArticleNanny = styled.article`
  width: 100%;
  display: flex;
  padding: 24px;
  border-radius: 24px;
  background-color: ${(p) => p.theme.colors.headerText};
  @media (max-width: 1024px) {
    padding: 18px;
    border-radius: 18px;
  }
  @media (max-width: 768px) {
    position: relative;
  }
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
  @media (max-width: 1024px) {
    border-radius: 24px;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $fullInfo }) => ($fullInfo ? "48px" : "14px")};
  @media (max-width: 1024px) {
    gap: ${({ $fullInfo }) => ($fullInfo ? "30px" : "14px")};
  }
  @media (max-width: 768px) {
    gap: ${({ $fullInfo }) => ($fullInfo ? "20px" : "10px")};
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1024px) {
    gap: 18px;
  }
`;

export const InfoBasic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 480px) {
    justify-content: start;
    row-gap: 16px;
    column-gap: 20px;
    flex-wrap: wrap;
  }
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
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: ${(p) => p.theme.colors.primaryBodyText};
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const InfoOverview = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
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
  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
  }
`;
export const Region = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Price = styled.span`
  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ButtonsBlock = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 28px;
    button {
      font-size: 14px;
    }
  }
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
  @media (max-width: 1024px) {
    gap: 16px;
    & > :not(:last-child) {
      padding-bottom: 10px;
      border-bottom: 1px solid ${(p) => p.theme.colors.primaryBodyText};
    }
  }
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
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
