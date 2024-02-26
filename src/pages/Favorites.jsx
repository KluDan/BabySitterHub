import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CustomDropdown from "../components/DropDownMenu";
import NannyList from "../components/ListOfNannyCards";
import { getUserFavorites } from "../firebase";
import { selectUsers } from "../store/slices/userSlice";
import { Link } from "react-router-dom";
import LoaderWithBackdrop from "../components/LoaderSpinner";

const FavoritesSection = styled.section`
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

const EmptyListMessage = styled.div`
  font-size: 34px;
  width: 1000px;
  height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colors.titleText};
  &:hover {
    text-decoration: underline;
  }
`;

export const Favorites = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { currentUser } = useSelector(selectUsers);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          setLoading(true);
          const userFavorites = await getUserFavorites(currentUser.id);
          setFavorites(userFavorites);
        }
      } catch (error) {
        console.error("Error fetching favorites", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  if (loading) {
    return <LoaderWithBackdrop />;
  }
  if (favorites.length === 0) {
    return (
      <FavoritesSection>
        <EmptyListMessage>
          <p>
            Your list of favorite nannies is empty. Please go to the{" "}
            <StyledLink to="/BabySitterHub/nannies">Catalog</StyledLink> and
            choose a suitable nanny for your child.
          </p>
        </EmptyListMessage>
      </FavoritesSection>
    );
  }

  return (
    <FavoritesSection>
      <CustomDropdown onSelect={handleSelectOption} />
      <NannyList sortBy={selectedOption} nannies={favorites} />
    </FavoritesSection>
  );
};
