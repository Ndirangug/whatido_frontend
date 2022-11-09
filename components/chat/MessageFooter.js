import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { MessageFooterContainer } from '../../styles/messegner.styles';
import Button from '../utils/buttons/Button';
import EmojiIcon from '../utils/icons/EmojiIcon';

const StyledIconBtn = styled(IconButton)`
  border-radius: 6px;
  padding: 0;
`;

function MessageFooter() {
  const sendMessage = () => {
    console.log('send message');
  };
  return (
    <MessageFooterContainer>
      <div className="input-container">
        <EmojiIcon />
        <input
          type="text"
          className="message-input"
          placeholder="type a message"
        />
      </div>
      <div className="icon-container">
        <StyledIconBtn>
          <Button name={'send'} inLine evenHandler={sendMessage} />
        </StyledIconBtn>
      </div>
    </MessageFooterContainer>
  );
}

export default MessageFooter;
