import GnbNavItem from './GnbNavItem';
import HeaderLogo from './HeaderLogo';

import S from './style';
import { HEADER_ANCHOR_DATA } from '@/lib/static/headerMeta';

function HeaderGnb() {
  return (
    <S.GnbContainer>
      <HeaderLogo />
      <S.GnbNav>
        {HEADER_ANCHOR_DATA.map((anchorData) => (
          <GnbNavItem key={anchorData.name} anchorData={anchorData} />
        ))}
      </S.GnbNav>
    </S.GnbContainer>
  );
}

export default HeaderGnb;
