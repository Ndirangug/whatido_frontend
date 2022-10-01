import Head from 'next/head';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/Mobile/Footer';
import store from '../store';
import { GlobalContainer } from '../styles/global';
import '../styles/globals.css';
const LoginModal = lazy(() => import('../components/auth/login/index'));
const SignupModal = lazy(() => import('../components/auth/signup/index'));

function MyApp({ Component, pageProps }) {
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
      <Provider store={store}>
        <Header />
        <Suspense>
          <LoginModal />
        </Suspense>
        <Suspense>
          <SignupModal />
        </Suspense>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </GlobalContainer>
  );
}

export default MyApp;
