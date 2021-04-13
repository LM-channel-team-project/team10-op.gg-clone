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
  code: string;
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

export const bootsData: BootsType[] = [
  {
    code: '3047', //
    name: '판금 장화',
    pickRate: '66.28',
    pickCount: '12,100',
    winRate: '51.84',
  },
  {
    code: '3111',
    name: '헤르메스의 발걸음',
    pickRate: '31.30',
    pickCount: '5,714',
    winRate: '54.48',
  },
  {
    code: '3009', //
    name: '신속의 장화',
    pickRate: '0.94',
    pickCount: '171',
    winRate: '58.58',
  },
];
