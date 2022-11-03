import Link from 'next/link';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import XsAvatar from '../avatars/XsAvatar';
import FollowButton from '../buttons/FollowButton';
import { TextSM } from '../typography/Typography';

function MdUserHeader({ userSlug }) {
  const { data } = useSWR(`${API_URL}/getExpertDetail/${userSlug}`, {
    suspense: true,
  });
  const authenticated = useSelector((state) => state.auth.authenticated);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <Link href={`/explore/expert/${data?.data?.slug}`}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <XsAvatar src={data?.data?.imageUrl?.cdnUrl} />

          <TextSM
            style={{
              cursor: 'pointer',
            }}
          >
            {data?.data?.profile?.firstName} {data?.data?.profile?.lastName}
          </TextSM>
        </div>
      </Link>
      {authenticated && <FollowButton peer={userSlug} />}
    </div>
  );
}

export default MdUserHeader;
