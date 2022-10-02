import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { FooterContainer } from '../../styles/footer.styles';
import AudioRoomsIcon from '../utils/icons/AudioRoomsIcon';
import ChatIcon from '../utils/icons/ChatIcon';
import ExploreIcon from '../utils/icons/ExploreIcon';
import HomeIcon from '../utils/icons/HomeIcon';
import MobileCreateIcon from '../utils/icons/MobileCreateIcon';

function Footer() {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const router = useRouter();

  const handleCreate = () => {
    if (!authenticated) {
      router.push({
        query: {
          login: true,
        },
      });
    } else {
      router.push('/create');
    }
  };
  return (
    <FooterContainer>
      <HomeIcon selected />
      <ExploreIcon />
      <MobileCreateIcon handleCreate={handleCreate} />
      <AudioRoomsIcon />
      <ChatIcon />
    </FooterContainer>
  );
}

export default Footer;
