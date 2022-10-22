import { useRouter } from 'next/router';
import useSWR from 'swr';
import ProfileInfo from '../../../components/profile/ProfileInfo';
import ProfileMedia from '../../../components/profile/ProfileMedia';
import { API_URL } from '../../../constants/api';
import { ProfilePageContainer } from '../../../styles/profile.styles';

function Expert() {
  const router = useRouter();
  const { data } = useSWR(`${API_URL}/getExpertDetail/${router?.query?.id}`);
  const user = data?.data;

  return (
    <ProfilePageContainer>
      <ProfileInfo user={user} />
      <ProfileMedia user={user} />
    </ProfilePageContainer>
  );
}

export default Expert;
