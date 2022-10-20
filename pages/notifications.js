import { useSelector } from 'react-redux';
import useSWR from 'swr';
import Notification from '../components/notification';
import { API_URL } from '../constants/api';
import { NotificationLgContainer } from '../styles/notification.styles';

const Notifications = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  const { data: notifications } = useSWR(notificationsUrl, { suspense: true });

  return (
    <NotificationLgContainer>
      {notifications?.length > 0 && (
        <Notification notifications={notifications} />
      )}
    </NotificationLgContainer>
  );
};

export default Notifications;
