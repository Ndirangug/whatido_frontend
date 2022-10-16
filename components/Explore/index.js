import Image from 'next/image';
import { useRouter } from 'next/router';
import { BiSearchAlt } from 'react-icons/bi';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ContentPageContainer } from '../../styles/explore.styles';
import { Text3XL, TextSM } from '../utils/typography/Typography';
import ExploreCards from './ExploreCards';
import ExploreExpertsCards from './ExploreExpertsCards';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ExplorePage = () => {
  const router = useRouter();
  let pageUrl = `${API_URL}/feed/discover`;
  const { data: posts } = useSWR(pageUrl);

  const page = router.query.explore;

  const handleCategory = () => {
    router.push({
      query: {
        explore: 'category',
      },
    });
  };

  const handleExpert = () => {
    router.push({
      query: {
        explore: 'expert',
      },
    });
  };

  return (
    <ContentPageContainer>
      <div className="category-container">
        <Text3XL>Explore</Text3XL>
        {/* <Search /> */}

        <div className="search-container">
          <BiSearchAlt className="search-icon" />
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>

      {/* <Swiper
        slidesPerView={1}
        spaceBetween={50}
        width="100%"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
            alt="whatido"
            width="100%"
            height="200px"
            className="banner-img"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper> */}

      <Image
        src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
        alt="whatido"
        width="100%"
        height="200px"
        className="banner-img"
      />

      <div>
        <div className="tab-wrapper">
          <TextSM className="select-tab" onClick={handleCategory}>
            categories
          </TextSM>
          <TextSM className="select-tab" onClick={handleExpert}>
            experts
          </TextSM>
        </div>
        {!page && (
          <>
            {posts?.totalPost?.map(({ _id, count, thumbnail, userSlug }) => (
              <ExploreCards
                key={_id}
                category={_id}
                count={count}
                thumbnail={thumbnail}
                userSlug={userSlug}
                avatars={posts?.avatars}
                experts={posts?.totalExperts}
              />
            ))}
          </>
        )}

        {page === 'category' && (
          <>
            {posts?.totalPost?.map(({ _id, count, thumbnail, userSlug }) => (
              <ExploreCards
                key={_id}
                category={_id}
                count={count}
                thumbnail={thumbnail}
                userSlug={userSlug}
                avatars={posts?.avatars}
                experts={posts?.totalExperts}
              />
            ))}
          </>
        )}

        {page === 'expert' && (
          <>
            {posts?.totalPost?.map(({ _id, count, thumbnail, userSlug }) => (
              <ExploreExpertsCards
                key={_id}
                category={_id}
                count={count}
                thumbnail={thumbnail}
                userSlug={userSlug}
                avatars={posts?.avatars}
                experts={posts?.totalExperts}
              />
            ))}
          </>
        )}
      </div>
    </ContentPageContainer>
  );
};

export default ExplorePage;
