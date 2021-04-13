export type RegionType =
  | 'Korea'
  | 'Japan'
  | 'North America'
  | 'Europe West'
  | 'Europe Nordic & East'
  | 'Oceania'
  | 'Brazil'
  | 'LAS'
  | 'LAN'
  | 'Russia'
  | 'Turkey';

export type GarenaType =
  | 'Singapore'
  | 'Indonesia'
  | 'Philippines'
  | 'Taiwan'
  | 'Vietnam'
  | 'Thailand';

export type LanguageType =
  | 'ko_KR'
  | 'en_US'
  | 'ja'
  | 'pl'
  | 'fr'
  | 'de'
  | 'es'
  | 'nl'
  | 'da'
  | 'sv'
  | 'no'
  | 'ru'
  | 'hu'
  | 'fi'
  | 'tr'
  | 'ro'
  | 'pt'
  | 'zh_CN'
  | 'zh_TW'
  | 'sr'
  | 'it'
  | 'th_TH'
  | 'vi_VN';

export interface Region {
  keys: RegionType[];
  data: {
    region: RegionType;
    imagePath: string;
  }[];
}

export interface Garena {
  keys: GarenaType[];
  data: {
    region: GarenaType;
    imagePath: string;
  }[];
}

export interface Language {
  keys: LanguageType[];
  data: {
    lang: LanguageType;
    name: string;
  }[];
}
