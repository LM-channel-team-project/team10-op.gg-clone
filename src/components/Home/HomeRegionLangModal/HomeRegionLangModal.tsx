import React from 'react';

import HomeRegionLangLayer from './HomeRegionLangLayer';
import HomeRegionLangContent from './HomeRegionLangContent';
import { useRegionLangState, useRegionLangDispatch } from '@/contexts/RegionLangContext';
import S from './style';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

function HomeRegionLangModal({ visible, onClose }: ModalProps) {
  if (!visible) return null;
  const state = useRegionLangState();
  const dispatch = useRegionLangDispatch();

  return (
    <S.ModalContainer>
      <HomeRegionLangLayer onClose={onClose}>
        <HomeRegionLangContent
          regionLangState={state}
          regionLangDispatch={dispatch}
          onClose={onClose}
        />
      </HomeRegionLangLayer>
    </S.ModalContainer>
  );
}

export default React.memo(HomeRegionLangModal);
