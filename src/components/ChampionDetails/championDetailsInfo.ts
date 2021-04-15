import { IChampion } from '@/types/champion';

export const getSkillsInfo = (champion: IChampion) => {
  const championPassiveSkill = `http://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/${champion.passive.image.full}`;
  const championSkillUrl: string[] = [];
  championSkillUrl.push(championPassiveSkill);
  champion.spells.map((spell) =>
    championSkillUrl.push(
      `http://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/${spell.image.full}`,
    ),
  );

  return championSkillUrl;
};

export const fragments = [
  ['5008', '5005', '5007'],
  ['5008', '5002', '5003'],
  ['5001', '5002', '5003'],
];

export const precisionRune = [
  ['8005', '8008', '8021', '8010'],
  ['9101', '9111', '8009'],
  ['9104', '9105', '9103'],
  ['8014', '8017', '8299'],
];

export const firstSkillOrder = [
  {
    skills: ['Q', 'W', 'E', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W'],
    pickRate: 33.88,
    pickCount: 207,
    winRate: 60.87,
  },
  {
    skills: ['Q', 'E', 'W', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W'],
    pickRate: 32.9,
    pickCount: 201,
    winRate: 66.67,
  },
  {
    skills: ['W', 'Q', 'E', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W'],
    pickRate: 14.08,
    pickCount: 86,
    winRate: 67.47,
  },
  {
    skills: ['W', 'E', 'Q', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W'],
    pickRate: 9.17,
    pickCount: 56,
    winRate: 53.57,
  },
  {
    skills: ['E', 'Q', 'W', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W'],
    pickRate: 1.8,
    pickCount: 11,
    winRate: 72.73,
  },
];

export const secondSkillOrder = [
  {
    skills: ['Q', 'W', 'E', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E'],
    pickRate: 0.98,
    pickCount: 6,
    winRate: 66.67,
  },
  {
    skills: ['W', 'Q', 'E', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E'],
    pickRate: 0.82,
    pickCount: 5,
    winRate: 60.0,
  },
  {
    skills: ['Q', 'E', 'W', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E'],
    pickRate: 0.65,
    pickCount: 4,
    winRate: 75.0,
  },
  {
    skills: ['W', 'E', 'Q', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E'],
    pickRate: 0.33,
    pickCount: 2,
    winRate: 50.0,
  },
  {
    skills: ['Q', 'E', 'W', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'E', 'W', 'W', 'E'],
    pickRate: 0.16,
    pickCount: 1,
    winRate: 0.0,
  },
];
