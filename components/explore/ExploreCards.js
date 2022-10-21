import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ExploreCardsContainer } from '../../styles/explore.styles';
import Card from '../utils/explore/Card';

const ExploreCards = () => {
  let pageUrl = `${API_URL}/feed/discover`;
  const { data: posts } = useSWR(pageUrl);

  return (
    <ExploreCardsContainer>
      {posts?.totalExperts?.map(
        ({ _id, total_post, thumbnail, total_users, avater }) => (
          <Card
            key={_id}
            category={_id}
            count={total_post}
            thumbnail={thumbnail}
            avatar={avater}
            numOfExperts={total_users}
          />
        )
      )}
    </ExploreCardsContainer>
  );
};

export default ExploreCards;
