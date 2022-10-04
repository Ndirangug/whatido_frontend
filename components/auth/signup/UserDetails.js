import { useForm } from 'react-hook-form';

import { LoginFormContainer } from '../../../styles/login.styles';
import BigButton from '../../utils/buttons/BigButton';
import InputField from '../../utils/inputs/InputField';

const UserDetails = ({ handleSignupPage }) => {
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
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
