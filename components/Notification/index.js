import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { NotificationContainer } from '../../styles/notification.styles';
import NotificationCard from './NotificationCard';

const Notification = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  const { data: notifications } = useSWR(notificationsUrl);

  return (
    <>
      {notifications?.length > 0 && (
        <NotificationContainer>
          <Stack className="border-top">
            {notifications?.map((notification) => (
              <NotificationCard
                key={notification?._id}
                notification={notification}
              />
            ))}
          </Stack>
        </NotificationContainer>
      )}
    </>
  );
};

export default Notification;
