import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ContentPageContainer } from '../../styles/home.styles';
import ReelsCard from '../utils/media/ReelsCard';

function Inspiring() {
  let url = `${API_URL}/feed/for-you?page=0`;
  const { data } = useSWR(url, { suspense: true });

  return (
    <ContentPageContainer>
      {data?.map((media) => (
        <ReelsCard media={media} key={media._id} />
      ))}
    </ContentPageContainer>
  );
}

export default Inspiring;
