import { ChampionPosition, ChampionPositionMap } from '@/components/Champions/championsMeta';
import React from 'react';
import { ChampionCardContainer, ChampionCardImage, PositionTags } from './styles';

interface ChampionCardProps {
  idx: number; // Image Sprite idx
  name: string; // 한글 챔피언 이름
  positions: ChampionPosition[]; // 챔피언 주 포지션
}

const ChampionCard = ({ idx, name, positions }: ChampionCardProps) => {
  const createPositionTag = (tags: ChampionPosition[]) =>
    tags.map((tag) => (
      <div className="position-tags__tag" key={tag}>
        <span>{ChampionPositionMap[tag]}</span>
      </div>
    ));
  // TODO Link 추가
  return (
    <ChampionCardContainer>
      <div className="champion-card__image-container">
        {/* TODO Image Sprite 처리 */}
        <ChampionCardImage idx={idx} />
        <PositionTags>{createPositionTag(positions)}</PositionTags>
      </div>
      <p className="champion-card__champion-name">{name}</p>
    </ChampionCardContainer>
  );
};

export default ChampionCard;
