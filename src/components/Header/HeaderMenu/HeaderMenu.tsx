import React from 'react';
import { useRouter } from 'next/router';

import MenuItem from './MenuItem';

import S from './style';
import { HEADER_MENU } from '@/lib/static/headerMeta';

function HeaderNav() {
  const router = useRouter();

  return (
    <S.HeaderMenu>
      <ul>
        {HEADER_MENU.map((menu) => (
          <MenuItem key={menu.name} menu={menu} asPath={router.asPath} />
        ))}
      </ul>
    </S.HeaderMenu>
  );
}

export default HeaderNav;
