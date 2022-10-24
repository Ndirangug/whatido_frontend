import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { FeedContainer } from '../../styles/profile.styles';
import FeedCard from '../utils/cards/feed/FeedCard';

function ProfileFeed({ user }) {
  const { data } = useSWR(`${API_URL}/media/page/${user?.slug}?page=0`);
  return (
    <FeedContainer>
      {data?.map((media) => (
        <FeedCard media={media} key={media._id} />
      ))}
    </FeedContainer>
  );
}

export default ProfileFeed;
