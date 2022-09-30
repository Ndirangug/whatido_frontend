import { CgProfile } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';
import { API_URL } from '../../../constants/api';
import { LoginOptionContainer } from '../../../styles/login.styles';
import AuthOption from '../../utils/micro/AuthOption';

function LoginOptions({ hangleLoginPage }) {
  const socials = (url) => {
    window.open(`${API_URL}/auth/${url}`, '_self');
  };

  return (
    <LoginOptionContainer>
      <div className="option-container">
        <AuthOption
          Icon={CgProfile}
          text="use email and password"
          color={'email'}
          eventHandler={() => hangleLoginPage(1)}
        />
        <AuthOption
          Icon={FcGoogle}
          text="continue with google"
          color={'google'}
          eventHandler={() => socials('google')}
        />

        <AuthOption
          Icon={RiFacebookCircleFill}
          text="continue with facebook"
          color={'fb'}
          eventHandler={() => socials('facebook')}
        />
        <AuthOption
          Icon={RiTwitterFill}
          text="continue with twitter"
          color={'twitter'}
          eventHandler={() => socials('twitter')}
        />
      </div>
    </LoginOptionContainer>
  );
}

export default LoginOptions;
