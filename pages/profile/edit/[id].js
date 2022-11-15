import React from 'react';
import EditProfileTop from '../../../components/profile/EditProfileTop';
import { EditProfilePageContainer } from '../../../styles/profile.styles';

function EditProfile() {
  return (
    <EditProfilePageContainer>
      {/* edit profile top */}
      <EditProfileTop />
      {/* edit profile form */}
    </EditProfilePageContainer>
  );
}

export default EditProfile;
