export interface HeaderAnchor {
  name: '리그오브레전드' | '배틀 그라운드' | '오버워치' | '포트나이트' | '레인보우식스 시즈';
  imagePath: string;
  targetUrl?: string;
}

export interface HeaderMenu {
  name: '#집에있자' | '챔피언 분석' | '통계' | '랭킹';
  href: '/' | '/champions' | '/ranking' | '/statistics';
}
