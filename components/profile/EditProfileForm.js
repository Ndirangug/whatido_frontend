import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { EditProfileFormContainer } from '../../styles/profile.styles';
import InputField from '../utils/inputs/InputField';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
  password: yup.string().required('password is required'),
});

function EditProfileForm() {
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
  return (
    <EditProfileFormContainer>
      <InputField
        label={'full name'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={'jane jones'}
      />
      <InputField
        label={'email'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={'whatido98@gmail.com'}
      />
      <InputField
        label={'email'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={'whatido98@gmail.com'}
      />
      <InputField
        label={'email'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={'whatido98@gmail.com'}
      />
    </EditProfileFormContainer>
  );
}

export default EditProfileForm;
