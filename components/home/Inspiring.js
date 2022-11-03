import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { setCategoryList } from '../../store/reducers/list_reducer';
import { ContentPageContainer } from '../../styles/home.styles';
import ReelsCard from '../utils/cards/media/ReelsCard';
import { subscribeUser } from '../utils/service-worker/subscription';

function Inspiring() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const { data: list } = useSWR(`${API_URL}/getExpertsCategoryList`);

  let url = `${API_URL}/feed/for-you?page=0`;
  const { data } = useSWR(url, { suspense: true });

  useEffect(() => {
    subscribeUser(user?.slug);
  }, [user?.slug]);

  useEffect(() => {
    if (list) {
      dispatch(setCategoryList(list));
    }
  }, [dispatch, list]);

  return (
    <ContentPageContainer>
      {data?.map((media) => (
        <ReelsCard media={media} key={media._id} />
      ))}
    </ContentPageContainer>
  );
}

export default Inspiring;
