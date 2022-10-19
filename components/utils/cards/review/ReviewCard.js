import { ReviewCardContainer } from '../../../../styles/profile.styles';
import BaseAvatar from '../../avatars/BaseAvatar';
import StarIcon from '../../icons/StarIcon';
import { TextBase, TextSm } from '../../typography/Typography';

function ReviewCard() {
  return (
    <ReviewCardContainer>
      <BaseAvatar />
      <div className="review-info-container">
        <div className="review-into-top">
          <TextBase>Emmanuel Jacob</TextBase>
          <div className="star-flex">
            <TextBase>4.5</TextBase>
            <StarIcon />
          </div>
        </div>
        <div className="review-time">
          <TextSm>3 days ago</TextSm>
        </div>
        <div className="review-comment">
          <TextBase>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius elit
            amet, tincidunt dictumst. Varius iaculis
          </TextBase>
        </div>
      </div>
    </ReviewCardContainer>
  );
}

export default ReviewCard;
