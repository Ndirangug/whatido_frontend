import Image from 'next/image';
import React from 'react';
import { CardContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import PlusIcon from '../icons/PlusIcon';
import { TextSm, TextxS } from '../typography/Typography';

const ExpertsCard = ({
  profile,
  thumbnail,
  avatar,
  total_followers,
  total_inspired,
  total_post,
}) => {
  return (
    <>
      {thumbnail?.length >= 4 && (
        <CardContainer>
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
            <div className="follow-btn-container">
              <div className="follow-btn-wrapper">
                <PlusIcon />
                <div className="follow-all">
                  <TextSm>Follow</TextSm>
                </div>
              </div>
            </div>
          </div>

          <div className="experts-img-wrapper">
            {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
              <Image
                key={thumbnail[0]}
                src={thumbnail[0]}
                alt="explore"
                height="150px"
                width="60px"
                className="img"
              />
            ))}
          </div>
        </CardContainer>
      )}
    </>
  );
};

export default ExpertsCard;
