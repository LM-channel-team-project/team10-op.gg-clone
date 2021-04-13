export interface CoreType {
  [url: string]: string;
  first: string;
  second: string;
  third: string;
  pickRate: string;
  pickCount: string;
  winRate: string;
}

export interface BootsType {
  url: string;
  name: string;
  pickRate: string;
  pickCount: string;
  winRate: string;
}

export interface StartItemType {
  [url: string]: string | undefined;
  first: string;
  second?: string;
  third?: string;
  pickRate: string;
  pickCount: string;
  winRate: string;
}

export interface SideItemType {
  url: string;
  name: string;
  pickRate: string;
  pickCount: string;
  winRate: string;
}

export const coreData: CoreType[] = [
  {
    first: '6631',
    second: '3053',
    third: '3742',
    pickRate: '27.93',
    pickCount: '1,911',
    winRate: '66.46',
  },
  {
    first: '6631',
    second: '3053',
    third: '3193',
    pickRate: '10.48',
    pickCount: '717',
    winRate: '59.55',
  },
  {
    first: '6631',
    second: '3742',
    third: '3053',
    pickRate: '6.72',
    pickCount: '460',
    winRate: '65.43',
  },
  {
    first: '6631',
    second: '3053',
    third: '3075',
    pickRate: '4.59',
    pickCount: '314',
    winRate: '42.10',
  },
  {
    first: '6631',
    second: '3053',
    third: '3065',
    pickRate: '3.35',
    pickCount: '229',
    winRate: '68.56',
  },
  {
    first: '6631',
    second: '3053',
    third: '4401',
    pickRate: '2.73',
    pickCount: '187',
    winRate: '52.94',
  },
  {
    first: '6631',
    second: '3742',
    third: '4401',
    pickRate: '2.40',
    pickCount: '164',
    winRate: '63.41',
  },
  {
    first: '6631',
    second: '3053',
    third: '3143',
    pickRate: '216',
    pickCount: '148',
    winRate: '53.38',
  },
];

export const coreDataOverview: CoreType[] = [
  {
    first: '6631',
    second: '3053',
    third: '3193',
    pickRate: '10.48',
    pickCount: '717',
    winRate: '59.55',
  },
  {
    first: '6631',
    second: '3742',
    third: '3053',
    pickRate: '6.72',
    pickCount: '460',
    winRate: '65.43',
  },
  {
    first: '6631',
    second: '3053',
    third: '3075',
    pickRate: '4.59',
    pickCount: '314',
    winRate: '42.10',
  },
  {
    first: '6631',
    second: '3053',
    third: '3065',
    pickRate: '3.35',
    pickCount: '229',
    winRate: '68.56',
  },
];

export const bootsData: BootsType[] = [
  {
    url: '3047', //
    name: '판금 장화',
    pickRate: '66.28',
    pickCount: '12,100',
    winRate: '51.84',
  },
  {
    url: '3111',
    name: '헤르메스의 발걸음',
    pickRate: '31.30',
    pickCount: '5,714',
    winRate: '54.48',
  },
  {
    url: '3009', //
    name: '신속의 장화',
    pickRate: '0.94',
    pickCount: '171',
    winRate: '58.58',
  },
];

export const bootsDataOverview: BootsType[] = [
  {
    url: '3111',
    name: '헤르메스의 발걸음',
    pickRate: '31.30',
    pickCount: '5,714',
    winRate: '54.48',
  },
  {
    url: '3009', //
    name: '신속의 장화',
    pickRate: '0.94',
    pickCount: '171',
    winRate: '58.58',
  },
];

export const startItemData: StartItemType[] = [
  {
    first: '1054',
    second: '2003',
    pickRate: '50.94',
    pickCount: '11,440',
    winRate: '51.77',
  },
  {
    first: '1055',
    second: '2003',
    pickRate: '45.16',
    pickCount: '10,143',
    winRate: '52.45',
  },
  {
    first: '1054',
    second: '2003',
    third: '3364',
    pickRate: '0.79',
    pickCount: '177',
    winRate: '50.28',
  },
  {
    first: '1055',
    second: '2003',
    pickRate: '0.61',
    pickCount: '138',
    winRate: '49.28',
  },
  {
    first: '2033',
    pickRate: '0.52',
    pickCount: '116',
    winRate: '44.83',
  },
];

export const startItemDataOverview: StartItemType[] = [
  {
    first: '1054',
    second: '2003',
    pickRate: '50.94',
    pickCount: '11,440',
    winRate: '51.77',
  },
  {
    first: '1055',
    second: '2003',
    pickRate: '45.16',
    pickCount: '10,143',
    winRate: '52.45',
  },
];

