import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import Notification from '../components/notification';
import NoNotification from '../components/notification/NoNotification';
import NotificationSkeleton from '../components/utils/skeletons/NotificationSkeleton';
import { Text2XL } from '../components/utils/typography/Typography';
import { API_URL } from '../constants/api';
import { ErrorBoundary } from '../hooks/ErrorBoundary';
import { NotificationLgContainer } from '../styles/notification.styles';

const Notifications = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const notificationsUrl = `${API_URL}/notifications/${user?.slug}?page=${0}`;
  const { data: notifications } = useSWR(notificationsUrl, { suspense: true });

  return (
    <NotificationLgContainer>
      {notifications?.length > 0 && (
        <>
          <div className="header-container">
            <Text2XL>notifications</Text2XL>
          </div>
          <ErrorBoundary fallback={<NotificationSkeleton />}>
            <Suspense fallback={<NotificationSkeleton />}>
              <Notification notifications={notifications} />
            </Suspense>
          </ErrorBoundary>
        </>
      )}

      {notifications?.length === 0 && <NoNotification />}
    </NotificationLgContainer>
  );
};

export default Notifications;
