import axios from 'axios';
import Head from 'next/head';
import { lazy, Suspense, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { SWRConfig } from 'swr';
import Header from '../components/header';
import Footer from '../components/navigation/Footer';
import SideBar from '../components/navigation/SideBar';
import NextProgress from '../components/utils/micro/Nprogress';
import * as serviceWorker from '../components/utils/service-worker/serviceWorker';
import store, { persistor } from '../store';
import { DesktopNavigation, GlobalStyleProvider } from '../styles/global';
import '../styles/globals.css';
const LoginModal = lazy(() => import('../components/auth/login/index'));
const SignupModal = lazy(() => import('../components/auth/signup/index'));
const FeedModal = lazy(() => import('../components/feed/index'));
const ShareModal = lazy(() => import('../components/utils/modals/share/index'));

const fetcher = (url, token) => {
  return axios
    .get(url, { headers: { Authorization: token } })
    .then((res) => res.data);
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    serviceWorker.register();
  }, []);

  return (
    <>
      <Head>
        <title>what i do</title>
        <meta name="what i do" content="share your passion for what you" />
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
            <PersistGate loading={null} persistor={persistor}>
              <SWRConfig value={{ fetcher }}>
                <Header />
                <Suspense>
                  <LoginModal />
                </Suspense>
                <Suspense>
                  <SignupModal />
                </Suspense>
                {/* <Suspense>
                  <FeedModal />
                </Suspense> */}
                <Suspense>
                  <ShareModal />
                </Suspense>

                <NextProgress color="#001433" height={3} />
                <DesktopNavigation>
                  <SideBar />
                  <Component {...pageProps} />
                </DesktopNavigation>
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
            </PersistGate>
          </Provider>
        </CookiesProvider>
      </GlobalStyleProvider>
    </>
  );
}

export default MyApp;
