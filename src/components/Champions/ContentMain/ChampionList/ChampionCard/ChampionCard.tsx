// types
import { ChampionCardProps } from '@/components/Champions/types';
import { ChampionPosition, ChampionPositionMap } from '@/lib/static/championsMeta';

// styled-components
import { ChampionImage } from '@/components/Champions/style';
import { ChampionCardContainer, PositionTags } from './styles';

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
        <ChampionImage width="82" idx={idx} />
        <PositionTags>{createPositionTag(positions)}</PositionTags>
      </div>
      <p className="champion-card__champion-name">{name}</p>
    </ChampionCardContainer>
  );
};

export default ChampionCard;
