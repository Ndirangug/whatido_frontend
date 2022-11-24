import Image from 'next/legacy/image';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ErrorBoundary } from '../../hooks/ErrorBoundary';
import { setCategoryComponent } from '../../store/reducers/category_page_reducer';
import { CategoryPostsContainer } from '../../styles/explore.styles';
import Hashtag from '../utils/cards/explore/Hashtag';
import PostsThumbnail from '../utils/cards/explore/PostsThumbnail';
import UserCards from '../utils/cards/explore/UserCards';
import ExploreCategoryInfoSkeleton from '../utils/skeletons/ExploreCategoryInfoSkeleton';
import ExploreExpertInfoSkeleton from '../utils/skeletons/ExploreExpertInfoSkeleton';
import { TextLG, TextSm, TextxS } from '../utils/typography/Typography';

const CategoryPosts = ({ category }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.category.selectedComponent);

  const totalUrl = `${API_URL}/feed/total/${category}`;
  const { data: total } = useSWR(totalUrl);

  const handlePosts = () => {
    dispatch(setCategoryComponent('posts'));
  };

  const handleExperts = () => {
    dispatch(setCategoryComponent('experts'));
  };

  return (
    <CategoryPostsContainer>
      <Image
        src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
        alt="whatido"
        width="100%"
        height="150px"
        objectFit="cover"
        className="banner-img"
      />

      <div className="title-container">
        <div>
          <TextLG>{category}</TextLG>
        </div>
        <div className="details-container">
          <div className="details">
            {total && total[0]?.total_users !== undefined && (
              <TextxS>{`${total[0]?.total_users} Experts`}</TextxS>
            )}

            {total && total[0]?.total_users === undefined && (
              <TextxS>{`0 Experts`}</TextxS>
            )}
          </div>
          <div className="ellipse" />
          <div className="details">
            {total && total[1]?.total_post !== undefined && (
              <TextxS>{`${total[1]?.total_post} Posts`}</TextxS>
            )}

            {total && total[1]?.total_post === undefined && (
              <TextxS>{`0 Posts`}</TextxS>
            )}
          </div>
        </div>

        <button className="follow-all-btn">Follow</button>
      </div>

      <Hashtag category={category} />

      <div className="tab-wrapper">
        <div
          className={page === 'posts' ? 'selected-tab' : 'select-tab'}
          onClick={handlePosts}
        >
          <TextSm>posts</TextSm>
        </div>

        <div
          className={page === 'experts' ? 'selected-tab' : 'select-tab'}
          onClick={handleExperts}
        >
          <TextSm>experts</TextSm>
        </div>
      </div>

      {page === 'posts' && (
        <ErrorBoundary fallback={<ExploreCategoryInfoSkeleton />}>
          <Suspense fallback={<ExploreCategoryInfoSkeleton />}>
            <PostsThumbnail category={category} />
          </Suspense>
        </ErrorBoundary>
      )}
      {page === 'experts' && (
        <ErrorBoundary fallback={<ExploreExpertInfoSkeleton />}>
          <Suspense fallback={<ExploreExpertInfoSkeleton />}>
            <UserCards category={category} />
          </Suspense>
        </ErrorBoundary>
      )}
    </CategoryPostsContainer>
  );
};

export default CategoryPosts;
