import Modal from '@mui/material/Modal';
import { MdOutlineCancel } from 'react-icons/md';
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
      padding: 0.25rem 1rem;
      position: relative;

      .header-top {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: -10px;
        right: 5px;

        .close-icon {
          cursor: pointer;
          margin: 0 !important;
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

  /* below the line gets depricated */

  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
  }

  .wrapper::-webkit-scrollbar {
    display: none;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 1rem 4rem;
  }

  .center {
    display: none;
  }

  .or {
    padding: 10px;
    color: gray;
    background-color: white;
    font-weight: bold;
    z-index: 1;
  }

  .login-line {
    display: flex;
    height: 1.5px;
    width: 30vw;
    background-color: lightgray;
    position: absolute;
    top: 0;
    bottom: 0;

    margin: auto;
  }

  .login-header {
    font-size: 2rem;
    margin: 1rem 0;
    font-weight: 400;
  }
  .avartar {
    display: flex;
    justify-content: center;
    align-self: center;
  }
  .login-header2 {
    font-size: 2rem;
    margin: 1rem 0 !important;
    font-weight: 600;
    text-align: center;
  }

  .seperate {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .lgn-btn {
    margin: 1rem 0 !important;
    width: 100%;
  }

  .login-wapper {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 100%;
  }
  .signup-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin: 1rem;
  }

  .avatar {
    margin-top: -2rem;
  }

  @media screen and (min-width: 575px) {
    .center {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .avatar {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 600px) {
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 4rem 1rem 4rem;
    }

    .center {
      order: 2;
      margin-bottom: 2rem;
      width: 100%;
    }
    .login-line {
      width: 80%;
      height: 1.5px;
    }
  }

  .close-icon-main2 {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .loginButton2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: #fff;
    padding: 15px 30px;
    border: 1.5px solid lightgray;
    border-radius: 5rem;
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .google2 {
    background-color: #df4930;
  }
  .facebook2 {
    background-color: #507cc0;
  }
  .twitter2 {
    background-color: #263853;
  }
  .github2 {
    background-color: black;
  }

  .icon-login {
    width: 20px;
    height: 20px;
    margin-right: 10px;
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

export const CancelIcon = styled(MdOutlineCancel)`
  height: 2rem;
  width: 2rem;
  color: red;
  font-weight: 500;
`;
