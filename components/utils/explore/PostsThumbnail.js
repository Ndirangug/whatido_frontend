import Image from 'next/image';
import React from 'react';
import { CategoryThumbnailContainer } from '../../../styles/explore.styles';

const PostsThumbnail = () => {
  return (
    <CategoryThumbnailContainer>
      <div className="thumbnail-card">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
          alt="card-img"
          layout="fill"
          className="story_card_image"
        />
      </div>
      <div className="thumbnail-card">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654782230047__9dab90b0-3c0f-42bc-af77-6713ee220241__tesla.jpg"
          alt="card-img"
          layout="fill"
          className="story_card_image"
        />
      </div>
    </CategoryThumbnailContainer>
  );
};

export default PostsThumbnail;
