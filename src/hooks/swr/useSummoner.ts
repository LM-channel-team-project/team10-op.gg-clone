import useSWR from 'swr';
import { SummonerRank } from '@/types/summoner';
import { getSummoner, getLeagueEntry } from '@/lib/api/Summoner';
import { AxiosError } from 'axios';

export default function useSummoner(value?: string) {
  const { data, error } = useSWR<SummonerRank, AxiosError>(refineInput(value), fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
  });

  return [data, error] as [SummonerRank, AxiosError];
}

async function fetcher(summonerName: string) {
  const summoner = await getSummoner(summonerName);
  const leagueEntry = await getLeagueEntry(summoner.id);

  return {
    ...summoner,
    ...leagueEntry[0],
  } as SummonerRank;
}

function refineInput(value?: string) {
  if (!value) return null;
  return value.length === 2 ? value[0] + ' ' + value[1] : value;
}
