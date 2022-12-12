import { useCookies } from 'react-cookie';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { ConversationListContainer } from '../../styles/messegner.styles';
import ConversationListCard from './ConversationListCard';
import NoChat from './NoChat';

function ConversationList() {
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const slug = cookies?.user?.slug;
  const url = `${API_URL}/conversations/page/ongoing/${slug}?page=0`;
  const { data: conversations, error } = useSWR([url, token], {
    revalidateOnMount: true,
    suspense: true,
  });

  console.log('conversations', conversations);
  // console.log('errors', error);

  return (
    <ConversationListContainer>
      {conversations
        ?.sort(
          (a, b) =>
            new Date(b.message.createdAt) - new Date(a.message.createdAt)
        )
        ?.map((conversation) => (
          <ConversationListCard
            currentUser={cookies.user.slug}
            conversation={conversation}
            key={conversation._id}
            token={token}
          />
        ))}
      {conversations?.length === 0 && <NoChat />}
    </ConversationListContainer>
  );
}

export default ConversationList;
