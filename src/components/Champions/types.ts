import { ChampionPosition } from '@/lib/static/championsMeta';

export interface ChampionCardProps {
  idx: number; // Image Sprite idx
  enName: string; // 챔피언 영어 이름
  name: string; // 챔피언 한글 이름
  positions: ChampionPosition[]; // 챔피언 주 포지션
  isRotation: boolean; // check Rotation Champion
}
