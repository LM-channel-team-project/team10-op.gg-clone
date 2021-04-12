import Head from 'next/head';
import { META_TAG_DATA } from '@/lib/static/metaTagData';

function Helmet({ pathName }: { pathName: string }) {
  return (
    <Head>
      {/* 기본 메타 태그 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <meta name="description" content={META_TAG_DATA.discription} key="description" />
      {/* 기본 오픈 그래프 태그 (페이스북 등등..) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${META_TAG_DATA.url}${pathName}`} />
      <meta property="og:image" content={META_TAG_DATA.imagePath} />
      <meta property="og:description" content={META_TAG_DATA.discription} />
      <meta property="og:site_name" content="OP.GG Clone" />
      <meta property="og:locale" content="ko-KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* 트위터 오픈 그래프 태그 */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={META_TAG_DATA.discription} />
      <meta name="twitter:image" content={META_TAG_DATA.imagePath} />
    </Head>
  );
}

export default Helmet;
