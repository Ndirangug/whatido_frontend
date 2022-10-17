import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileMedia from '../../components/profile/ProfileMedia';
import { ProfilePageContainer } from '../../styles/profile.styles';

function Profile() {
  return (
    <ProfilePageContainer>
      <ProfileInfo />
      <ProfileMedia />
    </ProfilePageContainer>
  );
}

export default Profile;
