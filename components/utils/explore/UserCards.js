import { UserCardsContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import { TextSm, TextxS } from '../typography/Typography';

const UserCards = () => {
  return (
    <UserCardsContainer>
      <div className="cards-wrapper">
        <div className="user-wrapper">
          <BaseAvatar
            sx={{ width: '55px', height: '55px' }}
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
            className="avatar"
          />
          <div className="user-details">
            <div className="username">
              <TextSm>Cody Fisher</TextSm>
            </div>
            <div className="user-category">
              <TextxS>Interior Designer</TextxS>
            </div>
            <div className="user-category">
              <TextxS>Followed by Victoria</TextxS>
            </div>
          </div>
        </div>

        <button className="follow-btn">Follow</button>
      </div>

      <div className="cards-wrapper">
        <div className="user-wrapper">
          <BaseAvatar
            sx={{ width: '55px', height: '55px' }}
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
            className="avatar"
          />
          <div className="user-details">
            <div className="username">
              <TextSm>Cody Fisher</TextSm>
            </div>
            <div className="user-category">
              <TextxS>Interior Designer</TextxS>
            </div>
            {/* <div className="user-category">
              <TextxS>Followed by Victoria</TextxS>
            </div> */}
          </div>
        </div>

        <button className="following-btn">Following</button>
      </div>
    </UserCardsContainer>
  );
};

export default UserCards;
