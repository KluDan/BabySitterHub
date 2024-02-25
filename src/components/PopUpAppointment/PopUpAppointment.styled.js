import { styled } from "styled-components";

export const PopUp = styled.div`
  border-radius: 30px;
  max-width: 600px;
  max-height: 760px;
  background-color: ${(p) => p.theme.colors.headerText};
  position: relative;
  padding: 40px 64px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  @media (max-width: 1024px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    gap: 20px;
    padding: 30px;
  }
  @media (max-height: 768px) {
    max-height: 600px;
  }
  @media (max-height: 540px) {
    max-height: 400px;
  }
`;

export const TextBlock = styled.div`
  h3 {
    max-width: 400px;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.primaryBodyText};
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: normal;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: ${(p) => p.theme.colors.secondaryBodyText};
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: normal;
    }
  }
`;

export const Nanny = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    border-radius: 15px;
    width: 44px;
    height: 44px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    color: ${(p) => p.theme.colors.titleText};
    margin-bottom: 4px;
  }
  h4 {
    font-weight: 500;
    line-height: 150%;
    color: ${(p) => p.theme.colors.primaryBodyText};
  }
`;

export const AppointmentForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  grid-column-gap: 8px;
  button {
    grid-column: span 2;
    margin-top: 20px;
  }
`;
export const StyledTextarea = styled.textarea`
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  grid-column: span 2;
  height: 86px;
  resize: none;
  &:focus,
  &:hover {
    outline: ${(p) => p.theme.colors.primaryGreenColor} solid 1px;
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  grid-column: span 2;
  color: ${(p) => p.theme.colors.secondaryGreenColor};
`;
