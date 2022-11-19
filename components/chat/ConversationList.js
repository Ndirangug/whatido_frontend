import { useCookies } from 'react-cookie';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ConversationListContainer } from '../../styles/messegner.styles';
import ConversationListCard from './ConversationListCard';

function ConversationList() {
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const slug = cookies?.user?.slug;
  const url = `${API_URL}/conversations/ongoing/${slug}`;
  const { data: conversations, error } = useSWR([url, token], {
    revalidateOnMount: true,
  });

  console.log('conversations', conversations);
  console.log('errors', error);

  return (
    <ConversationListContainer>
      {conversations
        ?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        ?.map((conversation) => (
          <ConversationListCard
            currentUser={cookies.user.slug}
            conversation={conversation}
            key={conversation._id}
          />
        ))}
    </ConversationListContainer>
  );
}

export default ConversationList;
