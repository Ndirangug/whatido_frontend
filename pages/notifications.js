import { Suspense } from 'react';
import Notification from '../components/notification';
import { Text2XL } from '../components/utils/typography/Typography';
import { ErrorBoundary } from '../hooks/ErrorBoundary';
import { NotificationLgContainer } from '../styles/notification.styles';

const Notifications = () => {
  return (
    <NotificationLgContainer>
      <div className="header-container">
        <Text2XL>notifications</Text2XL>
      </div>
      <ErrorBoundary fallback={<h1>could not fetch</h1>}>
        <Suspense fallback={<h1>loading...</h1>}>
          <Notification />
        </Suspense>
      </ErrorBoundary>
    </NotificationLgContainer>
  );
};

export default Notifications;
