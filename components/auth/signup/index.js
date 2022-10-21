import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthComonent } from '../../../store/reducers/app_surface_reducer';
import { BackIcon, CancelIcon, LoginModal } from '../../../styles/login.styles';

function SignUp() {
  const [signupComponent, setSignupComponent] = useState(0);
  const authModal = useSelector((state) => state.appSurface.authModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setAuthComonent(null));
    handleSignupPage(0);
  };

  const handleLogin = () => {
    dispatch(setAuthComonent('LOGIN'));
  };

  const handleSignupPage = (page) => {
    setSignupComponent(page);
  };

  // const pageComponents = [SignupOptions, EmailCode, UserDetails, Password];
  // const Page = pageComponents[signupComponent];

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
            {signupComponent > 0 && (
              <IconButton
                className="back-icon"
                onClick={() => handleSignupPage(0)}
              >
                <BackIcon />
              </IconButton>
            )}
            <IconButton className="close-icon" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </div>
          <div className="logo-container">
            <Avatar
              alt="what i do"
              sx={{ width: 40, height: 40 }}
              src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
            />
            <Typography variant="h4" component="h4" className="logo-text">
              sign up
            </Typography>
          </div>
        </div>
        <div className="login-body">
          {/* <Page handleSignupPage={handleSignupPage} handleClose={handleClose} /> */}
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
