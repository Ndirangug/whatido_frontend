import { ExploreListContainer } from '../../styles/explore.styles';

function CategoryList() {
  //use
  return (
    <ExploreListContainer>
      {/* the container wrapping the card should be grid with gap 2rem that can be shared with the other list*/}
      {/* map data from using this card*/}
      {/* <ExploreExpertsCards
                key={_id}
                category={_id}
                count={total_post}
                thumbnail={thumbnail}
                avatars={avater}
                experts={total_users}
              /> */}
    </ExploreListContainer>
  );
}

export default CategoryList;
