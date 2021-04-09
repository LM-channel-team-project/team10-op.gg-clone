// styled-components
import { ChampionsPageContainer, MessageSection, ChampionsContentSection } from './style';

interface ChampionsPageProps {
  children?: JSX.Element | JSX.Element[];
}

const ChampionsPage = ({ children }: ChampionsPageProps) => {
  return (
    <ChampionsPageContainer>
      <MessageSection>
        <p className="message__left">
          챔피언 분석은 플래티넘 티어 이상의 랭크 게임만을 수집힙니다.
        </p>
        <p className="message__right">
          <img src="assets/champions/icon-tip.png" alt="tip" />
          Korea-버전 : 11.07
        </p>
      </MessageSection>
      <ChampionsContentSection>{children}</ChampionsContentSection>
    </ChampionsPageContainer>
  );
};

export default ChampionsPage;
