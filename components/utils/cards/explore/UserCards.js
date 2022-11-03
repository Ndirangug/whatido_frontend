import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { UserCardsContainer } from '../../../../styles/explore.styles';
import { BaseAvatar } from '../../avatars/Avatar';
import { TextSm, TextxS } from '../../typography/Typography';

const UserCards = ({ category }) => {
  const expertsUrl = `${API_URL}/feed/discover-expert-community/${category}?page=0`;
  const { data: experts } = useSWR(expertsUrl);

  return (
    <UserCardsContainer>
      {experts?.map(({ _id, profile, expertCategories, email, imageUrl }) => (
        <div key={_id} className="cards-wrapper">
          <div className="user-wrapper">
            <BaseAvatar
              sx={{ width: '55px', height: '55px' }}
              src={imageUrl?.cdnUrl}
              className="avatar"
            />
            <div className="user-details">
              <div className="username">
                <TextSm>{`${profile?.firstName} ${profile?.lastName}`}</TextSm>
              </div>
              <div className="user-category">
                <TextxS>{expertCategories[0]}</TextxS>
              </div>
              <div className="user-category">
                {/* to be replaced with "followed by ${follower}" */}
                <TextxS>{email}</TextxS>
              </div>
            </div>
          </div>

          <button className="follow-btn">Follow</button>
        </div>
      ))}
    </UserCardsContainer>
  );
};

export default UserCards;