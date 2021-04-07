// hooks
import useSelectedTabItem from './useSelectedTabItem';

// components
import TabHeader from './TabHeader';

// styled-components
import { ContentSideListContainer } from './styles';

// types, interfaces
import { ContentSideListProps } from './types';

const ContentSideList = ({ navItem }: ContentSideListProps) => {
  const [tabItems, selectedTabItem, setSelectedTabItem] = useSelectedTabItem(navItem);
  return (
    <ContentSideListContainer>
      <TabHeader {...{ tabItems, selectedTabItem, setSelectedTabItem }} />
    </ContentSideListContainer>
  );
};

export default ContentSideList;
