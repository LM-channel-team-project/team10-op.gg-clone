import { createContext } from 'react';
import { GetServerSideProps } from 'next';
// components
import ChampionsContainer from '@/components/Champions';
import ContentMain from '@/components/Champions/ContentMain';
import ContentSide from '@/components/Champions/ContentSide';
// mockup data
import {
  mockUpRankData,
  mockUpRotationChampionId,
  TableData,
} from '@/components/Champions/ContentSide/ContentSideList/ChampionRankTable/types';
// types
import { ChampionsContentSideNavbarType } from '@/components/Champions/ContentSide/ContentSideNavbar/types';

type ChampionRankType = Record<ChampionsContentSideNavbarType, TableData[]>;
interface ChampionsPageProps {
  rotationChampionId: number[];
  championRankData: ChampionRankType;
}

export const RotationChampionIdContext = createContext<number[] | undefined>(undefined);
export const ChampionRankContext = createContext<ChampionRankType | undefined>(undefined);

const Champions = ({ championRankData, rotationChampionId }: ChampionsPageProps) => {
  console.log(rotationChampionId);
  return (
    <ChampionsContainer>
      <RotationChampionIdContext.Provider value={rotationChampionId}>
        <ContentMain />
      </RotationChampionIdContext.Provider>
      <ChampionRankContext.Provider value={championRankData}>
        <ContentSide />
      </ChampionRankContext.Provider>
    </ChampionsContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // TODO : Champions Rank Data Fetch
  // MockUpData
  return {
    props: {
      rotationChampionId: mockUpRotationChampionId,
      championRankData: mockUpRankData,
    },
  };
};

export default Champions;
