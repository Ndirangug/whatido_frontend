import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AudioRoomButton from '../utils/buttons/AudioRoomButton';
import EditProfileButton from '../utils/buttons/EditProfileButton';
import ProfileFollowButton from '../utils/buttons/ProfileFollowButton';

function ProfileActionButtons({ user  }) {
  // const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const slug = user.slug; //router?.query?.id;
  const authenticated = useSelector((state) => state.auth.authenticated);

  if (!slug) return;

  const myProfile = currentUser?.slug === slug;

  const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
  `;

  if (myProfile) {
    return <EditProfileButton />;
  }
  if (!myProfile && authenticated) {
    return (
      <>
        <ActionsContainer>
          <AudioRoomButton otherUser={user} />
          <ProfileFollowButton peer={slug} />
        </ActionsContainer>
      </>
    );
  }

  return;
}

export default ProfileActionButtons;
