import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { CardContainer } from '../../../../styles/explore.styles';
import { BaseAvatar } from '../../avatars/Avatar';
import { TextSm, TextxS } from '../../typography/Typography';
import ExploreExpertFollowButton from '../../buttons/ExploreExpertFollowButton';
import { useSelector } from 'react-redux';

function ExploreExpertCard({
  slug,
  profile,
  thumbnail,
  avatar,
  total_followers,
  total_inspired,
  total_post,
}) {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.currentUser);
  const myProfile = user?.slug === slug;

  return (
    <CardContainer onClick={() => router.push(`/explore/expert/${slug}`)}>
      <div className="details-container">
        <div className="avatar-details">
          <div className="user-avatar-wrapper">
            <BaseAvatar
              alt="what i do"
              sx={{ width: '32px', height: '32px' }}
              src={avatar[0]?.avater}
              className="avatar"
            />
          </div>
          <div className="details-wrapper">
            <div className="category-title">
              <TextSm>{`${profile[0]?.profile?.firstName} ${profile[0]?.profile?.lastName}`}</TextSm>
            </div>
            <div className="experts-wrapper">
              <div className="num-of-experts">
                <TextxS>{`${total_inspired} followers`}</TextxS>
              </div>
              <div className="experts-avatars">
                {total_followers?.slice(0, 4)?.map(({ avater }) => (
                  <BaseAvatar
                    key={avater}
                    alt="what i do"
                    sx={{ width: '23px', height: '23px' }}
                    src={avater}
                    className="avatar"
                  />
                ))}
              </div>
              <div className="ellipse" />
              <div className="num-of-posts">
                <TextxS>{`${total_post} posts`}</TextxS>
              </div>
            </div>
          </div>
        </div>
        {authenticated && !myProfile && (
          <ExploreExpertFollowButton peer={slug} />
        )}
      </div>

      <div className="experts-img-wrapper">
        {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
          <Image
            key={thumbnail[0]}
            src={thumbnail[0]}
            alt="explore"
            height="150px"
            width="60px"
            objectFit="cover"
            className="img"
          />
        ))}
      </div>
    </CardContainer>
  );
}

export default ExploreExpertCard;
