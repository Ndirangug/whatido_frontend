import Skeleton from '@mui/material/Skeleton';
import { ProfileFeedSkeletonContainer } from '../../../styles/skeleton.styles';

function ProfileFeedSkeleton() {
  return (
    <ProfileFeedSkeletonContainer>
      <Skeleton variant="rounded" height={370} width={400} />
      <Skeleton variant="rounded" height={370} width={400} />
      <Skeleton variant="rounded" height={370} width={400} />
    </ProfileFeedSkeletonContainer>
  );
}

export default ProfileFeedSkeleton;
