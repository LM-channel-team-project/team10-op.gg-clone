type Rank = 'I' | 'II' | 'III' | 'IV' | 'V';
export interface BaseSummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface BaseLeagueEntry {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: Rank;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export interface SummonerRank extends BaseSummoner {
  tier?: string;
  rank?: Rank;
  leaguePoints?: number;
}
