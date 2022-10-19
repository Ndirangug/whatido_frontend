import { BaseAvatar } from '../utils/avatars/Avatar';
import { TextBase } from '../utils/typography/Typography';

const NotificationCard = () => {
  // const router = useRouter();

  // const senderDetailsUrl = `${API_URL}/getExpertDetail/${notification?.senderSlug}`;
  // const { data: senderDetails } = useSWR(senderDetailsUrl);

  // const viewNotification = () => {
  //   if (notification?.title.includes('media post')) {
  //     history.push({
  //       state: { media: true, mediaId: notification?.mediaId },
  //     });
  //   } else {
  //     notification?.redirectUrl
  //       ? window.open(notification?.redirectUrl, '_blank')
  //       : router.push(notification?.endUrl);
  //   }
  // };

  return (
    <>
      <div className="notification-details">
        <BaseAvatar
          alt="what i do"
          sx={{ width: '45px', height: '45px' }}
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
        />

        <div className="notification-text-wrapper">
          <TextBase>A new message from Donny Dey</TextBase>
        </div>
      </div>

      <div className="notification-details">
        <BaseAvatar
          alt="what i do"
          sx={{ width: '45px', height: '45px' }}
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
        />

        <div className="notification-text-wrapper">
          <TextBase>A new message from Donny Dey</TextBase>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
