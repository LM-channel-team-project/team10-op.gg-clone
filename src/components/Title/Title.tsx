import Head from 'next/head';

function Title({ content }: { content: string }) {
  return (
    <Head>
      <meta property="og:title" content={content} />
      <meta name="twitter:title" content={content} />
      <title>{content}</title>
    </Head>
  );
}

export default Title;
