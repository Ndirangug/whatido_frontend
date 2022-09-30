import { FooterContainer } from '../../styles/footer.styles';
import AudioRoomsIcon from '../utils/icons/AudioRoomsIcon';
import ChatIcon from '../utils/icons/ChatIcon';
import ExploreIcon from '../utils/icons/ExploreIcon';
import HomeIcon from '../utils/icons/HomeIcon';
import MobileCreateIcon from '../utils/icons/MobileCreateIcon';

function Footer() {
  return (
    <FooterContainer>
      <HomeIcon selected />
      <ExploreIcon />
      <MobileCreateIcon />
      <AudioRoomsIcon />
      <ChatIcon />
    </FooterContainer>
  );
}

export default Footer;
