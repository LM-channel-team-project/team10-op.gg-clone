import { Dispatch, SetStateAction } from 'react';

export type ChampionsContentSideNavbarType = '티어' | '승률' | '픽률' | '벤률';

export interface ContentSideNavbarProps {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<ChampionsContentSideNavbarType>>;
}
