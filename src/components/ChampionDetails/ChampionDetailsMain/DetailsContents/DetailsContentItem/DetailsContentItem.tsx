import { Container, ContentMain, ContentSide, ChampionBox } from './styles';
import CoreTable from './CoreTable';
import BootsTable from './BootsTable';

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
      </ContentMain>
      <ContentSide>사이드</ContentSide>
    </Container>
  );
}

export default DetailsContentItem;
