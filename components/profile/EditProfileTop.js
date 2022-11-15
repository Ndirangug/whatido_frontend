import { EditProfileTopContainer } from '../../styles/profile.styles';
import LgAvatar from '../utils/avatars/LgAvatar';
import UploadProfilePhotoIcon from '../utils/icons/UploadProfilePhotoIcon';

function EditProfileTop() {
  return (
    <EditProfileTopContainer>
      <div className="banner-container">
        <UploadProfilePhotoIcon />
      </div>
      <div className="avatar-conatiner">
        <LgAvatar />
        <div className="icon-container">
          <UploadProfilePhotoIcon color />
        </div>
      </div>
    </EditProfileTopContainer>
  );
}

export default EditProfileTop;
