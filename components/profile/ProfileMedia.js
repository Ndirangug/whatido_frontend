import { ProfileMediaContainer } from '../../styles/profile.styles';
import FeedIcon from '../utils/icons/FeedIcon';
import ReviewIcon from '../utils/icons/ReviewIcon';
import ProfileFeed from './ProfileFeed';
import SelectTab from './SelectTab';

function ProfileMedia() {
  return (
    <ProfileMediaContainer>
      <div className="content-select-tab ">
        <SelectTab Icon={FeedIcon} count="20" selected />
        <SelectTab Icon={ReviewIcon} count="10" />
      </div>

      <ProfileFeed />
    </ProfileMediaContainer>
  );
}

export default ProfileMedia;
