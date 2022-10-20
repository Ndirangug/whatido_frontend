import moment from 'moment';
import { useRouter } from 'next/router';
import { NotificationPageContainer } from '../../styles/notification.styles';
import { Text2XL, TextLG } from '../utils/typography/Typography';
import NotificationCard from './NotificationCard';

const Notification = ({ notifications }) => {
  const router = useRouter();

  const filteredNotifications = notifications?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const groupedNotifications = filteredNotifications.reduce(
    (acc, notification) => {
      const date = moment(notification?.createdAt).calendar(null, {
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastWeek: '[last] dddd',
        nextWeek: 'dddd',
        sameElse: 'ddd, L',
      });

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(notification);
      return acc;
    },
    {}
  );

  const dateSortedNotifications =
    groupedNotifications !== undefined &&
    Object?.keys(groupedNotifications)?.map((date) => {
      return {
        date: date,
        notifications: groupedNotifications[date],
      };
    });

  console.log('date sorted', dateSortedNotifications);

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
