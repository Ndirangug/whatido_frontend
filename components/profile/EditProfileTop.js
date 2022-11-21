import { useDispatch, useSelector } from 'react-redux';
import { EditProfileTopContainer } from '../../styles/profile.styles';
import LgAvatar from '../utils/avatars/LgAvatar';
import UploadProfilePhotoIcon from '../utils/icons/UploadProfilePhotoIcon';

function EditProfileTop() {
  const profile = useSelector((state) => state.profile.editableProfile);
  const dispath = useDispatch();

  return (
    <EditProfileTopContainer>
      <div className="banner-container">
        <UploadProfilePhotoIcon />
      </div>
      <div className="avatar-conatiner">
        <LgAvatar src={profile.avatar.url} />
        <div className="icon-container">
          <UploadProfilePhotoIcon color />
        </div>
      </div>
    </EditProfileTopContainer>
  );
}

export default EditProfileTop;
