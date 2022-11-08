import React from 'react';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { CategoryThumbnailContainer } from '../../../../styles/explore.styles';
import CategoryPostCard from './CategoryPostCard';

const PostsThumbnail = ({ category }) => {
  const communityUrl = `${API_URL}/feed/community/${category}?page=0`;
  const { data: posts } = useSWR(communityUrl);

  return (
    <CategoryThumbnailContainer>
      {posts?.map((post) => (
        <div key={post?._id} className="thumbnail-card">
          <CategoryPostCard post={post} />
        </div>
      ))}
    </CategoryThumbnailContainer>
  );
};

export default PostsThumbnail;
