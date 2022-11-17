import Image from 'next/legacy/image';
import { useDispatch } from 'react-redux';
import {
  setFeedModal,
  setMedia,
} from '../../../../store/reducers/feed_modal_reducer';

const CategoryPostCard = ({ post }) => {
  const dispatch = useDispatch();

  const openFeed = () => {
    dispatch(setMedia(post?._id));
    dispatch(setFeedModal(true));
  };

  return (
    <div onClick={openFeed}>
      <Image
        src={post?.thumbnail[0]?.cdnUrl}
        alt="card-img"
        layout="fill"
        objectFit="cover"
        className="story_card_image"
      />
    </div>
  );
};

export default CategoryPostCard;
