import { filterType } from '../ContentMain';
// styled-components
import { ChampionListFilterNav, ChampionSearchInput } from './styles';

import ChampionListFilterItems from './championListFilterItems';

interface ChampionListFilterProps {
  type: filterType;
  searchText: string;
  setType: React.Dispatch<React.SetStateAction<filterType>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const ChampionListFilter = ({
  type,
  setType,
  searchText,
  setSearchText,
}: ChampionListFilterProps) => {
  const listItemOnClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const listType = e.currentTarget.dataset.listType as filterType;
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
    <ChampionListFilterNav>
      <ul className="champion-list-filter__type">
        {ChampionListFilterItems.map(createFilterItems)}
      </ul>
      <ChampionSearchInput
        type="text"
        placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </ChampionListFilterNav>
  );
};

export default ChampionListFilter;
