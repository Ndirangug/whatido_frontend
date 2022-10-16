import { ProfileInfoContainer } from '../../styles/profile.styles';
import NoBigAvatar from '../utils/avatars/NoBigAvatar';
import EditProfileButton from '../utils/buttons/EditProfileButton';
import { TextXL } from '../utils/typography/Typography';

function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <div className="banner-conatiner"></div>
      <div className="info-conatiner">
        <NoBigAvatar />
        <div className="info-name-container">
          <TextXL>Emmanuel Jacob</TextXL>
          <EditProfileButton />
        </div>
      </div>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
