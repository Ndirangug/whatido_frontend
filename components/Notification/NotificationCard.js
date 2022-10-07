import ListItem from '@mui/material/ListItem';
import { Stack } from '@mui/system';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { BaseAvatar } from '../utils/avatars/Avatar';
import { TextSM } from '../utils/typography/Typography';

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
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      onClick={viewNotification}
      className="notification-wrapper"
    >
      <ListItem button>
        <BaseAvatar
          src={senderDetails?.data?.imageUrl?.cdnUrl}
          alt="avatar"
          className="user-avatar"
        />
        <TextSM className="notification-text">{notification?.title}</TextSM>
      </ListItem>
    </Stack>
  );
};

export default NotificationCard;
