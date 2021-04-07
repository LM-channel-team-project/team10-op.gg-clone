// components
import ChampionsContainer from '@/components/Champions';
import ContentMain from '@/components/Champions/ContentMain';
import ContentSide from '@/components/Champions/ContentSide';

function Champions() {
  return (
    <ChampionsContainer>
      <ContentMain />
      <ContentSide />
    </ChampionsContainer>
  );
}

export default Champions;
