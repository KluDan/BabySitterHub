import {
  ArticleNanny,
  ButtonsBlock,
  Description,
  DetailsList,
  ImageContainer,
  InfoBasic,
  InfoContainer,
  InfoOverview,
  MainInfo,
  Price,
  Rating,
  ReadMoreBtn,
  Region,
  ReviewList,
  TextInfo,
  Title,
} from "./CardNanny.styled";
import HeartIcon from "../../assets/icons/heart-icon.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";
import MapPinIcon from "../../assets/icons/map-pin.svg?react";
import DetailsItem from "../CardDetailsItem";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useModal } from "../../utils/helpers/ModalContext";
import PopUpAppointment from "../PopUpAppointment";
import Modal from "../Modal";
const CardNanny = ({ nanny }) => {
  const [showReviews, setShowReviews] = useState(false);
  const { modalConfig, openModal, closeModal } = useModal();
  const [selectedNanny, setSelectedNanny] = useState(null);

  useEffect(() => {
    setSelectedNanny(nanny);
  }, [nanny]);

  if (!nanny) {
    return null;
  }

  const {
    about,
    avatar_url,
    birthday,
    characters,
    education,
    experience,
    id,
    kids_age,
    location,
    name,
    price_per_hour,
    rating,
    reviews,
  } = nanny;

  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const formattedCharacters = characters
    .map((character) => character.charAt(0).toUpperCase() + character.slice(1))
    .join(", ");

  const handleOpenModal = () => {
    openModal("appointment", selectedNanny); // Передаем данные о няне в модальное окно
  };

  return (
    <ArticleNanny>
      <ImageContainer>
        <img src={avatar_url} alt="Portrait of the babysitter" />
      </ImageContainer>
      <InfoContainer $fullInfo={showReviews}>
        <MainInfo>
          <InfoBasic>
            <Title>
              <span>Nanny</span>
              <h2>{name}</h2>
            </Title>
            <InfoOverview>
              <TextInfo>
                <Region>
                  <MapPinIcon />
                  <p>{location}</p>
                </Region>
                <Rating>
                  <StarIcon />
                  <p>Rating: {rating}</p>
                </Rating>
                <Price>
                  Price / 1 hour:
                  <span> {price_per_hour}$</span>
                </Price>
              </TextInfo>
              <HeartIcon />
            </InfoOverview>
          </InfoBasic>

          <DetailsList>
            <DetailsItem label="Age:" value={age} />
            <DetailsItem label="Experience:" value={experience} />
            <DetailsItem label="Kids age:" value={kids_age} />
            <DetailsItem label="Characters:" value={formattedCharacters} />
            <DetailsItem label="Education:" value={education} />
          </DetailsList>

          <Description>{about}</Description>
        </MainInfo>
        {showReviews && (
          <ReviewList>
            {reviews.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </ReviewList>
        )}
        <ButtonsBlock>
          {showReviews && (
            <Button
              title="Make an appointment"
              border={false}
              padding="14px 28px"
              onClick={handleOpenModal}
            />
          )}
          <ReadMoreBtn onClick={() => setShowReviews(!showReviews)}>
            {showReviews ? "Show less" : "Read more"}
          </ReadMoreBtn>
        </ButtonsBlock>
      </InfoContainer>
      {modalConfig.isOpen && modalConfig.formType === "appointment" && (
        <Modal onClose={closeModal}>
          <PopUpAppointment
            onClose={closeModal}
            nanny={modalConfig.selectedNanny}
          />
        </Modal>
      )}
    </ArticleNanny>
  );
};

export default CardNanny;
