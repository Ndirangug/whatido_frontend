import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { updateUserProfile } from '../../store/actions/user_actions';
import { EditProfileFormContainer } from '../../styles/profile.styles';
import BigButton from '../utils/buttons/BigButton';
import InputField from '../utils/inputs/InputField';
import SelectCategory from '../utils/inputs/SelectCategory';
import SubCategorySelect from '../utils/inputs/SubCategorySelect';
import AdditionalLink from './AdditionalLink';

function EditProfileForm() {
  const profile = useSelector((state) => state.profile.editableProfile);
  const [cookies] = useCookies(['user']);
  const [{ token }] = useCookies(['token']);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
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

  const formatProfileData = (data) => {
    const profileData = new FormData();
    profile?.cover?.file && profileData.append('cover', profile?.cover?.file);
    profile?.avatar?.file &&
      profileData.append('avatar', profile?.avatar?.file);
    profileData.append('headLine', data?.headLine);
    profileData.append('community', profile?.community);
    profileData.append('expertise', profile?.expertise);
    profileData.append('currentLocation', data?.currentLocation);
    profileData.append('nationality', data?.nationality);
    profileData.append('additionalLinks', data?.additionalLinks);

    updateUserProfile(profileData, token);
  };

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
        <SelectCategory register={register} />
        <SubCategorySelect />
      </div>
      <AdditionalLink control={control} />
      <div className="submit-btn">
        <BigButton
          type="submit"
          eventHandler={handleSubmit((data) => {
            console.log(data, profile?.community, profile?.expertise);
          })}
        >
          save changes
        </BigButton>
      </div>
    </EditProfileFormContainer>
  );
}

export default EditProfileForm;
