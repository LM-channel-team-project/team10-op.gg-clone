import React from 'react';

import S from './style';

interface HomeRegionLangLayerProps {
  children: React.ReactNode;
  onClose: () => void;
}

function HomeRegionLangLayer({ children, onClose }: HomeRegionLangLayerProps) {
  return <S.ModalLayer onClick={onClose}>{children}</S.ModalLayer>;
}

export default HomeRegionLangLayer;
