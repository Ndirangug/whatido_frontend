import { useState } from 'react';
import { LoginModal } from '../../../styles/login.styles';

function Login() {
  const [open, setOpen] = useState(true);

  return (
    <LoginModal
      open={open}
      style={{ overflow: 'scroll' }}
      onClose={() => setOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="modal-container">login</div>
    </LoginModal>
  );
}

export default Login;
