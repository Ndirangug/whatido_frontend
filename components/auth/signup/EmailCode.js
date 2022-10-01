import { ComponentsContainer } from '../../../styles/signUp.styles';
import BigButton from '../../utils/form/BigButton';
import InputField from '../../utils/form/InputField';

const EmailCode = ({ handleSignupPage }) => {
  return (
    <ComponentsContainer>
      <div className="input-container">
        <InputField label={'email*'} type={'text'} />
        <InputField type={'number'} />

        <BigButton>Send code</BigButton>
      </div>

      <div className="btn-container" onClick={() => handleSignupPage(2)}>
        <BigButton>Verify</BigButton>
      </div>
    </ComponentsContainer>
  );
};

export default EmailCode;
