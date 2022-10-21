import { useRouter } from 'next/router';
import CategoryPosts from '../../components/utils/explore/CategoryPosts';
import { CategoryPostsLgContainer } from '../../styles/explore.styles';

const Category = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <CategoryPostsLgContainer>
      <CategoryPosts category={id} />
    </CategoryPostsLgContainer>
  );
};

export default Category;
