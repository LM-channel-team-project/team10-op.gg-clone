import { AppProps } from 'next/app';
import GlobalStyle from '@/lib/styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <header>레이아웃 헤더</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>레이아웃 푸터</footer>
    </>
  );
}

export default MyApp;
