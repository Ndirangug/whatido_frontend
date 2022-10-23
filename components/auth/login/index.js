import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { LoginModal } from '../../../styles/login.styles';
import BackIcon from '../../utils/icons/BackIcon';
import WhatidoIcon from '../../utils/icons/WhatidoIcon';
import { Text3XL } from '../../utils/typography/Typography';
import LoginForm from './LoginForm';
import LoginOptions from './LoginOptions';

function Login() {
  const [loginComponent, setLoginComponent] = useState(0);
  const authModal = useSelector((state) => state.appSurface.authModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    handleLoginPage(0);
    dispatch(setAuthComonent(null));
  };

  const handleSignup = () => {
    dispatch(setAuthComonent('SIGNUP'));
  };

  const handleLoginPage = (page) => {
    setLoginComponent(page);
  };

  const goBack = () => {
    if (loginComponent <= 0) {
      handleClose();
    } else {
      handleLoginPage(0);
    }
  };

  const pageComponents = [LoginOptions, LoginForm];
  const Page = pageComponents[loginComponent];

  return (
    <LoginModal
      open={authModal === 'LOGIN'}
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

            <WhatidoIcon />
          </div>
          <div className="logo-container">
            <div className="header-text">
              <Text3XL>log in</Text3XL>
            </div>
          </div>
        </div>
        <div className="login-body">
          <Page hangleLoginPage={handleLoginPage} handleClose={handleClose} />
        </div>
        <div className="login-footer">
          <Typography>don&apos; t have an account?</Typography>
          <Typography className="login-footer-link" onClick={handleSignup}>
            sign up
          </Typography>
        </div>
      </div>
    </LoginModal>
  );
}

export default Login;
