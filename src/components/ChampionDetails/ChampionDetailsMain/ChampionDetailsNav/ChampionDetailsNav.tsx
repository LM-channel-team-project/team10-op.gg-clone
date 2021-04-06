import React, { useState } from 'react';
import { DetailsNav } from './styles';
import { DetailsNavType } from '../ChampionDetailsMain';
import ChampionDetailsFilterItems from './ChampionDetailsFilterItems';

interface ChampionDetailsFilterProps {
  type: DetailsNavType;
  setType: React.Dispatch<React.SetStateAction<DetailsNavType>>;
}

function ChampionDetailsNav({ type, setType }: ChampionDetailsFilterProps) {
  const listItemOnClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const listType = e.currentTarget.dataset.listType as DetailsNavType;
    setType(listType);
  };

  const createFilterItems = ([key, value]: [string, string]) => {
    const liClassName = type === value ? 'selected ' : '';
    const aClassName = value === 'COUNTER' ? 'counter' : '';
    return (
      <li className={liClassName} onClick={listItemOnClick} data-list-type={value} key={key}>
        <a className={aClassName}>{key}</a>
      </li>
    );
  };
  return (
    <DetailsNav>
      <ul className="champion-list-filter__type">
        {ChampionDetailsFilterItems.map(createFilterItems)}
      </ul>
    </DetailsNav>
  );
}

export default ChampionDetailsNav;
