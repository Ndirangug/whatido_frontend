import Typography from '@mui/material/Typography';
import { InputFieldContainer } from '../../styles/utils.styles';

function InputField({ label, error, type, register }) {
  return (
    <InputFieldContainer error={error}>
      <Typography>{label} </Typography>
      <input type={type} className="input" {...register} />
    </InputFieldContainer>
  );
}

export default InputField;
