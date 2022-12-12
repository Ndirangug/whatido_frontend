import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { showChatRoom } from '../../audioChat';
import AudioCallIcon from '../icons/AudioCallIcon';
import { TextXS } from '../typography/Typography';

const BtnContainer = styled.div`
  background: var(--main-indigo);
  text-align: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px, 12px, 8px, 12px;
  gap: 8px;
  width: 64px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
`;

function AudioRoomButton({ otherUser, icon = false }) {
  const [{ token }] = useCookies(['token']);
  const currentuser = useSelector((state) => state.auth.currentUser);

  const inititateCall = async () => {
    console.log('initiate call to ', otherUser);
    showChatRoom({
      ...otherUser,
      ...(otherUser.profile && { firstName: otherUser.profile.firstName }),
      ...(otherUser.profile && { lastName: otherUser.profile.lastName }),
    });
  };

  return icon ? (
    <AudioCallIcon onClick={inititateCall} />
  ) : (
    <BtnContainer onClick={inititateCall}>
      <TextXS>Call</TextXS>
    </BtnContainer>
  );
}

export default AudioRoomButton;
