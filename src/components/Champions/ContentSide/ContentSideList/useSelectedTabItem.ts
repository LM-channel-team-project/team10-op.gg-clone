import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// types
import { ChampionsContentSideNavbarType } from '../ContentSideNavbar/types';
import { tabItemsMap } from './types';

const useSelectedTabItem = (
  navItem: ChampionsContentSideNavbarType,
): [string[], string, Dispatch<SetStateAction<string>>] => {
  const tabItems = tabItemsMap[navItem === '티어' ? 'tier' : 'common'];
  const [selectedTabItem, setSelectedTabItem] = useState<string>(tabItems[0]);
  useEffect(() => {
    setSelectedTabItem(tabItems[0]);
  }, [navItem]);
  return [tabItems, selectedTabItem, setSelectedTabItem];
};

export default useSelectedTabItem;
