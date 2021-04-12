import React, { useCallback, useContext } from 'react';
// ctx
import { RotationChampionIdContext } from '@/pages/champions';
// components
import ChampionCard from './ChampionCard';
// styled-components
import { ChampionListConatiner } from './styles';
// meta
import ChampionsMeta from '@/lib/static/championsMeta';
// types
import { filterType } from '../ContentMain';
import { ChampionCardProps } from '../../types';

interface ChampionListProps {
  type: filterType;
}

const ChampionList = ({ type }: ChampionListProps) => {
  const rotationChampionIds = useContext(RotationChampionIdContext);
  const koreanSortedChampions = useCallback(
    () =>
      Object.entries(ChampionsMeta)
        .map(([enName, value]): ChampionCardProps & { enName: string } => ({
          enName,
          ...value,
          isRotation: rotationChampionIds !== undefined && value.championId in rotationChampionIds,
        }))
        .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)),
    [],
  );

  const createChampionCards = (type: filterType) => {
    if (type === 'ALL') {
      return koreanSortedChampions().map((champion) => (
        <ChampionCard {...champion} key={champion.enName} />
      ));
    }
    if (type === 'ROTATION') {
      return koreanSortedChampions()
        .filter((champion) => champion.isRotation)
        .map((champion) => <ChampionCard {...champion} key={champion.enName} />);
    }
    return koreanSortedChampions()
      .filter((champion) => champion.positions.includes(type))
      .map((champion) => <ChampionCard {...champion} key={champion.enName} />);
  };
  return <ChampionListConatiner>{createChampionCards(type)}</ChampionListConatiner>;
};

export default ChampionList;
