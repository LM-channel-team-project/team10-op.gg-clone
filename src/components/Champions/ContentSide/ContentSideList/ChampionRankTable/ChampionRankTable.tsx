// styled-components
import { ChampionsContentSideNavbarType } from '../../ContentSideNavbar/types';
import { RankTable, TableHeader } from './styles';
// types
import { ChampionRankTableProps, ChampionRankTableHeaderMap } from './types';

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
  return (
    <RankTable>
      {ChampionRankTableColGroup(navItem)}
      <thead>
        <tr>
          {ChampionRankTableHeaderMap[navItem].map((header) =>
            header === '챔피언' ? (
              <TableHeader colSpan={2} key={header}>
                {header}
              </TableHeader>
            ) : (
              <TableHeader key={header}>{header}</TableHeader>
            ),
          )}
        </tr>
      </thead>
    </RankTable>
  );
};

export default ChampionRankTable;
