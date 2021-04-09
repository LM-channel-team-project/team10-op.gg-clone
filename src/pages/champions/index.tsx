import { createContext } from 'react';
import { GetServerSideProps } from 'next';
// components
import ChampionsContainer from '@/components/Champions';
import ContentMain from '@/components/Champions/ContentMain';
import ContentSide from '@/components/Champions/ContentSide';
// mockup data
import {
  mockUpRankData,
  TableData,
} from '@/components/Champions/ContentSide/ContentSideList/ChampionRankTable/types';
import { ChampionsContentSideNavbarType } from '@/components/Champions/ContentSide/ContentSideNavbar/types';

interface ChampionsPageProps {
  initialData: Record<ChampionsContentSideNavbarType, TableData[]>;
}

export const ChampionRankContext = createContext<
  Record<ChampionsContentSideNavbarType, TableData[]> | undefined
>(undefined);

const Champions = ({ initialData }: ChampionsPageProps) => {
  return (
    <ChampionsContainer>
      <ContentMain />
      <ChampionRankContext.Provider value={initialData}>
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
      initialData: mockUpRankData,
    },
  };
};

export default Champions;
