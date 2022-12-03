import Sidebar from '../../../components/chat/Sidebar';
import RequireAuth from '../../../hooks/RequireAuth';
import { MessengerPageContainer } from '../../../styles/messegner.styles';

function Ongoing() {
  return (
    <MessengerPageContainer>
      <Sidebar />
      {/* <MessageScreen /> */}
    </MessengerPageContainer>
  );
}

export default RequireAuth(Ongoing);
