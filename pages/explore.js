import { Suspense } from 'react';
import ExplorePage from '../components/Explore';
import { ExplorePageContainer } from '../styles/explore.styles';

const explore = () => {
  return (
    <ExplorePageContainer>
      <Suspense fallback={<div>loading...</div>}>
        <ExplorePage />
      </Suspense>
    </ExplorePageContainer>
  );
};

export default explore;
