import Skeleton from '@mui/material/Skeleton';
import { ExploreCategorySkeletonCardContainer } from '../../../styles/skeleton.styles';

function ExploreCategorySkeletonCard() {
  return (
    <ExploreCategorySkeletonCardContainer>
      <div className="explore-image-container">
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={100} />
      </div>
      <div className="skeleton-card-container">
        <div className="">
          <Skeleton variant="text" width={120} />
          <div className="explore-avatar-skeleton">
            <Skeleton variant="text" width={40} />
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width={20} />
          </div>
        </div>
        <div className="follow-button-skeleton">
          <Skeleton variant="rounded" width={68} height={32} />
        </div>
      </div>
    </ExploreCategorySkeletonCardContainer>
  );
}

export default ExploreCategorySkeletonCard;
