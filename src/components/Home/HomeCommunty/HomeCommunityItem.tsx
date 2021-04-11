import Image from 'next/image';
import S from './style';

interface HomeCommunityItemProps {
  index: number;
  login: string;
  html_url: string;
  avatar_url?: string;
}

function HomeCommunityItem({ index, login, html_url, avatar_url }: HomeCommunityItemProps) {
  return (
    <S.CommnityItem index={index}>
      <a
        href="https://github.com/LM-channel-team-project/team-10"
        target="_blank"
        rel="noopener noreferrer"
        className="community-anchor"
      >
        <div className="community-index">{index}</div>
        <div className="community-image">
          <img src={avatar_url} />
        </div>
        <div className="community-title">{login}</div>
      </a>
    </S.CommnityItem>
  );
}

export default HomeCommunityItem;
