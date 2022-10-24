import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import EditProfileButton from '../utils/buttons/EditProfileButton';

function ProfileActionButton() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.currentUser);
  const slug = router?.query?.id;

  const myProfile = user?.slug === slug;

  if (myProfile) {
    return <EditProfileButton />;
  }

  return;
}

export default ProfileActionButton;
