import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ReelsCardContainer } from '../../../styles/utils.styles';
import NotificationIcon from '../icons/NotificationIcon';
import WalletIcon from '../icons/WalletIcon';

function ReelsCard() {
  return (
    <ReelsCardContainer>
      <div className="reels-info-container">
        <div className="info-content">
          <Stack direction="row" spacing={2}>
            <Avatar alt="n" />
            <Typography variant="h4" component="h4">
              ngwu
            </Typography>
          </Stack>
          <Stack direction="column" spacing={2}>
            <NotificationIcon />
            <WalletIcon />
          </Stack>
        </div>
      </div>
      <video
        src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1654636052567__06f60217-d306-4e8e-ad76-4d498f9485d6__2022-05-13_11-56-36.mp4"
        controlsList="nofullscreen nodownload"
        preload="auto"
        loop
        playsInline
        autoPlay="autoplay"
        muted
        id="video-player"
        className="content"
      />
    </ReelsCardContainer>
  );
}

export default ReelsCard;
