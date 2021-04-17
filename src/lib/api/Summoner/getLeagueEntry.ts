import client from '../client';

import { BaseLeagueEntry } from '@/types/summoner';

export async function getLeagueEntry(encryptedSummonerId: string) {
  const response = await client.get<BaseLeagueEntry[]>(
    `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`,
  );
  return response.data;
}
