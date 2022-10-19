import { ExploreCardsContainer } from '../../styles/explore.styles';
import Card from '../utils/explore/Card';

const ExploreCards = ({ category, count, thumbnail, avatars, experts }) => {
  return (
    <ExploreCardsContainer>
      <Card
        category={category}
        count={count}
        thumbnail={thumbnail}
        avatar={avatars}
        numOfExperts={experts}
      />
    </ExploreCardsContainer>
  );
};

export default ExploreCards;
