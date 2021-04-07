import { ChampionsContentSideNavbarType } from '../ContentSideNavbar/types';

export interface ContentSideListProps {
  navItem: ChampionsContentSideNavbarType;
}

export const tabItemsMap = {
  tier: ['탑', '정글', '미드', '바텀', '서포터'],
  common: ['전체', '탑', '정글', '미드', '바텀', '서포터'],
};
