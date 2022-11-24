import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { FeedContainer } from '../../styles/profile.styles';
import FeedCard from '../utils/cards/feed/FeedCard';

function ProfileFeed({ userSlug }) {
  const { data } = useSWR(`${API_URL}/media/page/${userSlug}?page=0`, {
    suspense: true,
  });
  return (
    <FeedContainer>
      {data?.map((media) => (
        <FeedCard media={media} key={media._id} />
      ))}
    </FeedContainer>
  );
}

export default ProfileFeed;
