import Head from 'next/head';
import Header from '../components/header';
import { GlobalContainer } from '../styles/global';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <Head>
        <title>what I do</title>
        <meta name="what I do" content="share your passion for what you" />
        <link
          rel="icon"
          href="https://donnysliststory.sfo3.cdn.digitaloceanspaces.com/assets/whatido_logo.jpeg"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </GlobalContainer>
  );
}

export default MyApp;
