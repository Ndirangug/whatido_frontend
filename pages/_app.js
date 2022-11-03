import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { lazy, Suspense, useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { SWRConfig } from 'swr';
//import { useAudioCallSetup } from '../audiorooms-client/utils/useAudioCallSetup';
import '../components/audioChat/audioChat.css';
import { EstablishingAudioConnection } from '../components/audioChat/loadingScreen';
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

const useAudioCallSetup = dynamic(
  () => import('../audiorooms-client/utils/useAudioCallSetup'),
  {
    ssr: false,
  }
);

const fetcher = (...args) => {
  return axios(...args).then((res) => res.data);
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    serviceWorker.register();
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useAudioCallSetup instanceof Function && useAudioCallSetup();

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
            <PersistGate loading={null} persistor={persistor}>
              <SWRConfig value={{ fetcher }}>
                <Header />
                <Suspense>
                  <LoginModal />
                </Suspense>
                <Suspense>
                  <SignupModal />
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

                <div id="audio-chatroom-container"></div>
                <div id="audio-chatroom-streams"></div>
                <audio
                  crossOrigin="anonymous"
                  muted
                  autoPlay
                  id="audio-chatroom-notifications-element"
                ></audio>
                <EstablishingAudioConnection />
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
