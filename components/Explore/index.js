import { useRouter } from 'next/router';
import { BiSearchAlt } from 'react-icons/bi';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ContentPageContainer } from '../../styles/explore.styles';
import { Text3XL, TextSM } from '../utils/typography/Typography';
import ExploreCards from './ExploreCards';
import ExploreExpertsCards from './ExploreExpertsCards';

const ExplorePage = () => {
  const router = useRouter();
  let pageUrl = `${API_URL}/feed/discover`;
  const { data: posts } = useSWR(pageUrl, { suspense: true });

  const page = router.query.explore;

  const handleCategory = () => {
    router.push({
      query: {
        explore: 'category',
      },
    });
  };

  const handleExpert = () => {
    router.push({
      query: {
        explore: 'expert',
      },
    });
  };

  return (
    <ContentPageContainer>
      <div className="category-container">
        <Text3XL>Explore</Text3XL>
        {/* <Search /> */}

        <div className="search-container">
          <BiSearchAlt className="search-icon" />
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>

      {/* <div className="rectangle-container">
        <Image src="" alt="whatido" layout="fill" className="banner-img" />
      </div> */}

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TextSM style={{ color: 'black' }} onClick={handleCategory}>
            Categories
          </TextSM>
          <TextSM style={{ color: 'black' }} onClick={handleExpert}>
            Experts
          </TextSM>
        </div>
        {!page && (
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

        {page === 'category' && (
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

        {page === 'expert' && (
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
        )}
      </div>
    </ContentPageContainer>
  );
};

export default ExplorePage;
