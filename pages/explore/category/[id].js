import { useRouter } from 'next/router';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import CategoryPosts from '../../components/utils/explore/CategoryPosts';
import { CategoryPostsLgContainer } from '../../styles/explore.styles';

const Category = () => {
  const router = useRouter();
  const communityUrl = `${API_URL}/feed/community/${router.query.id}?page=0`;
  const { data: posts } = useSWR(communityUrl);

  return (
    <CategoryPostsLgContainer>
      <CategoryPosts category={router.query.id} posts={posts} />
    </CategoryPostsLgContainer>
  );
};

export default Category;
