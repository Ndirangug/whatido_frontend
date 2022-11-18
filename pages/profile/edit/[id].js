import React from 'react';
import EditProfileForm from '../../../components/profile/EditProfileForm';
import EditProfileTop from '../../../components/profile/EditProfileTop';
import { EditProfilePageContainer } from '../../../styles/profile.styles';

function EditProfile() {
  return (
    <EditProfilePageContainer>
      {/* edit profile top */}
      <EditProfileTop />
      {/* edit profile form */}
      <EditProfileForm />
    </EditProfilePageContainer>
  );
}

export default EditProfile;
