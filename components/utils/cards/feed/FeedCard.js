import Image from 'next/legacy/image';
import { useDispatch } from 'react-redux';
import {
  setFeedModal,
  setMedia,
} from '../../../../store/reducers/feed_modal_reducer';
import { FeedCardContainer } from '../../../../styles/profile.styles';

function FeedCard({ media }) {
  const dispatch = useDispatch();

  const openFeed = () => {
    dispatch(setMedia(media?._id));
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
