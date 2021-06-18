import { NextApiHandler } from 'next';
import axios, { AxiosError } from 'axios';
import qs from 'querystring';

import { BaseLeagueEntry, BaseSummoner } from '@/types/summoner';

const riotAPI = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    'X-Riot-Token': process.env.RIOT_GAMES_API_KEY,
  },
});

/**
 * 소환사 조회
 * GET /summoners/:name
 */
const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method == 'GET') {
      const { name } = req.query as { name: string };
      const { data: summoner } = await riotAPI.get<BaseSummoner>(
        `/lol/summoner/v4/summoners/by-name/${qs.escape(name)}`,
      );
      const { data: leagueEntry, status } = await riotAPI.get<BaseLeagueEntry[]>(
        `/lol/league/v4/entries/by-summoner/${summoner.id}`,
      );

      return res.status(status).json({ ...summoner, ...leagueEntry[0] });
    }
  } catch (error) {
    const e = error as AxiosError;
    if (e.response?.status !== 404) console.log(e.response?.data, e.response?.status);
    if ((e.response?.status as number) < 500) return res.status(e.response?.status as number).end();
    return res.status(500).json({ error });
  }
  return res.status(405).end();
};

export default handler;
