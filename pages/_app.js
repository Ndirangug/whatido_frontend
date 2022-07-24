import Head from 'next/head';
import Footer from '../components/footer/index';
import Header from '../components/header/index';
import { GlobalContainer } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <Head>
        <title>whatido</title>
        <meta
          name="whatido"
          content="share your passion for what you do, and what you do"
        />
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
