import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ProfileReviewContainer } from '../../styles/profile.styles';
import ReviewCard from '../utils/cards/review/ReviewCard';

function ProfileReview({ userSlug }) {
  const url = `${API_URL}/getExpertReviews/${userSlug}`;
  const { data } = useSWR(url, { suspense: true });
  return (
    <ProfileReviewContainer>
      {data?.reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </ProfileReviewContainer>
  );
}

export default ProfileReview;
