import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
});

const Email = ({ handleSignupPage }) => {
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

  const onSubmit = () => {
    handleSignupPage(2);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'email'}
          type={'text'}
          placeholder={'whatido98@gmail.com'}
          error={errors?.email?.message}
          register={register('email')}
        />
      </div>
      <div className="btn-container">
        <BigButton type="submit">Next</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Email;
