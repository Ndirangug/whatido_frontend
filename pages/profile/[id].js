import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileMedia from '../../components/profile/ProfileMedia';
import { API_URL } from '../../constants/api';
import RequireAuth from '../../hooks/RequireAuth';
import {
  ProfileLeftContainer,
  ProfilePageContainer,
} from '../../styles/profile.styles';

function Profile() {
  const router = useRouter();
  const { data } = useSWR(`${API_URL}/getExpertDetail/${router?.query?.id}`);
  const user = data?.data;

  return (
    <ProfilePageContainer>
      <ProfileLeftContainer>
        <ProfileInfo user={user} />
        <ProfileMedia user={user} />
      </ProfileLeftContainer>
    </ProfilePageContainer>
  );
}

export default RequireAuth(Profile);
