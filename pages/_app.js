import { GlobalContainer } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      {/* header */}
      <Component {...pageProps} />
      {/* footer */}
    </GlobalContainer>
  );
}

export default MyApp;
