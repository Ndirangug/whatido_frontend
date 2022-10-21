import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryComponent } from '../../../store/reducers/category_page_reducer';
import { CategoryPostsContainer } from '../../../styles/explore.styles';
import { TextLG, TextSm, TextxS } from '../typography/Typography';
import PostsThumbnail from './PostsThumbnail';
import UserCards from './UserCards';

const CategoryPosts = ({ category }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.category.selectedComponent);

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
            <TextxS>1,110 Experts</TextxS>
          </div>
          <div className="ellipse" />
          <div className="details">
            <TextxS>2k Posts</TextxS>
          </div>
        </div>

        <button className="follow-all-btn">Follow</button>
      </div>

      <div className="tags-container">
        <div className="tags">
          <TextxS>#moon</TextxS>
        </div>
        <div className="tags">
          <TextxS>#sky</TextxS>
        </div>
        <div className="tags">
          <TextxS>#nightwalker</TextxS>
        </div>
      </div>

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

      {page === 'posts' && <PostsThumbnail category={category} />}
      {page === 'experts' && <UserCards category={category} />}
    </CategoryPostsContainer>
  );
};

export default CategoryPosts;
