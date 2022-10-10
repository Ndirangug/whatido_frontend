import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { BaseAvatar } from '../utils/avatars/Avatar';
import { TextXL } from '../utils/typography/Typography';

const NotificationCard = ({ notification }) => {
  const router = useRouter();

  const senderDetailsUrl = `${API_URL}/getExpertDetail/${notification?.senderSlug}`;
  const { data: senderDetails } = useSWR(senderDetailsUrl);

  const viewNotification = () => {
    if (notification?.title.includes('media post')) {
      history.push({
        state: { media: true, mediaId: notification?.mediaId },
      });
    } else {
      notification?.redirectUrl
        ? window.open(notification?.redirectUrl, '_blank')
        : router.push(notification?.endUrl);
    }
  };

  return (
    <div className="notification-details" onClick={viewNotification}>
      <BaseAvatar
        alt="what i do"
        sx={{ width: '45px', height: '45px' }}
        src={senderDetails?.data?.imageUrl?.cdnUrl}
      />

      <div className="notification-text-wrapper">
        <TextXL>{notification?.title}</TextXL>
      </div>
    </div>
  );
};

export default NotificationCard;
