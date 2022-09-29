import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/BigButton';
import InputField from '../../utils/InputField';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
  password: yup.string().required('password is required'),
});

function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
  });
  return (
    <LoginFormContainer>
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
        <BigButton>log in</BigButton>
      </div>
    </LoginFormContainer>
  );
}

export default LoginForm;
