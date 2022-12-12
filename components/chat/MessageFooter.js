import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import styled from 'styled-components';
import store from '../../store';
import { postNewMessage, socket } from '../../store/actions/messenger_actions';
import { addMessageData } from '../../store/reducers/messenger_reducer';
import { MessageFooterContainer } from '../../styles/messegner.styles';
import AttachmentIcon from '../utils/icons/AttachmentIcon';
import EmojiIcon from '../utils/icons/EmojiIcon';
import RecordAudioIcon from '../utils/icons/RecordAudioIcon';
import SendMessageIcon from '../utils/icons/SendMessageIcon';

const StyledIconBtn = styled(IconButton)`
  border-radius: 6px;
  padding: 0;
`;

function MessageFooter({
  inputRef,
  scrollRef,
  friend,
  userSlug,
  token,
  conversationId,
  setSendingMessage,
}) {
  const [inputValue, setInputValue] = useState('');
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch();

  const sendMessage = async () => {
    const message = {
      conversationId: conversationId,
      messageId: uuid(),
      sender: userSlug,
      reciever: friend?.slug,
      text: inputValue,
      withAvatar: false,
      read: false,
      quote: null,
      senderName: {
        firstName: cookies.user.firstName,
        lastName: cookies.user.lastName,
      },
      blocked: [],
    };
    setSendingMessage((prev) => [...prev, { ...message, time: new Date() }]);
    const res = await postNewMessage(message, token);
    
    dispatch(addMessageData(res.data));
    setSendingMessage((prev) =>
      prev.filter((m) => m.messageId !== res.data.messageId)
    );

    setInputValue('');

    socket.emit('sendMessage', {
      data: res.data,
      recieverSlug: friend?.slug,
    });

    scrollRef.current.scrollIntoView();
  };

  return (
    <MessageFooterContainer>
      <div className="input-container">
        <EmojiIcon />
        <input
          type="text"
          className="message-input"
          placeholder="type a message"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AttachmentIcon />
      </div>
      <div className="icon-container">
        {inputValue === '' ? (
          <RecordAudioIcon />
        ) : (
          <SendMessageIcon eventHandler={sendMessage} />
        )}
      </div>
    </MessageFooterContainer>
  );
}

export default MessageFooter;
