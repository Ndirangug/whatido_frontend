import { useRouter } from 'next/router';
import { ProfileMediaContainer } from '../../styles/profile.styles';
import FeedIcon from '../utils/icons/FeedIcon';
import ReviewIcon from '../utils/icons/ReviewIcon';
import ProfileFeed from './ProfileFeed';
import ProfileReview from './ProfileReview';
import SelectTab from './SelectTab';

function ProfileMedia({ user }) {
  const router = useRouter();

  const handleReview = () => {
    router.push({
      query: {
        id: router.query.id,
        review: router.query.id,
      },
    });
  };

  const handlePreview = () => {
    router.push({
      query: {
        id: router.query.id,
      },
    });
  };

  return (
    <ProfileMediaContainer>
      <div className="content-select-tab ">
        <SelectTab
          Icon={FeedIcon}
          count="20"
          selected={!router.query.review}
          handleClick={handlePreview}
        />
        <SelectTab
          Icon={ReviewIcon}
          count="10"
          handleClick={handleReview}
          selected={router.query.review}
        />
      </div>
      {router.query.review ? (
        <ProfileReview user={user} />
      ) : (
        <ProfileFeed user={user} />
      )}
    </ProfileMediaContainer>
  );
}

export default ProfileMedia;
