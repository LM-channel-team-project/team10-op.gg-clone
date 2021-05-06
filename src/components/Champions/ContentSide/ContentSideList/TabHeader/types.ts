import { Dispatch, SetStateAction } from 'react';

export interface TabHeaderProps {
  tabItems: string[];
  selectedTabItem: string;
  setSelectedTabItem: Dispatch<SetStateAction<string>>;
}
