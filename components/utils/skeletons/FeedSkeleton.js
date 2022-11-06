import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { ContentPageContainer } from '../../../styles/home.styles';

function FeedSkeleton() {
  return (
    <ContentPageContainer>
      <Stack>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* For variant="text", adjust the height via font-size */}
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="rectangular" width={400} height={400} />
        <Skeleton variant="circular" sx={{ display: 'flex'}}  >
          <Avatar/>
        </Skeleton>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Box>
      </Stack>
    </ContentPageContainer>
  );
}

export default FeedSkeleton;
