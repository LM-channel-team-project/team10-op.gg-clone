import React, { useState, useCallback } from 'react';
import Image from 'next/image';

import HomeSearchForm from './HomeSearchForm';
import HomeAdsBanner from './HomeAdsBanner';
import HomeCommunity from './HomeCommunty/HomeCommunity';
import HomeRegionLangModal from './HomeRegionLangModal';
import S from './style';

function Home() {
  const [visibleModal, setVisibleModal] = useState(false);
  const onVisibleModal = useCallback(() => setVisibleModal(true), []);
  const onCloseModal = useCallback(() => setVisibleModal(false), []);

  return (
    <S.Container>
      <div className="main-page-logo">
        <Image
          src="/assets/logo/main-page-logo.png"
          title="룰루와 픽스"
          alt="OP.GG Clone Logo (룰루와 픽스)"
          width="275"
          height="200"
          layout="intrinsic"
          quality="100"
        />
      </div>
      <HomeSearchForm onVisibleModal={onVisibleModal} />
      <HomeAdsBanner />
      <HomeCommunity />
      <HomeRegionLangModal visible={visibleModal} onClose={onCloseModal} />
    </S.Container>
  );
}

export default Home;
