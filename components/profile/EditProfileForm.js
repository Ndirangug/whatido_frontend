import { yupResolver } from '@hookform/resolvers/yup';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { EditProfileFormContainer } from '../../styles/profile.styles';
import BigButton from '../utils/buttons/BigButton';
import InputField from '../utils/inputs/InputField';
import SelectCategory from '../utils/inputs/SelectCategory';
import SubCategorySelect from '../utils/inputs/SubCategorySelect';
import AdditionalLink from './AdditionalLink';

function EditProfileForm() {
  const profile = useSelector((state) => state.profile.editableProfile);

  const [cookies] = useCookies(['user']);

  const schema = yup.object().shape({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      fullName: `${cookies.user.firstName} ${cookies.user.lastName}`,
      headLine: profile.headLine,
      nationality: profile.nationality,
      currentLocation: profile.currentLocation,
    },
  });
  return (
    <EditProfileFormContainer>
      <div className="form-input-container">
        <InputField
          label={'full name'}
          type={'text'}
          error={errors?.fullName?.message}
          register={register('fullName')}
          placeholder={''}
          disabled
        />
        <InputField
          label={'headline'}
          type={'text'}
          error={errors?.headLine?.message}
          register={register('headLine')}
          placeholder={''}
        />
        <InputField
          label={'nationality'}
          type={'text'}
          error={errors?.nationality?.message}
          register={register('nationality')}
          placeholder={''}
        />
        <InputField
          label={'current location'}
          type={'text'}
          error={errors?.currentLocation?.message}
          register={register('currentLocation')}
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
