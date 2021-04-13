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
