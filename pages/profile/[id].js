import { useSelector } from 'react-redux';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileMedia from '../../components/profile/ProfileMedia';
import { ProfilePageContainer } from '../../styles/profile.styles';

function Profile() {
  const user = useSelector((state) => state.auth.currentUser);
  return (
    <ProfilePageContainer>
      <ProfileInfo user={user} />
      <ProfileMedia user={user} />
    </ProfilePageContainer>
  );
}

export default Profile;
