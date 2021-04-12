import { IS_PROD } from '@/constants';

export const META_TAG_DATA = {
  url: IS_PROD ? 'production.domain.com' : 'locahost:3000',
  discription:
    '롤 전적, 모든 게임의 전적, 챔프 평점, KDA, 승률을 볼 수 있고 리플을 보거나 자신의 게임을 녹화를 할 수 있습니다. 지금 바로 당신의 소환사명을 검색해보세요!',
  imagePath: '/assets/logo/meta-og-image.png',
};
