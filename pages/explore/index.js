import { Suspense } from 'react';
import ExplorePage from '../../components/explore';
import ExploreSkeleton from '../../components/utils/skeletons/ExploreSkeleton';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { ExplorePageContainer } from '../../styles/explore.styles';

const explore = () => {
  return (
    <ExplorePageContainer>
      <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
        <Suspense fallback={<ExploreSkeleton />}>
          <ExplorePage />
        </Suspense>
      </ErrorBoundary>
    </ExplorePageContainer>
  );
};

export default explore;
