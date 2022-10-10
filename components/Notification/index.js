import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import {
  CancelIcon,
  NotificationPageContainer,
} from '../../styles/notification.styles';
import { Text2XL, TextXL } from '../utils/typography/Typography';
import NotificationCard from './NotificationCard';

const Notification = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.currentUser);
  const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  const { data: notifications } = useSWR(notificationsUrl);

  return (
    <NotificationPageContainer>
      <div className="header-container">
        <Text2XL>Notifications</Text2XL>
        <IconButton className="" onClick={() => router.back()}>
          <CancelIcon />
        </IconButton>
      </div>

      <div className="details-container">
        <TextXL className="notification-title">
          Today - 10th October, 2022
        </TextXL>

        {notifications?.map((notification) => (
          <NotificationCard
            key={notification?._id}
            notification={notification}
          />
        ))}
      </div>
    </NotificationPageContainer>
  );
};

export default Notification;
