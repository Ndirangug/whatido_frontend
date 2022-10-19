import { ProfileInfoContainer } from '../../styles/profile.styles';
import BigAvatar from '../utils/avatars/BigAvatar';
import EditProfileButton from '../utils/buttons/EditProfileButton';
import { TextSm, TextXL } from '../utils/typography/Typography';

function ProfileInfo() {
  return (
    <ProfileInfoContainer>
      <div className="banner-conatiner"></div>
      <div className="info-conatiner">
        <BigAvatar />
        <div className="info-name-container">
          <div className="info">
            <TextXL>Emmanuel Jacob</TextXL>
          </div>
          <EditProfileButton />
        </div>
        <div className="info">
          <TextSm>
            focus on web development, music, tech, blockchain, swift, frontend,
            backend
          </TextSm>
        </div>
        <div className="category-container">
          <div className="category">
            <TextSm>frontend</TextSm>
          </div>
          <div className="category">
            <TextSm>frontend</TextSm>
          </div>
          <div className="category">
            <TextSm>frontend</TextSm>
          </div>

          <div className="category">
            <TextSm>frontend</TextSm>
          </div>
        </div>

        <div className="follow-container">
          <div className="follow-content">
            <div className="count-container">
              <TextSm>10.2k</TextSm>
            </div>
            <TextSm>followers</TextSm>
          </div>
          <div className="follow-content">
            <div className="count-container">
              <TextSm>1.2k</TextSm>
            </div>
            <TextSm>following</TextSm>
          </div>
        </div>
      </div>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
