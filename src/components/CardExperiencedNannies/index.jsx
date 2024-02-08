import CheckIcon from "../../assets/icons/check-icon.svg?react";
import { CardIcon, InfoCard, Text } from "./CardExperiencedNannies.styled";

const CardExperiencedNannies = () => {
  return (
    <InfoCard>
      <CardIcon>
        <CheckIcon />
      </CardIcon>
      <Text>
        <h2>Experienced Nannies</h2>
        <span>15,000</span>
      </Text>
    </InfoCard>
  );
};

export default CardExperiencedNannies;
