import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ContentPageContainer } from '../../styles/home.styles';
import ReelsCard from '../utils/cards/media/ReelsCard';
import { subscribeUser } from '../utils/service-worker/subscription';

function Inspiring() {
  const user = useSelector((state) => state.auth.currentUser);

  let url = `${API_URL}/feed/for-you?page=0`;
  const { data } = useSWR(url, { suspense: true });

  useEffect(() => {
    subscribeUser(user?.slug);
  }, [user?.slug]);

  return (
    <ContentPageContainer>
      {data?.map((media) => (
        <ReelsCard media={media} key={media._id} />
      ))}
    </ContentPageContainer>
  );
}

export default Inspiring;
