// styled-components
import { RankTableBodyContainer } from './styles';
import { ChampionImage } from '@/components/Champions/style';

import championsMeta, { ChampionMeta, ChampionPositionMap } from '@/lib/static/championsMeta';
import {
  RankTableTierRowProps,
  TableData,
  TierTableData,
  WinPickRateTableData,
  BanRateTableData,
} from './types';

const getChampionMetaById = (id: number): ChampionMeta => {
  return (
    Object.values(championsMeta).find((champ) => champ.championId === id) || ({} as ChampionMeta)
  );
};

const createChampionArticle = (championMeta: ChampionMeta) => {
  return (
    <article className="rank-table-body__champion-article">
      <ChampionImage width="32" idx={championMeta.idx} />
      <div className="champion-article__info">
        <p className="champion-article__info__name">{championMeta.name}</p>
        <p className="champion-article__info__position">
          {championMeta.positions.map((pos) => ChampionPositionMap[pos]).join(', ')}
        </p>
      </div>
    </article>
  );
};
const createShiftCol = (shift: number) => {
  let className;
  if (shift < 0) className = 'down';
  else if (shift > 0) className = 'up';
  else className = 'stay';
  const imageSrc = `assets/champions/icon-championtier-${className}.png`;
  return (
    <>
      <img src={imageSrc} alt="rank-shift" className="shift-image" />
      <span className={className}>{shift.toString().replace('-', '')}</span>
    </>
  );
};
const createTierBadge = (tier: number) => {
  return <img src={`assets/champions/icon-champtier-${tier}.png`} alt={`tier-${tier}`} />;
};
const filterPosition = (tabItem: string) => (data: {
  data: TableData;
  championMeta: ChampionMeta;
}) =>
  tabItem === '전체'
    ? true
    : data.championMeta.positions.map((pos) => ChampionPositionMap[pos]).includes(tabItem);
const createTierTableRow = (
  rankTableData: {
    data: TierTableData;
    championMeta: ChampionMeta;
  }[],
  tabItem: string,
) => {
  return (
    <RankTableBodyContainer>
      {Object.values(rankTableData)
        .filter(filterPosition(tabItem))
        .map((values, idx) => (
          <tr key={values.data.championId + 'TierTableData'}>
            <td className="table-cell-rank">{idx + 1}</td>
            <td className="table-cell-shift">{createShiftCol(values.data.rankShift)}</td>
            <td className="table-cell-champion-meta" colSpan={2}>
              {createChampionArticle(values.championMeta)}
            </td>
            <td className="table-cell-rate">{values.data.winRate}</td>
            <td className="table-cell-rate">{values.data.pickRate}</td>
            <td className="table-cell-tier-badge border-right">
              {createTierBadge(idx < 5 ? 1 : idx < 10 ? 2 : idx < 20 ? 3 : idx < 30 ? 4 : 5)}
            </td>
          </tr>
        ))}
    </RankTableBodyContainer>
  );
};

const createWinPickTableRow = (
  winPickRateTableData: {
    data: WinPickRateTableData;
    championMeta: ChampionMeta;
  }[],
  tabItem: string,
) => (
  <RankTableBodyContainer>
    {Object.values(winPickRateTableData)
      .filter(filterPosition(tabItem))
      .map((values, idx) => (
        <tr key={values.data.championId + 'TierTableData'}>
          <td className="table-cell-rank">{idx + 1}</td>
          <td className="table-cell-champion-meta" colSpan={2}>
            {createChampionArticle(values.championMeta)}
          </td>
          <td className="table-cell-rate blue">{values.data.winRate}</td>
          <td className="table-cell-rate border-right">{values.data.pickRate}</td>
        </tr>
      ))}
  </RankTableBodyContainer>
);

const createBanRateTableRow = (
  banRateTableData: {
    data: BanRateTableData;
    championMeta: ChampionMeta;
  }[],
  tabItem: string,
) => (
  <RankTableBodyContainer>
    {Object.values(banRateTableData)
      .filter(filterPosition(tabItem))
      .map((values, idx) => (
        <tr key={values.data.championId + 'TierTableData'}>
          <td className="table-cell-rank">{idx + 1}</td>
          <td className="table-cell-champion-meta" colSpan={2}>
            {createChampionArticle(values.championMeta)}
          </td>
          <td className="table-cell-rate blue border-right">{values.data.banRate}</td>
        </tr>
      ))}
  </RankTableBodyContainer>
);

// 티어 순위 테이블 로우
const RankTableBody = ({ tableData, tabItem }: RankTableTierRowProps) => {
  const tableDataType = tableData.length > 0 ? tableData[0].tableDataType : undefined;
  const rankTableData = tableData.map((data) => ({
    data,
    championMeta: getChampionMetaById(data.championId),
  }));
  switch (tableDataType) {
    case 'TierTableData':
      return createTierTableRow(
        rankTableData as {
          data: TierTableData;
          championMeta: ChampionMeta;
        }[],
        tabItem,
      );
    case 'WinPickTableData':
      return createWinPickTableRow(
        rankTableData as {
          data: WinPickRateTableData;
          championMeta: ChampionMeta;
        }[],
        tabItem,
      );
    case 'BanTableData':
      return createBanRateTableRow(
        rankTableData as {
          data: BanRateTableData;
          championMeta: ChampionMeta;
        }[],
        tabItem,
      );
    default:
      return <></>;
  }
};

export default RankTableBody;
