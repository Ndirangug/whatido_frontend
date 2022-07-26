import Head from 'next/head';
import Footer from '../components/footer/index';
import Header from '../components/header';
import { GlobalContainer } from '../styles/global';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <Head>
        <title>whatido</title>
        <meta name="whatido" content="share your passion for what you" />
        <link
          rel="icon"
          href="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </GlobalContainer>
  );
}

export default MyApp;
