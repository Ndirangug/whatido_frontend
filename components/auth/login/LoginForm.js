import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginFormContainer } from '../../../styles/login.styles';
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
      />
      {/* <InputField
        label={'password'}
        type={'password'}
        placeholder={'password'}
        error={errors?.password?.message}
        register={register('password')}
      /> */}
    </LoginFormContainer>
  );
}

export default LoginForm;
