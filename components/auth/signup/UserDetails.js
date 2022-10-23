import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('first name is required')
    .min(1, 'first name is too short')
    .max(32, 'first name is too long')
    .trim(),
  lastName: yup
    .string()
    .required('last name is required')
    .min(1, 'last name is too short')
    .max(32, 'last name is too long')
    .trim(),
  category: yup.string().required('select category'),
  subCategory: yup.string().required('select sub-category'),
});

const UserDetails = ({ handleSignupPage, setValue }) => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    const { firstName, lastName, category, subCategory } = getValues();
    setValue('firstName', firstName);
    setValue('lastName', lastName);
    setValue('category', category);
    setValue('subCategory', subCategory);

    handleSignupPage(4);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'first name*'}
          type={'text'}
          error={errors?.firstName?.message}
          register={register('firstName')}
        />
        <InputField
          label={'last name*'}
          type={'text'}
          error={errors?.lastName?.message}
          register={register('lastName')}
        />
        <select
          name="categories"
          className="select-input"
          {...register('category')}
        >
          <option value="">area of expertise*</option>
          <option value={'slug'} key={'slug'}>
            Academic Tutoring
          </option>
        </select>
        <select
          className="select-input"
          name="categories"
          {...register('subCategory')}
        >
          <option value="">focus of expertise*</option>
          <option value={'slug'} key={'slug'}>
            Academic Tutoring
          </option>
        </select>
      </div>

      <div className="btn-container">
        <BigButton type="submit">Next</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default UserDetails;
