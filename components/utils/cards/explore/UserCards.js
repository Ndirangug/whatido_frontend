import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { UserCardsContainer } from '../../../../styles/explore.styles';
import { BaseAvatar } from '../../avatars/Avatar';
import NoPostsSvg from '../../svg/NoPostsSvg';
import { TextSm, TextXL, TextxS } from '../../typography/Typography';

const UserCards = ({ category }) => {
  const router = useRouter();
  const expertsUrl = `${API_URL}/feed/discover-expert-community/${category}?page=0`;
  const { data: experts } = useSWR(expertsUrl);
  console.log(experts);

  return (
    <UserCardsContainer>
      {experts?.map(
        ({ _id, profile, expertCategories, email, imageUrl, slug }) => (
          <div key={_id} className="cards-wrapper">
            <div className="user-wrapper">
              <div onClick={() => router.push(`/explore/expert/${slug}`)}>
                <BaseAvatar
                  sx={{ width: '55px', height: '55px' }}
                  src={imageUrl?.cdnUrl}
                  className="avatar"
                />
              </div>
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
        )
      )}

      {experts?.length === 0 && (
        <div className="no-posts-svg">
          <div className="no-posts-text">
            <TextXL>no user in this Category.</TextXL>
          </div>
          <NoPostsSvg />
        </div>
      )}
    </UserCardsContainer>
  );
};

export default UserCards;
