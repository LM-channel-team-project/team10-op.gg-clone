import React, { useState } from 'react';
import { Container, ContentSide, ContentMain, ChampionBox, ChampionBoxContent } from './styles';
import { keystones, keystonesType } from '@/components/ChampionDetails/championDetailsInfo';

function DetailsContentRune() {
  const [activeState, setActiveState] = useState(1);

  const toggleActive = (index: number) => {
    setActiveState(index);
  };

  return (
    <Container>
      <ContentMain>
        <ChampionBox>
          <div className="champion-box-header">
            <h4>키스톤</h4>
          </div>
          <ChampionBoxContent>
            <ul className="filter">
              {keystones.map((rune, i) => (
                <li
                  key={rune.pickRate + i}
                  className={activeState === 1 + i ? 'filter-item active' : 'filter-item'}
                  onClick={() => toggleActive(1 + i)}
                >
                  <img src={rune.mainRune} className="rune" alt="메인룬" />
                  <img src={rune.keystone} className="rune keystone" alt="키스톤" />
                  <img src={rune.subRune} className="rune sub-rune" alt="보조룬" />
                  <div className="item-value">
                    <div className="rate">
                      <span>픽률</span>
                      <b>{rune.pickRate}%</b>
                    </div>
                    <div className="rate">
                      <span>승률</span>
                      <b>{rune.winRate}%</b>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ChampionBoxContent>
        </ChampionBox>
      </ContentMain>
      <ContentSide>
        <ChampionBox>
          <ChampionBoxContent></ChampionBoxContent>
        </ChampionBox>
      </ContentSide>
    </Container>
  );
}

export default DetailsContentRune;
