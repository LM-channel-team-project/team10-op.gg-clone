// components
import ContentSideNavbar from './ContentSideNavbar';
import ContentSideList from './ContentSideList';

// styled-components
import { ContentSideContainer } from './styles';
import { useState } from 'react';

// types, interfaces
import { ChampionsContentSideNavbarType } from './ContentSideNavbar/types';

const ContentSide = () => {
  const [selectedItem, setSelectedItem] = useState<ChampionsContentSideNavbarType>('티어');
  return (
    <ContentSideContainer>
      <ContentSideNavbar {...{ selectedItem, setSelectedItem }} />
      <ContentSideList navItem={selectedItem} />
    </ContentSideContainer>
  );
};

export default ContentSide;
