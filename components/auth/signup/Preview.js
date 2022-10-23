import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';

const Preview = ({ handleSignupPage, register }) => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    handleSignupPage(5);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField
          label={'first name'}
          type={'text'}
          register={register('firstName')}
          disabled={true}
        />
        <InputField
          label={'last name'}
          type={'text'}
          register={register('lastName')}
          disabled={true}
        />
        <InputField
          label={'email'}
          type={'text'}
          register={register('email')}
          disabled={true}
        />
        <InputField
          label={'category'}
          type={'text'}
          register={register('category')}
          disabled={true}
        />
        <InputField
          label={'sub-category'}
          type={'text'}
          register={register('subCategory')}
          disabled={true}
        />
      </div>

      <div className="button-container">
        <BigButton type="submit">Confirm Info</BigButton>
      </div>
    </LoginFormContainer>
  );
};

export default Preview;
