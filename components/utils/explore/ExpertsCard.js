import Image from 'next/image';
import React from 'react';
import { CardContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import PlusIcon from '../icons/PlusIcon';
import { TextSm, TextxS } from '../typography/Typography';

const ExpertsCard = ({ category, count, thumbnail, avatar, numOfExperts }) => {
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
                  src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
                  className="avatar"
                />
              </div>
              <div className="details-wrapper">
                <div className="category-title">
                  <TextSm>{category}</TextSm>
                </div>
                <div className="experts-wrapper">
                  <div className="num-of-experts">
                    <TextxS>{`${numOfExperts}`}</TextxS>
                  </div>
                  <div className="experts-avatars">
                    {avatar?.slice(0, 4)?.map(({ imageUrl }) => (
                      <BaseAvatar
                        key={imageUrl?.key}
                        alt="what i do"
                        sx={{ width: '23px', height: '23px' }}
                        src={imageUrl?.cdnUrl}
                        className="avatar"
                      />
                    ))}
                  </div>
                  <div className="ellipse" />
                  <div className="num-of-posts">
                    <TextxS>{`${count} posts`}</TextxS>
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
                key={thumbnail[0]?.key}
                src={thumbnail[0]?.cdnUrl}
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
