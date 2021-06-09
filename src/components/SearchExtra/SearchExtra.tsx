import React from 'react';

import SearchAutoComplete from './SearchAutoComplete';
import SearchHistory from './SearchHistory';
import S from './style';

interface SearchExtraProps {
  open: boolean;
  value: string;
  autoCompleteRef: React.Ref<HTMLUListElement>;
  autoCompleteItemRefs: React.MutableRefObject<HTMLLIElement[]>;
  autoCompleteFocusIndex: number;
}

function SearchExtra({
  open,
  value,
  autoCompleteRef,
  autoCompleteItemRefs,
  autoCompleteFocusIndex,
}: SearchExtraProps) {
  if (!open) return null;

  if (value) {
    return (
      <S.SearchExtraContainer>
        <SearchAutoComplete
          value={value}
          autlCompleteRef={autoCompleteRef}
          autoCompleteItemRefs={autoCompleteItemRefs}
          autoCompleteFocusIndex={autoCompleteFocusIndex}
        />
      </S.SearchExtraContainer>
    );
  }
  return null;
  // <S.SearchExtraContainer>
  //   <SearchHistory />
  // </S.SearchExtraContainer>
}

export default React.memo(SearchExtra);
