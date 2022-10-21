import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { BackIcon, CancelIcon, LoginModal } from '../../../styles/login.styles';
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
            {loginComponent > 0 && (
              <IconButton
                className="back-icon"
                onClick={() => handleLoginPage(0)}
              >
                <BackIcon />
              </IconButton>
            )}
            <IconButton className="close-icon" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </div>
          <div className="logo-container">
            <Typography variant="h4" component="h4" className="logo-text">
              log in
            </Typography>
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
