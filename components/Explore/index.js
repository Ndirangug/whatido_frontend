import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { ContentPageContainer } from '../../styles/explore.styles';
import Search from './Search';

const ExplorePage = () => {
  return (
    <ContentPageContainer>
      <Typography variant="h4" component="h4" className="explore-header">
        Explore
      </Typography>
      <Search />
      <Stack className="rectangle-container"></Stack>
    </ContentPageContainer>
  );
};

export default ExplorePage;
