import axios from 'axios';
import Head from 'next/head';
import { lazy, Suspense, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import Header from '../components/header';
import Footer from '../components/Mobile/Footer';
import * as serviceWorker from '../components/utils/service-worker/serviceWorker';
import { TransactionProvider } from '../context/TransactionContext';
import store from '../store';
import { GlobalContainer } from '../styles/global';
import '../styles/globals.css';
const LoginModal = lazy(() => import('../components/auth/login/index'));
const SignupModal = lazy(() => import('../components/auth/signup/index'));

const fetcher = (...args) => {
  return axios(...args).then((res) => res.data);
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    serviceWorker.register();
  }, []);

  return (
    <GlobalContainer>
      <Head>
        <title>what I do</title>
        <meta name="what I do" content="share your passion for what you" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          rel="icon"
          href="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
        />
      </Head>
      <CookiesProvider>
        <Provider store={store}>
          <TransactionProvider>
            <SWRConfig value={{ fetcher }}>
              <Header />
              <Suspense>
                <LoginModal />
              </Suspense>
              <Suspense>
                <SignupModal />
              </Suspense>

              <Component {...pageProps} />
              <Footer />
            </SWRConfig>
          </TransactionProvider>
        </Provider>
      </CookiesProvider>
    </GlobalContainer>
  );
}

export default MyApp;
