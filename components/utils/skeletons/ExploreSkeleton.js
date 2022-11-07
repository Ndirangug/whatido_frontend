import { Skeleton } from '@mui/material/Skeleton';
import ExploreSkeletonContainer from '../../../styles/skeleton.styles';

function ExploreSkeleton() {
  return (
    <ExploreSkeletonContainer>
      <Skeleton variant="rectangular" />
    </ExploreSkeletonContainer>
  );
}

export default ExploreSkeleton;
