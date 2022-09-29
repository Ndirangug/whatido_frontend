import Modal from '@mui/material/Modal';
import { MdArrowBack, MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

export const LoginModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      min-height: -webkit-fill-available !important;
    }
  }

  .login-container {
    display: grid;
    background: #ffffff;
    height: 100%;
    width: 100%;
    grid-template-rows: auto 1fr auto;
    border: none;
    outline: none;

    @media screen and (min-width: 767px) {
      height: 80%;
      max-width: 55%;
      border-radius: 1rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    @media screen and (min-width: 1023px) {
      max-width: 40%;
    }

    .login-header {
      display: grid;
      padding: 1rem;
      position: relative;

      .header-top {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 5px;
        width: 100%;

        .close-icon {
          cursor: pointer;
          margin-right: 1rem;
        }
        .back-icon {
          cursor: pointer;
          margin-right: auto;
          margin-left: 1rem;
        }
      }

      .logo-container {
        display: grid;
        place-content: center;
        place-items: center;
        grid-gap: 0.5rem;

        .logo-text {
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }

    .login-body {
      padding: 2rem;
      overflow: scroll;
    }

    .login-footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border-top: 1px solid var(--main-border);
      padding: 1rem;

      .login-footer-link {
        color: var(--blue-shade);
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;

export const LoginFormContainer = styled.form`
  height: 100%;
  display: grid;
  align-items: start;

  .input-container {
    display: grid;
    grid-gap: 0.5rem;
  }

  .btn-container {
    margin: auto 0 1rem 0;
  }
`;

export const LoginOptionContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const CancelIcon = styled(MdOutlineCancel)`
  height: 2rem;
  width: 2rem;
  color: red;
  font-weight: 500;
`;
export const BackIcon = styled(MdArrowBack)`
  height: 2rem;
  width: 2rem;
  color: var(--main-icon);
  font-weight: 500;
`;
