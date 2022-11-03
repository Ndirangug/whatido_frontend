import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../store/actions/auth_actions';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import CompleteSignup from '../../utils/icons/CompleteSignup';

const FinishPage = ({ handleClose, getAllValues }) => {
  const dispatch = useDispatch();

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const formValues = getAllValues();
    // log user in
    const data = {
      email: formValues?.email,
      password: formValues?.password,
    };

    dispatch(loginAction(data))
      .then((response) => {
        if (
          response.errorMessage &&
          response.errorMessage !== null &&
          response.errorMessage !== undefined &&
          response.errorMessage !== ''
        ) {
          console.log(response.errorMessage);
        } else {
          handleClose();
        }
      })
      .catch((err) => {
        console.log('auth err', err);
      });

    handleClose();
  };
  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <CompleteSignup />

      <div className="btn-container">
        <BigButton type="submit">Return to Home</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default FinishPage;
