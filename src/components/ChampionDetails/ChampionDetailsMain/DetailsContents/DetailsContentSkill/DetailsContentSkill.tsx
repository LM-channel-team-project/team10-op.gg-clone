import React, { useState } from 'react';
import {
  Container,
  ContentMain,
  ContentSide,
  ChampionBox,
  ChampionBoxContent,
} from '../DetailsContentSkill/styles';
import {
  getSkillsInfo,
  firstSkillOrder,
  secondSkillOrder,
} from '@/components/ChampionDetails/championDetailsInfo';
import { ChampionDetailsMainProps } from '../../ChampionDetailsMain';
import ChampionSkillBuildTable from '../DetailsContentAll/SpellAndSkillTable/ChampionSkillBuildTable/ChampionSkillBuildTable';

function DetailsContentSkill({ champion }: ChampionDetailsMainProps) {
  const [activeState, setActiveState] = useState(1);

  const championSkillUrl = getSkillsInfo(champion);
  const skills = championSkillUrl.slice(1, 4);

  const toggleActive = (index: number) => {
    setActiveState(index);
  };

  const skillOrder = (skillOrder: string[], skills: string[]) => {
    let QCount = 0;
    let WCount = 0;
    let ECount = 0;
    const skillOrderArray: string[] = [];
    for (let i = 0; i < skillOrder.length; i++) {
      if (skillOrder[i] === 'Q') QCount++;
      else if (skillOrder[i] === 'W') WCount++;
      else if (skillOrder[i] === 'E') ECount++;

      // 스킬 5레벨 찍으면 skillOrderArray에 넣고 중복 삽입을 피하기 위해 0으로 세팅
      if (QCount === 5) {
        skillOrderArray.push(skills[0]);
        QCount = 0;
      }
      if (WCount === 5) {
        skillOrderArray.push(skills[1]);
        WCount = 0;
      }
      if (ECount === 5) {
        skillOrderArray.push(skills[2]);
        ECount = 0;
      }
    }
    if (QCount === 3) skillOrderArray.push(skills[0]);
    else if (WCount === 3) skillOrderArray.push(skills[1]);
    else if (ECount === 3) skillOrderArray.push(skills[2]);
    return skillOrderArray;
  };

  const skillPriorities1 = skillOrder(firstSkillOrder[0].skills, skills);
  const skillPriorities2 = skillOrder(secondSkillOrder[0].skills, skills);

  // skillPriorities1.map((skill) => console.log(typeof Object.values(skill)));
  // console.log(skillPriorities1);
  return (
    <Container>
      <ContentMain>
        <ChampionBox>
          <div className="champion-box-header">
            <h4>스킬 순서</h4>
          </div>
          <ChampionBoxContent>
            <ul className="filter">
              <li
                className={activeState === 1 ? 'filter-item active' : 'filter-item'}
                onClick={() => toggleActive(1)}
              >
                <ul className="skill-list">
                  {skillPriorities1.map((skill, i) => (
                    <React.Fragment key={'proiorites1' + skill + i}>
                      <li>
                        <img src={skill} alt="skill" />
                      </li>
                      <li className="arrow">
                        <img
                          src="//opgg-static.akamaized.net/images/site/champion/blet.png"
                          alt=""
                        />
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
                <div className="item-value">
                  <div className="rate">
                    <span>픽률</span>
                    <b>96.47%</b>
                  </div>
                  <div className="rate">
                    <span>승률</span>
                    <b>64.11%</b>
                  </div>
                </div>
              </li>
              <li
                className={activeState === 2 ? 'filter-item active' : 'filter-item'}
                onClick={() => toggleActive(2)}
              >
                <ul className="skill-list">
                  {skillPriorities2.map((skill, i) => (
                    <React.Fragment key={'priorities2' + skill + i}>
                      <li key={'skillPriorities2' + i}>
                        <img src={skill} alt="skill" />
                      </li>
                      <li key={'arrow2' + skill + i} className="arrow">
                        <img
                          src="//opgg-static.akamaized.net/images/site/champion/blet.png"
                          alt=""
                        />
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
                <div className="item-value">
                  <div className="rate">
                    <span>픽률</span>
                    <b>3.53%</b>
                  </div>
                  <div className="rate">
                    <span>승률</span>
                    <b>62.50%</b>
                  </div>
                </div>
              </li>
            </ul>
          </ChampionBoxContent>
        </ChampionBox>
      </ContentMain>
      <ContentSide>
        <ChampionBox>
          <ChampionBoxContent>
            <table>
              <thead>
                <tr>
                  <th className="title">스킬</th>
                  <th className="sort">픽률</th>
                  <th className="sort">승률</th>
                </tr>
              </thead>
              <tbody>
                {firstSkillOrder.map((order, i) => (
                  <tr key={'firstSkillOrder' + i} className={activeState !== 1 ? 'hide' : ''}>
                    <td className={'cell-data cell-skill'}>
                      <ChampionSkillBuildTable build={order.skills} />
                    </td>
                    <td className="cell-skill cell-pick-rate">
                      {order.pickRate}%<em>{order.pickCount}</em>
                    </td>
                    <td className="cell-skill cell-win-rate">{order.winRate}%</td>
                  </tr>
                ))}
                {secondSkillOrder.map((order, i) => (
                  <tr key={'secondSkillOrder' + i} className={activeState !== 2 ? 'hide' : ''}>
                    <td className="cell-data cell-skill">
                      <ChampionSkillBuildTable build={order.skills} />
                    </td>
                    <td className="cell-skill cell-pick-rate">
                      {order.pickRate}%<em>{order.pickCount}</em>
                    </td>
                    <td className="cell-skill cell-win-rate">{order.winRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ChampionBoxContent>
        </ChampionBox>
      </ContentSide>
    </Container>
  );
}

export default DetailsContentSkill;
