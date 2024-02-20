import CardNanny from "../CardNanny";
import { StyledList, ListSection } from "./ListOfNannyCards.styled";
import Button from "../Button";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../ScrollToTopButton";

const NannyList = ({ sortBy, nannies }) => {
  const [displayedNannies, setDisplayedNannies] = useState([]);

  const startIndex = 0;

  const sortedNannies = [...nannies].sort((a, b) => {
    switch (sortBy) {
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "asc":
        return a.price_per_hour - b.price_per_hour;
      case "desc":
        return b.price_per_hour - a.price_per_hour;
      case "popular":
        return b.rating - a.rating;
      case "not-popular":
        return a.rating - b.rating;
      case "show-all":
      default:
        return 0;
    }
  });

  useEffect(() => {
    setDisplayedNannies(sortedNannies.slice(startIndex, startIndex + 3));
  }, [sortBy, nannies, startIndex]);

  const handleLoadMore = () => {
    const newDisplayedNannies = [
      ...displayedNannies,
      ...sortedNannies.slice(
        startIndex + displayedNannies.length,
        startIndex + displayedNannies.length + 3
      ),
    ];
    setDisplayedNannies(newDisplayedNannies);
  };

  const hasMoreNannies =
    sortedNannies.length > startIndex + displayedNannies.length;

  return (
    <ListSection>
      <StyledList>
        {displayedNannies.map((nanny) => (
          <CardNanny key={nanny.id} nanny={nanny} />
        ))}
      </StyledList>

      {hasMoreNannies && (
        <Button
          title="Load More"
          border={false}
          padding="14px 40px"
          onClick={handleLoadMore}
        />
      )}
      <ScrollToTopButton />
    </ListSection>
  );
};

export default NannyList;
