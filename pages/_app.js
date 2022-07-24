import Header from '../components/header/index';
import { GlobalContainer } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      {/* header */}
      <Header />
      <Component {...pageProps} />
      {/* footer */}
    </GlobalContainer>
  );
}

export default MyApp;
