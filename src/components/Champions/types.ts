import { ChampionPosition } from '@/lib/static/championsMeta';

export interface ChampionCardProps {
  idx: number; // Image Sprite idx
  name: string; // 한글 챔피언 이름
  positions: ChampionPosition[]; // 챔피언 주 포지션
}
