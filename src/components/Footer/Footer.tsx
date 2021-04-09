import React from 'react';

import FooterItem from './FooterItem';
import Icon from '../Common/Icon';

import S from './style';
import { COPYRIGHT, FOOTER_ADDRESS_LINKS, SNS_ICON_LINKS } from '@/lib/static/footerMeta';

function Footer({ currentPath }: { currentPath: string }) {
  return (
    <S.FooterContainer currentPath={currentPath}>
      <address className="footer-address">
        {FOOTER_ADDRESS_LINKS.map((link) => (
          <FooterItem key={link.name} href={link.href} currentPath={currentPath}>
            {link.name}
          </FooterItem>
        ))}
      </address>
      <div className="footer-body">
        <p className="footer-copyright">{COPYRIGHT}</p>
        {SNS_ICON_LINKS.map((icon) => (
          <FooterItem
            key={icon.name}
            href={icon.href}
            currentPath={currentPath}
            className="sns-icon"
          >
            <Icon name={icon.name} />
          </FooterItem>
        ))}
      </div>
    </S.FooterContainer>
  );
}

export default React.memo(Footer);
