import useSWR from 'swr';
import { SummonerRank } from '@/types/summoner';
import getSummoner from '@/lib/api/getSummoner';
import { AxiosError } from 'axios';

export default function useSummoner(value?: string) {
  const { data, error, isValidating } = useSWR<SummonerRank, AxiosError>(
    refineInput(value),
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
    },
  );

  return {
    summoner: data,
    error,
    isValidating,
  };
}

async function fetcher(summonerName: string) {
  const summoner = await getSummoner(summonerName);
  return summoner;
}

function refineInput(value?: string) {
  if (!value) return null;
  return value.length === 2 ? value[0] + ' ' + value[1] : value;
}
