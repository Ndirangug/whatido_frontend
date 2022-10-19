import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselContainer } from '../../../styles/explore.styles';

const CarouselImage = () => {
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
        <div className="img-container">
          <Image
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
            alt="whatido"
            layout="fill"
            objectFit="cover"
            className="banner-img"
          />
        </div>

        <div className="img-container">
          <Image
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1664753846198__3e054487-1425-43b9-a9fe-282925398382__My%20project.jpg"
            alt="whatido"
            layout="fill"
            objectFit="cover"
            className="banner-img"
          />
        </div>
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselImage;
