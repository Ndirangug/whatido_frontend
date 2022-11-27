import { useRouter } from 'next/router';
import MessageScreen from '../../../components/chat/MessageScreen';
import Sidebar from '../../../components/chat/Sidebar';
import { MessengerPageContainer } from '../../../styles/messegner.styles';

function ChatScreenPage() {
  const router = useRouter();
  const recieverSlug = router?.query?.id;

  return (
    <MessengerPageContainer>
      <Sidebar chatScreen />
      <MessageScreen recieverSlug={recieverSlug} />
    </MessengerPageContainer>
  );
}

export default ChatScreenPage;
