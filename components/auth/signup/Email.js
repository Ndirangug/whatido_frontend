import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { API_URL } from '../../../constants/api';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
});

const Email = ({ handleSignupPage, setValue }) => {
  const [processing, setProcessing] = useState('');

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    setProcessing('Validating...');

    try {
      const { email } = getValues();
      const res = await axios.post(`${API_URL}/auth/otp`, {
        email: email,
      });

      if (res?.data?.success) {
        setValue('email', email);
        handleSignupPage(2);
      } else {
        setProcessing('');
        toast.error(res?.data?.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        });
      }
    } catch (error) {
      setProcessing('');
      return error;
    }
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label={'email'}
        type={'text'}
        placeholder={'whatido98@gmail.com'}
        error={errors?.email?.message}
        register={register('email')}
      />

      <div className="email-btn-container">
        <BigButton type="submit">
          {processing === '' ? 'Next' : `${processing}`}
        </BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Email;
