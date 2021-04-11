import HomeCommunityItem from './HomeCommunityItem';
import S from './style';

import { TEAM_ADDRESS_LINKS } from '@/lib/static/basicMeata';

function HomeCommunity() {
  return (
    <S.HomeCommunityContainer>
      <a
        href="https://github.com/LM-channel-team-project/team-10"
        target="_blank"
        rel="noopener noreferrer"
        className="home-community-anchor"
      >
        OP.GG Clone 저장소
      </a>

      <ul className="content-list">
        {TEAM_ADDRESS_LINKS.map((link, i) => (
          <HomeCommunityItem key={link.login} index={i + 1} {...link} />
        ))}
      </ul>
    </S.HomeCommunityContainer>
  );
}

export default HomeCommunity;
