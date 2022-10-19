import { NotificationPageContainer } from '../../styles/notification.styles';
import { Text2XL, TextLG } from '../utils/typography/Typography';
import NotificationCard from './NotificationCard';

const Notification = () => {
  // const router = useRouter();
  // const user = useSelector((state) => state.auth.currentUser);
  // const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  // const { data: notifications } = useSWR(notificationsUrl);

  return (
    <NotificationPageContainer>
      <div className="header-container">
        <Text2XL>Notifications</Text2XL>
      </div>

      <div className="details-container">
        <div className="notification-date">
          <TextLG>Today - 10th October, 2022</TextLG>
        </div>

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
