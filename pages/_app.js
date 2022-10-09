import axios from 'axios';
import Head from 'next/head';
import { lazy, Suspense } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr';
import Header from '../components/header';
import Footer from '../components/Mobile/Footer';
import store from '../store';
import { GlobalStyleProvider } from '../styles/global';
import '../styles/globals.css';
const LoginModal = lazy(() => import('../components/auth/login/index'));
const SignupModal = lazy(() => import('../components/auth/signup/index'));

const fetcher = (...args) => {
  return axios(...args).then((res) => res.data);
};

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <GlobalStyleProvider>
        <CookiesProvider>
          <Provider store={store}>
            <SWRConfig value={{ fetcher }}>
              <Header />
              <Suspense>
                <LoginModal />
              </Suspense>
              <Suspense>
                <SignupModal />
              </Suspense>

              <Component {...pageProps} />
              <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Footer />
            </SWRConfig>
          </Provider>
        </CookiesProvider>
      </GlobalStyleProvider>
    </>
  );
}

export default MyApp;
