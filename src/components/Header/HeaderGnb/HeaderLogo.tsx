import Link from 'next/link';

import S from './style';
import { LOGO_STRING } from '@/lib/static/headerMeta';

function HeaderLogo() {
  return (
    <S.Logo>
      <Link href="/">
        <a>{LOGO_STRING}</a>
      </Link>
    </S.Logo>
  );
}

export default HeaderLogo;
