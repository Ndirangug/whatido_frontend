import * as coordinateToCountry from 'coordinate_to_country';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { GiBuyCard } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import useSwr from 'swr';
import { API_URL } from '../../constants/api';
import { TransactionContext } from '../../context/TransactionContext';

import ListItem from '@mui/material/ListItem';
import CoinbaseIcon from '../utils/icons/CoinbaseIcon';
import MetamaskIcon from '../utils/icons/MetamaskIcon';
import PaystackIcon from '../utils/icons/PaystackIcon';
import StripeIcon from '../utils/icons/StripeIcon';

import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { CloseIcon, WalletSidebarContainer } from '../../styles/drawer.styles';
import { TextSM } from '../utils/typography/Typography';

const WalletSidebar = () => {
  const [username, setUsername] = useState();
  const [isPaystackAvailable, setIsPaystackAvailable] = useState(false);
  const router = useRouter();

  // const [{ token }] = useCookies(['token']);
  const user = useSelector((state) => state.auth.currentUser);

  const connectUrl = `${API_URL}/stripe-connect/account/${user?.slug}`;
  const { data: stripeAccount } = useSwr(connectUrl);

  const paystackUrl = `${API_URL}/paystack/${user?.slug}`;
  const { data: paystackAccount } = useSwr(paystackUrl);

  // const { data: locationDetails } = useSwr("http://ip-api.com/json");

  // get experts country code from latlng
  const expertCountry = coordinateToCountry(
    user?.locationLat,
    user?.locationLng,
    true
  );

  const {
    coinbaseConnect,
    metamaskConnect,
    currentAccount,
    walletBalance,
    disconnectWallet,
    setToggleSideDrawer,
  } = useContext(TransactionContext);

  // getting coinbase provider from browser
  const coinbaseProvider = window.ethereum?.providers?.find(
    (provider) => provider.isCoinbaseWallet
  );

  // checks if metamask exists in browser
  const checkMetamask = () => {
    if (window?.ethereum?.isMetaMask) {
      metamaskConnect();
    } else {
      return window.open('https://metamask.io/download/', '_blank');
    }
  };

  // checks if coinbase exists in browser
  const checkCoinbase = () => {
    if (
      coinbaseProvider !== undefined ||
      window?.ethereum?.coinbaseWalletInstalls !== undefined
    ) {
      coinbaseConnect();
    } else {
      return window.open('https://www.coinbase.com/wallet', '_blank');
    }
  };

  // let userData = {
  //   first_name: user?.profile?.firstName,
  //   last_name: user?.profile?.lastName,
  //   email: user?.email,
  //   slug: user?.slug,
  //   location: window.location.pathname,
  //   country: expertCountry[0],
  // };

  // const createStripeConnect = async (data) => {
  //   try {
  //     const res = await createConnectAcct(data, token);

  //     mutate(connectUrl, (account) => {
  //       return [...account, res.data?.account];
  //     });
  //     window.open(res?.data?.url, '_self');
  //   } catch (error) {
  //     // toast.error(error.response?.data?.message);
  //   }
  // };

  // const handleCreateStripeConnect = async () => {
  //   setIsTransact(false);
  //   setIsLoading(true);
  //   createStripeConnect(userData);
  //   setIsLoading(false);
  // };

  // const handleDeleteStripeConnect = async () => {
  //   setIsTransact(false);
  //   setIsLoading(true);
  //   try {
  //     await deleteConnectAcct(user?.slug, token);
  //     mutate(
  //       connectUrl,
  //       (account) => {
  //         return [];
  //       },
  //       false
  //     );
  //     setIsLoading(false);
  //     setIsTransact(true);
  //     setOpenDelModal(false);

  //     // toast.success("your stripe account has been deleted successfully.", {
  //     //   position: "top-center",
  //     //   theme: "light",
  //     //   autoClose: 4000,
  //     //   hideProgressBar: true,
  //     //   closeOnClick: true,
  //     //   pauseOnHover: true,
  //     //   draggable: true,
  //     //   progress: undefined,
  //     // });
  //   } catch (err) {
  //     setIsLoading(false);
  //     setIsTransact(true);
  //     // toast.error("error deleting account, try again!", {
  //     //   position: "top-center",
  //     //   theme: "light",
  //     //   autoClose: 4000,
  //     //   hideProgressBar: true,
  //     //   closeOnClick: true,
  //     //   pauseOnHover: true,
  //     //   draggable: true,
  //     //   progress: undefined,
  //     // });
  //   }
  // };

  // const paystackModal = () => {
  //   setToggleSideDrawer(false);

  //   dispatch({
  //     type: PAYSTACK,
  //     payload: true,
  //   });
  // };

  const goToProfile = () => {
    setToggleSideDrawer(false);
    router.push(`/transaction-router/${user?.slug}`);
  };

  useEffect(() => {
    setUsername(
      `${currentAccount?.slice(0, 5)}...${currentAccount?.slice(-4)}`
    );
  }, [currentAccount]);

  useEffect(() => {
    const paystackAvailability = ['NG', 'GH', 'ZA'];

    if (paystackAvailability.includes(expertCountry[0])) {
      setIsPaystackAvailable(true);
    } else {
      setIsPaystackAvailable(false);
    }
  }, [expertCountry]);

  return (
    <WalletSidebarContainer>
      <Stack direction="row" className="wallet-sidebar-option">
        <Stack direction="row" className="close-icon-container">
          <CloseIcon onClick={() => setToggleSideDrawer(false)} />
          <TextSM style={{ color: 'black' }} className="wallet-header">
            My wallet
          </TextSM>
        </Stack>
        {currentAccount && (
          <TextSM className="wallet-address">{username}</TextSM>
        )}
      </Stack>
      <Stack className="line" />

      {currentAccount && (
        <Stack className="wallet-sidebar-list">
          <Stack className="wallet-price-container">
            <TextSM className="wallet-price-text">Wallet balance</TextSM>
            <TextSM className="wallet-price-value">
              {currentAccount && walletBalance && walletBalance.slice(0, 6)} ETH
            </TextSM>
          </Stack>
          <Button
            className="wallet-disconnect-btn"
            onClick={() => disconnectWallet()}
          >
            disconnect
          </Button>
        </Stack>
      )}

      {stripeAccount?.data?.stripe_acct_id && (
        <Stack className="wallet-sidebar-list">
          <Stack className="wallet-price-container info-box-container">
            <TextSM className="wallet-price-text">
              Stripe withdrawal balance
            </TextSM>
            <TextSM className="wallet-price-value">
              {`${
                stripeAccount && stripeAccount?.balance?.available[0]?.amount
              } ${
                stripeAccount &&
                stripeAccount?.balance?.available[0]?.currency.toLocaleUpperCase()
              }`}
            </TextSM>
          </Stack>

          <Stack
            direction="row"
            className="stripe-btn-container info-box-container"
          >
            <Button
              className="stripe-disconnect-btn"
              onClick={() => {
                setToggleSideDrawer(false);
              }}
            >
              disconnect
            </Button>
            <Button
              className="stripe-withdraw-btn"
              onClick={() => {
                setToggleSideDrawer(false);
              }}
            >
              withdraw funds
            </Button>

            {!stripeAccount?.enabled && (
              <p className="info-box" style={{ marginTop: '4rem' }}>
                your stripe account is not activated for payment. you will need
                to create a new account and finish the onboarding process to
                fully be eligible for donations.
              </p>
            )}

            {stripeAccount?.enabled &&
              stripeAccount?.balance?.available[0]?.amount === 0 && (
                <p className="info-box" style={{ marginTop: '4rem' }}>
                  there is no accessible fund for withdrawal; nevertheless, the
                  funds for each transaction will be available for withdrawal
                  within 7 days.
                </p>
              )}
          </Stack>
        </Stack>
      )}

      {!currentAccount && !stripeAccount?.data?.stripe_acct_id && (
        <Stack>
          <TextSM className="header-text">
            select a provider and connect to your account now to process
            payments
          </TextSM>
        </Stack>
      )}

      {/* connection buttons */}
      <div>
        <Stack className="wallet-sidebar-list">
          <li>
            {!currentAccount && (
              <ListItem
                button
                onClick={checkMetamask}
                className="wallet-sidebar-list-btn top-radius"
                style={{ justifyContent: 'space-between' }}
              >
                <Stack direction="row" spacing={1} className="sidebar-div">
                  <MetamaskIcon />
                  <TextSM style={{ fontWeight: 'bold', color: 'black' }}>
                    Metamask
                  </TextSM>
                </Stack>
                <Stack direction="row" className="sidebar-info-div">
                  <TextSM>Popular</TextSM>
                </Stack>
              </ListItem>
            )}
          </li>
          {!currentAccount && <div className="line" />}
          <li>
            {!currentAccount && (
              <ListItem
                button
                onClick={checkCoinbase}
                className="wallet-sidebar-list-btn"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <CoinbaseIcon />
                  <TextSM style={{ fontWeight: 'bold', color: 'black' }}>
                    Coinbase Wallet
                  </TextSM>
                </Stack>
              </ListItem>
            )}
          </li>
          {!currentAccount &&
            !stripeAccount?.data?.stripe_acct_id &&
            !isPaystackAvailable && <div className="line" />}
          <li className="info-box-container">
            {!stripeAccount?.data?.stripe_acct_id && !isPaystackAvailable && (
              <ListItem
                button
                className="wallet-sidebar-list-btn bottom-radius"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <StripeIcon />
                  <TextSM style={{ fontWeight: 'bold', color: 'black' }}>
                    Stripe
                  </TextSM>
                </Stack>
              </ListItem>
            )}
            <p className="info-box">
              In order to receive bank payments, register for a stripe account;
              make sure your network connection is stable and finish the setup
              process, also considering that this is a one-time procedure, be
              sure all the information is accurate.
            </p>
          </li>

          {!currentAccount && isPaystackAvailable && <div className="line" />}
          <li className="info-box-container">
            {isPaystackAvailable && (
              <ListItem
                button
                className="wallet-sidebar-list-btn bottom-radius"
                style={{ justifyContent: 'space-between' }}
              >
                <Stack direction="row" spacing={1} className="sidebar-div">
                  <PaystackIcon />
                  <TextSM style={{ fontWeight: 'bold', color: 'black' }}>
                    Paystack
                  </TextSM>
                </Stack>
              </ListItem>
            )}
            {paystackAccount?.status && (
              <p className="info-box">
                Your paystack has been created and verified to be eligible to
                receive funds.
              </p>
            )}
          </li>
        </Stack>
      </div>

      <Stack direction="row" className="options-btn" onClick={goToProfile}>
        <Stack style={{ flexGrow: '0.5' }}>
          <GiBuyCard
            style={{
              height: '1.5rem',
              width: '1.5rem',
              marginRight: '1rem',
              color: '#1DA1F2',
            }}
          />
        </Stack>
        <TextSM style={{ color: 'black' }} className="options-text">
          View Transactions
        </TextSM>
      </Stack>

      {/* <TransactionModal open={isLoading}>
        <div className="modal-container">
          {isTransact && <p>transaction in progress...</p>}
          {!isTransact && <p>processing request...</p>}
        </div>
      </TransactionModal> */}

      {/* <WithdrawModal open={openModal} onClose={() => setOpenModal(false)}>
        <WithdrawFund
          account={stripeAccount}
          userSlug={user?.slug}
          setOpenModal={setOpenModal}
          setIsLoading={setIsLoading}
        />
      </WithdrawModal> */}

      {/* <WithdrawModal open={openDelModal} onClose={() => setOpenDelModal(false)}>
        <DeleteStripeAccount
          setOpenDelModal={setOpenDelModal}
          handleDeleteStripeConnect={handleDeleteStripeConnect}
        />
      </WithdrawModal> */}
      {/* <Paystack
        firstName={user?.profile?.firstName}
        lastName={user?.profile?.lastName}
        userSlug={user?.slug}
      /> */}
    </WalletSidebarContainer>
  );
};

export default WalletSidebar;
