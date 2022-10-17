import { ExploreCardsContainer } from '../../styles/explore.styles';
import ExpertsCard from '../utils/explore/ExpertsCard';

const ExploreExpertsCards = ({
  category,
  count,
  thumbnail,
  avatars,
  experts,
}) => {
  let avatar, numOfExperts;
  for (let i = 0; i < avatars?.length; i++) {
    if (avatars[i]?._id === category) {
      avatar = avatars[i];
    }
  }

  for (let i = 0; i < experts?.length; i++) {
    if (experts[i]?._id === category) {
      numOfExperts = experts[i];
    }
  }
  return (
    <ExploreCardsContainer>
      <ExpertsCard
        category={category}
        count={count}
        thumbnail={thumbnail}
        avatar={avatar?.avater}
        numOfExperts={numOfExperts}
      />
    </ExploreCardsContainer>
  );
};

export default ExploreExpertsCards;
