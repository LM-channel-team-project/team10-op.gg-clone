import { IChampion } from '@/types/champion';
import ChampionDetailsHeader from '@/components/ChampionDetails/ChampionDetailsHeader';
import ChampionDetailsMain from '@/components/ChampionDetails/ChampionDetailsMain/ChampionDetailsMain';
import { GetServerSideProps } from 'next';
import getChampion from '@/lib/api/championInfo';

interface ChampionProps {
  champion: IChampion;
}

function Champion({ champion }: ChampionProps) {
  return (
    <>
      <ChampionDetailsHeader champion={champion} />
      <ChampionDetailsMain champion={champion} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ChampionProps, { champion: string }> = async (
  context,
) => {
  const championName = context.params?.champion;
  const champion = await getChampion(championName);

  return {
    props: {
      champion,
    },
  };
};

export default Champion;
