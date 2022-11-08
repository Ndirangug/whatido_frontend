import React from 'react';
import { ConversationListCardContainer } from '../../styles/messegner.styles';
import BaseAvatar from '../utils/avatars/BaseAvatar';
import { TextBase, TextxS } from '../utils/typography/Typography';

function ConversationListCard() {
  return (
    <ConversationListCardContainer>
      <div className="conv-info-container">
        <BaseAvatar />
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
