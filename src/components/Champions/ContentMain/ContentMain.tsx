import React, { useState } from 'react';

import { Container, ChampionListFilter, ChampionSearchInput } from './styles';

const ChampionListFilterItems: [string, string][] = [
  ['전체', 'ALL'],
  ['탑', 'TOP'],
  ['정글', 'JUNGLE'],
  ['미드', 'MID'],
  ['바텀', 'BOTTOM'],
  ['서포터', 'SUPPORTER'],
  ['로테이션', 'LOTATION'],
];

const ContentMain = () => {
  const [type, setType] = useState<string>('전체');
  const listItemOnClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const listType = e.currentTarget.dataset.listType as string;
    setType(listType);
  };
  const createFilterItems = ([key, value]: [string, string]) => {
    const liClassName = type === value ? 'selected ' : '';
    const aClassName = value === 'LOTATION' ? 'lotation' : '';
    return (
      <li className={liClassName} onClick={listItemOnClick} data-list-type={value} key={key}>
        <a className={aClassName}>{key}</a>
      </li>
    );
  };
  return (
    <Container>
      <ChampionListFilter>
        <ul className="champion-list-filter__type">
          {ChampionListFilterItems.map(createFilterItems)}
        </ul>
        <ChampionSearchInput type="text" placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)" />
      </ChampionListFilter>
    </Container>
  );
};

export default ContentMain;
