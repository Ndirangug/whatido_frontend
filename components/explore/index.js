import { useDispatch, useSelector } from 'react-redux';
import { setSelectedComponent } from '../../store/reducers/explore_reducer';
import { ContentPageContainer } from '../../styles/explore.styles';
import CarouselImage from '../utils/explore/CarouselImage';
import { Text2XL, TextSm } from '../utils/typography/Typography';
import CardsContainer from './CardsContainer';
import Search from './Search';

const ExplorePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.explore.selectedComponent);

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

      <CarouselImage />

      <div>
        <div className="tab-wrapper">
          <div
            className={
              !page || page === 'category' ? 'selected-tab' : 'select-tab'
            }
            onClick={handleCategory}
          >
            <TextSm>categories</TextSm>
          </div>
          <div
            className={page === 'expert' ? 'selected-tab' : 'select-tab'}
            onClick={handleExpert}
          >
            <TextSm>experts</TextSm>
          </div>
        </div>
        {/* {!page && <CardsContainer posts={posts} page="category" />} */}

        {page === 'category' && <CardsContainer page={page} />}

        {page === 'expert' && <CardsContainer page={page} />}
      </div>
    </ContentPageContainer>
  );
};

export default ExplorePage;
