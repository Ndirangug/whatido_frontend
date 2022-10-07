import { Stack } from '@mui/system';
import Image from 'next/image';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ContentPageContainer } from '../../styles/explore.styles';
import { ExploreText } from '../utils/typography/Typography';
import ExploreCards from './ExploreCards';
import Search from './Search';

const ExplorePage = () => {
  const { data: posts } = useSWR(`${API_URL}/feed/discover`);
  // console.log(posts);

  return (
    <ContentPageContainer>
      <ExploreText className="text-position">Explore</ExploreText>
      <Search />
      <Stack className="rectangle-container">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
          alt="what i do"
          layout="fill"
          className="banner-img"
        />
      </Stack>
      <ExploreText className="categories">Categories</ExploreText>
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
    </ContentPageContainer>
  );
};

export default ExplorePage;
