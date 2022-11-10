import { useRef } from 'react';
import { MessageScreenContainer } from '../../styles/messegner.styles';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import MessageHeader from './MessageHeader';

function MessageScreen() {
  const scrollRef = useRef();
  return (
    <MessageScreenContainer>
      {/* jheader */}
      <MessageHeader />
      {/* body  */}
      <MessageBody scrollRef={scrollRef} />
      {/* footer */}
      <MessageFooter scrollRef={scrollRef} />
    </MessageScreenContainer>
  );
}

export default MessageScreen;
