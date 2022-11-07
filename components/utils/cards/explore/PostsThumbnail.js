import Image from 'next/legacy/image';
import React from 'react';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { CategoryThumbnailContainer } from '../../../../styles/explore.styles';

const PostsThumbnail = ({ category }) => {
  const communityUrl = `${API_URL}/feed/community/${category}?page=0`;
  const { data: posts } = useSWR(communityUrl);

  return (
    <CategoryThumbnailContainer>
      {posts?.map(({ _id, thumbnail }) => (
        <div key={_id} className="thumbnail-card">
          <Image
            src={thumbnail[0]?.cdnUrl}
            alt="card-img"
            layout="fill"
            objectFit="cover"
            className="story_card_image"
          />
        </div>
      ))}
    </CategoryThumbnailContainer>
  );
};

export default PostsThumbnail;
