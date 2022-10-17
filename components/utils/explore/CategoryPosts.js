import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryComponent } from '../../../store/reducers/category_page_reducer';
import { CategoryPostsContainer } from '../../../styles/explore.styles';
import BackIcon from '../icons/BackIcon';
import PlusIcon from '../icons/PlusIcon';
import { TextSM, TextXL, TextXS } from '../typography/Typography';
import PostsThumbnail from './PostsThumbnail';
import UserCards from './UserCards';

const CategoryPosts = ({ category }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.category.selectedComponent);
  const router = useRouter();

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
        className="banner-img"
      />
      <div className="back-icon" onClick={() => router.back()}>
        <BackIcon />
      </div>

      <div className="title-container">
        <TextXL className="title">{category}</TextXL>
        <div className="details-container">
          <TextXS className="details">1,110 Followers</TextXS>
          <div className="ellipse" />
          <TextXS className="details">2k Posts</TextXS>
        </div>
        <div className="follow-btn-wrapper">
          <PlusIcon />
          <TextXS className="follow-all">Follow</TextXS>
        </div>
      </div>

      <div className="tags-container">
        <div className="tags">#moon</div>
        <div className="tags">#sky</div>
        <div className="tags">#nightwalker</div>
      </div>

      <div className="tab-wrapper">
        <TextSM
          className={page === 'posts' ? 'selected-tab' : 'select-tab'}
          onClick={handlePosts}
        >
          posts
        </TextSM>
        <TextSM
          className={page === 'experts' ? 'selected-tab' : 'select-tab'}
          onClick={handleExperts}
        >
          experts
        </TextSM>
      </div>

      {page === 'posts' && <PostsThumbnail />}
      {page === 'experts' && <UserCards />}
    </CategoryPostsContainer>
  );
};

export default CategoryPosts;
