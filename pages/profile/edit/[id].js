import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditProfileForm from '../../../components/profile/EditProfileForm';
import EditProfileTop from '../../../components/profile/EditProfileTop';
import RequireAuth from '../../../hooks/RequireAuth';
import { setEditableProfile } from '../../../store/reducers/profile_reducer';
import { EditProfilePageContainer } from '../../../styles/profile.styles';

function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    dispatch(
      setEditableProfile({
        cover: { url: '', file: null },
        avatar: { url: user?.imageUrl.cdnUrl, file: null },
        fullName: `${user?.firstName} ${user?.lastName}`,
        headline: '',
        nationality: '',
        currentLocation: '',
        community: { value: 'select-community', label: 'select community' },
        expertise: [],
        additionalLinks: [{ linkName: '', linkUrl: '' }],
      })
    );
  }, [dispatch, user?.firstName, user?.imageUrl.cdnUrl, user?.lastName]);

  // useEffect(() => {

  // }, [])

  return (
    <EditProfilePageContainer>
      {/* edit profile top */}
      <EditProfileTop />
      {/* edit profile form */}
      <EditProfileForm />
    </EditProfilePageContainer>
  );
}

export default RequireAuth(EditProfile);
