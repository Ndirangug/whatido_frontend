import { CgProfile } from 'react-icons/cg';
import { LoginOptionContainer } from '../../../styles/login.styles';
import AuthOption from '../../utils/AuthOption';

function LoginOptions() {
  return (
    <LoginOptionContainer>
      <AuthOption
        Icon={CgProfile}
        text="log in with email"
        color={'email'}
        eventHandler={() => console.log('email')}
      />
    </LoginOptionContainer>
  );
}

export default LoginOptions;
