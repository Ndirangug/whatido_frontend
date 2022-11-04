import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import EditProfileButton from '../utils/buttons/EditProfileButton';
import ProfileFollowButton from '../utils/buttons/ProfileFollowButton';

function ProfileActionButton() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.currentUser);
  const slug = router?.query?.id;
  const authenticated = useSelector((state) => state.auth.authenticated);

  if (!slug) return;

  const myProfile = user?.slug === slug;

  if (myProfile) {
    return <EditProfileButton />;
  }
  if (!myProfile && authenticated) {
    return <ProfileFollowButton peer={slug} />;
  }

  return;
}

export default ProfileActionButton;
