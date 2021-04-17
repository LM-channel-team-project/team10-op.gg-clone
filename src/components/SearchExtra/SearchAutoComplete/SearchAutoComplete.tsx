import React, { useMemo } from 'react';

import SearchAutoCompleteItem from './SearchAutoCompleteItem';
import SearchAutoCompleteError from './SearchAutoCompleteError';
import useDebounce from '@/hooks/useDebounce';
import useSummoner from '@/hooks/swr/useSummoner';
import { championsMeta, ChampionMeta } from '@/lib/static/championsMeta';
import S from './style';

type AutoCompleteItemType = ChampionMeta & { keyword: string };

interface SearchAutoCompleteProps {
  value: string;
  autlCompleteRef: React.Ref<HTMLUListElement>;
  autoCompleteItemRefs: React.MutableRefObject<HTMLLIElement[]>;
  autoCompleteFocusIndex: number;
}
function SearchAutoComplete({
  value,
  autlCompleteRef,
  autoCompleteItemRefs,
  autoCompleteFocusIndex,
}: SearchAutoCompleteProps) {
  if (value.length < 2) return null;
  const debounceValue = useDebounce(value, 100);
  const [summoner, error] = useSummoner(debounceValue);
  const champions = useMemo(() => getChampions(value), [value]);

  return (
    <>
      {error && <SearchAutoCompleteError status={error.response?.status} />}
      <S.AutoCompleteGroup ref={autlCompleteRef}>
        {summoner && (
          <SearchAutoCompleteItem
            item={summoner}
            refFn={(r) => (autoCompleteItemRefs.current[0] = r)}
            isFocused={0 === autoCompleteFocusIndex}
          />
        )}
        {champions &&
          champions.map((champion, i) => (
            <SearchAutoCompleteItem
              key={champion.championId}
              item={champion}
              refFn={(r) => (autoCompleteItemRefs.current[summoner ? i + 1 : i] = r)}
              isFocused={(summoner ? i + 1 : i) === autoCompleteFocusIndex}
            />
          ))}
      </S.AutoCompleteGroup>
    </>
  );
}

function getChampions(value: string) {
  const data: AutoCompleteItemType[] = [];
  if (championsMeta[value]) {
    data.push({ ...championsMeta[value], keyword: refinedKeyword(value) });
    return data;
  }
  for (const key in championsMeta) {
    (championsMeta[key].name === value || championsMeta[key].chosung === value) &&
      data.push({ ...championsMeta[key], keyword: refinedKeyword(key) });
  }
  return data;
}

function refinedKeyword(keyword: string) {
  return keyword.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default React.memo(SearchAutoComplete);
