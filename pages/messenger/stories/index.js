import MessageScreen from '../../../components/chat/MessageScreen';
import StoriesSidebar from '../../../components/stories/StoriesSidebar';
import { MessengerPageContainer } from '../../../styles/messegner.styles';

function Archive() {
  return (
    <MessengerPageContainer>
      <StoriesSidebar />
      <MessageScreen />
    </MessengerPageContainer>
  );
}

export default Archive;
