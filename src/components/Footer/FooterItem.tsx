import React from 'react';
import S from './style';

interface FooterItem extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  currentPath: string;
}

function FooterItem({ children, href, currentPath, ...props }: FooterItem) {
  return (
    <S.FooterItemLink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      currentPath={currentPath}
      {...props}
    >
      {children}
    </S.FooterItemLink>
  );
}

export default React.memo(FooterItem);
