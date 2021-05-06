// styled-components
import { RankTable, RankTableHead } from './styles';
// types
import { ChampionsContentSideNavbarType } from '../../ContentSideNavbar/types';
import { ChampionRankTableProps, ChampionRankTableHeaderMap } from './types';
import { useContext } from 'react';
import { ChampionRankContext } from '@/pages/champions';
import RankTableBody from './RankTableBody';
import HoverContainer from '@/components/Common/HoverContainer';

const ChampionRankTableColGroup = (navItem: ChampionsContentSideNavbarType) => {
  if (navItem === '티어') {
    return (
      <colgroup>
        <col width="34" />
        <col width="33" />
        <col width="38" />
        <col />
        <col width="58" />
        <col width="58" />
        <col width="85" />
      </colgroup>
    );
  } else if (navItem === '벤률') {
    return (
      <colgroup>
        <col width="40" />
        <col width="32" />
        <col />
        <col width="88" />
      </colgroup>
    );
  }
  return (
    <colgroup>
      <col width="40" />
      <col width="32" />
      <col />
      <col width="88" />
      <col width="85" />
    </colgroup>
  );
};

const ChampionRankTable = ({ navItem, tabItem }: ChampionRankTableProps) => {
  const rankData = useContext(ChampionRankContext);
  const hoverText =
    '챔프티어는 플레티넘 티어 이상 게임의 밴픽률, 승률, 골드, 경험치, 군중제어, KDA, 받은 데미지, 가한 데미지 등 다양한 데이터를 추출해 만들어집니다. (대회나 천상계와는 다를 수 있습니다.)';
  if (rankData === undefined) {
    return <></>;
  }
  return (
    <RankTable>
      {ChampionRankTableColGroup(navItem)}
      <RankTableHead>
        <tr>
          {ChampionRankTableHeaderMap[navItem].map((header) =>
            header === '챔피언' ? (
              <th colSpan={2} key={header}>
                {header}
              </th>
            ) : (
              <th key={header} className={header === '티어' ? 'tier' : 'common'}>
                {header + ' '}
                {header === '티어' && (
                  <HoverContainer
                    title={'테스트'}
                    text={hoverText}
                    intervalLeft={'-130px'}
                    intervalTop={'-110px'}
                  >
                    <img src="assets/champions/icon-tip.png" alt="tip" />
                  </HoverContainer>
                )}
              </th>
            ),
          )}
        </tr>
      </RankTableHead>
      <RankTableBody {...{ tableData: rankData[navItem], tabItem }} />
    </RankTable>
  );
};

export default ChampionRankTable;
