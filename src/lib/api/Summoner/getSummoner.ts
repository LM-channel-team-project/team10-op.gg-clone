import client from '../client';

import { BaseSummoner } from '@/types/summoner';

export async function getSummoner(summonerName: string) {
  const response = await client.get<BaseSummoner>(
    `/lol/summoner/v4/summoners/by-name/${summonerName}`,
  );
  return response.data;
}
