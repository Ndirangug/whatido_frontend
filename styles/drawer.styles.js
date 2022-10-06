import Modal from '@mui/material/Modal';
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';

export const WalletSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wallet-sidebar-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .wallet-option {
    display: flex;
    justify-content: space-between;
  }

  .close-icon-container {
    display: flex;
    align-items: center;
  }

  .wallet-header {
    font-size: 1rem;
    font-weight: 600;
    margin: 1.5rem 1rem;
  }

  .wallet-address {
    padding: 0.8rem 0.2rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: none;
    color: var(--gray-icon);
  }

  .connect-wallet-container {
    margin: 7rem auto;
    padding: 1rem 0;
  }

  .connect-wallet-header {
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 0.2rem;
  }

  .connect-wallet-btn {
    padding: 1.5rem 2rem;
    background-color: var(--primary-color);
    border-radius: 1rem;
    font-size: 2rem;
    margin: 1rem auto !important;
    font-weight: 600;
    color: #ffffff;
    border: none;
    outline: none;
  }

  .wallet-list {
    border: 1px solid #e6e6e6;
    border-radius: 0.5rem;
  }

  .wallet-list-item {
    display: flex;
    border-bottom: 1px solid #e6e6e6;
    padding: 1rem;

    &:hover {
      box-shadow: 2px 2px 2px 2px #eee;
    }
  }

  .wallet-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .wallet-name {
    font-size: 1.7rem;
    padding-top: 0.3rem;
    font-weight: 600;
    margin-left: 1rem;
    justify-content: center;
    align-items: center;
  }

  .horizontal-divider {
    margin: 0 !important;
    border: solid 1px #e6e6e6;
  }

  .header-text {
    font-size: 1rem;
    font-weight: 400;
    color: var(--main-black);
    margin: 1rem;
    margin-bottom: -1rem;
  }

  .wallet-sidebar-list {
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    margin: 2rem 1rem;

    li {
      list-style-type: none;
      height: 100%;
    }
  }

  .wallet-sidebar-list-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    width: 100%;
    padding: 1.2rem 1rem;
    transition: all 0.5s ease-in-out;

    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
        0 2px 10px 0 rgba(0, 0, 0, 0.19);
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1.5rem;
    }
  }

  .bottom-radius {
    border: none;
    &:hover {
      border-radius: 0 0 10px 10px;
    }
  }

  .top-radius {
    border: none;
    &:hover {
      border-radius: 10px 10px 0 0;
    }
  }

  .sidebar-div {
    display: flex;
    align-items: center;
  }

  .sidebar-info-div {
    margin: 0 0.5rem;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 0.7rem;
    background: var(--main-blue);
    color: #fff;
  }

  .sidebar-check {
    color: var(--main-blue);
    margin: 0 2rem;
  }

  .border-radius {
    border-radius: 50%;
  }

  .line {
    border-bottom: 1px solid #e6e6e6;
  }

  .info-box-container {
    position: relative;
  }

  .info-box {
    display: none;
    position: absolute;
    color: #262625;
    background: #fff;
    border: none;
    border-radius: 0.3rem;
    padding: 1rem;
    margin: 0.2rem 0;
    z-index: 888;
  }

  .info-box-container:hover .info-box {
    display: block;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
  }

  .options-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    margin: 2rem 1rem;
    border: 1px solid #ededed;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .options-text {
    font-weight: 600;
    font-size: 16px;
  }

  .wallet-sidebar-list = {
    border: 1px solid #e6e6e6;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    padding: 0 !important;
    transition: all 0.5s ease-in-out;

    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
        0 2px 10px 0 rgba(0, 0, 0, 0.19);
    }
  }

  .wallet-price-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }

  .wallet-price-text {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-icon);
    padding-top: 1.5rem;
    margin: auto;
  }

  .wallet-price-value {
    font-weight: bold;
    font-size: 20px;
    font-family: none;
    color: var(--main-black);
    margin: auto;
    padding-bottom: 1.5rem;
  }

  .wallet-disconnect-btn {
    background: #db0d1b;
    border: none;
    color: #fff;
    width: 100%;
    padding: 1rem 1rem;
    margin: 0 !important;
    border-radius: 0 0 1rem 1rem;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
  }

  .stripe-btn-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .stripe-disconnect-btn {
    background: #db0d1b;
    border: none;
    color: #fff;
    width: 100%;
    padding: 1rem 1rem;
    margin: 0 !important;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0 0 0 1rem;
  }

  .stripe-withdraw-btn {
    background: var(--main-blue);
    border: none;
    color: #fff;
    width: 100%;
    padding: 1rem 1rem;
    margin: 0 !important;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0 0 1rem 0;
  }
`;

export const TransactionModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  height: -webkit-fill-available;

  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: #fafafa;
    height: 50vh;
    width: 68vw;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 500;
    color: #63625f;

    @media screen and (min-width: 639px) {
      height: 55vh;
      width: 50vw;
    }

    @media screen and (min-width: 767px) {
      height: 55vh;
      width: 40vw;
    }

    @media screen and (min-width: 1023px) {
      height: 52vh;
      width: 30vw;
    }

    @media screen and (min-width: 1279px) {
      height: 53vh;
      width: 22vw;
    }
  }
`;

export const WithdrawModal = styled(Modal)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  height: -webkit-fill-available;
  // background: rgba(0, 0, 0, 0.7);

  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: #ffffff;
    height: 40vh;
    width: 68vw;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    @media screen and (min-width: 639px) {
      width: 50vw;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 767px) {
      width: 40vw;
    }

    @media screen and (min-width: 1023px) {
      width: 30vw;
    }

    @media screen and (min-width: 1279px) {
      width: 22vw;
    }
  }

  .modal-header {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin: 0 1rem;
    color: #5c5b5b;
    border: none;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .modal-input {
    width: 70%;
    height: 5rem;
    border-radius: 0.8rem;
    border: 2px solid #e6e6e6;
    outline: none;
    padding: 0.5rem;
    margin: 1rem 5rem;
    font-size: 1.5rem;
  }

  .modal-btn {
    width: 70%;
    height: 5rem;
    border-radius: 0.8rem;
    align-self: center;
    border: none;
    outline: none;
    color: #fff;
    background-color: var(--primary-color);
    font-size: 2rem;
  }

  .del-header {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 0 !important;
  }

  .del-modal-header {
    font-size: 16px;
    font-weight: 500;
    margin: 1rem;
    color: #5c5b5b;
    border: none;
    text-align: center;
  }

  .del-btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
  }

  .del-btn {
    height: 5rem;
    border-radius: 0.8rem;
    align-self: center;
    border: 2px solid #db0d1b;
    outline: none;
    color: #fff;
    background-color: #db0d1b;
    font-size: 2rem;
    padding: 1rem;

    @media screen and (min-width: 1279px) {
      width: 9vw;
    }
  }

  .cancel-btn {
    height: 5rem;
    border-radius: 0.8rem;
    align-self: center;
    border: 2px solid #e6e6e6;
    outline: none;
    color: gray;
    background-color: #fafafa;
    font-size: 2rem;
    padding: 1rem;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: white;
      color: #5c5b5b;
    }

    @media screen and (min-width: 1279px) {
      width: 8vw;
    }
  }
`;

export const CloseIcon = styled(FiChevronLeft)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  font-weight: 500;
  flex-shrink: 0;
  margin: 0 !important;
`;
