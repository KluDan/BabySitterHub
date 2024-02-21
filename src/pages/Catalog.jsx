import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, query, orderByKey } from "firebase/database";
import { styled } from "styled-components";
import CustomDropdown from "../components/DropDownMenu";

import NannyList from "../components/ListOfNannyCards";
import LoaderWithBackdrop from "../components/LoaderSpinner";

const CatalogContainer = styled.section`
  max-width: 1184px;
  margin: 64px auto;
  @media (max-width: 1210px) {
    padding-inline: 30px;
  }
  @media (max-width: 1024px) {
    padding-inline: 20px;
    margin-block: 40px;
  }
  @media (max-width: 768px) {
    margin-block: 20px;
  }
`;

export const Catalog = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = ref(db, "/nannies");

    const initialQuery = query(dataRef, orderByKey());

    const unsubscribe = onValue(initialQuery, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const nanniesArray = Object.values(data);
        setNannies(nanniesArray);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  if (loading) {
    return <LoaderWithBackdrop />;
  }

  return (
    <CatalogContainer>
      <CustomDropdown onSelect={handleSelectOption} />
      <NannyList sortBy={selectedOption} nannies={nannies} />
    </CatalogContainer>
  );
};
