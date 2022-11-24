import Skeleton from '@mui/material/Skeleton';
import { ProfilePageSkeletonContainer } from '../../../styles/skeleton.styles';

function ProfilePageSkeleton() {
  return (
    <ProfilePageSkeletonContainer>
      <div className="banner-skeleton">
        <Skeleton variant="rounded" width="100%" height={150} />
      </div>
      <div className="avatar-follow-button">
        <div className="avatar-skeleton">
          <Skeleton variant="circular" width={100} height={100} />
          <Skeleton variant="text" width={80} height={40} />
          <Skeleton variant="text" width={120} />
          <Skeleton variant="text" width={150} />
        </div>
        <Skeleton variant="rounded" width={64} height={32} />
      </div>
    </ProfilePageSkeletonContainer>
  );
}

export default ProfilePageSkeleton;
