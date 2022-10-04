import Stack from '@mui/material/Stack';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { UserContainer } from '../../../styles/utils.styles';
import { TextSM } from '../typography/Typography';
import { BaseAvatar } from './Avatar';

function MdUserHeader({ userSlug }) {
  const { data } = useSWR(`${API_URL}/getExpertDetail/${userSlug}`, {
    suspense: true,
  });

  return (
    <UserContainer onClick={() => console.log('clicked')}>
      <Stack direction="row" spacing={1} alignItems="center">
        <BaseAvatar src={data?.data?.imageUrl?.cdnUrl} />
        <Stack direction="column" spacing={0}>
          <TextSM>
            {data?.data?.profile?.firstName} {data?.data?.profile?.lastName}
          </TextSM>
        </Stack>
      </Stack>
    </UserContainer>
  );
}

export default MdUserHeader;
