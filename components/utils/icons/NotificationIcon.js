import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { lazy, Suspense, useContext } from 'react';
import { TransactionContext } from '../../../context/TransactionContext';

const NotificationsAlert = lazy(() =>
  import('../../Notification/NotificationsAlert')
);

function NotificationIcon() {
  const { notificationDropdown, setNotificationDropdown } =
    useContext(TransactionContext);

  return (
    <IconButton onClick={() => setNotificationDropdown((prev) => !prev)}>
      <Icon className="header-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7868 19.3198L24.4534 17.1065C24.1734 16.6132 23.9201 15.6798 23.9201 15.1332V11.7598C23.9201 8.6265 22.0801 5.91984 19.4268 4.65317C18.7334 3.4265 17.4534 2.6665 15.9868 2.6665C14.5334 2.6665 13.2268 3.45317 12.5334 4.69317C9.93342 5.9865 8.13342 8.6665 8.13342 11.7598V15.1332C8.13342 15.6798 7.88009 16.6132 7.60009 17.0932L6.25342 19.3198C5.72009 20.2132 5.60009 21.1998 5.93342 22.1065C6.25342 22.9998 7.01342 23.6932 8.00009 24.0265C10.5868 24.9065 13.3068 25.3332 16.0268 25.3332C18.7468 25.3332 21.4668 24.9065 24.0534 24.0398C24.9868 23.7332 25.7068 23.0265 26.0534 22.1065C26.4001 21.1865 26.3068 20.1732 25.7868 19.3198Z"
            fill="#292D32"
          />
          <path
            d="M19.7736 26.6798C19.2136 28.2265 17.7336 29.3332 16.0002 29.3332C14.9469 29.3332 13.9069 28.9065 13.1736 28.1465C12.7469 27.7465 12.4269 27.2132 12.2402 26.6665C12.4136 26.6932 12.5869 26.7065 12.7736 26.7332C13.0802 26.7732 13.4002 26.8132 13.7202 26.8398C14.4802 26.9065 15.2536 26.9465 16.0269 26.9465C16.7869 26.9465 17.5469 26.9065 18.2936 26.8398C18.5736 26.8132 18.8536 26.7998 19.1202 26.7598C19.3336 26.7332 19.5469 26.7065 19.7736 26.6798Z"
            fill="#292D32"
          />
        </svg>
      </Icon>

      <Suspense>
        <NotificationsAlert notificationDropdown={notificationDropdown} />
      </Suspense>
    </IconButton>
  );
}

export default NotificationIcon;
