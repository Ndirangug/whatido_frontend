import Stack from '@mui/material/Stack';
import { Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from '../../../../hooks/ErrorBoundary';
import { setAuthComonent } from '../../../../store/reducers/app_surface_reducer';
import {
  setFeedModal,
  setMedia,
  setShareModal,
} from '../../../../store/reducers/feed_modal_reducer';
import { ReelsCardContainer } from '../../../../styles/utils.styles';
import CommentIcon from '../../icons/CommentIcon';
import LikeIcon from '../../icons/LikeIcon';
import OptionsIcon from '../../icons/OptionsIcon';
import PlayIcon from '../../icons/PlayIcon';
import ShareIcon from '../../icons/ShareIcon';
import SubscribeIcon from '../../icons/SubscribeIcon';
import MdUserHeader from '../../micro/MdUserHeader';
import FeedInfoSkeleton from '../../skeletons/FeedInfoSkeleton';
import { TextSM, TextXS } from '../../typography/Typography';
function ReelsCard({ media }) {
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const feedModal = useSelector((state) => state.feed.feedModal);
  const authenticated = useSelector((state) => state.auth.authenticated);

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

  const openFeed = () => {
    if (authenticated) {
      dispatch(setMedia(media?._id));
      dispatch(setFeedModal(true));
    } else {
      dispatch(dispatch(setAuthComonent('LOGIN')));
    }
  };

  const openShareModal = () => {
    if (authenticated) {
      dispatch(setShareModal(true));
    } else {
      dispatch(setAuthComonent('LOGIN'));
    }
  };

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

  useEffect(() => {
    if (feedModal) {
      videoRef?.current?.pause();
    } else {
      const observer = new IntersectionObserver(
        callBackFunction,
        callBackOptions
      );

      const current = videoRef.current;

      if (videoRef.current) observer.observe(videoRef.current);

      return () => {
        if (current) observer.unobserve(current);
      };
    }
  }, [feedModal, callBackFunction, callBackOptions]);

  return (
    <ReelsCardContainer>
      <div className="reels-info-container">
        <div className="info-content">
          <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
            <Suspense fallback={<FeedInfoSkeleton />}>
              <Stack direction="column" spacing={0.5}>
                <MdUserHeader userSlug={media.userSlug} />
                <Stack direction="column" spacing={0.5}>
                  <TextXS className="info-description">
                    {media.text.toLowerCase()}
                  </TextXS>
                  <div
                    className="info-description"
                    style={{ marginLeft: '0.5rem' }}
                  >
                    <Stack direction="row" spacing={1}>
                      <TextXS>#{media.community}</TextXS>
                    </Stack>
                  </div>
                  <Stack direction="row" spacing={1}>
                    <PlayIcon /> <TextSM>{media.inspired_count}</TextSM>
                  </Stack>
                </Stack>
              </Stack>
            </Suspense>
          </ErrorBoundary>
          <Stack direction="column" spacing={2}>
            <SubscribeIcon />
            <LikeIcon defaultColor={'#ffffff'} media={media} id={media?._id} />
            <CommentIcon openFeed={openFeed} />
            <ShareIcon openShareModal={openShareModal} />
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
