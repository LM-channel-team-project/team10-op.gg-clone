import ContentMain from '@/components/Champions/ContentMain';
import ContentSide from '@/components/Champions/ContentSide';
import React from 'react';

import { ContentSection, MessageContainer } from './style';

function Champions() {
  return (
    <ContentSection>
      <MessageContainer>
        <p className="message__left">
          챔피언 분석은 플래티넘 티어 이상의 랭크 게임만을 수집힙니다.
        </p>
        <p className="message__right">
          <img src="assets/champions/icon-tip.png" alt="tip" />
          Korea-버전 : 11.07
        </p>
      </MessageContainer>
      <ContentMain />
      <ContentSide />
    </ContentSection>
  );
}

export default Champions;
