import { EditProfileTopContainer } from '../../styles/profile.styles';
import LgAvatar from '../utils/avatars/LgAvatar';

function EditProfileTop() {
  return (
    <EditProfileTopContainer>
      <div className="banner-container"></div>
      <div className="avatar-conatiner">
        <LgAvatar />
      </div>
    </EditProfileTopContainer>
  );
}

export default EditProfileTop;
