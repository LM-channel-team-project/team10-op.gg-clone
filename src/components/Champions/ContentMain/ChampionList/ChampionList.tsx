import React, { useCallback } from 'react';
// components
import ChampionCard from './ChampionCard';
// styled-components
import { ChampionListConatiner } from './styles';
// meta
import ChampionsMeta from '@/components/Champions/championsMeta';
// types
import { filterType } from '../ContentMain';

interface ChampionListProps {
  type: filterType;
}

const ChampionList = ({ type }: ChampionListProps) => {
  const koreanSortedChampions = useCallback(
    () =>
      Object.entries(ChampionsMeta)
        .map(([enName, value]) => ({ enName, ...value }))
        .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)),
    [],
  );

  const createChampionCards = (type: filterType) => {
    console.log(type);
    if (type === 'ALL') {
      return koreanSortedChampions().map((champion) => (
        <ChampionCard {...champion} key={champion.enName} />
      ));
    } else {
      return koreanSortedChampions()
        .filter((champion) => champion.positions.includes(type))
        .map((champion) => <ChampionCard {...champion} key={champion.enName} />);
    }
  };
  return <ChampionListConatiner>{createChampionCards(type)}</ChampionListConatiner>;
};

export default ChampionList;
