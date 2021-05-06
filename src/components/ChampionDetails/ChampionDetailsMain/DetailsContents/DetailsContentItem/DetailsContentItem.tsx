import { Container, ContentMain, ContentSide, ChampionBox } from './styles';
import CoreTable from './CoreTable';
import BootsTable from './BootsTable';
import StartItemTable from './StartItemTable';
import SideTable from './SideTable';

function DetailsContentItem() {
  return (
    <Container>
      <ContentMain>
        <ChampionBox>
          <CoreTable />
        </ChampionBox>
        <ChampionBox>
          <BootsTable />
        </ChampionBox>
        <ChampionBox>
          <StartItemTable />
        </ChampionBox>
      </ContentMain>
      <ContentSide>
        <ChampionBox>
          <SideTable />
        </ChampionBox>
      </ContentSide>
    </Container>
  );
}

export default DetailsContentItem;
