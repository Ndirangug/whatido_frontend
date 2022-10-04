import styled from 'styled-components';
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

function FollowButton({ following }) {
  let text = following ? 'following' : 'follow';
  return (
    <BtnContainer following={following}>
      <TextXS>{text}</TextXS>
    </BtnContainer>
  );
}

export default FollowButton;
