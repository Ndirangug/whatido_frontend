import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { MessageScreenContainer } from '../../styles/messegner.styles';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import MessageHeader from './MessageHeader';

function MessageScreen({ recieverSlug }) {
  const [friend, setFriend] = useState(null);
  const scrollRef = useRef();
  const inputRef = useRef(null);
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const userSlug = cookies?.user?.slug;
  const endUserserUrl = `${API_URL}/getExpertDetail/${recieverSlug}`;
  const conversationUrl = `${API_URL}/conversations/find/${recieverSlug}/${userSlug}`;
  const { data: conversation } = useSWR([conversationUrl, token]);
  const { data: endUser } = useSWR(endUserserUrl);
  const expert = endUser?.data;

  useEffect(() => {
    setFriend({
      firstName: expert?.profile?.firstName,
      lastName: expert?.profile?.lastName,
      photo: expert?.imageUrl?.cdnUrl,
      email: expert?.email,
      slug: expert?.slug,
      expertise: expert?.expertFocusExpertise,
      category: expert?.expertCategories,
      online: expert?.onlineStatus,
    });
  }, [
    expert?.email,
    expert?.expertCategories,
    expert?.expertFocusExpertise,
    expert?.imageUrl?.cdnUrl,
    expert?.onlineStatus,
    expert?.profile?.firstName,
    expert?.profile?.lastName,
    expert?.slug,
  ]);

  return (
    <MessageScreenContainer>
      {/* jheader */}
      <MessageHeader friend={friend} />
      {/* body  */}
      <MessageBody
        scrollRef={scrollRef}
        inputRef={inputRef}
        friend={friend}
        userSlug={userSlug}
        token={token}
        recieverSlug={recieverSlug}
        conversationId={conversation?._id}
      />
      {/* footer */}
      <MessageFooter
        scrollRef={scrollRef}
        inputRef={inputRef}
        friend={friend}
        userSlug={userSlug}
        token={token}
        conversationId={conversation?._id}
      />
    </MessageScreenContainer>
  );
}

export default MessageScreen;
