import { HeaderAnchor, HeaderMenu } from '@/types/header';

export const LOGO_STRING = 'OP.GG';

const IMAGE_BASE_PATH = '/assets/svg';
export const HEADER_ANCHOR_DATA: HeaderAnchor[] = [
  { name: '리그오브레전드', imagePath: `${IMAGE_BASE_PATH}/lol-logo.svg` },
  {
    name: '배틀 그라운드',
    imagePath: `${IMAGE_BASE_PATH}/battle-logo.svg`,
    targetUrl: 'https://pubg.op.gg/',
  },
  {
    name: '오버워치',
    imagePath: `${IMAGE_BASE_PATH}/overwatch-logo.svg`,
    targetUrl: 'https://overwatch.op.gg/',
  },
  {
    name: '포트나이트',
    imagePath: `${IMAGE_BASE_PATH}/fortnite-logo.svg`,
    targetUrl: 'https://fortnite.op.gg/',
  },
  {
    name: '레인보우식스 시즈',
    imagePath: `${IMAGE_BASE_PATH}/rainbow-six-logo.svg`,
    targetUrl: 'https://r6.op.gg/',
  },
];

export const HEADER_MENU: HeaderMenu[] = [
  {
    name: '#집에있자',
    href: '/',
  },
  {
    name: '챔피언 분석',
    href: '/champions',
  },
  {
    name: '랭킹',
    href: '/ranking',
  },
  {
    name: '통계',
    href: '/statistics',
  },
];
