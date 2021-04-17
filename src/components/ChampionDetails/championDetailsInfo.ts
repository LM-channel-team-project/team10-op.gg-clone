import { IChampion } from '@/types/champion';

export interface keystonesType {
  mainRune: string;
  keystone: string;
  subRune: string;
  pickRate: number;
  winRate: number;
}

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

export const keystones = [
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=c_scale,q_auto,w_26&v=1618413338',
    keystone:
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=c_scale,q_auto,w_42&v=1618413338',
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=c_scale,q_auto,w_32&v=1618413338',
    pickRate: 63.17,
    winRate: 51.83,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=c_scale,q_auto,w_26&v=1618413338',
    keystone:
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=c_scale,q_auto,w_42&v=1618413338',
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=c_scale,q_auto,w_32&v=1618413338',
    pickRate: 32.74,
    winRate: 54.72,
  },
];

export const runes1 = [
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8224.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8226.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8275.png?image=q_auto:best&v=1618413338',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8210.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8234.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8233.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8237.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8232.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8236.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 27.1,
    pickCount: 351,
    winRate: 51.57,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8224.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8226.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8275.png?image=q_auto:best&v=1618413338',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8210.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8234.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8233.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8237.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8232.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8236.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    pickRate: 10.35,
    pickCount: 134,
    winRate: 49.25,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8224.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8226.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8275.png?image=q_auto:best&v=1618413338',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8210.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8234.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8233.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8237.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8232.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8236.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    pickRate: 8.49,
    pickCount: 110,
    winRate: 48.18,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8224.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8226.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8275.png?image=q_auto:best&v=1618413338',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8210.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8234.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8233.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8237.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8232.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8236.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    pickRate: 3.32,
    pickCount: 43,
    winRate: 48.84,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8224.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8226.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8275.png?image=q_auto:best&v=1618413338',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8210.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8234.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8233.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8237.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8232.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8236.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 3.17,
    pickCount: 41,
    winRate: 56.1,
  },
];

export const runes2 = [
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8446.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8463.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8401.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8429.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8444.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8473.png?image=q_auto:best&v=1618413338',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8451.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8453.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8242.png?image=q_auto:best&v=1618413338',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 6.49,
    pickCount: 84,
    winRate: 52.38,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8446.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8463.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8401.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8429.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8444.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8473.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8451.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8453.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8242.png?image=q_auto:best&v=1618413338',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 2.55,
    pickCount: 33,
    winRate: 60.61,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8446.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8463.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8401.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8429.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8444.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8473.png?image=q_auto:best&v=1618413338',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8451.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8453.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8242.png?image=q_auto:best&v=1618413338',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 2.24,
    pickCount: 29,
    winRate: 62.07,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8446.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8463.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8401.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8429.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8444.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8473.png?image=q_auto:best&v=1618413338',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8451.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8453.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8242.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 1.78,
    pickCount: 23,
    winRate: 52.17,
  },
  {
    mainRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1618413338',
    keystones: [
      '//opgg-static.akamaized.net/images/lol/perk/8005.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8021.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto:best&v=1618413338',
    ],
    mainFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9101.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9111.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8009.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/9104.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/9105.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/9103.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    mainThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8014.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8017.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8299.png?image=q_auto:best&v=1618413338',
    ],
    subRune:
      '//opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto:best&v=1618413338',
    subFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8446.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8463.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8401.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8429.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8444.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perk/8473.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    subThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perk/8451.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8453.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perk/8242.png?image=q_auto:best&v=1618413338',
    ],
    fragmentFirstLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5005.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5007.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentSecondLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5008.png?image=q_auto:best&v=1618413338',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=c_scale,q_auto,e_grayscale&v=1',
    ],
    fragmentThirdLine: [
      '//opgg-static.akamaized.net/images/lol/perkShard/5001.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5002.png?image=c_scale,q_auto,e_grayscale&v=1',
      '//opgg-static.akamaized.net/images/lol/perkShard/5003.png?image=q_auto:best&v=1618413338',
    ],
    pickRate: 1.78,
    pickCount: 23,
    winRate: 60.87,
  },
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
