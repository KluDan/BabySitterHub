import { styled } from "styled-components";
import NannyList from "../components/ListOfNannyCards";

const CatalogContainer = styled.section`
  max-width: 1184px;
  margin: 64px auto;
`;
const Filter = styled.div`
  width: 60px;
  height: 60px;
  background-color: red;
  margin-bottom: 32px;
`;
export const Catalog = () => {
  return (
    <CatalogContainer>
      <Filter>Filter</Filter>
      <NannyList />
    </CatalogContainer>
  );
};
