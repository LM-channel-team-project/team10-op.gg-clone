import React, { useCallback } from 'react';
import Image from 'next/image';

import S from './style';
import { HeaderAnchor } from '@/types/header';

function GnbNavItem({ anchorData }: { anchorData: HeaderAnchor }) {
  const { name, imagePath, targetUrl } = anchorData;

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (!targetUrl) return;
      if (isConfirmed(name, targetUrl)) pageMove(targetUrl);
    },
    [targetUrl, name],
  );

  return (
    <S.NavItem onClick={onClick} isLol={name === '리그오브레전드'}>
      <div className="container">
        <Image src={imagePath} alt={` logo`} width="24px" height="24px" layout="fixed" />
        <span>{name}</span>
      </div>
    </S.NavItem>
  );
}

const isConfirmed = (name: string, targetUrl: string) => {
  return confirm(
    `${name} ( ${targetUrl} )는\n클론 사이트가 아닌 진짜 사이트입니다.\n\n이동하시겠습니까?`,
  );
};
const pageMove = (targetUrl: string) => {
  const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export default React.memo(GnbNavItem);
