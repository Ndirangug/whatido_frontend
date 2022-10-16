import { ProfileInfoContainer } from '../../styles/profile.styles';
import NoBigAvatar from '../utils/avatars/NoBigAvatar';

function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <div className="banner-conatiner"></div>
      <div className="info-conatiner">
        <NoBigAvatar />
      </div>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
