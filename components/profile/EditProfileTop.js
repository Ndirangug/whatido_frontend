import { EditProfileTopContainer } from '../../styles/profile.styles';
import LgAvatar from '../utils/avatars/LgAvatar';
import UploadProfilePhotoIcon from '../utils/icons/UploadProfilePhotoIcon';

function EditProfileTop() {
  return (
    <EditProfileTopContainer>
      <div className="banner-container"></div>
      <div className="avatar-conatiner">
        <LgAvatar />
        <UploadProfilePhotoIcon color />
      </div>
    </EditProfileTopContainer>
  );
}

export default EditProfileTop;
