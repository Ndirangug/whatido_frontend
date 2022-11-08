import { ConversationListContainer } from '../../styles/messegner.styles';
import ConversationListCard from './ConversationListCard';

function ConversationList() {
  return (
    <ConversationListContainer>
      <ConversationListCard />
      <ConversationListCard />
      <ConversationListCard />
      <ConversationListCard />
    </ConversationListContainer>
  );
}

export default ConversationList;
