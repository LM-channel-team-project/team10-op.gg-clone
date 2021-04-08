import { useState } from 'react';
import {
  DetailsHeaderContainer,
  DetailsHeaderPosition,
  DetailsHeaderMain,
  DetailsHeaderInfo,
  InfoChampionImage,
  InfoChampionName,
  InfoChampionTier,
  InfoChampionSkills,
  DetailsHeaderMatchup,
} from './styles';
import TabItems from './TabItems/TabItems';
import TabCounter from './TabItems/TabCounter/TabCounter';
import TabEasy from './TabItems/TabEasy/TabEasy';

export type TabItemType = 'COUNTER' | 'EASY';

function ChampionDetailsHeader({ champion, championName }: any) {
  const [tabType, setTabType] = useState<TabItemType>('COUNTER');
  const championPassiveSkill = `http://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/${champion.data[championName].passive.image.full}`;
  const championSkillUrl: string[] = [];
  championSkillUrl.push(championPassiveSkill);
  champion.data[championName].spells.map((spell: any) =>
    championSkillUrl.push(
      `http://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/${spell.image.full}`,
    ),
  );
  console.log(championSkillUrl);
  const championImageUrl = `https://opgg-static.akamaized.net/images/lol/champion/${championName}.png?image=c_scale,q_auto,w_140&v=1617159801`;
  const championNameKor: string = champion.data[championName].name;
  // useEffect(() => {
  //   console.log('헤더', champion.data, championName);
  //   if (champion) {
  //     console.log(championNameKor);
  //   }
  // }, [champion]);

  return (
    <>
      <DetailsHeaderContainer>
        <DetailsHeaderPosition>
          <ul>
            <li>
              <a>탑</a>
            </li>
            <li>
              <a>미드</a>
            </li>
          </ul>
        </DetailsHeaderPosition>
        <DetailsHeaderMain>
          <DetailsHeaderInfo>
            <InfoChampionImage championImageUrl={championImageUrl}>
              <div></div>
            </InfoChampionImage>
            <InfoChampionName>{championNameKor}</InfoChampionName>
            <InfoChampionTier>
              챔피언 티어: <b>3티어</b>
            </InfoChampionTier>
            <InfoChampionSkills>
              {championSkillUrl.map((skill, i) => (
                <div key={i}>
                  <a>
                    <img src={skill} alt="skill" />
                  </a>
                </div>
              ))}
            </InfoChampionSkills>
          </DetailsHeaderInfo>
          <DetailsHeaderMatchup>
            <TabItems {...{ tabType, setTabType }} />
            {tabType === 'COUNTER' && <TabCounter />}
            {tabType === 'EASY' && <TabEasy />}
          </DetailsHeaderMatchup>
        </DetailsHeaderMain>
      </DetailsHeaderContainer>
    </>
  );
}

export default ChampionDetailsHeader;
