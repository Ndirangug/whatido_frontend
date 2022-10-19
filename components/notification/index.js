import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { NotificationPageContainer } from '../../styles/notification.styles';
import { TextBase, TextXL } from '../utils/typography/Typography';
import NotificationCard from './NotificationCard';

const Notification = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.currentUser);
  const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  const { data: notifications } = useSWR(notificationsUrl);

  return (
    <NotificationPageContainer>
      <div className="header-container">
        <TextXL className="header">Notifications</TextXL>
      </div>

      <div className="details-container">
        <TextBase className="notification-date">
          Today - 10th October, 2022
        </TextBase>

        {/* {notifications?.map((notification) => (
          <NotificationCard
            key={notification?._id}
            notification={notification}
          />
        ))} */}

        <NotificationCard />
      </div>
    </NotificationPageContainer>
  );
};

export default Notification;
