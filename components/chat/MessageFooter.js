import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import styled from 'styled-components';
import { MessageFooterContainer } from '../../styles/messegner.styles';
import AttachmentIcon from '../utils/icons/AttachmentIcon';
import EmojiIcon from '../utils/icons/EmojiIcon';
import RecordAudioIcon from '../utils/icons/RecordAudioIcon';
import SendMessageIcon from '../utils/icons/SendMessageIcon';

const StyledIconBtn = styled(IconButton)`
  border-radius: 6px;
  padding: 0;
`;

function MessageFooter({ inputRef }) {
  const [inputValue, setInputValue] = useState('');
  const sendMessage = () => {
    console.log(inputValue);
    setInputValue('');
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
