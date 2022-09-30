import { FooterContainer } from '../../styles/footer.styles';
import AudioRoomsIcon from '../utils/AudioRoomsIcon';
import ChatIcon from '../utils/ChatIcon';
import ExploreIcon from '../utils/ExploreIcon';
import HomeIcon from '../utils/HomeIcon';
import MobileCreateBtn from '../utils/MobileCreateBtn';

function Footer() {
  return (
    <FooterContainer>
      <HomeIcon selected />
      <ExploreIcon />
      <MobileCreateBtn />
      <AudioRoomsIcon />
      <ChatIcon />
    </FooterContainer>
  );
}

export default Footer;
