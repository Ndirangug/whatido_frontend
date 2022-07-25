import Footer from '../components/footer/index';
import Header from '../components/header';
import { GlobalContainer } from '../styles/global';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </GlobalContainer>
  );
}

export default MyApp;
