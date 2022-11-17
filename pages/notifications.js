import { Suspense } from 'react';
import Notification from '../components/notification';
import NotificationSkeleton from '../components/utils/skeletons/NotificationSkeleton';
import { Text2XL } from '../components/utils/typography/Typography';
import { ErrorBoundary } from '../hooks/ErrorBoundary';
import { NotificationLgContainer } from '../styles/notification.styles';

const Notifications = () => {
  return (
    <NotificationLgContainer>
      <div className="header-container">
        <Text2XL>notifications</Text2XL>
      </div>
      <ErrorBoundary fallback={<NotificationSkeleton />}>
        <Suspense fallback={<NotificationSkeleton />}>
          <Notification />
        </Suspense>
      </ErrorBoundary>
    </NotificationLgContainer>
  );
};

export default Notifications;
