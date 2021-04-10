import Head from 'next/head';

function Title({ title }: { title: string }) {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <title>{title}</title>
    </Head>
  );
}

export default Title;
