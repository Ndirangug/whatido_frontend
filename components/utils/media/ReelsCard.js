import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { FaCommentDots, FaPlay } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { IoIosShareAlt } from 'react-icons/io';
import { ErrorBoundary } from '../../../hooks/ErrorBoundary';
import { ReelsCardContainer } from '../../../styles/utils.styles';
import MdUserHeader from '../micro/MdUserHeader';
function ReelsCard({ media }) {
  const videoRef = useRef(null);

  const callBackFunction = useCallback((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      //play intersecting video and pause old videos and set as global video
      entry.target.play();
    } else {
      entry.target.pause();
    }
  }, []);

  const callBackOptions = useMemo(
    () => ({
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      callBackFunction,
      callBackOptions
    );

    const current = videoRef.current;

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (current) observer.unobserve(current);
    };

    // dependency array
  }, [callBackFunction, callBackOptions]);

  return (
    <ReelsCardContainer>
      <FaPlay className="play-icon" />
      <div className="reels-info-container">
        <div className="info-content">
          <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
            <Suspense fallback={<div>loading...</div>}>
              <MdUserHeader userSlug={media.userSlug} />
            </Suspense>
          </ErrorBoundary>
          {/* <Stack direction="column" spacing={2}>
            <NotificationIcon />
            <WalletIcon />
          </Stack> */}

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
        poster={media.thumbnail[0]?.cdnUrl}
        src={media.file[0]?.cdnUrl}
        controlsList="nofullscreen nodownload"
        preload="auto"
        loop
        playsInline
        autoPlay="autoplay"
        muted
        id="video-player"
        className="content"
        ref={videoRef}
      />
    </ReelsCardContainer>
  );
}

export default ReelsCard;
