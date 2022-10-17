import { Suspense } from 'react';
import ExplorePage from '../components/explore';
import { ErrorBoundary } from '../hooks/ErrorBoundary';
import { ExplorePageContainer } from '../styles/explore.styles';

const explore = () => {
  return (
    <ExplorePageContainer>
      <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
        <Suspense fallback={<div>loading...</div>}>
          <ExplorePage />
        </Suspense>
      </ErrorBoundary>
    </ExplorePageContainer>
  );
};

export default explore;
