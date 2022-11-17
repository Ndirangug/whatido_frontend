import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { loginAction } from '../../../store/actions/auth_actions';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';
import { TextSm } from '../../utils/typography/Typography';

const schema = yup.object().shape({
  email: yup.string().required('email is required').email('email is not valid'),
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
          placeholder={'whatido98@gmail.com'}
        />

        <InputField
          label={'password'}
          type={'password'}
          error={errors?.password?.message}
          register={register('password')}
          placeholder={'129***0065***tyh'}
          password
        />
        <div />

        <div className="forget-password-container">
          <div className="checkbox-container">
            <div className="checkbox-wrapper">
              <input type="checkbox" />
            </div>
            <TextSm style={{ marginLeft: '0.5rem' }}>
              remember for 90 days
            </TextSm>
          </div>
          <div className="forget-password">
            <Link href="/">
              <TextSm>forgot password?</TextSm>
            </Link>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <BigButton type="submit">log in</BigButton>
      </div>
    </LoginFormContainer>
  );
}

export default LoginForm;
