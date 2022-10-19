import React from 'react';
import ExploreCards from './ExploreCards';
import ExploreExpertsCards from './ExploreExpertsCards';

const CardsContainer = ({ page, posts }) => {
  return (
    <div>
      {page === 'expert' ? (
        <>
          {posts?.totalExperts?.map(
            ({ _id, total_post, thumbnail, total_users, avater }) => (
              <ExploreExpertsCards
                key={_id}
                category={_id}
                count={total_post}
                thumbnail={thumbnail}
                avatars={avater}
                experts={total_users}
              />
            )
          )}
        </>
      ) : (
        <>
          {posts?.totalExperts?.map(
            ({ _id, total_post, thumbnail, total_users, avater }) => (
              <ExploreCards
                key={_id}
                category={_id}
                count={total_post}
                thumbnail={thumbnail}
                avatars={avater}
                experts={total_users}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export default CardsContainer;
