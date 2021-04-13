import { Container, ContentMain, ContentSide, ChampionBox } from './styles';
import CoreTable from './CoreTable';
import BootsTable from './BootsTable';
import StartItemTable from './StartItemTable';

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
      <ContentSide>사이드</ContentSide>
    </Container>
  );
}

export default DetailsContentItem;
