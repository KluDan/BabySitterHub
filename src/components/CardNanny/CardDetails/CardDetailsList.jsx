import { calculateAge } from "../../../utils/helpers/calculateAge";
import DetailsItem from "../../CardDetailsItem";
import { DetailsList } from "../CardNanny.styled";

const CardDetailsList = ({
  birthday,
  experience,
  kids_age,
  formattedCharacters,
  education,
}) => {
  return (
    <DetailsList>
      <DetailsItem label="Age:" value={calculateAge(birthday)} />
      <DetailsItem label="Experience:" value={experience} />
      <DetailsItem label="Kids age:" value={kids_age} />
      <DetailsItem label="Characters:" value={formattedCharacters} />
      <DetailsItem label="Education:" value={education} />
    </DetailsList>
  );
};

export default CardDetailsList;
