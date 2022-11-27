import MessageScreen from '../../../components/chat/MessageScreen';
import Sidebar from '../../../components/chat/Sidebar';
import { MessengerPageContainer } from '../../../styles/messegner.styles';

function ChatScreenPage() {
  return (
    <MessengerPageContainer>
      <Sidebar chatScreen />
      <MessageScreen />
    </MessengerPageContainer>
  );
}

export default ChatScreenPage;
