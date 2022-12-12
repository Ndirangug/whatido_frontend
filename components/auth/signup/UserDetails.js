import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { API_URL } from '../../../constants/api';

import { setValues } from '../../../store/reducers/signup_reducer';
import { DetailsFormContainer } from '../../../styles/signup.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';
import SelectCategory from '../../utils/inputs/SelectCategory';
import SubCategorySelect from '../../utils/inputs/SubCategorySelect';

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

const UserDetails = ({ setValue, getAllValues, handleSignupPage }) => {
  const signupValues = useSelector((state) => state.signup.values);
  const [{ token }] = useCookies(['token']);

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
    defaultValues: {
      email: `${getAllValues()?.email}`,
    },
  });

  const onSubmit = async () => {
    const { firstName, lastName } = getValues();
    setValue('firstName', firstName);
    setValue('lastName', lastName);
    const formValues = getAllValues();

    const registerValues = {
      email: formValues?.email,
      code: formValues?.code,
      firstName: formValues?.firstName,
      lastName: formValues?.lastName,
      password: formValues?.password,
      experties: signupValues?.expertise,
      community: signupValues?.community,
    };

    try {
      const response = await axios.post(
        `${API_URL}/auth/register2`,
        registerValues,
        {
          'Content-Type': 'application/json',
          headers: { Authorization: token },
        }
      );

      if (response.data.success) {
        toast.success('account successfully created', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000,
        });
        handleSignupPage(5);
      } else {
        return toast.error('error creating account');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <DetailsFormContainer>
      <div className="input-container">
        <InputField
          label={'first name'}
          type={'text'}
          error={errors?.firstName?.message}
          register={register('firstName')}
        />
        <InputField
          label={'last name'}
          type={'text'}
          error={errors?.lastName?.message}
          register={register('lastName')}
        />
        <InputField
          label={'email'}
          type={'text'}
          register={register('email')}
          disabled={true}
        />
        <SelectCategory
          setCategory={setValues}
          defaultValue={signupValues?.community}
          value={signupValues?.community}
        />
        <SubCategorySelect
          setCategory={setValues}
          defaultValue={signupValues?.expertise}
          value={signupValues?.expertise}
        />
      </div>

      <div className="next-btn-container">
        <BigButton eventHandler={onSubmit}>Sign Up</BigButton>
      </div>
    </DetailsFormContainer>
  );
};

export default UserDetails;
