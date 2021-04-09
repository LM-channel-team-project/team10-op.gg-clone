// styled-components
import { RankTable, RankTableHead } from './styles';
// types
import { ChampionsContentSideNavbarType } from '../../ContentSideNavbar/types';
import { ChampionRankTableProps, ChampionRankTableHeaderMap } from './types';
import { useContext } from 'react';
import { ChampionRankContext } from '@/pages/champions';
import RankTableBody from './RankTableBody';

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
              <th key={header}>{header}</th>
            ),
          )}
        </tr>
      </RankTableHead>
      <RankTableBody {...{ tableData: rankData[navItem], tabItem }} />
    </RankTable>
  );
};

export default ChampionRankTable;
