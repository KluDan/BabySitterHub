import { useState } from "react";
import { styled } from "styled-components";
import CustomDropdown from "../components/DropDownMenu";

import NannyList from "../components/ListOfNannyCards";

const CatalogContainer = styled.section`
  max-width: 1184px;
  margin: 64px auto;
`;

export const Catalog = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  return (
    <CatalogContainer>
      <CustomDropdown onSelect={handleSelectOption} />
      <NannyList sortBy={selectedOption} />
    </CatalogContainer>
  );
};
