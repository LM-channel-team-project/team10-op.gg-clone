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
