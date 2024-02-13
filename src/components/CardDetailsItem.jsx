import { styled } from "styled-components";

const StyledItem = styled.li`
  display: flex;
  gap: 3px;
  align-items: center;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  background: ${(p) => p.theme.colors.mainBackground};
  color: ${(p) => p.theme.colors.titleText};
  &:first-child p {
    text-decoration: underline;
  }
  p {
    text-decoration-skip-ink: none;
    color: ${(p) => p.theme.colors.primaryBodyText};
  }
`;

const DetailsItem = ({ label, value }) => (
  <StyledItem>
    <span>{label}</span>
    <p>{value}</p>
  </StyledItem>
);

export default DetailsItem;
