import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/form/BigButton';
import InputField from '../../utils/form/InputField';

const Password = () => {
  return (
    <LoginFormContainer>
      <div className="input-container">
        <InputField label={'password*'} type={'password'} />
        <InputField label={'confirm password*'} type={'password'} />
      </div>
      <div className="btn-container">
        <BigButton type="submit">Sign Up</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Password;
