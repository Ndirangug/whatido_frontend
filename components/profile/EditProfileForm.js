import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { EditProfileFormContainer } from '../../styles/profile.styles';
import InputField from '../utils/inputs/InputField';

const schema = yup.object().shape({
  email: yup.string().required('email is required').email('email is not valid'),
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
        placeholder={''}
      />
      <InputField
        label={'nationality'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={''}
      />
      <InputField
        label={'current location'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={''}
      />
      <InputField
        label={'main category'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={''}
      />
      <InputField
        label={'sub category'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={''}
      />
      <InputField
        label={'sites or addresses'}
        type={'text'}
        error={errors?.email?.message}
        register={register('email')}
        placeholder={''}
      />
    </EditProfileFormContainer>
  );
}

export default EditProfileForm;
