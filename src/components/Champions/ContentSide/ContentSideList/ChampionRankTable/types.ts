import { ChampionsContentSideNavbarType } from '../../ContentSideNavbar/types';

export interface ChampionRankTableProps {
  navItem: ChampionsContentSideNavbarType;
  tabItem: string;
}

export const ChampionRankTableHeaderMap: Record<ChampionsContentSideNavbarType, string[]> = {
  티어: ['#', '', '챔피언', '승률', '픽률', '티어'],
  승률: ['#', '챔피언', '승률', '픽률'],
  픽률: ['#', '챔피언', '픽률', '승률'],
  벤률: ['#', '챔피언', '벤률'],
};
