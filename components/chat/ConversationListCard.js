import { useRouter } from 'next/router';
import React from 'react';
import { ConversationListCardContainer } from '../../styles/messegner.styles';
import XsAvatar from '../utils/avatars/XsAvatar';
import { TextBase, TextxS } from '../utils/typography/Typography';

function ConversationListCard({ currentUser, conversation }) {
  const router = useRouter();
  const friendSlug = conversation?.members?.find((m) => m !== currentUser);
  const goChat = () => {
    router.push(`/messenger/chat/${friendSlug}`);
  };
  return (
    <ConversationListCardContainer onClick={goChat}>
      <div className="conv-info-container">
        <XsAvatar />
        <div className="info-container">
          <div className="info-name">
            <TextBase>Jane Jones</TextBase>
          </div>
          <div className="info">
            <TextxS>
              lorem ipsum idumuvium lsinve inisvi eve veibn larient
            </TextxS>
          </div>
        </div>
      </div>
      <div className="detail">
        <TextxS
          style={{
            color: 'var(--gray-text)',
          }}
        >
          6:16am
        </TextxS>
        <div className="unread-count">
          <TextxS
            style={{
              fontWeight: '600',
            }}
          >
            1
          </TextxS>
        </div>
      </div>
    </ConversationListCardContainer>
  );
}

export default ConversationListCard;
