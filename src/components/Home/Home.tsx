import React from 'react';
import Image from 'next/image';

import HomeSearchForm from './HomeSearchForm';
import HomeAdsBanner from './HomeAdsBanner';
import HomeCommunity from './HomeCommunty/HomeCommunity';
import S from './style';

function Home() {
  return (
    <S.Container>
      <div className="main-page-logo">
        <Image
          src="/assets/logo/main-page-logo.png"
          title="룰루와 픽스"
          alt="OP.GG Clone Logo (룰루와 픽스)"
          width="275"
          height="200"
        />
      </div>
      <HomeSearchForm />
      <HomeAdsBanner />
      <HomeCommunity />
    </S.Container>
  );
}

export default Home;
