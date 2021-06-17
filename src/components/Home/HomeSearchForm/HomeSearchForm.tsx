import React, { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import HomeSearchInput from './HomeSearchInput';
import HomeRegionLangButton from './HomeRegionLangButton';
import SearchExtra from '@/components/SearchExtra';
import S from './style';

function HomeSearchForm({ onVisibleModal }: { onVisibleModal: () => void }) {
  const router = useRouter();
  const [homeInput, setHomeInput] = useState('');
  const [searchExtra, setSearchExtra] = useState(false);
  const [autoCompleteItemIndex, setaAtoCompleteItemIndex] = useState(-1);
  const autoCompleteRef = useRef<HTMLUListElement>(null);
  const autoCompleteItemRefs = useRef<HTMLLIElement[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPush = confirm('소환사 상세 검색 미구현\nOP.GG 사이트에서 검색합니다.');
    isPush && router.push(`https://www.op.gg/summoner/userName=${homeInput}`);
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchExtra(true);
    setaAtoCompleteItemIndex(-1);
    setHomeInput(e.target.value);
    autoCompleteItemRefs.current = [];
  }, []);

  const searchExtraHandle = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setaAtoCompleteItemIndex(-1);
    if (e.type === 'blur' && e.relatedTarget) return setSearchExtra(true);
    setSearchExtra(e.type === 'focus' && true);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const keyAction: Record<string, () => void> = {
        Escape: () => {
          setSearchExtra(false);
        },
        ArrowUp: () => {
          e.preventDefault();
          const le = autoCompleteItemRefs.current.length;
          setaAtoCompleteItemIndex((index) => {
            return !le || index <= 0 ? -1 : index - 1;
          });
        },
        ArrowDown: () => {
          e.preventDefault();
          const le = autoCompleteItemRefs.current.length;
          setaAtoCompleteItemIndex((index) => {
            return !le || index >= le - 1 ? index : index + 1;
          });
        },
        Enter: () => {
          const item = autoCompleteItemRefs.current[autoCompleteItemIndex];
          if (!item) return;
          e.preventDefault();
          const type = item.getAttribute('type');
          const push = {
            summoners: () => {
              const isPush = confirm('소환사 상세 검색 미구현\nOP.GG 사이트에서 검색합니다.');
              isPush && router.push(`https://www.op.gg/summoner/userName=${item.dataset.value}`);
            },
            champions: () => {
              router.push(`/champions/${item.dataset.value}`);
            },
          };
          push[type as 'summoners' | 'champions']?.();
        },
      };
      keyAction[e.key]?.();
    },
    [homeInput, autoCompleteItemIndex],
  );

  return (
    <S.SearchForm onSubmit={onSubmit}>
      <div className="home-search-box">
        <HomeSearchInput
          label="summoner-search"
          placeholder="소환사명, 소환사명, ..."
          autoComplete="off"
          value={homeInput}
          onChange={onChange}
          onFocus={searchExtraHandle}
          // onBlur={searchExtraHandle}
          onKeyDown={onKeyDown}
        />
        <HomeRegionLangButton currentRegion="KR" type="button" onClick={onVisibleModal} />
        <button type="submit" className="home-search-form-submit-btn">
          .GG
        </button>
      </div>
      <SearchExtra
        open={searchExtra}
        value={homeInput}
        autoCompleteRef={autoCompleteRef}
        autoCompleteItemRefs={autoCompleteItemRefs}
        autoCompleteFocusIndex={autoCompleteItemIndex}
      />
    </S.SearchForm>
  );
}

export default React.memo(HomeSearchForm);
