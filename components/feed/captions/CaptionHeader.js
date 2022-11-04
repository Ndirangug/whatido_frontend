import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { CaptionHeaderContainer } from '../../../styles/feed.styles';
import XsAvatar from '../../utils/avatars/XsAvatar';
import CancelIcon from '../../utils/icons/CancelIcon';
import { TextSm, TextxS } from '../../utils/typography/Typography';

function CaptionHeader({ userSlug, handleClose }) {
  const router = useRouter();
  const mediaUserUrl = `${API_URL}/getExpertDetail/${userSlug}`;
  const { data: mediaUserRequest } = useSWR(mediaUserUrl);
  const mediaUser = mediaUserRequest?.data;

  const goToExpertProfile = () => {
    handleClose();
    router.push(`/explore/expert/${userSlug}`);
  };

  return (
    <CaptionHeaderContainer>
      <div className="flex" onClick={goToExpertProfile}>
        <XsAvatar src={mediaUser?.imageUrl?.cdnUrl} alt="" />
        <div>
          {mediaUser && (
            <TextSm>
              {mediaUser?.profile?.firstName +
                '  ' +
                mediaUser?.profile?.lastName}{' '}
            </TextSm>
          )}
          {mediaUser && (
            <TextxS>{'expert in ' + mediaUser?.expertCategories[0]}</TextxS>
          )}
        </div>
      </div>

      <div onClick={handleClose}>
        <CancelIcon />
      </div>
    </CaptionHeaderContainer>
  );
}

export default CaptionHeader;
