import Image from 'next/legacy/image';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import {
  setFeedModal,
  setMedia,
} from '../../../../store/reducers/feed_modal_reducer';
import { CarouselContainer } from '../../../../styles/explore.styles';

const CarouselImage = () => {
  const dispatch = useDispatch();
  const carouselUrl = `${API_URL}/feed/discover-banner`;
  const { data: carouselImages } = useSWR(carouselUrl, {
    suspense: true,
  });

  const goToPost = (data) => {
    // let feedArray = carouselImages?.totalExperts;
    // const foundIdx = feedArray?.findIndex((el) => el?._id === data);
    // const targetElement = feedArray?.splice(foundIdx, 1);
    // feedArray?.unshift(targetElement[0]);
    dispatch(setMedia(data[0]?.id));
    dispatch(setFeedModal(true));
  };

  return (
    <CarouselContainer>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval="5000"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {carouselImages?.totalExperts?.map?.(({ _id, thumbnail }) => (
          <div
            key={_id}
            className="img-container"
            onClick={() => goToPost(thumbnail)}
          >
            <Image
              src={thumbnail[0]?.thumbnail[0]}
              alt="whatido"
              layout="fill"
              objectFit="cover"
              className="banner-img"
            />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselImage;
