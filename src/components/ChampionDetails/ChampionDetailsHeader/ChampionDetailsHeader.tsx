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
import { IChampion } from '@/types/champion';
import { getSkillsInfo } from '@/components/ChampionDetails/championDetailsInfo';
export type TabItemType = 'COUNTER' | 'EASY';

interface ChampionDetailsHeaderProps {
  champion: IChampion;
}

function ChampionDetailsHeader({ champion }: ChampionDetailsHeaderProps) {
  // console.log(champion);
  const [tabType, setTabType] = useState<TabItemType>('COUNTER');

  const championSkillUrl = getSkillsInfo(champion);
  // console.log(championSkillUrl);
  const championImageUrl = `https://opgg-static.akamaized.net/images/lol/champion/${champion.id}.png?image=c_scale,q_auto,w_140&v=1617159801`;
  const championNameKor: string = champion.name;
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
