import Image from 'next/image';
import React from 'react';
import { CategoryThumbnailContainer } from '../../../styles/explore.styles';

const PostsThumbnail = ({ posts }) => {
  return (
    <CategoryThumbnailContainer>
      {posts?.map(({ _id, thumbnail }) => (
        <div key={_id} className="thumbnail-card">
          <Image
            src={thumbnail[0]?.cdnUrl}
            alt="card-img"
            layout="fill"
            className="story_card_image"
          />
        </div>
      ))}
    </CategoryThumbnailContainer>
  );
};

export default PostsThumbnail;
