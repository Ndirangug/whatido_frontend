import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { lazy, Suspense, useContext } from 'react';

import { TransactionContext } from '../../../context/TransactionContext';
const Wallet = lazy(() => import('../../SideDrawer/Wallet'));

function WalletIcon() {
  const { toggleSideDrawer, setToggleSideDrawer } =
    useContext(TransactionContext);

  const handleClick = () => {
    setToggleSideDrawer(!toggleSideDrawer);
  };

  return (
    <IconButton onClick={handleClick}>
      <Icon className="header-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3335 16.8268V19.5735C29.3335 20.3201 28.7201 20.9335 27.9601 20.9335H25.3868C23.9468 20.9335 22.6268 19.8801 22.5068 18.4401C22.4268 17.6001 22.7468 16.8135 23.3068 16.2668C23.8001 15.7601 24.4801 15.4668 25.2268 15.4668H27.9601C28.7201 15.4668 29.3335 16.0801 29.3335 16.8268Z"
            fill="#292D32"
          />
          <path
            d="M20.5065 18.6135C20.3865 17.2135 20.8932 15.8402 21.9065 14.8402C22.7598 13.9735 23.9465 13.4669 25.2265 13.4669H25.9865C26.3598 13.4669 26.6665 13.1602 26.6132 12.7869C26.2532 10.2002 24.0132 8.2002 21.3332 8.2002H7.99984C5.05317 8.2002 2.6665 10.5869 2.6665 13.5335V22.8669C2.6665 25.8135 5.05317 28.2002 7.99984 28.2002H21.3332C24.0265 28.2002 26.2532 26.2002 26.6132 23.6135C26.6665 23.2402 26.3598 22.9335 25.9865 22.9335H25.3865C22.8532 22.9335 20.7198 21.0402 20.5065 18.6135ZM17.3332 15.8669H9.33317C8.7865 15.8669 8.33317 15.4269 8.33317 14.8669C8.33317 14.3069 8.7865 13.8669 9.33317 13.8669H17.3332C17.8798 13.8669 18.3332 14.3202 18.3332 14.8669C18.3332 15.4135 17.8798 15.8669 17.3332 15.8669Z"
            fill="#292D32"
          />
          <path
            d="M18.9467 5.30647C19.2934 5.66647 18.9867 6.19981 18.48 6.19981H8.04004C6.58671 6.19981 5.22671 6.62647 4.09337 7.3598C3.57337 7.69314 2.86671 7.33314 3.12004 6.75981C3.86671 5.01314 5.61337 3.7998 7.62671 3.7998H15.12C16.6667 3.7998 18.04 4.34647 18.9467 5.30647Z"
            fill="#292D32"
          />
        </svg>
      </Icon>

      {toggleSideDrawer && (
        <Suspense fallback={<div>loading...</div>}>
          <Wallet />
        </Suspense>
      )}
    </IconButton>
  );
}

export default WalletIcon;
