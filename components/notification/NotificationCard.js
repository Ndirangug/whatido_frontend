import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { NotificationCardContainer } from '../../styles/notification.styles';
import { BaseAvatar } from '../utils/avatars/Avatar';
import { TextBase } from '../utils/typography/Typography';

const NotificationCard = ({
  endUrl,
  redirectUrl,
  senderSlug,
  title,
  mediaId,
}) => {
  const router = useRouter();

  const senderDetailsUrl = `${API_URL}/getExpertDetail/${senderSlug}`;
  const { data: senderDetails } = useSWR(senderDetailsUrl);

  const viewNotification = () => {
    if (title.includes('media post')) {
      history.push({
        state: { media: true, mediaId: mediaId },
      });
    } else {
      redirectUrl ? window.open(redirectUrl, '_blank') : router.push(endUrl);
    }
  };

  return (
    <NotificationCardContainer onClick={viewNotification}>
      <div className="notification-details">
        <BaseAvatar
          alt="what i do"
          sx={{ width: '45px', height: '45px' }}
          src={senderDetails?.data?.imageUrl?.cdnUrl}
        />

        <div className="notification-text-wrapper">
          <TextBase>{title}</TextBase>
        </div>
      </div>
    </NotificationCardContainer>
  );
};

export default NotificationCard;
