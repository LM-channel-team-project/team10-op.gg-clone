import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ChampionDetailsHeader from '@/components/ChampionDetails/ChampionDetailsHeader';
import ChampionDetailsMain from '@/components/ChampionDetails/ChampionDetailsMain/ChampionDetailsMain';
import axios from 'axios';

function Champion({ item, championName }: any) {
  console.log(item);
  console.log(championName);
  // const [championData, setChampionData] = useState({});
  // const { query, isReady } = useRouter();

  // // 챔피언 이름
  // const { champion } = query;
  // let championUrl: string = '';

  // // 이 api를 나중에 lib/api/champion 폴더 만들어서 빼고 임포트해서 써
  // const fetchChampion = async (championUrl: string) => {
  //   const response = await axios.get(
  //     `http://ddragon.leagueoflegends.com/cdn/11.7.1/data/ko_KR/champion/${championUrl}.json`,
  //   );
  //   return response.data;
  // };

  // useEffect(() => {
  //   if (!isReady) return;
  //   async function fetchAndSetChampion() {
  //     championUrl = (champion as string).replace(/(^|\s)\S/g, (char) => char.toUpperCase());
  //     const data = await fetchChampion(championUrl);
  //     setChampionData(data);
  //     console.log(championUrl);
  //   }

  //   fetchAndSetChampion();
  // }, [champion]);
  return (
    <>
      <ChampionDetailsHeader champion={item} championName={championName} />
      <ChampionDetailsMain />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const championName: string = context.params.champion;
  const championUrl: string = championName.replace(/(^|\s)\S/g, (char: string) =>
    char.toUpperCase(),
  );
  const apiUrl = `http://ddragon.leagueoflegends.com/cdn/11.7.1/data/ko_KR/champion/${championUrl}.json`;
  // const apiUrl = `http://ddragon.leagueoflegends.com/cdn/11.7.1/data/ko_KR/champion/Garen.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  console.log(championUrl);

  return {
    props: {
      item: data,
      championName: championUrl,
    },
  };
}

export default Champion;
