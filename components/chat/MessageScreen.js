import { useRef } from 'react';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { MessageScreenContainer } from '../../styles/messegner.styles';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import MessageHeader from './MessageHeader';

function MessageScreen() {
  const scrollRef = useRef();
  const inputRef = useRef(null);
  const endUserserUrl = `${API_URL}/getExpertDetail/Donny-Dey`;
  const { data: endUser } = useSWR(endUserserUrl);
  const expert = endUser?.data;

  const friend = {
    firstName: expert?.profile?.firstName,
    lastName: expert?.profile?.lastName,
    photo: expert?.imageUrl?.cdnUrl,
    email: expert?.email,
    slug: expert?.slug,
    expertise: expert?.expertFocusExpertise,
    category: expert?.expertCategories,
    online: expert?.onlineStatus,
  };
  return (
    <MessageScreenContainer>
      {/* jheader */}
      <MessageHeader />
      {/* body  */}
      <MessageBody scrollRef={scrollRef} inputRef={inputRef} friend={friend} />
      {/* footer */}
      <MessageFooter scrollRef={scrollRef} inputRef={inputRef} />
    </MessageScreenContainer>
  );
}

export default MessageScreen;
