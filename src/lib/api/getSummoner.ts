import client from './client';

import { SummonerRank } from '@/types/summoner';

async function getSummoner(summonerName: string) {
  const response = await client.get<SummonerRank>(`summoners/${summonerName}`);
  return response.data;
}

export default getSummoner;
