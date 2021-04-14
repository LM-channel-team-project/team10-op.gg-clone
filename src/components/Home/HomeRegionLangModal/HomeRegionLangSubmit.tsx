import React, { useMemo } from 'react';
import Image from 'next/image';

import { RegionType, GarenaType, LanguageType } from '@/types/regionLanguage';
import { REGION_DATA, GARENA_REGION_DATA, LANGUAGE_DATA } from '@/lib/static/regionLanguageMeta';
import S from './style';

type Region = RegionType | GarenaType;

interface HomeRegionLangSubmitProps {
  region: Region;
  lang: LanguageType;
}

function HomeRegionLangSubmit({ region, lang }: HomeRegionLangSubmitProps) {
  const selectedRegion = useMemo(() => getRegion(region), [region]);
  const selectedLang = useMemo(() => getLang(lang), [lang]);

  return (
    <S.ModalSubmitContainer>
      <div className="modal-selected">
        <span>선택된 지역</span>
        <Image
          src={selectedRegion?.imagePath as string}
          width="26"
          height="26"
          alt={`${selectedRegion?.region} image`}
        />
        <p className="selected-region">{selectedRegion?.region}</p>
      </div>
      <div className="modal-selected">
        <span>선택된 언어</span>
        <p className="selected-lang">{selectedLang?.name}</p>
      </div>
      <button type="submit">저장하기</button>
    </S.ModalSubmitContainer>
  );
}

const getRegion = (region: Region) => {
  return [...REGION_DATA.data, ...GARENA_REGION_DATA.data].find(
    (regionData) => regionData.region === region,
  );
};

const getLang = (lang: LanguageType) => {
  return LANGUAGE_DATA.data.find((langData) => langData.lang === lang);
};

export default React.memo(HomeRegionLangSubmit);
