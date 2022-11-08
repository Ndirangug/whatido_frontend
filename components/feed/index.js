import { useDispatch, useSelector } from 'react-redux';
import { setFeedModal } from '../../store/reducers/feed_modal_reducer';
import { ViewFeedModal } from '../../styles/feed.styles';
import ContentCaption from './captions/ContentCaption';
import ViewFeed from './ViewFeed';

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
        <ViewFeed media={media} handleClose={handleClose} />

        <ContentCaption
          userSlug={media?.userSlug}
          handleClose={handleClose}
          media={media}
        />
      </div>
    </ViewFeedModal>
  );
};

export default Feed;
