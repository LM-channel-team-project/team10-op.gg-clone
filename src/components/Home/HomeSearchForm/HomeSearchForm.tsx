import React from 'react';
import useDebounce from '@/hooks/useDebounce';
import useInputs from '@/hooks/useInputs';

import HomeSearchInput from './HomeSearchInput';
import HomeRegionLangButton from './HomeRegionLangButton';
import S from './style';

function HomeSearchForm({ onVisibleModal }: { onVisibleModal: () => void }) {
  const [{ 'summoner-search': value }, onChange] = useInputs({ 'summoner-search': '' });
  // const debounceValue = useDebounce(value, 500);

  return (
    <S.SearchForm>
      <HomeSearchInput
        label="summoner-search"
        placeholder="소환사명, 소환사명, ..."
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
      <HomeRegionLangButton currentRegion="KR" type="button" onClick={onVisibleModal} />
      <button type="submit" className="home-search-form-submit-btn">
        .GG
      </button>
    </S.SearchForm>
  );
}

export default React.memo(HomeSearchForm);