export const sideItemData: SideItemType[] = [
  {
    url: '6631', //
    name: '발걸음 분쇄기',
    pickRate: '16.41',
    pickCount: '20,317',
    winRate: '53.87',
  },
  {
    url: '3047',
    name: '판금 장화',
    pickRate: '11.79',
    pickCount: '14,595',
    winRate: '52.37',
  },
  {
    url: '3053', //
    name: '스테락의 도전',
    pickRate: '10.20',
    pickCount: '12,626',
    winRate: '59.99',
  },
  {
    url: '3111', //
    name: '헤르메스의 발걸음',
    pickRate: '5.53',
    pickCount: '6,850',
    winRate: '54.64',
  },
  {
    url: '1054', //
    name: '도란의 방패',
    pickRate: '5.12',
    pickCount: '6,341',
    winRate: '54.64',
  },
  {
    url: '1055', //
    name: '도란의 검',
    pickRate: '4.96',
    pickCount: '6,138',
    winRate: '51.27',
  },
  {
    url: '3742', //
    name: '망자의 갑옷',
    pickRate: '4.90',
    pickCount: '6.063',
    winRate: '62.26',
  },
  {
    url: '1028', //
    name: '루비 수정',
    pickRate: '3.92',
    pickCount: '4,860',
    winRate: '44.65',
  },
  {
    url: '3044', //
    name: '탐식의 망치',
    pickRate: '2.68',
    pickCount: '3,317',
    winRate: '62.26',
  },
  {
    url: '3066', //
    name: '비상의 월갑',
    pickRate: '2.64',
    pickCount: '3,268',
    winRate: '56.21',
  },
  {
    url: '3076', //
    name: '덤불 조끼',
    pickRate: '2.46',
    pickCount: '3,045',
    winRate: '50.11',
  },
  {
    url: '2031', //
    name: '충전형 물약',
    pickRate: '2.46',
    pickCount: '3,043',
    winRate: '43.58',
  },
  {
    url: '2055', //
    name: '제어 와드',
    pickRate: '1.78',
    pickCount: '2,205',
    winRate: '48.03',
  },
  {
    url: '3123', //
    name: '처형인의 대검',
    pickRate: '1.72',
    pickCount: '2,129',
    winRate: '52.47',
  },
  {
    url: '1031', //
    name: '쇠사슬 조끼',
    pickRate: '1.69',
    pickCount: '2,094',
    winRate: '55.11',
  },
  {
    url: '1037', //
    name: '곡괭이',
    pickRate: '1.64',
    pickCount: '2,030',
    winRate: '50.64',
  },
  {
    url: '1029', //
    name: '천 갑옷',
    pickRate: '1.56',
    pickCount: '1,935',
    winRate: '47.13',
  },
  {
    url: '3075', //
    name: '가시 갑옷',
    pickRate: '1.52',
    pickCount: '1,878',
    winRate: '59.80',
  },
  {
    url: '3067', //
    name: '점화석',
    pickRate: '1.22',
    pickCount: '1,509',
    winRate: '37.65',
  },
  {
    url: '3193', //
    name: '가고일 돌갑옷',
    pickRate: '1.18',
    pickCount: '1,457',
    winRate: '61.08',
  },
  {
    url: '1033', //
    name: '마법무효화의 망토',
    pickRate: '0.90',
    pickCount: '1,115',
    winRate: '50.22',
  },
  {
    url: '1036', //
    name: '롱소드',
    pickRate: '0.89',
    pickCount: '1,099',
    winRate: '37.94',
  },
  {
    url: '3065', //
    name: '정령의 형상',
    pickRate: '0.86',
    pickCount: '1,068',
    winRate: '61.33',
  },
  {
    url: '3071', //
    name: '칠흑의 양날 도끼',
    pickRate: '0.86',
    pickCount: '1,063',
    winRate: '60.11',
  },
  {
    url: '4401', //
    name: '대자연의 힘',
    pickRate: '0.86',
    pickCount: '1,063',
    winRate: '56.26',
  },
  {
    url: '3105', //
    name: '군단의 방패',
    pickRate: '0.85',
    pickCount: '1,058',
    winRate: '55.77',
  },
  {
    url: '3078', //
    name: '삼위일체',
    pickRate: '0.70',
    pickCount: '862',
    winRate: '53.13',
  },
  {
    url: '3143', //
    name: '란두인의 예언',
    pickRate: '0.60',
    pickCount: '738',
    winRate: '58.67',
  },
  {
    url: '3133', //
    name: '콜필드의 전투 망치',
    pickRate: '0.55',
    pickCount: '687',
    winRate: '56.33',
  },
];
