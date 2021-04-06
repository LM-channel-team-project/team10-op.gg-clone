import React, { useState } from 'react';
import ChampionDetailsNav from './ChampionDetailsNav/ChampionDetailsNav';

export type DetailsNavType = 'ALL' | 'ITEM' | 'SKILL' | 'RUNE' | 'TRENDGRAPH' | 'TIP' | 'COUNTER';

function ChampionDetailsMain() {
  const [type, setType] = useState<DetailsNavType>('ALL');
  return <ChampionDetailsNav {...{ type, setType }} />;
}

export default ChampionDetailsMain;
