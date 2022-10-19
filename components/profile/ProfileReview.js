import { ProfileReviewContainer } from '../../styles/profile.styles';
import ReviewCard from '../utils/cards/review/ReviewCard';

function ProfileReview() {
  return (
    <ProfileReviewContainer>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </ProfileReviewContainer>
  );
}

export default ProfileReview;
