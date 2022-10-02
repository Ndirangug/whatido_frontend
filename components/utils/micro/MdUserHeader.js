import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';

const TextSM = styled(Typography)`
  font-size: 1rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 600;
  color: white;
  cursor: pointer;
`;
const TextXS = styled(Typography)`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

const MUiAvatart = styled(Avatar)`
  cursor: pointer;
`;

function MdUserHeader({ userSlug }) {
  const { data } = useSWR(`${API_URL}/getExpertDetail/${userSlug}`, {
    suspense: true,
  });

  return (
    <Stack direction="row" spacing={1}>
      <MUiAvatart src={data?.data?.imageUrl?.cdnUrl} />
      <Stack direction="column" spacing={0}>
        <TextSM>
          {data?.data?.profile?.firstName} {data?.data?.profile?.lastName}
        </TextSM>
        <TextXS> {data?.data?.expertCategories[0]}</TextXS>
      </Stack>
    </Stack>
  );
}

export default MdUserHeader;
