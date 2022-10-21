import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { UserCardsContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import { TextSm, TextxS } from '../typography/Typography';

const UserCards = ({ category }) => {
  const expertsUrl = `${API_URL}/feed/discover-expert-community/${category}?page=0`;
  const { data: experts } = useSWR(expertsUrl);

  return (
    <UserCardsContainer>
      {experts?.map(({ _id, profile, expertMainCategory, email }) => (
        <div key={_id} className="cards-wrapper">
          <div className="user-wrapper">
            <BaseAvatar
              sx={{ width: '55px', height: '55px' }}
              src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
              className="avatar"
            />
            <div className="user-details">
              <div className="username">
                <TextSm>{`${profile?.firstName} ${profile?.lastName}`}</TextSm>
              </div>
              <div className="user-category">
                <TextxS>{expertMainCategory}</TextxS>
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
