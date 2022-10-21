import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ExploreCardsContainer } from '../../styles/explore.styles';
import ExpertsCard from '../utils/explore/ExpertsCard';

const ExploreExpertsCards = ({ category }) => {
  let pageUrl = `${API_URL}/feed/discover-expert`;
  const { data: experts } = useSWR(pageUrl);

  return (
    <ExploreCardsContainer>
      {experts?.totalExperts?.map(
        ({
          _id,
          avater,
          thumbnail,
          profile,
          total_follower,
          total_inspired,
          total_post,
        }) => (
          <ExpertsCard
            key={_id}
            category={category}
            thumbnail={thumbnail}
            profile={profile}
            avatar={avater}
            total_followers={total_follower}
            total_inspired={total_inspired}
            total_post={total_post}
          />
        )
      )}
    </ExploreCardsContainer>
  );
};

export default ExploreExpertsCards;
