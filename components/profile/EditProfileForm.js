import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { EditProfileFormContainer } from '../../styles/profile.styles';
import BigButton from '../utils/buttons/BigButton';

import InputField from '../utils/inputs/InputField';
import SelectCategory from '../utils/inputs/SelectCategory';
import SubCategorySelect from '../utils/inputs/SubCategorySelect';
import AdditionalLink from './AdditionalLink';

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
      <div className="form-input-container">
        <InputField
          label={'full name'}
          type={'text'}
          error={errors?.email?.message}
          register={register('email')}
          placeholder={''}
        />
        <InputField
          label={'headline'}
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
        <SelectCategory />
        <SubCategorySelect />
      </div>
      <AdditionalLink />
      <div className="submit-btn">
        <BigButton type="submit">save changes</BigButton>
      </div>
    </EditProfileFormContainer>
  );
}

export default EditProfileForm;
