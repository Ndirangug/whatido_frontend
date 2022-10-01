import { ReelsCardContainer } from '../../../styles/utils.styles';

function ReelsCard() {
  return (
    <ReelsCardContainer>
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
