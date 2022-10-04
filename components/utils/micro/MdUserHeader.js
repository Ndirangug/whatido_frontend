import Stack from '@mui/material/Stack';
import Link from 'next/link';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { BaseAvatar } from '../avatars/Avatar';
import FollowButton from '../buttons/FollowButton';
import { TextSM } from '../typography/Typography';

function MdUserHeader({ userSlug }) {
  const { data } = useSWR(`${API_URL}/getExpertDetail/${userSlug}`, {
    suspense: true,
  });
  // console.log('user data', data.data);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <BaseAvatar src={data?.data?.imageUrl?.cdnUrl} />

      <Link
        href={`/expert/${data?.data?.expertCategories[0]}/${data?.data?.slug}`}
      >
        <TextSM>
          {data?.data?.profile?.firstName} {data?.data?.profile?.lastName}
        </TextSM>
      </Link>

      <FollowButton following={true} />
    </Stack>
  );
}

export default MdUserHeader;