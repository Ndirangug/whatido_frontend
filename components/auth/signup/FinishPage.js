import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import CompleteSignup from '../../utils/icons/CompleteSignup';

const FinishPage = () => {
  return (
    <LoginFormContainer>
      <CompleteSignup />

      <div className="btn-container">
        <BigButton type="submit">Return to Home</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default FinishPage;
