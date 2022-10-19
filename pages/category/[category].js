import { useRouter } from 'next/router';
import useSWR from 'swr';
import CategoryPosts from '../../components/utils/explore/CategoryPosts';
import { API_URL } from '../../constants/api';
import { CategoryPostsLgContainer } from '../../styles/explore.styles';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const communityUrl = `${API_URL}/feed/community/${category}`;
  const { data: posts } = useSWR(communityUrl);

  return (
    <CategoryPostsLgContainer>
      <CategoryPosts category={category} posts={posts} />
    </CategoryPostsLgContainer>
  );
};

export default Category;
