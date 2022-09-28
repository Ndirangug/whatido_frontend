import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LoginModal } from '../../../styles/login.styles';

function Login() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
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
      <div className="modal-container">login</div>
    </LoginModal>
  );
}

export default Login;
