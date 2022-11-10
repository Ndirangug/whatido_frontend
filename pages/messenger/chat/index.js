import React from 'react';
import MessageScreen from '../../../components/chat/MessageScreen';
import Sidebar from '../../../components/chat/Sidebar';
import { MessengerPageContainer } from '../../../styles/messegner.styles';

function Ongoing() {
  return (
    <MessengerPageContainer>
      <Sidebar />
      <MessageScreen />
    </MessengerPageContainer>
  );
}

export default Ongoing;
