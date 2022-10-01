import { useForm } from 'react-hook-form';

import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/form/BigButton';
import InputField from '../../utils/form/InputField';

const UserDetails = ({ handleSignupPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    handleSignupPage(3);
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <InputField label={'first name*'} type={'text'} />
        <InputField label={'last name*'} type={'text'} />
        <select name="categories" className="input">
          <option value="">area of expertise*</option>
          <option value={'slug'} key={'slug'}>
            Academic Tutoring
          </option>
        </select>
        <select name="categories" className="input">
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