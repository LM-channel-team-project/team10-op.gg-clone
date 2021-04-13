import { AppProps } from 'next/app';

import Helmet from '@/components/Helmet';
import Layout from '@/components/Layout';
import RegionLangProvider from '@/contexts/RegionLangContext';
import GlobalStyle from '@/lib/styles/GlobalStyle';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Helmet pathName={router.pathname} />
      <Layout pathName={router.pathname}>
        <RegionLangProvider>
          <Component {...pageProps} />
        </RegionLangProvider>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
