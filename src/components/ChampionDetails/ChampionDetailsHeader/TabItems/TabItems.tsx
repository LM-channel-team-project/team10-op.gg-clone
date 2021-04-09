import React from 'react';
import { TabItemList } from './styles';
import { TabItemType } from '../ChampionDetailsHeader';
import Items from './Items';

interface TabItemsProps {
  tabType: TabItemType;
  setTabType: React.Dispatch<React.SetStateAction<TabItemType>>;
}

function TabItems({ tabType, setTabType }: TabItemsProps) {
  const listItemOnClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const listType = e.currentTarget.dataset.listType as TabItemType;
    setTabType(listType);
  };

  const createTabItems = ([key, value]: [string, string]) => {
    const liClassName = tabType === value ? 'active' : '';
    return (
      <li className={liClassName} onClick={listItemOnClick} data-list-type={value} key={key}>
        <span>{key}</span>
      </li>
    );
  };

  return <TabItemList>{Items.map(createTabItems)}</TabItemList>;
}

export default TabItems;
