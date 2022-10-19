import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { setSelectedComponent } from '../../store/reducers/explore_reducer';
import { ContentPageContainer } from '../../styles/explore.styles';
import { Text2XL, TextSM } from '../utils/typography/Typography';
import CardsContainer from './CardsContainer';
import Search from './Search';

const ExplorePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.explore.selectedComponent);

  let pageUrl = `${API_URL}/feed/discover`;
  const { data: posts } = useSWR(pageUrl);

  const handleCategory = () => {
    dispatch(setSelectedComponent('category'));
  };

  const handleExpert = () => {
    dispatch(setSelectedComponent('expert'));
  };

  return (
    <ContentPageContainer>
      <div className="category-container">
        <Text2XL>explore</Text2XL>
        <Search />
      </div>

      {/* <Image
        src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/media/1659966936416__ce3cc7ae-5968-4ba2-b326-e895ebad192b__whatido.jpeg"
        alt="whatido"
        width="100%"
        height="200px"
        className="banner-img"
      /> */}

      <div>
        <div className="tab-wrapper">
          <TextSM
            className={
              !page || page === 'category' ? 'selected-tab' : 'select-tab'
            }
            onClick={handleCategory}
          >
            categories
          </TextSM>
          <TextSM
            className={page === 'expert' ? 'selected-tab' : 'select-tab'}
            onClick={handleExpert}
          >
            experts
          </TextSM>
        </div>
        {/* {!page && <CardsContainer posts={posts} page="category" />} */}

        {page === 'category' && <CardsContainer posts={posts} page={page} />}

        {page === 'expert' && <CardsContainer posts={posts} page={page} />}
      </div>
    </ContentPageContainer>
  );
};

export default ExplorePage;
