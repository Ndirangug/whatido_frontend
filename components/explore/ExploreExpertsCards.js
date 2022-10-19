import { ExploreCardsContainer } from '../../styles/explore.styles';
import ExpertsCard from '../utils/explore/ExpertsCard';

const ExploreExpertsCards = ({
  category,
  count,
  thumbnail,
  avatars,
  experts,
}) => {
  return (
    <ExploreCardsContainer>
      <ExpertsCard
        category={category}
        count={count}
        thumbnail={thumbnail}
        avatar={avatars}
        numOfExperts={experts}
      />
    </ExploreCardsContainer>
  );
};

export default ExploreExpertsCards;
