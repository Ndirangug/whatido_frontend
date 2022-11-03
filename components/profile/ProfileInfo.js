import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ProfileInfoContainer } from '../../styles/profile.styles';
import BigAvatar from '../utils/avatars/BigAvatar';
import { TextSm, TextXL } from '../utils/typography/Typography';
import ProfileActionButton from './ProfileActionButton';

function ProfileInfo({ user }) {
  const { data: followers } = useSWR(`${API_URL}/follwers/${user?.slug}`);
  const { data: followings } = useSWR(`${API_URL}/following/${user?.slug}`);

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  return (
    <ProfileInfoContainer>
      <div className="banner-conatiner"></div>
      <div className="info-conatiner">
        <BigAvatar src={user?.imageUrl?.cdnUrl} />
        <div className="info-name-container">
          <div className="info">
            <TextXL>
              {user?.profile?.firstName + ' ' + user?.profile?.lastName}
            </TextXL>
          </div>
          <ProfileActionButton />
        </div>
        <div className="info">
          <TextSm>focus on {user?.expertFocusExpertise}</TextSm>
        </div>
        <div className="category-container">
          {user?.expertCategories.map((category, i) => (
            <div className="category" key={category + i}>
              <TextSm>{category}</TextSm>
            </div>
          ))}
        </div>

        <div className="follow-container">
          <div className="follow-content">
            <div className="count-container">
              <TextSm>{numFormatter(followers?.length)}</TextSm>
            </div>
            <TextSm>followers</TextSm>
          </div>
          <div className="follow-content">
            <div className="count-container">
              <TextSm>{numFormatter(followings?.length)}</TextSm>
            </div>
            <TextSm>following</TextSm>
          </div>
        </div>
      </div>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
