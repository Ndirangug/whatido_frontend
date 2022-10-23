import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useSWR, { mutate } from 'swr';
import { API_URL } from '../../../constants/api';
import { followAction } from '../../../store/actions/follow_actions';
import { TextXS } from '../typography/Typography';

const BtnContainer = styled.div`
  background: ${({ following }) =>
    following ? 'transparent ' : ' var(--main-indigo)'};
  border: ${({ following }) =>
    following ? '1px solid #fff ' : '1px solid var(--main-indigo)'};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 8px;
  width: 69px;
  height: 22px;
  border-radius: 5px;
  cursor: pointer;
`;

function FollowButton({ peer }) {
  const [{ token }] = useCookies(['token']);
  const user = useSelector((state) => state.auth.currentUser);
  const checkFollowUrl = `${API_URL}/checkfollowing/${user?.slug}/${peer}`;
  const { data: following } = useSWR(checkFollowUrl, {
    suspense: true,
  });
  let text = following ? 'following' : 'follow';

  const followUpEvent = async () => {
    console.log('follow', following);
    const endpoint = following ? `unfollow/${peer}` : `follow/${peer}`;
    const body = {
      type: 'expert',
      following: user?.slug,
    };
    followAction(endpoint, body);
    mutate(checkFollowUrl, !following);
  };
  return (
    <BtnContainer following={following} onClick={followUpEvent}>
      <TextXS>{text}</TextXS>
    </BtnContainer>
  );
}

export default FollowButton;
