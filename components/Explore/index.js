import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Image from 'next/image';
import { ContentPageContainer } from '../../styles/explore.styles';
import ExploreCards from './ExploreCards';
import Search from './Search';

const ExplorePage = () => {
  return (
    <ContentPageContainer>
      <Typography variant="h4" component="h4" className="explore-header">
        Explore
      </Typography>
      <Search />
      <Stack className="rectangle-container">
        <Image
          src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
          alt="what i do"
          layout="fill"
          className="banner-img"
        />
      </Stack>
      <Typography
        variant="h5"
        component="h5"
        className="explore-header categories"
      >
        Categories
      </Typography>
      <ExploreCards />
    </ContentPageContainer>
  );
};

export default ExplorePage;
