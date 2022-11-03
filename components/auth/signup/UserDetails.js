import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { API_URL } from '../../../constants/api';
import { setCategoryList } from '../../../store/reducers/list_reducer';
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
  const categoryList = useSelector((state) => state.list.List);
  const dispatch = useDispatch();
  const [categoryExpertiseList, setCategoryExpertiseList] = useState([]);

  let categoryData = axios
    .get(`${API_URL}/getExpertsCategoryList`)
    .then((res) => {
      return res.data;
    });

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

  const onChangeAreaOfExpertise = (e) => {
    const updateCategoryList = categoryList.find(
      ({ slug }) => slug === e.target.value
    );

    setCategoryExpertiseList(updateCategoryList?.subcategories);
  };

  const onSubmit = async () => {
    const { firstName, lastName, category, subCategory } = getValues();
    setValue('firstName', firstName);
    setValue('lastName', lastName);
    setValue('category', category);
    setValue('subCategory', subCategory);

    handleSignupPage(6);
  };

  useEffect(() => {
    (async () => {
      const res = await categoryData;
      if (categoryList?.length === 0 && res) {
        dispatch(setCategoryList(res));
      }
    })();
  }, [categoryList?.length, categoryData, dispatch]);

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
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
        <select
          name="categories"
          id="categories"
          className="select-input"
          {...register('category')}
          onChange={onChangeAreaOfExpertise}
        >
          <option value="">area of expertise</option>
          {categoryList?.map(({ name, slug }) => (
            <option value={slug} key={slug}>
              {name}
            </option>
          ))}
        </select>
        <select
          className="select-input"
          name="categories"
          {...register('subCategory')}
        >
          <option value="">focus of expertise</option>
          {categoryExpertiseList?.map(({ name, slug }) => (
            <option value={slug} key={slug}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="btn-container">
        <BigButton type="submit">Next</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default UserDetails;
