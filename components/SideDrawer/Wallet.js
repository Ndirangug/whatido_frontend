import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';
import { useContext } from 'react';

import { TransactionContext } from '../../context/TransactionContext';
import WalletSideDrawer from './WalletSideDrawer';

const Wallet = () => {
  const { toggleSideDrawer, setToggleSideDrawer } =
    useContext(TransactionContext);

  const largeScreen = useMediaQuery('(min-width:640px)');

  return (
    <>
      <Drawer
        style={{
          zIndex: 888,
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={
          largeScreen
            ? {
                sx: {
                  width: 425,
                  boxSizing: 'border-box',
                  top: '4rem',
                },
              }
            : {
                sx: {
                  width: '100%',
                  boxSizing: 'border-box',
                  top: '4rem',
                },
              }
        }
        variant="temporary"
        anchor="right"
        open={toggleSideDrawer}
        onClose={() => setToggleSideDrawer(false)}
      >
        <Stack className="wallet-option">
          <WalletSideDrawer />
        </Stack>
      </Drawer>
    </>
  );
};

export default Wallet;
