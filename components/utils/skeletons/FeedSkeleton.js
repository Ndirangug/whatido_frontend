import Skeleton from '@mui/material/Skeleton';
import { FeedSkeletonContainer } from '../../../styles/skeleton.styles';

function FeedSkeleton() {
  return (
    <FeedSkeletonContainer>
      <Skeleton variant="rectangular" width="100%" height="100%" />
      <div className="info-skeleton-container"></div>
      {/* For other variants, adjust the size with `width` and `height`
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} /> */}
    </FeedSkeletonContainer>
  );
}

export default FeedSkeleton;
