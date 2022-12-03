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
  const token = useSelector((state) => state.auth.token);

  const authenticated = useSelector((state) => state.auth.authenticated);

  const { data: list } = useSWR(`${API_URL}/getExpertsCategoryList`);

  const feedsUrl = authenticated
    ? `${API_URL}/feed/for-you/${user?.slug}?page=0`
    : `${API_URL}/feed/inspiring?page=0`;

  const { data } = useSWR([feedsUrl, token], {
    suspense: true,
  });

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
