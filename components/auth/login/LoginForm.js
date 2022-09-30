import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { loginAction } from '../../../store/actions/auth_actions';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/form/BigButton';
import InputField from '../../utils/form/InputField';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
  password: yup.string().required('password is required'),
});

function LoginForm({ handleClose }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = (data) => {
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
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'email'}
          type={'text'}
          error={errors?.email?.message}
          register={register('email')}
        />
        <InputField
          label={'password'}
          type={'password'}
          error={errors?.password?.message}
          register={register('password')}
          password
        />
      </div>
      <div className="btn-container">
        <BigButton type="submit">log in</BigButton>
      </div>
    </LoginFormContainer>
  );
}

export default LoginForm;
