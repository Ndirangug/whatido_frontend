import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BackIcon, CancelIcon, LoginModal } from '../../../styles/login.styles';
// import EmailCode from './EmailCode';
// import Password from './Password';
// import SignupOptions from './SignupOptions';
// import UserDetails from './UserDetails';

function SignUp() {
  const [open, setOpen] = useState(false);
  const [signupComponent, setSignupComponent] = useState(0);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    handleSignupPage(0);
    router.back();
  };

  const handleLogin = () => {
    router.push({
      query: {
        login: true,
      },
    });
  };

  const handleSignupPage = (page) => {
    setSignupComponent(page);
  };

  // const pageComponents = [SignupOptions, EmailCode, UserDetails, Password];
  // const Page = pageComponents[signupComponent];

  useEffect(() => {
    router.query.signup ? setOpen(router.query.signup) : setOpen(false);
  }, [router.query.signup]);

  return (
    <LoginModal
      open={open}
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
