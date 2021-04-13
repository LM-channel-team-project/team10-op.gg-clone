import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '@/lib/styles/GlobalStyle';
import Layout from '@/components/Layout';
import RegionLangProvider from '@/contexts/RegionLangContext';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ViewportMetaLink />
      <GlobalStyle />
      <Layout pathName={router.pathname}>
        <RegionLangProvider>
          <Component {...pageProps} />
        </RegionLangProvider>
      </Layout>
    </>
  );
}

const ViewportMetaLink = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

export default MyApp;
