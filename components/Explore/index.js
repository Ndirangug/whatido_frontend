// import useSWR from 'swr';
// import { API_URL } from '../../constants/api';
import { ContentPageContainer } from '../../styles/explore.styles';
import { Text3XL } from '../utils/typography/Typography';
// import ExploreCards from './ExploreCards';
import Search from './Search';

const ExplorePage = () => {
  // let pageUrl = `${API_URL}/feed/discover`;
  // const { data: posts } = useSWR(pageUrl, { suspense: true });

  return (
    <ContentPageContainer>
      <div className="category-container">
        <Text3XL>Explore</Text3XL>
        <Search />
      </div>

      {/* <div className="category-container">
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
      </div> */}
    </ContentPageContainer>
  );
};

export default ExplorePage;
