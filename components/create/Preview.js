import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { PreviewContainer } from '../../styles/create.styles';

function Preview() {
  const mediaFile = useSelector((state) => state.media.preUploadFile);
  const playVideo = useRef(null);

  return (
    <PreviewContainer>
      <video
        className="video"
        controlsList="nofullscreen nodownload"
        preload="auto"
        loop
        playsInline
        autoPlay="autoplay"
        muted
        poster={window.URL.createObjectURL(mediaFile?.thumbnail)}
        ref={playVideo}
        controls
      >
        <source
          src={window.URL.createObjectURL(mediaFile?.file)}
          type="video/mp4"
        />
      </video>
    </PreviewContainer>
  );
}

export default Preview;
