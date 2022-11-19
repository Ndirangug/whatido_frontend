import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { setFeedModal } from '../../store/reducers/feed_modal_reducer';
import { ViewFeedModal } from '../../styles/feed.styles';
import ContentCaption from './captions/ContentCaption';
import ViewFeed from './ViewFeed';

const Feed = () => {
  const dispatch = useDispatch();
  const feedModal = useSelector((state) => state.feed.feedModal);
  const id = useSelector((state) => state.feed.media);

  const url = `${API_URL}/media/fetch/${id}`;
  const { data: media } = useSWR(url);

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
        {media !== undefined && (
          <>
            <ViewFeed media={media} handleClose={handleClose} />

            <ContentCaption
              userSlug={media[0]?.userSlug}
              handleClose={handleClose}
              media={media}
            />
          </>
        )}
      </div>
    </ViewFeedModal>
  );
};

export default Feed;
