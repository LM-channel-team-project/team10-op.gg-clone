import React, { useState } from 'react';
import ChampionDetailsNav from './ChampionDetailsNav/ChampionDetailsNav';
import DetailsContentAll from './DetailsContents/DetailsContentAll/DetailsContentAll';
import DetailsContentCounter from './DetailsContents/DetailsContentCounter/DetailsContentCounter';
import DetailsContentItem from './DetailsContents/DetailsContentItem/DetailsContentItem';
import DetailsContentRune from './DetailsContents/DetailsContentRune/DetailsContentRune';
import DetailsContentSkill from './DetailsContents/DetailsContentSkill/DetailsContentSkill';
import DetailsContentTip from './DetailsContents/DetailsContentTip/DetailsContentTip';
import DetailsContentTrend from './DetailsContents/DetailsContentTrend/DetailsContentTrend';
import { DetailsMainContanier } from './style';

export type DetailsNavType = 'ALL' | 'ITEM' | 'SKILL' | 'RUNE' | 'TRENDGRAPH' | 'TIP' | 'COUNTER';

function ChampionDetailsMain() {
  const [type, setType] = useState<DetailsNavType>('ALL');
  console.log(type);
  return (
    <>
      <ChampionDetailsNav {...{ type, setType }} />
      <DetailsMainContanier>
        {type === 'ALL' && <DetailsContentAll />}
        {type === 'ITEM' && <DetailsContentItem />}
        {type === 'SKILL' && <DetailsContentSkill />}
        {type === 'RUNE' && <DetailsContentRune />}
        {type === 'TRENDGRAPH' && <DetailsContentTrend />}
        {type === 'TIP' && <DetailsContentTip />}
        {type === 'COUNTER' && <DetailsContentCounter />}
      </DetailsMainContanier>
    </>
  );
}

export default ChampionDetailsMain;
