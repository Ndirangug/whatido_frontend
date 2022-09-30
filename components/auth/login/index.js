import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BackIcon, CancelIcon, LoginModal } from '../../../styles/login.styles';
import LoginForm from './LoginForm';
import LoginOptions from './LoginOptions';

function Login() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [loginComponent, setLoginComponent] = useState(0);

  const handleClose = () => {
    setOpen(false);
    handleLoginPage(0);
    router.back();
  };

  const handleSignup = () => {
    router.push({
      query: {
        signup: true,
      },
    });
  };

  const handleLoginPage = (page) => {
    setLoginComponent(page);
  };

  const pageComponents = [LoginOptions, LoginForm];
  const Page = pageComponents[loginComponent];

  useEffect(() => {
    router.query.login ? setOpen(router.query.login) : setOpen(false);
  }, [router.query.login]);

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
            <Avatar
              alt="what i do"
              sx={{ width: 40, height: 40 }}
              src="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
            />
            <Typography variant="h4" component="h4" className="logo-text">
              log in
            </Typography>
          </div>
        </div>
        <div className="login-body">
          <Page hangleLoginPage={handleLoginPage} handleClose={handleClose} />
        </div>
        <div className="login-footer">
          <Typography>you don&apos; t have account?</Typography>
          <Typography className="login-footer-link" onClick={handleSignup}>
            sign up
          </Typography>
        </div>
      </div>
    </LoginModal>
  );
}

export default Login;

//    <div className="modal-container">

//      <div className="avatar">

//      </div>

//      <div className="wrapper">
//        <div className="left">
//          {/* <LoginForm unsetUserLogin={handleClose} /> */}

//          <div className="center">
//            <div className="login-line" />
//            <Typography className="or">or</Typography>
//          </div>
//        </div>

//        <div className="right">
//          <Typography className="loginButton2" onClick={facebook}>
//            <RiFacebookCircleFill
//              style={{
//                height: '2.2rem',
//                width: '2.2rem',
//                marginRight: '1rem',
//                color: '#3b5998',
//              }}
//            />
//            continue with facebook
//          </Typography>
//          <Typography className="loginButton2" onClick={google}>
//            <FcGoogle
//              style={{
//                height: '2rem',
//                width: '2rem',
//                marginRight: '1rem',
//              }}
//            />
//            continue with google
//          </Typography>
//          <Typography className="loginButton2" onClick={twitter}>
//            <RiTwitterFill
//              style={{
//                height: '2rem',
//                width: '2rem',
//                marginRight: '1rem',
//                color: '#1DA1F2',
//              }}
//            />
//            continue with twitter
//          </Typography>
//        </div>
//      </div>
//      <div className="login-footer">

//      </div>
//    </div>;
