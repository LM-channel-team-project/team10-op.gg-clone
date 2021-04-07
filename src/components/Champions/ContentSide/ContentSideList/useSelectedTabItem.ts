import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// types
import { ChampionsContentSideNavbarType } from '../ContentSideNavbar/types';
import { tabItemsMap } from './types';

const useSelectedTabItem = (
  navItem: ChampionsContentSideNavbarType,
): [string[], string, Dispatch<SetStateAction<string>>] => {
  const tabItem = tabItemsMap[navItem === '티어' ? 'tier' : 'common'];
  const [selectedTabItem, setSelectedTabItem] = useState<string>(tabItem[0]);
  useEffect(() => {
    setSelectedTabItem(tabItem[0]);
  }, [navItem]);
  return [tabItem, selectedTabItem, setSelectedTabItem];
};

export default useSelectedTabItem;
