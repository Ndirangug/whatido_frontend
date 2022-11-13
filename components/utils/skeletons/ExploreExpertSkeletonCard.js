import Skeleton from '@mui/material/Skeleton';
import { ExploreExpertSkeletonCardContainer } from '../../../styles/skeleton.styles';

function ExploreExpertSkeletonCard() {
  return (
    <ExploreExpertSkeletonCardContainer>
      <div className="skeleton-card-container">
        <div className="avatar">
          <Skeleton variant="circular" width={25} height={25} />
          <div>
            <Skeleton variant="text" width={120} />
            <div className="explore-avatar-skeleton">
              <Skeleton variant="text" width={40} />
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={20} />
            </div>
          </div>
        </div>
        <Skeleton variant="rectangular" width={60} height={30} />
      </div>
      <div className="explore-image-container">
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
      </div>
    </ExploreExpertSkeletonCardContainer>
  );
}

export default ExploreExpertSkeletonCard;
