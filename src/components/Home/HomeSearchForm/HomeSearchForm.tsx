import React from 'react';
import useDebounce from '@/hooks/useDebounce';
import useInput from '@/hooks/useInput';

import HomeSearchInput from './HomeSearchInput';
import HomeRigonLanguegeButton from './HomeRigonLanguegeButton';
import S from './style';

function HomeSearchForm() {
  const [searchValue, onChange] = useInput('');
  const debounceValue = useDebounce(searchValue, 500);

  return (
    <S.SearchForm>
      <HomeSearchInput
        label="summoner-search"
        placeholder="소환사명, 소환사명, ..."
        autoComplete="off"
        value={searchValue}
        onChange={onChange}
      />
      <HomeRigonLanguegeButton currentRigon="KR" />
      <button type="submit" className="home-search-form-submit-btn">
        .GG
      </button>
    </S.SearchForm>
  );
}

export default HomeSearchForm;
