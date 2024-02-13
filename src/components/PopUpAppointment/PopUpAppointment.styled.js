import { styled } from "styled-components";

export const PopUp = styled.div`
  border-radius: 30px;
  width: 600px;
  height: auto;
  background: #fbfbfb;
  position: relative;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TextBlock = styled.div`
  h3 {
    max-width: 400px;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #11101c;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: rgba(17, 16, 28, 0.5);
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
    color: #8a8a89;
    margin-bottom: 4px;
  }
  h4 {
    font-weight: 500;
    line-height: 150%;
    color: #11101c;
  }
`;

export const AppointmentForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  grid-column-gap: 8px;
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
    outline: #103931 solid 1px;
  }
`;
