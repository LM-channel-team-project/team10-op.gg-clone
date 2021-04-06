export type ChampionPosition = 'TOP' | 'MID' | 'ADC' | 'SUPPORT' | 'JUNGLE';
export type ChampionPositionMapType = Record<ChampionPosition, string>;
export type ChampionsMetaType = Record<string, ChampionMeta>;
export const ChampionPositionMap: ChampionPositionMapType = {
  TOP: '탑',
  MID: '미드',
  ADC: '바텀',
  JUNGLE: '정글',
  SUPPORT: '서포터',
};
export interface ChampionMeta {
  idx: number; // Image Sprites을 위한 인덱스
  name: string; // 챔피언 한글 이름
  chosung: string; // 챔피언 한글 이름 초성
  positions: ChampionPosition[]; // 챔피언 라인 포지션
}
export const championsMeta: ChampionsMetaType = {
  garen: { name: '가렌', chosung: 'ㄱㄹ', positions: ['TOP', 'MID'], idx: 33 },
  galio: {
    name: '갈리오',
    chosung: 'ㄱㄹㅇ',
    positions: ['MID', 'SUPPORT'],
    idx: 31,
  },
  gangplank: { name: '갱플랭크', chosung: 'ㄱㅍㄹㅋ', positions: ['TOP'], idx: 32 },
  gragas: {
    name: '그라가스',
    chosung: 'ㄱㄹㄱㅅ',
    positions: ['SUPPORT', 'TOP', 'JUNGLE'],
    idx: 35,
  },
  graves: { name: '그레이브즈', chosung: 'ㄱㄹㅇㅂㅈ', positions: ['JUNGLE'], idx: 36 },
  gnar: { name: '나르', chosung: 'ㄴㄹ', positions: ['TOP'], idx: 34 },
  nami: { name: '나미', chosung: 'ㄴㅁ', positions: ['SUPPORT'], idx: 77 },
  nasus: { name: '나서스', chosung: 'ㄴㅅㅅ', positions: ['TOP'], idx: 78 },
  nautilus: { name: '노틸러스', chosung: 'ㄴㅌㄹㅅ', positions: ['SUPPORT'], idx: 79 },
  nocturne: {
    name: '녹턴',
    chosung: 'ㄴㅌ',
    positions: ['JUNGLE', 'MID', 'TOP'],
    idx: 82,
  },
  nunu: {
    name: '누누와윌럼프',
    chosung: 'ㄴㄴㅇㅇㄹㅍ',
    positions: ['JUNGLE', 'MID'],
    idx: 83,
  },
  nidalee: { name: '니달리', chosung: 'ㄴㄷㄹ', positions: ['JUNGLE'], idx: 81 },
  neeko: {
    name: '니코',
    chosung: 'ㄴㅋ',
    positions: ['MID', 'SUPPORT'],
    idx: 80,
  },
  darius: { name: '다리우스', chosung: 'ㄷㄹㅇㅅ', positions: ['TOP'], idx: 20 },
  diana: { name: '다이애나', chosung: 'ㄷㅇㅇㄴ', positions: ['MID'], idx: 21 },
  draven: { name: '드레이븐', chosung: 'ㄷㄹㅇㅂ', positions: ['ADC'], idx: 22 },
  ryze: {
    name: '라이즈',
    chosung: 'ㄹㅇㅈ',
    positions: ['TOP', 'MID'],
    idx: 100,
  },
  rakan: { name: '라칸', chosung: 'ㄹㅋ', positions: ['SUPPORT'], idx: 92 },
  rammus: { name: '람머스', chosung: 'ㄹㅁㅅ', positions: ['JUNGLE'], idx: 93 },
  lux: {
    name: '럭스',
    chosung: 'ㄹㅅ',
    positions: ['SUPPORT', 'MID'],
    idx: 68,
  },
  rumble: { name: '럼블', chosung: 'ㄹㅂ', positions: ['MID', 'TOP'], idx: 99 },
  renekton: { name: '레넥톤', chosung: 'ㄹㄴㅌ', positions: ['TOP', 'MID'], idx: 96 },
  leona: { name: '레오나', chosung: 'ㄹㅇㄴ', positions: ['SUPPORT'], idx: 63 },
  reksai: { name: '렉사이', chosung: 'ㄹㅅㅇ', positions: ['JUNGLE'], idx: 94 },
  rell: { name: '렐', chosung: 'ㄹ', positions: ['SUPPORT'], idx: 95 },
  rengar: {
    name: '렝가',
    chosung: 'ㄹㄱ',
    positions: ['TOP', 'JUNGLE'],
    idx: 97,
  },
  lucian: {
    name: '루시안',
    chosung: 'ㄹㅅㅇ',
    positions: ['MID', 'ADC', 'TOP'],
    idx: 66,
  },
  lulu: { name: '룰루', chosung: 'ㄹㄹ', positions: ['SUPPORT'], idx: 67 },
  leblanc: { name: '르블랑', chosung: 'ㄹㅂㄹ', positions: ['MID'], idx: 61 },
  leesin: { name: '리신', chosung: 'ㄹㅅ', positions: ['JUNGLE'], idx: 62 },
  riven: { name: '리븐', chosung: 'ㄹㅂ', positions: ['TOP', 'MID'], idx: 98 },
  lissandra: { name: '리산드라', chosung: 'ㄹㅅㄷㄹ', positions: ['MID'], idx: 65 },
  lillia: { name: '릴리아', chosung: 'ㄹㄹㅇ', positions: ['JUNGLE'], idx: 64 },
  masteryi: { name: '마스터이', chosung: 'ㅁㅅㅌㅇ', positions: ['JUNGLE'], idx: 72 },
  maokai: {
    name: '마오카이',
    chosung: 'ㅁㅇㅋㅇ',
    positions: ['SUPPORT', 'TOP'],
    idx: 71,
  },
  malzahar: { name: '말자하', chosung: 'ㅁㅈㅎ', positions: ['MID'], idx: 70 },
  malphite: {
    name: '말파이트',
    chosung: 'ㅁㅍㅇㅌ',
    positions: ['TOP', 'MID'],
    idx: 69,
  },
  mordekaiser: { name: '모데카이저', chosung: 'ㅁㄷㅋㅇㅈ', positions: ['TOP'], idx: 75 },
  morgana: { name: '모르가나', chosung: 'ㅁㄹㄱㄴ', positions: ['SUPPORT'], idx: 76 },
  drmundo: { name: '문도박사', chosung: 'ㅁㄷㅂㅅ', positions: ['JUNGLE'], idx: 23 },
  missfortune: { name: '미스포츈', chosung: 'ㅁㅅㅍㅊ', positions: ['ADC'], idx: 73 },
  bard: { name: '바드', chosung: 'ㅂㄷ', positions: ['SUPPORT'], idx: 11 },
  varus: { name: '바루스', chosung: 'ㅂㄹㅅ', positions: ['ADC'], idx: 131 },
  vi: { name: '바이', chosung: 'ㅂㅇ', positions: ['JUNGLE'], idx: 135 },
  veigar: {
    name: '베이가',
    chosung: 'ㅂㅇㄱ',
    positions: ['MID', 'SUPPORT'],
    idx: 133,
  },
  vayne: { name: '베인', chosung: 'ㅂㅇ', positions: ['ADC', 'TOP'], idx: 132 },
  velkoz: { name: '벨코즈', chosung: 'ㅂㅋㅈ', positions: ['SUPPORT'], idx: 134 },
  volibear: {
    name: '볼리베어',
    chosung: 'ㅂㄹㅂㅇ',
    positions: ['TOP', 'JUNGLE'],
    idx: 139,
  },
  braum: { name: '브라움', chosung: 'ㅂㄹㅇ', positions: ['SUPPORT'], idx: 14 },
  brand: { name: '브랜드', chosung: 'ㅂㄹㄷ', positions: ['SUPPORT'], idx: 13 },
  vladimir: {
    name: '블라디미르',
    chosung: 'ㅂㄹㄷㅁㄹ',
    positions: ['MID', 'TOP'],
    idx: 138,
  },
  blitzcrank: {
    name: '블리츠크랭크',
    chosung: 'ㅂㄹㅊㅋㄹㅋ',
    positions: ['SUPPORT'],
    idx: 12,
  },
  viego: {
    name: '비에고',
    chosung: 'ㅂㅇㄱ',
    positions: ['JUNGLE', 'MID', 'TOP'],
    idx: 136,
  },
  viktor: {
    name: '빅토르',
    chosung: 'ㅂㅌㄹ',
    positions: ['MID', 'TOP'],
    idx: 137,
  },
  poppy: {
    name: '뽀삐',
    chosung: 'ㅃㅃ',
    positions: ['JUNGLE', 'TOP', 'SUPPORT'],
    idx: 88,
  },
  samira: { name: '사미라', chosung: 'ㅅㅁㄹ', positions: ['ADC'], idx: 101 },
  sion: {
    name: '사이온',
    chosung: 'ㅅㅇㅇ',
    positions: ['TOP', 'MID'],
    idx: 110,
  },
  sylas: {
    name: '사일러스',
    chosung: 'ㅅㅇㄹㅅ',
    positions: ['MID', 'TOP'],
    idx: 116,
  },
  shaco: {
    name: '샤코',
    chosung: 'ㅅㅋ',
    positions: ['JUNGLE', 'SUPPORT'],
    idx: 106,
  },
  senna: {
    name: '세나',
    chosung: 'ㅅㄴ',
    positions: ['SUPPORT', 'ADC'],
    idx: 103,
  },
  seraphine: {
    name: '세라핀',
    chosung: 'ㅅㄹㅍ',
    positions: ['SUPPORT', 'MID'],
    idx: 104,
  },
  sejuani: {
    name: '세주아니',
    chosung: 'ㅅㅈㅇㄴ',
    positions: ['JUNGLE', 'TOP'],
    idx: 102,
  },
  sett: {
    name: '세트',
    chosung: 'ㅅㅌ',
    positions: ['TOP', 'SUPPORT', 'MID'],
    idx: 105,
  },
  sona: { name: '소나', chosung: 'ㅅㄴ', positions: ['SUPPORT'], idx: 113 },
  soraka: { name: '소라카', chosung: 'ㅅㄹㅋ', positions: ['SUPPORT'], idx: 114 },
  shen: {
    name: '쉔',
    chosung: 'ㅅ',
    positions: ['TOP', 'SUPPORT'],
    idx: 107,
  },
  shyvana: { name: '쉬바나', chosung: 'ㅅㅂㄴ', positions: ['JUNGLE'], idx: 108 },
  swain: {
    name: '스웨인',
    chosung: 'ㅅㅇㅇ',
    positions: ['SUPPORT', 'ADC'],
    idx: 115,
  },
  skarner: { name: '스카너', chosung: 'ㅅㅋㄴ', positions: ['JUNGLE'], idx: 112 },
  sivir: { name: '시비르', chosung: 'ㅅㅂㄹ', positions: ['ADC'], idx: 111 },
  xinzhao: { name: '신짜오', chosung: 'ㅅㅉㅇ', positions: ['JUNGLE'], idx: 143 },
  syndra: { name: '신드라', chosung: 'ㅅㄷㄹ', positions: ['MID'], idx: 117 },
  singed: { name: '신지드', chosung: 'ㅅㅈㄷ', positions: ['TOP'], idx: 109 },
  thresh: { name: '쓰레쉬', chosung: 'ㅆㄹㅅ', positions: ['SUPPORT'], idx: 123 },
  ahri: { name: '아리', chosung: 'ㅇㄹ', positions: ['MID'], idx: 1 },
  amumu: { name: '아무무', chosung: 'ㅇㅁㅁ', positions: ['JUNGLE'], idx: 4 },
  aurelionsol: { name: '아우렐리온솔', chosung: 'ㅇㅇㄹㄹㅇㅅ', positions: ['MID'], idx: 9 },
  ivern: { name: '아이번', chosung: 'ㅇㅇㅂ', positions: ['JUNGLE'], idx: 41 },
  azir: { name: '아지르', chosung: 'ㅇㅈㄹ', positions: ['MID'], idx: 10 },
  akali: { name: '아칼리', chosung: 'ㅇㅋㄹ', positions: ['TOP', 'MID'], idx: 2 },
  aatrox: { name: '아트록스', chosung: 'ㅇㅌㄹㅅ', positions: ['TOP'], idx: 0 },
  aphelios: { name: '아펠리오스', chosung: 'ㅇㅍㄹㅇㅅ', positions: ['ADC'], idx: 7 },
  alistar: { name: '알리스타', chosung: 'ㅇㄹㅅㅌ', positions: ['SUPPORT'], idx: 3 },
  annie: { name: '애니', chosung: 'ㅇㄴ', positions: ['MID'], idx: 6 },
  anivia: {
    name: '애니비아',
    chosung: 'ㅇㄴㅂㅇ',
    positions: ['MID', 'SUPPORT'],
    idx: 5,
  },
  ashe: {
    name: '애쉬',
    chosung: 'ㅇㅅ',
    positions: ['ADC', 'SUPPORT'],
    idx: 8,
  },
  yasuo: {
    name: '야스오',
    chosung: 'ㅇㅅㅇ',
    positions: ['MID', 'TOP', 'ADC'],
    idx: 144,
  },
  ekko: {
    name: '에코',
    chosung: 'ㅇㅋ',
    positions: ['JUNGLE', 'MID'],
    idx: 24,
  },
  elise: { name: '엘리스', chosung: 'ㅇㄹㅅ', positions: ['JUNGLE'], idx: 25 },
  monkeyking: { name: '오공', chosung: 'ㅇㄱ', positions: ['TOP'], idx: 74 },
  ornn: { name: '오른', chosung: 'ㅇㄹ', positions: ['TOP'], idx: 86 },
  orianna: { name: '오리아나', chosung: 'ㅇㄹㅇㄴ', positions: ['MID'], idx: 85 },
  olaf: { name: '올라프', chosung: 'ㅇㄹㅍ', positions: ['JUNGLE'], idx: 84 },
  yone: { name: '요네', chosung: 'ㅇㄴ', positions: ['MID', 'TOP'], idx: 145 },
  yorick: { name: '요릭', chosung: 'ㅇㄹ', positions: ['TOP', 'MID'], idx: 146 },
  udyr: { name: '우디르', chosung: 'ㅇㄷㄹ', positions: ['JUNGLE'], idx: 129 },
  urgot: { name: '우르곳', chosung: 'ㅇㄹㄱ', positions: ['TOP'], idx: 130 },
  warwick: {
    name: '워윅',
    chosung: 'ㅇㅇ',
    positions: ['JUNGLE', 'TOP'],
    idx: 140,
  },
  yuumi: { name: '유미', chosung: 'ㅇㅁ', positions: ['SUPPORT'], idx: 147 },
  irelia: {
    name: '이렐리아',
    chosung: 'ㅇㄹㄹㅇ',
    positions: ['TOP', 'MID'],
    idx: 40,
  },
  evelynn: { name: '이블린', chosung: 'ㅇㅂㄹ', positions: ['JUNGLE'], idx: 26 },
  ezreal: { name: '이즈리얼', chosung: 'ㅇㅈㄹㅇ', positions: ['ADC'], idx: 27 },
  illaoi: { name: '일라오이', chosung: 'ㅇㄹㅇㅇ', positions: ['TOP'], idx: 39 },
  jarvaniv: { name: '자르반4세', chosung: 'ㅈㄹㅂ4ㅅ', positions: ['JUNGLE'], idx: 43 },
  xayah: { name: '자야', chosung: 'ㅈㅇ', positions: ['ADC'], idx: 141 },
  zyra: { name: '자이라', chosung: 'ㅈㅇㄹ', positions: ['SUPPORT'], idx: 153 },
  zac: {
    name: '자크',
    chosung: 'ㅈㅋ',
    positions: ['JUNGLE', 'TOP', 'SUPPORT'],
    idx: 148,
  },
  janna: { name: '잔나', chosung: 'ㅈㄴ', positions: ['SUPPORT'], idx: 42 },
  jax: {
    name: '잭스',
    chosung: 'ㅈㅅ',
    positions: ['TOP', 'JUNGLE'],
    idx: 44,
  },
  zed: { name: '제드', chosung: 'ㅈㄷ', positions: ['MID'], idx: 149 },
  xerath: {
    name: '제라스',
    chosung: 'ㅈㄹㅅ',
    positions: ['SUPPORT', 'MID'],
    idx: 142,
  },
  jayce: { name: '제이스', chosung: 'ㅈㅇㅅ', positions: ['TOP', 'MID'], idx: 45 },
  zoe: { name: '조이', chosung: 'ㅈㅇ', positions: ['MID'], idx: 152 },
  ziggs: { name: '직스', chosung: 'ㅈㅅ', positions: [], idx: 150 },
  jhin: { name: '진', chosung: 'ㅈ', positions: ['ADC'], idx: 46 },
  zilean: {
    name: '질리언',
    chosung: 'ㅈㄹㅇ',
    positions: ['SUPPORT', 'MID'],
    idx: 151,
  },
  jinx: { name: '징크스', chosung: 'ㅈㅋㅅ', positions: ['ADC'], idx: 47 },
  chogath: { name: '초가스', chosung: 'ㅊㄱㅅ', positions: ['TOP', 'MID'], idx: 18 },
  karma: { name: '카르마', chosung: 'ㅋㄹㅁ', positions: ['SUPPORT'], idx: 50 },
  camille: { name: '카밀', chosung: 'ㅋㅁ', positions: ['TOP', 'MID'], idx: 16 },
  kassadin: { name: '카사딘', chosung: 'ㅋㅅㄷ', positions: ['MID'], idx: 52 },
  karthus: { name: '카서스', chosung: 'ㅋㅅㅅ', positions: ['JUNGLE'], idx: 51 },
  cassiopeia: { name: '카시오페아', chosung: 'ㅋㅅㅇㅍㅇ', positions: ['MID'], idx: 17 },
  kaisa: { name: '카이사', chosung: 'ㅋㅇㅅ', positions: ['ADC'], idx: 48 },
  khazix: { name: '카직스', chosung: 'ㅋㅈㅅ', positions: ['JUNGLE'], idx: 57 },
  katarina: { name: '카타리나', chosung: 'ㅋㅌㄹㄴ', positions: ['MID'], idx: 53 },
  kalista: {
    name: '칼리스타',
    chosung: 'ㅋㄹㅅㅌ',
    positions: ['ADC', 'TOP'],
    idx: 49,
  },
  kennen: { name: '케넨', chosung: 'ㅋㄴ', positions: ['TOP'], idx: 56 },
  caitlyn: { name: '케이틀린', chosung: 'ㅋㅇㅌㄹ', positions: ['ADC'], idx: 15 },
  kayn: { name: '케인', chosung: 'ㅋㅇ', positions: ['JUNGLE'], idx: 55 },
  kayle: { name: '케일', chosung: 'ㅋㅇ', positions: ['TOP'], idx: 54 },
  kogmaw: { name: '코그모', chosung: 'ㅋㄱㅁ', positions: ['ADC'], idx: 60 },
  corki: { name: '코르키', chosung: 'ㅋㄹㅋ', positions: ['MID'], idx: 19 },
  quinn: { name: '퀸', chosung: 'ㅋ', positions: ['TOP'], idx: 91 },
  kled: { name: '클레드', chosung: 'ㅋㄹㄷ', positions: ['TOP', 'MID'], idx: 59 },
  qiyana: { name: '키아나', chosung: 'ㅋㅇㄴ', positions: ['MID'], idx: 90 },
  kindred: { name: '킨드레드', chosung: 'ㅋㄷㄹㄷ', positions: ['JUNGLE'], idx: 58 },
  taric: { name: '타릭', chosung: 'ㅌㄹ', positions: ['SUPPORT'], idx: 121 },
  talon: { name: '탈론', chosung: 'ㅌㄹ', positions: ['MID'], idx: 120 },
  taliyah: { name: '탈리야', chosung: 'ㅌㄹㅇ', positions: ['JUNGLE'], idx: 119 },
  tahmkench: { name: '탐켄치', chosung: 'ㅌㅋㅊ', positions: ['ADC'], idx: 118 },
  trundle: { name: '트런들', chosung: 'ㅌㄹㄷ', positions: ['JUNGLE'], idx: 125 },
  tristana: {
    name: '트리스타나',
    chosung: 'ㅌㄹㅅㅌㄴ',
    positions: ['ADC', 'MID'],
    idx: 124,
  },
  tryndamere: { name: '트린다미어', chosung: 'ㅌㄹㄷㅁㅇ', positions: ['TOP'], idx: 126 },
  twistedfate: {
    name: '트위스티드페이트',
    chosung: 'ㅌㅇㅅㅌㄷㅍㅇㅌ',
    positions: ['MID'],
    idx: 127,
  },
  twitch: { name: '트위치', chosung: 'ㅌㅇㅊ', positions: ['ADC'], idx: 128 },
  teemo: { name: '티모', chosung: 'ㅌㅁ', positions: ['TOP'], idx: 122 },
  pyke: { name: '파이크', chosung: 'ㅍㅇㅋ', positions: ['SUPPORT'], idx: 89 },
  pantheon: {
    name: '판테온',
    chosung: 'ㅍㅌㅇ',
    positions: ['MID', 'SUPPORT', 'TOP'],
    idx: 87,
  },
  fiddlesticks: { name: '피들스틱', chosung: 'ㅍㄷㅅㅌ', positions: ['JUNGLE'], idx: 28 },
  fiora: { name: '피오라', chosung: 'ㅍㅇㄹ', positions: ['TOP'], idx: 29 },
  fizz: { name: '피즈', chosung: 'ㅍㅈ', positions: ['MID'], idx: 30 },
  heimerdinger: { name: '하이머딩거', chosung: 'ㅎㅇㅁㄷㄱ', positions: ['TOP'], idx: 38 },
  hecarim: { name: '헤카림', chosung: 'ㅎㅋㄹ', positions: ['JUNGLE'], idx: 37 },
};

export default championsMeta;