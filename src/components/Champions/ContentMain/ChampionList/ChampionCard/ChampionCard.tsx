// types
import { ChampionCardProps } from '@/components/Champions/types';
import { ChampionPosition, ChampionPositionMap } from '@/lib/static/championsMeta';
// styled-components
import { ChampionImage } from '@/components/Champions/style';
import { ChampionCardContainer, PositionTags } from './styles';

const ChampionCard = ({ idx, name, positions, isRotation }: ChampionCardProps) => {
  const createPositionTag = (tags: ChampionPosition[]) =>
    tags.map((tag) => (
      <div className="position-tags__tag" key={tag}>
        <span>{ChampionPositionMap[tag]}</span>
      </div>
    ));
  // TODO Link 추가
  return (
    <ChampionCardContainer>
      <div className={`champion-card__image-container ${isRotation && 'rotation'}`}>
        <ChampionImage width="82" isRotation={isRotation} idx={idx} />
        <PositionTags>{createPositionTag(positions)}</PositionTags>
        {isRotation && <img src="assets/champions/icon-notice.png" alt="rotation" />}
      </div>
      <p className="champion-card__champion-name">{name}</p>
    </ChampionCardContainer>
  );
};

export default ChampionCard;
