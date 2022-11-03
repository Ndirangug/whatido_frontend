import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { CardContainer } from '../../../../styles/explore.styles';
import { BaseAvatar } from '../../avatars/Avatar';
import PlusIcon from '../../icons/PlusIcon';
import { TextSm, TextxS } from '../../typography/Typography';

function ExploreCategoryCard({
  category,
  count,
  thumbnail,
  avatar,
  numOfExperts,
}) {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/explore/category/${category}`)}>
      <div className="img-wrapper">
        {thumbnail?.slice(0, 4)?.map(({ thumbnail }) => (
          <Image
            key={thumbnail[0]?.key}
            src={thumbnail[0]?.cdnUrl}
            alt="explore"
            height="75px"
            width="60px"
            objectFit="cover"
            className="img"
          />
        ))}
      </div>

      <div className="details-container">
        <div className="details-wrapper">
          <div className="category-title">
            <TextSm>{category}</TextSm>
          </div>
          <div className="experts-wrapper">
            <div className="num-of-experts">
              <TextxS>{`${numOfExperts} experts`}</TextxS>
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
        <div className="follow-btn-container">
          <div className="follow-btn-wrapper">
            <PlusIcon />
            <div className="follow-all">
              <TextSm>Follow</TextSm>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default ExploreCategoryCard;
