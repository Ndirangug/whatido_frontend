import { Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { SignupFormContainer } from '../../../styles/signup.styles';

import { useForm } from 'react-hook-form';
import { API_URL } from '../../../constants/api';
import BigButton from '../../utils/buttons/BigButton';
import CancelButton from '../../utils/buttons/CancelButton';

const InputOtp = ({
  handleSignupPage,
  setValue,
  handleClose,
  getAllValues,
}) => {
  const [state, setState] = useState({ otp: '' });
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState('');

  const handleChange = (otp) => {
    setError('');
    setState({ otp });
  };

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const formValues = getAllValues();
      const data = {
        email: formValues?.email,
        otp: state.otp,
      };

      setProcessing('Verifying...');
      const res = await axios.post(`${API_URL}/auth/otpValidate`, data);
      if (res.data?.code) {
        setValue('code', res.data?.code);
        handleSignupPage(3);
      }

      if (res.data?.success === false) {
        setProcessing('');
        setError('invalid code');
      }
    } catch (error) {
      setProcessing('');
      return error;
    }
  };

  const resendOtp = async () => {
    const formValues = getAllValues();
    const res = await axios.post(`${API_URL}/auth/otp`, {
      email: formValues?.email,
    });

    if (res?.data?.success) {
      alert('otp sent');
    } else {
      alert(res?.data?.error);
    }
  };

  return (
    <SignupFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <OtpInput
          value={state.otp}
          onChange={handleChange}
          numInputs={4}
          className={error ? 'otp-input err-border' : 'otp-input'}
        />

        <div className="resend-container">
          <Typography>{"didn't get a code?"}</Typography>
          <Typography className="resend-link" onClick={resendOtp}>
            resend
          </Typography>
        </div>
      </div>

      <div className="btn-container">
        <CancelButton
          eventHandler={handleClose}
          color={'#fff'}
          textColor={'#001433'}
        >
          Cancel
        </CancelButton>
        <BigButton type="submit">
          {processing === '' ? 'Verify' : `${processing}`}
        </BigButton>
      </div>
    </SignupFormContainer>
  );
};

export default InputOtp;
