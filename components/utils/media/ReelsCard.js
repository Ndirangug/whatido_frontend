import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FaCommentDots, FaPlay } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { IoIosShareAlt } from 'react-icons/io';
import { ReelsCardContainer } from '../../../styles/utils.styles';

function ReelsCard() {
  return (
    <ReelsCardContainer>
      <FaPlay className="play-icon" />
      <div className="reels-info-container">
        <div className="info-content">
          <Stack direction="row" spacing={2}>
            <Avatar alt="n" />
            <Stack>
              <Typography variant="h5" component="h4" color="white">
                ngwu stephen
              </Typography>
              <Typography variant="h7" component="h4" color="gray">
                software engineer
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2}>
            <FiHeart className="icons" />
            <FaCommentDots className="icons" />
            <IoIosShareAlt className="icons" />
          </Stack>
        </div>
      </div>
      <video
        src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1663370946901__34fb7b85-3f5b-4c23-abc2-377672c61299__Screen%20Recording%202022-09-04%20at%204.00.13%20PM.mov"
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
