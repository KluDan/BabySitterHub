import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import CardNanny from "../components/CardNanny";
import CustomDropdown from "../components/DropDownMenu";
import { StyledList } from "../components/ListOfNannyCards/ListOfNannyCards.styled";
import { getUserFavorites } from "../firebase";
import { selectUsers } from "../store/slices/userSlice";

export const Favorites = () => {
  const { currentUser } = useSelector(selectUsers);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const userFavorites = await getUserFavorites(currentUser.id);
          setFavorites(userFavorites);
          console.log("favorites", userFavorites);
        }
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchData();
  }, [currentUser]);

  const handleSelectOption = (option) => {
    console.log("Selected option:", option);
    setSelectedOption(option);
  };

  const FavoritesSection = styled.section`
    max-width: 1184px;
    margin: 64px auto;
  `;

  return (
    <FavoritesSection>
      <CustomDropdown onSelect={handleSelectOption} />
      <StyledList>
        {favorites?.map((nanny) => (
          <CardNanny key={nanny.id} nanny={nanny} />
        ))}
      </StyledList>
    </FavoritesSection>
  );
};
