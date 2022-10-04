import Stack from '@mui/material/Stack';
import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { ErrorBoundary } from '../../../../hooks/ErrorBoundary';
import { ReelsCardContainer } from '../../../../styles/utils.styles';
import CommentIcon from '../../icons/CommentIcon';
import LikeIcon from '../../icons/LikeIcon';
import OptionsIcon from '../../icons/OptionsIcon';
import PlayIcon from '../../icons/PlayIcon';
import ShareIcon from '../../icons/ShareIcon';
import SubscribeIcon from '../../icons/SubscribeIcon';
import MdUserHeader from '../../micro/MdUserHeader';
import { TextSM, TextXS } from '../../typography/Typography';
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
      <div className="reels-info-container">
        <div className="info-content">
          <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
            <Suspense fallback={<div>loading...</div>}>
              <Stack direction="column" spacing={0.5}>
                <MdUserHeader userSlug={media.userSlug} />
                <Stack direction="column" spacing={0.5}>
                  <TextXS className="info-description">
                    check out my new post osbwuvnaoei oiahoivban is sdhoanvn
                    anks inainoin veoinaoisnvaoin eiwanosini asiodnvaoisnd ini
                  </TextXS>
                  <div className="info-description">
                    <Stack direction="row" spacing={1}>
                      <TextXS>#nft</TextXS>
                      <TextXS>#nft</TextXS>
                      <TextXS>#nft</TextXS>
                      <TextXS>#nft</TextXS>
                      <TextXS>#nft</TextXS>
                    </Stack>
                  </div>
                  <Stack direction="row" spacing={1}>
                    <PlayIcon /> <TextSM>24k</TextSM>
                  </Stack>
                </Stack>
              </Stack>
            </Suspense>
          </ErrorBoundary>
          <Stack direction="column" spacing={2}>
            <SubscribeIcon />
            <LikeIcon />
            <CommentIcon />
            <ShareIcon />
            <OptionsIcon />
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
