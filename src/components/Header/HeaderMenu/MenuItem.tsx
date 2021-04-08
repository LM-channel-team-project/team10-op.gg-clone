import React from 'react';
import Link from 'next/link';

import S from './style';
import { HeaderMenu } from '@/types/header';

function MenuItem({ menu, asPath }: { menu: HeaderMenu; asPath: string }) {
  const { name, href } = menu;
  const isActived = checkActive(asPath, href, name);

  return (
    <S.Meun isActived={isActived}>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </S.Meun>
  );
}

function checkActive(asPath: string, href: string, name: string): boolean {
  if (asPath === href) return true;
  return asPath.match(/^\/champions/) && name === '챔피언 분석' ? true : false;
}

export default React.memo(MenuItem);
