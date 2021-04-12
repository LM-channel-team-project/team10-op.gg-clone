import { AppProps } from 'next/app';

import Helmet from '@/components/Helmet';
import Layout from '@/components/Layout';
import GlobalStyle from '@/lib/styles/GlobalStyle';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Helmet pathName={router.pathname} />
      <Layout pathName={router.pathname}>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
