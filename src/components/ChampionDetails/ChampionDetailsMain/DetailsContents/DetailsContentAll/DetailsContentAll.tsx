import React from 'react';
import { Container, DetailsContentAllMain, DetailsContentAllSide, OverviewTable } from './styles';
import { ChampionDetailsMainProps } from '../../ChampionDetailsMain';
import { getSkillsInfo } from '@/components/ChampionDetails/championDetailsInfo';
import SpellAndSkillTable from './SpellAndSkillTable';
import ItemTable from './ItemTable';
import SideItems from './SideItems';
import RuneTable from './RuneTable';

function DetailsContentAll({ champion }: ChampionDetailsMainProps) {
  // console.log(champion);
  const championSkillUrl = getSkillsInfo(champion);
  const skills = championSkillUrl.slice(1, 4);
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const build = ['Q', 'E', 'W', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E'];
  return (
    <Container>
      <DetailsContentAllMain>
        <OverviewTable>
          <SpellAndSkillTable skills={skills} levels={levels} build={build} />
        </OverviewTable>
        <OverviewTable>
          <ItemTable />
        </OverviewTable>
        <OverviewTable>
          <RuneTable />
        </OverviewTable>
      </DetailsContentAllMain>
      <DetailsContentAllSide>
        <SideItems />
      </DetailsContentAllSide>
    </Container>
  );
}

export default DetailsContentAll;
