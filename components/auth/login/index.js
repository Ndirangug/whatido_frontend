import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';
import { API_URL, Logo } from '../../../constants/api';
import {
  CancelIcon,
  LinkContainer,
  LoginModal,
} from '../../../styles/login.styles';

function Login() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const google = () => {
    window.open(`${API_URL}/auth/google`, '_self');
  };

  const facebook = () => {
    window.open(`${API_URL}/auth/facebook`, '_self');
  };

  const twitter = () => {
    window.open(`${API_URL}/auth/twitter`, '_self');
  };

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  const handleSignup = () => {
    router.push({
      query: {
        signup: true,
      },
    });
  };

  useEffect(() => {
    setOpen(router.query.login);
  }, [router.query.login]);

  return (
    <LoginModal
      open={open}
      style={{ overflow: 'scroll' }}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="modal-container">
        <div className="close-icon2" onClick={handleClose}>
          <IconButton>
            <CancelIcon />
          </IconButton>
        </div>
        <div className="avatar">
          <Avatar
            src={Logo}
            sx={{ m: 1, bgcolor: 'secondary.main', alignSelf: 'center' }}
          ></Avatar>
        </div>
        <p className="login-header">Login </p>
        <div className="wrapper">
          <div className="left">
            {/* <LoginForm unsetUserLogin={handleClose} /> */}

            <div className="center">
              <div className="login-line" />
              <div className="or">or</div>
            </div>
          </div>

          <div className="right">
            <div className="loginButton2" onClick={facebook}>
              <RiFacebookCircleFill
                style={{
                  height: '2.2rem',
                  width: '2.2rem',
                  marginRight: '1rem',
                  color: '#3b5998',
                }}
              />
              Continue with Facebook
            </div>
            <div className="loginButton2" onClick={google}>
              <FcGoogle
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginRight: '1rem',
                }}
              />
              Continue with Google
            </div>
            <div className="loginButton2" onClick={twitter}>
              <RiTwitterFill
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginRight: '1rem',
                  color: '#1DA1F2',
                }}
              />
              Continue with Twitter
            </div>
          </div>
        </div>
        <div className="login-footer">
          <span>do not have an account?</span>&nbsp;
          <LinkContainer className="login-footer-link" onClick={handleSignup}>
            Sign up
          </LinkContainer>
        </div>
      </div>
    </LoginModal>
  );
}

export default Login;
