import { Typography } from '@mui/material/Typography';
import React from 'react';
import { InputFieldContainer } from '../../styles/utils.styles';

function InputField({ label, error, placeholder, register }) {
  return (
    <InputFieldContainer error={error}>
      <Typography className="label">{label}</Typography>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        {...register}
      />
    </InputFieldContainer>
  );
}

export default InputField;
