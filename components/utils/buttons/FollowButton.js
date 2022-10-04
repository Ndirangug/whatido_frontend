import styled from 'styled-components';
import { TextXS } from '../typography/Typography';

const BtnContainer = styled.div`
  background: var(--main-indigo);
  border: 1px solid var(--main-indigo);
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
    <BtnContainer>
      <TextXS>{text}</TextXS>
    </BtnContainer>
  );
}

export default FollowButton;
