import { ChampionInfo } from '@/types/champion';
import client from './client';

export default async function getChampion(championName = '') {
  const championUrl = championName.replace(/(^|\s)\S/g, (char: string) => char.toUpperCase());
  const apiUrl = `https://ddragon.leagueoflegends.com/cdn/11.7.1/data/ko_KR/champion/${championUrl}.json`;

  const response = await client.get<ChampionInfo>(apiUrl);
  const { data } = response.data;
  const champion = Object.values(data)[0];
  return champion;
}
