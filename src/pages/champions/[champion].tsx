import { useRouter } from 'next/router';
import ChampionDetailsHeader from '@/components/ChampionDetails/ChampionDetailsHeader';
// import ChampionDetailsMain from '@/components/ChampionDetails/ChampionDetailsMain/ChampionDetailsMain';

function Champion() {
  const router = useRouter();
  // 챔피언 이름
  const { champion } = router.query;
  return (
    <>
      <ChampionDetailsHeader />
      {/* <ChampionDetailsMain /> */}
    </>
  );
}

export default Champion;
