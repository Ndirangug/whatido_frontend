import Image from 'next/image';
import React from 'react';
import { CardContainer } from '../../../styles/explore.styles';
import { BaseAvatar } from '../avatars/Avatar';
import PlusIcon from '../icons/PlusIcon';
import { TextXS } from '../typography/Typography';

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
                <TextXS className="category-title">{category}</TextXS>
                <div className="experts-wrapper">
                  <TextXS className="num-of-experts">{`${numOfExperts?.count}`}</TextXS>
                  <div className="experts-avatars">
                    {avatar?.slice(0, 4)?.map(({ imageUrl }) => (
                      <BaseAvatar
                        key={imageUrl?.key}
                        alt="what i do"
                        sx={{ width: '21px', height: '21px' }}
                        src={imageUrl?.cdnUrl}
                        className="avatar"
                      />
                    ))}
                  </div>
                  <div className="ellipse" />
                  <TextXS className="num-of-posts">{`${count} posts`}</TextXS>
                </div>
              </div>
            </div>
            <div className="follow-btn-container">
              <div className="follow-btn-wrapper">
                <PlusIcon />
                <TextXS className="follow-all">Follow</TextXS>
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
