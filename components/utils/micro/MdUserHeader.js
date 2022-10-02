import Stack from '@mui/material/Stack';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { BaseAvatar } from './Avatar';
import { TextSM } from './Typography';

function MdUserHeader({ userSlug }) {
  const { data } = useSWR(`${API_URL}/getExpertDetail/${userSlug}`, {
    suspense: true,
  });

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <BaseAvatar src={data?.data?.imageUrl?.cdnUrl} />
      <Stack direction="column" spacing={0}>
        <TextSM>
          {data?.data?.profile?.firstName} {data?.data?.profile?.lastName}
        </TextSM>
      </Stack>
    </Stack>
  );
}

export default MdUserHeader;
