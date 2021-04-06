import React, { useState } from 'react';

import { Container } from './styles';

import {ChampionPosition} from '@/lib/static/championsMeta'

// components
import ChampionListFilter from './ChampionListFIlter/ChampionListFilter';
import ChampionList from './ChampionList';

export type filterType = ChampionPosition | 'ALL'

const ContentMain = () => {
  const [type, setType] = useState<filterType>('ALL');
  const [searchText, setSearchText] = useState<string>('');
  // TODO: rotation 챔피언 정보 fetch
  return (
    <Container>
      <ChampionListFilter {...{ type, setType, searchText, setSearchText }} />
      <ChampionList {...{type}}/>
    </Container>
  );
};

export default ContentMain;
