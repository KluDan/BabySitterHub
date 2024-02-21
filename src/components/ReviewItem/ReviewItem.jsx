import { styled } from "styled-components";
import StarIcon from "../../assets/icons/star.svg?react";

const Review = styled.article`
  max-width: 433px;
  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
    display: flex;
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  min-width: 120px;
  @media (max-width: 1024px) {
    margin-bottom: 0;
    min-width: 100px;
  }
`;

const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background: ${(p) => p.theme.colors.additionalGreenColor};
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${(p) => p.theme.colors.primaryGreenColor};
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

const UserNameRate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.primaryBodyText};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Rate = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${(p) => p.theme.colors.primaryBodyText};
`;
const ReviewText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: ${(p) => p.theme.colors.secondaryBodyText};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ReviewItem = ({ review }) => {
  const { reviewer, rating, comment } = review;
  return (
    <Review>
      <UserInfo>
        <UserAvatar>
          {review.avatar ? (
            <img src={review.avatar} />
          ) : (
            <span>{reviewer.charAt(0).toUpperCase()}</span>
          )}
        </UserAvatar>
        <UserNameRate>
          <Name>{reviewer}</Name>
          <Rate>
            <StarIcon />
            <span>
              {rating.toString().length === 1 ? `${rating}.0` : rating}
            </span>
          </Rate>
        </UserNameRate>
      </UserInfo>
      <ReviewText>{comment}</ReviewText>
    </Review>
  );
};

export default ReviewItem;
