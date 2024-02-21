import {
  ArticleNanny,
  ButtonsBlock,
  Description,
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
import ReviewItem from "../ReviewItem/ReviewItem";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useModal } from "../../utils/helpers/ModalContext";
import PopUpAppointment from "../PopUpAppointment";
import Modal from "../Modal";

import {
  getUserFavorites,
  removeFavoriteById,
  saveUserFavorites,
} from "../../firebase";
import useAuth from "../../utils/hooks/useAuth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import HeartForm from "../Forms/ModalAfterHeartClick";
import LoaderWithBackdrop from "../LoaderSpinner";
import CardDetailsList from "./CardDetails/CardDetailsList";
import { useMediaQuery } from "react-responsive";

const CardNanny = ({ nanny }) => {
  const { currentUser, isAuth } = useAuth();
  const [showReviews, setShowReviews] = useState(false);
  const { modalConfig, openModal, closeModal } = useModal();
  const [clickedHeart, setClickedHeart] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

  const formattedCharacters = characters
    .map((character) => character.charAt(0).toUpperCase() + character.slice(1))
    .join(", ");

  const handleOpenModal = () => {
    openModal("appointment", nanny);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser && nanny) {
          const favorites = await getUserFavorites(currentUser.id);
          const isNannyInFavorites = favorites.some(
            (favNanny) => favNanny.id === nanny.id
          );
          setClickedHeart(isNannyInFavorites);
        }
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };

    fetchData();
  }, [currentUser, nanny]);

  const addToFavorites = async () => {
    if (isAuth) {
      try {
        const favorites = await getUserFavorites(currentUser.id);
        const isNannyInFavorites = favorites.some(
          (favNanny) => favNanny.id === nanny.id
        );

        if (isNannyInFavorites) {
          setClickedHeart(false);
          setLoading(true);
          if (nanny.id) {
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
      } finally {
        setLoading(false);
      }
    } else {
      openModal("favorites");
    }
  };

  if (loading) {
    return <LoaderWithBackdrop />;
  }

  return (
    <ArticleNanny>
      {!isMobile && (
        <ImageContainer>
          <img src={avatar_url} alt="Portrait of the babysitter" />
        </ImageContainer>
      )}
      <InfoContainer $fullInfo={showReviews}>
        <MainInfo>
          <InfoBasic>
            {isMobile && (
              <ImageContainer>
                <img src={avatar_url} alt="Portrait of the babysitter" />
              </ImageContainer>
            )}
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
          <CardDetailsList
            birthday={birthday}
            experience={experience}
            kids_age={kids_age}
            formattedCharacters={formattedCharacters}
            education={education}
          />
          {!isMobile && <Description>{about}</Description>}
        </MainInfo>
        {showReviews && (
          <>
            {isMobile && <Description>{about}</Description>}
            <ReviewList>
              {reviews.map((review, index) => (
                <ReviewItem key={index} review={review} />
              ))}
            </ReviewList>
          </>
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
      {modalConfig.isOpen && modalConfig.formType === "favorites" && (
        <Modal onClose={closeModal}>
          <HeartForm onClose={closeModal} />
        </Modal>
      )}
    </ArticleNanny>
  );
};

export default CardNanny;
