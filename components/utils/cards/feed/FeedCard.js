import Image from 'next/legacy/image';
import { FeedCardContainer } from '../../../../styles/profile.styles';
import { useDispatch } from 'react-redux';
import {
  setMedia,
  setFeedModal,
} from '../../../../store/reducers/feed_modal_reducer';

function FeedCard({ media }) {
  const dispatch = useDispatch();

  const openFeed = () => {
    dispatch(setMedia(media));
    dispatch(setFeedModal(true));
  };
  return (
    <FeedCardContainer onClick={openFeed}>
      <Image
        src={media?.thumbnail?.[0]?.cdnUrl}
        alt="Logo"
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
      />
    </FeedCardContainer>
  );
}

export default FeedCard;
