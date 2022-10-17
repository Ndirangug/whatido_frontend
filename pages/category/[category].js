import { useRouter } from 'next/router';
import CategoryPosts from '../../components/utils/explore/CategoryPosts';
import { CategoryPostsLgContainer } from '../../styles/explore.styles';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  return (
    <CategoryPostsLgContainer>
      <CategoryPosts category={category} />
    </CategoryPostsLgContainer>
  );
};

export default Category;
