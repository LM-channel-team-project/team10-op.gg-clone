import Image from 'next/image';
import React, { useCallback } from 'react';

import RegionLangRadio from './HomeRegionLangRadio';
import HomeRegionLangSubmit from './HomeRegionLangSubmit';

import useInputs from '@/hooks/useInputs';
import { RegionLangState, RegionLangDispatch } from '@/contexts/RegionLangContext';
import { REGION_DATA, GARENA_REGION_DATA, LANGUAGE_DATA } from '@/lib/static/regionLanguageMeta';
import S from './style';

interface HomeRegionLangContentProps {
  regionLangState: RegionLangState;
  regionLangDispatch: RegionLangDispatch;
  onClose: () => void;
}

function HomeRegionLangContent({
  regionLangState,
  regionLangDispatch,
  onClose,
}: HomeRegionLangContentProps) {
  const state = regionLangState;
  const [{ region, lang }, onChange] = useInputs<RegionLangState>({
    region: state.region,
    lang: state.lang,
  });

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      regionLangDispatch({ type: 'SET_ALL', payload: { region, lang } });
      onClose();
    },
    [region, lang, regionLangDispatch],
  );

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => e.stopPropagation(),
    [],
  );

  return (
    <S.ModalContent onClick={onClick}>
      <header className="modal-header">
        <h2 className="modal-title">지역/언어 설정</h2>
        <button type="button" className="modal-close-btn" onClick={onClose}>
          <Image
            src="/assets/region/btn-modalClose.png"
            width="38"
            height="38"
            alt="modal close button"
          />
        </button>
      </header>
      <form onSubmit={onSubmit}>
        <div className="radio-group">
          <p className="radio-about">지역 선택</p>
          {REGION_DATA.data.map((data) => (
            <RegionLangRadio
              key={data.region}
              label={data.region}
              value={data.region}
              name={REGION_DATA.name}
              imagePath={data.imagePath}
              checked={region === data.region}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="radio-group">
          <div className="garena-region">
            <p>가레나 지역&nbsp;</p>
            <Image
              src="/assets/region/mark-beta.png"
              width="30"
              height="17"
              alt="가레나 베타"
              layout="fixed"
              quality="100"
            />
          </div>
          {GARENA_REGION_DATA.data.map((data) => (
            <RegionLangRadio
              key={data.region}
              label={data.region}
              value={data.region}
              name={REGION_DATA.name}
              imagePath={data.imagePath}
              checked={region === data.region}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="radio-group">
          <p className="radio-about">언어 선택</p>
          {LANGUAGE_DATA.data.map((data) => (
            <RegionLangRadio
              key={data.lang}
              id={data.lang}
              label={data.name}
              value={data.lang}
              name={LANGUAGE_DATA.name}
              checked={lang === data.lang}
              onChange={onChange}
            />
          ))}
        </div>
        <HomeRegionLangSubmit region={region} lang={lang} />
        {(region !== 'Korea' || lang !== 'ko_KR') && (
          <p className="modal-warning">* 한국서버와 한국어만 지원합니다. *</p>
        )}
      </form>
    </S.ModalContent>
  );
}

export default React.memo(HomeRegionLangContent);
