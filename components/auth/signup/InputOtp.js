import { Typography } from '@mui/material';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { SignupFormContainer } from '../../../styles/signup.styles';

import { useForm } from 'react-hook-form';
import BigButton from '../../utils/buttons/BigButton';
import CancelButton from '../../utils/buttons/CancelButton';

const InputOtp = ({ handleSignupPage, setValue, handleClose }) => {
  const [state, setState] = useState({ otp: '' });
  const [error, setError] = useState('');

  const handleChange = (otp) => {
    setError('');
    setState({ otp });
  };

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    if (state.otp?.length === 4) {
      setValue('code', state.otp);
      handleSignupPage(3);
    } else {
      setError('invalid code');
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
          <Typography className="resend-link">resend</Typography>
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
        <BigButton type="submit">Verify</BigButton>
      </div>
    </SignupFormContainer>
  );
};

export default InputOtp;
