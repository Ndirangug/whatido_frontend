import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputFieldContainer } from '../../styles/utils.styles';

function InputField({ label, error, type, register, password }) {
  const [passwordType, setPasswordType] = useState(type);
  const passwordToggle = () => {
    if (passwordType === 'text') {
      return (
        <FaEye
          className="eye-icon"
          onClick={() => setPasswordType('password')}
        />
      );
    } else if (passwordType === 'password') {
      return (
        <FaEyeSlash
          className="eye-icon"
          onClick={() => setPasswordType('text')}
        />
      );
    } else return null;
  };

  return (
    <InputFieldContainer error={error}>
      <Typography>{label} </Typography>
      <div className="input-container">
        <input type={passwordType} className="input" {...register} />
        {password && passwordToggle()}
      </div>
    </InputFieldContainer>
  );
}

export default InputField;
