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
    <NotificationContainer>
      {notifications?.map((notification) => (
        <NotificationCard key={notification?._id} notification={notification} />
      ))}
    </NotificationContainer>
  );
};

export default Notification;
