import React from 'react';
import { ChampionBox, ChampionBoxHeader } from './styles';

function SideItems() {
  return (
    <ChampionBox>
      <ChampionBoxHeader>
        <div>
          <a href="#">
            <h4>트렌드 그래프</h4>
          </a>
        </div>
        <div className="more">
          <a href="#">
            <img src="//opgg-static.akamaized.net/images/site/champion/detail-icon.png" alt="" />
          </a>
        </div>
      </ChampionBoxHeader>
    </ChampionBox>
  );
}

export default SideItems;
