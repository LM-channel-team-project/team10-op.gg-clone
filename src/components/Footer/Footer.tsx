import React from 'react';

import FooterItem from './FooterItem';
import Icon from '../Common/Icon';

import S from './style';
import { COPYRIGHT, TEAM_ADDRESS_LINKS, SNS_ICON_LINKS } from '@/lib/static/basicMeta';

function Footer({ currentPath }: { currentPath: string }) {
  return (
    <S.FooterContainer currentPath={currentPath}>
      <address className="footer-address">
        {TEAM_ADDRESS_LINKS.map((link) => (
          <FooterItem key={link.login} href={link.html_url} currentPath={currentPath}>
            {link.login}
          </FooterItem>
        ))}
      </address>
      <div className="footer-body">
        <p className="footer-copyright">{COPYRIGHT}</p>
        {SNS_ICON_LINKS.map((icon) => (
          <FooterItem
            key={icon.login}
            href={icon.html_url}
            currentPath={currentPath}
            className="sns-icon"
          >
            <Icon name={icon.login} />
          </FooterItem>
        ))}
      </div>
    </S.FooterContainer>
  );
}

export default React.memo(Footer);
