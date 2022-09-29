import { CgProfile } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';
import { API_URL } from '../../../constants/api';
import { LoginOptionContainer } from '../../../styles/login.styles';
import AuthOption from '../../utils/AuthOption';

function LoginOptions({ hangleLoginPage }) {
  const socials = (url) => {
    window.open(`${API_URL}/auth/${url}`, '_self');
  };

  return (
    <LoginOptionContainer>
      <AuthOption
        Icon={CgProfile}
        text="Use email and password"
        color={'email'}
        eventHandler={() => hangleLoginPage(1)}
      />
      <AuthOption
        Icon={FcGoogle}
        text="Continue with Google"
        color={'google'}
        eventHandler={() => socials('google')}
      />

      <AuthOption
        Icon={RiFacebookCircleFill}
        text="Continue with Facebook"
        color={'fb'}
        eventHandler={() => socials('facebook')}
      />
      <AuthOption
        Icon={RiTwitterFill}
        text="Continue with Twitter"
        color={'twitter'}
        eventHandler={() => socials('twitter')}
      />
    </LoginOptionContainer>
  );
}

export default LoginOptions;
