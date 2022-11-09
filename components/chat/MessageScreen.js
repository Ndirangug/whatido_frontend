import { MessageScreenContainer } from '../../styles/messegner.styles';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import MessageHeader from './MessageHeader';

function MessageScreen() {
  return (
    <MessageScreenContainer>
      {/* jheader */}
      <MessageHeader />
      {/* body  */}
      <MessageBody />
      {/* footer */}
      <MessageFooter />
    </MessageScreenContainer>
  );
}

export default MessageScreen;
