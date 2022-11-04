import { useDispatch, useSelector } from 'react-redux';
import { setFeedModal } from '../../store/reducers/feed_modal_reducer';
import { ViewFeedModal } from '../../styles/feed.styles';
import ContentCaption from './captions/ContentCaption';

const Feed = () => {
  const dispatch = useDispatch();
  const feedModal = useSelector((state) => state.feed.feedModal);
  const media = useSelector((state) => state.feed.media);
  // console.log(media);

  const handleClose = () => {
    dispatch(setFeedModal(false));
  };

  return (
    <ViewFeedModal
      open={feedModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="modal-body">
        <div
          className="content-preview-container"
          style={{
            backgroundImage: `url(${media?.thumbnail[0]?.cdnUrl})`,
            backdropFilter: 'blur(5px)',
          }}
        >
          <video
            poster={media?.thumbnail[0]?.cdnUrl}
            src={media?.file[0]?.cdnUrl}
            controlsList="nofullscreen nodownload"
            preload="auto"
            loop
            playsInline
            autoPlay="autoplay"
            muted
            id="video-player"
            className="content"
          />
        </div>
        <div>
          <ContentCaption
            userSlug={media?.userSlug}
            handleClose={handleClose}
          />
        </div>
      </div>
    </ViewFeedModal>
  );
};

export default Feed;
