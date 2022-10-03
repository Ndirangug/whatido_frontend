import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
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
      <Stack className="rectangle-container"></Stack>
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
