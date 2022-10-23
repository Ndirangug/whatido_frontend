import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { decryptQueryParams } from 'query-string-hash';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { LoginModal } from '../../../styles/login.styles';
import BackIcon from '../../utils/icons/BackIcon';
import WhatidoIcon from '../../utils/icons/WhatidoIcon';
import { Text3XL, TextBase } from '../../utils/typography/Typography';
import Email from './Email';
import FinishPage from './FinishPage';
import InputOtp from './InputOtp';
import Password from './Password';
import Preview from './Preview';
import SignupOptions from './SignupOptions';
import UserDetails from './UserDetails';

const schema = yup.object().shape({
  email: yup.string().email('email is not valid').required('email is required'),
  code: yup.number().required('enter six digit code'),
  // .length(6, "enter six digit code")
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
  password: yup
    .string()
    .required('password is required')
    .min(6, '6 characters minimum')
    .matches(RegExp('(.*[a-z].*)'), 'one lowercase letter')
    .matches(RegExp('(.*[A-Z].*)'), 'one uppercase letter')
    .matches(RegExp('(.*\\d.*)'), 'one number')
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'one special character'),
  confirm_password: yup
    .string()
    .required('confirm your password')
    .oneOf([yup.ref('password'), null], 'password must match'),
});

function SignUp() {
  const [signupComponent, setSignupComponent] = useState(0);
  const authModal = useSelector((state) => state.appSurface.authModal);
  const dispatch = useDispatch();

  const {
    getValues,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const handleClose = () => {
    reset();
    dispatch(setAuthComonent(null));
    handleSignupPage(0);
  };

  const handleLogin = () => {
    dispatch(setAuthComonent('LOGIN'));
  };

  const handleSignupPage = (page) => {
    setSignupComponent(page);
  };

  const goBack = () => {
    if (signupComponent <= 0) {
      handleClose();
    } else {
      handleSignupPage(signupComponent - 1);
    }
  };

  const pageComponents = [
    SignupOptions,
    Email,
    InputOtp,
    UserDetails,
    Preview,
    Password,
    FinishPage,
  ];
  const Page = pageComponents[signupComponent];

  const { email } = getValues();
  const headerComponents = ['sign up', 'email sign up', 'verification'];

  const infoComponents = [
    '',
    'please enter your details to sign up with whatIdo ',
    `we've sent a code to ${email}`,
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const userCode = queryParams.get('token');
    const userEmail = decodeURI(window.location.pathname.split('/')[2]);

    if (userEmail && userCode) {
      const decryptedCode = decryptQueryParams(userCode);

      setValue('email', userEmail);
      setValue('code', decryptedCode?.code);
    }
  }, [setValue]);

  return (
    <LoginModal
      open={authModal === 'SIGNUP'}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="login-container">
        <div className="login-header">
          <div className="header-top">
            <div className="back-icon" onClick={goBack}>
              <BackIcon />
            </div>

            {signupComponent <= 2 && <WhatidoIcon />}
          </div>
          <div className="logo-container">
            {signupComponent >= 3 && (
              <div className="logo-wrapper">
                <Image
                  src="/whatido_logo.svg"
                  alt="whatido"
                  width={200}
                  height={40}
                  loading="eager"
                />
              </div>
            )}
            <div className="header-text">
              <Text3XL>{headerComponents[signupComponent]}</Text3XL>
            </div>
            <div className="info-text">
              <TextBase>{infoComponents[signupComponent]}</TextBase>
            </div>
          </div>
        </div>
        <div className="login-body">
          <Page
            register={register}
            errors={errors}
            setValue={setValue}
            getAllValues={getValues}
            handleSignupPage={handleSignupPage}
            handleClose={handleClose}
          />
        </div>
        <div className="terms-condition">
          {signupComponent === 0 && (
            <TextBase>
              {
                "By continuing, you agree to WhatIdo's Terms of Service and consent that you've read WhatIdo's Privacy Policy"
              }
            </TextBase>
          )}
        </div>
        <div className="login-footer">
          <Typography>already have an account?</Typography>
          <Typography className="login-footer-link" onClick={handleLogin}>
            log in
          </Typography>
        </div>
      </div>
    </LoginModal>
  );
}

export default SignUp;
