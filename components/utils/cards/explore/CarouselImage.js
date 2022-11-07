import Image from 'next/legacy/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { CarouselContainer } from '../../../../styles/explore.styles';

const CarouselImage = () => {
  const carouselUrl = `${API_URL}/feed/discover-banner`;
  const { data: carouselImages } = useSWR(carouselUrl);

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
          <div key={_id} className="img-container">
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
