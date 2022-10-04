import { Stack } from '@mui/system';
import Image from 'next/image';
import { ContentPageContainer } from '../../styles/explore.styles';
import { ExploreText } from '../utils/typography/Typography';
import ExploreCards from './ExploreCards';
import Search from './Search';

const ExplorePage = () => {
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
      <ExploreCards />
    </ContentPageContainer>
  );
};

export default ExplorePage;
