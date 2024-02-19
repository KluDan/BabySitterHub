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
  StyledHeartIcon,
  TextInfo,
  Title,
} from "./CardNanny.styled";

import StarIcon from "../../assets/icons/star.svg?react";
import MapPinIcon from "../../assets/icons/map-pin.svg?react";
import DetailsItem from "../CardDetailsItem";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useModal } from "../../utils/helpers/ModalContext";
import PopUpAppointment from "../PopUpAppointment";
import Modal from "../Modal";

import { calculateAge } from "../../utils/helpers/calculateAge";
import {
  getUserFavorites,
  removeFavoriteById,
  saveUserFavorites,
} from "../../firebase";
import useAuth from "../../utils/hooks/useAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

const CardNanny = ({ nanny }) => {
  const { currentUser, isAuth } = useAuth();
  const [showReviews, setShowReviews] = useState(false);
  const { modalConfig, openModal, closeModal } = useModal();
  const [clickedHeart, setClickedHeart] = useState(null);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser && nanny) {
        try {
          const favorites = await getUserFavorites(currentUser.id);
          const isNannyInFavorites = favorites.some(
            (favNanny) => favNanny.id === nanny.id
          );
          setClickedHeart(isNannyInFavorites);
        } catch (error) {
          console.error("Error fetching favorites", error);
        }
      }
    };

    fetchData();
  }, [currentUser, nanny]);

  const formattedCharacters = characters
    .map((character) => character.charAt(0).toUpperCase() + character.slice(1))
    .join(", ");

  const handleOpenModal = () => {
    openModal("appointment", nanny);
  };

  const addToFavorites = async () => {
    if (isAuth) {
      try {
        const favorites = await getUserFavorites(currentUser.id);
        const isNannyInFavorites = favorites.some(
          (favNanny) => favNanny.id === nanny.id
        );

        if (isNannyInFavorites) {
          setClickedHeart(false);

          if (nanny.id) {
            console.log("removed");
            await removeFavoriteById(currentUser.id, nanny.id);
            const updatedFavorites = currentUser?.favorites.filter(
              (favorite) => favorite.id !== nanny.id
            );
            const updatedUser = { ...currentUser, favorites: updatedFavorites };
            dispatch(setUser(updatedUser));
          } else {
            console.error("Error: Nanny id is null or undefined");
          }
        } else {
          const updatedFavorites = [...favorites, nanny];
          await saveUserFavorites(currentUser.id, updatedFavorites);
          const updatedUser = { ...currentUser, favorites: updatedFavorites };
          dispatch(setUser(updatedUser));
          setClickedHeart(true);
        }
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    } else {
      openModal("login");
    }
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
              <StyledHeartIcon
                onClick={addToFavorites}
                $clicked={clickedHeart}
              />
            </InfoOverview>
          </InfoBasic>

          <DetailsList>
            <DetailsItem label="Age:" value={calculateAge(birthday)} />
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
