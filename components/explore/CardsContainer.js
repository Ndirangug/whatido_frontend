import React from 'react';
import ExploreCards from './ExploreCards';
import ExploreExpertsCards from './ExploreExpertsCards';

const CardsContainer = ({ page, posts }) => {
  return (
    <div>
      {page === 'expert' ? (
        <>
          {posts?.totalPost?.map(({ _id, count, thumbnail, userSlug }) => (
            <ExploreExpertsCards
              key={_id}
              category={_id}
              count={count}
              thumbnail={thumbnail}
              userSlug={userSlug}
              avatars={posts?.avatars}
              experts={posts?.totalExperts}
            />
          ))}
        </>
      ) : (
        <>
          {posts?.totalPost?.map(({ _id, count, thumbnail, userSlug }) => (
            <ExploreCards
              key={_id}
              category={_id}
              count={count}
              thumbnail={thumbnail}
              userSlug={userSlug}
              avatars={posts?.avatars}
              experts={posts?.totalExperts}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CardsContainer;
