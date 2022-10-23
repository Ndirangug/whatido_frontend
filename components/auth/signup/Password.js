import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { API_URL } from '../../../constants/api';

import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';
import { TextBase } from '../../utils/typography/Typography';

const schema = yup.object().shape({
  password: yup
    .string()
    .required('password is required')
    .min(6, 'at least 6 characters')
    .matches(RegExp('(.*[a-z].*)'), 'at least one lowercase letter')
    .matches(RegExp('(.*[A-Z].*)'), 'at least one uppercase letter')
    .matches(RegExp('(.*\\d.*)'), 'at least one number')
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      'at least one special character'
    ),
  confirm_password: yup
    .string()
    .required('confirm your password')
    .oneOf([yup.ref('password'), null], 'password must match'),
});

const Password = ({ setValue, getAllValues, handleSignupPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    setValue('password', data?.password);
    setValue('confirm_password', data?.confirm_password);
    const formValues = getAllValues();

    try {
      const response = await axios.post(
        `${API_URL}/auth/register2`,
        formValues
      );

      if (response.data.success) {
        handleSignupPage(6);
      } else {
        return alert('error creating account');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'password'}
          type={'password'}
          register={register('password')}
          error={errors?.password?.message}
        />
        <div className="error-container">
          <TextBase>{errors?.password?.message}</TextBase>
        </div>

        <InputField
          label={'confirm password'}
          type={'password'}
          register={register('confirm_password')}
          error={errors?.confirm_password?.message}
        />
        <div className="error-container">
          <TextBase>{errors?.confirm_password?.message}</TextBase>
        </div>
      </div>
      <div className="btn-container">
        <BigButton type="submit">Sign Up</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Password;
