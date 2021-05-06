// styled-components
import HoverContainer from '../Common/HoverContainer';
import { ChampionsPageContainer, MessageSection, ChampionsContentSection } from './style';

interface ChampionsPageProps {
  children?: JSX.Element | JSX.Element[];
}

const ChampionsPage = ({ children }: ChampionsPageProps) => {
  const hoverText =
    '현재 한국이외의 데이터가 충분하지 않습니다. 해외 서버의 데이터가 확보되면 지역 기반 챔피언 데이터를 제공할 예정입니다.';
  return (
    <ChampionsPageContainer>
      <MessageSection>
        <p className="message__left">
          챔피언 분석은 플래티넘 티어 이상의 랭크 게임만을 수집힙니다.
        </p>
        <p className="message__right">
          <HoverContainer text={hoverText}>
            <img src="assets/champions/icon-tip.png" alt="tip" />
          </HoverContainer>
          Korea-버전 : 11.07
        </p>
      </MessageSection>
      <ChampionsContentSection>{children}</ChampionsContentSection>
    </ChampionsPageContainer>
  );
};

export default ChampionsPage;
