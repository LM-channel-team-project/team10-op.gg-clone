// hooks
import useSelectedTabItem from './useSelectedTabItem';

// styled-components
import { ContentSideListContainer, TabHeader, TabItemSection } from './styles';

// types, interfaces
import { ContentSideListProps } from './types';

const ContentSideList = ({ navItem }: ContentSideListProps) => {
  const [tabItem, selectedTabItem, setSelectedTabItem] = useSelectedTabItem(navItem);
  return (
    <ContentSideListContainer>
      <TabItemSection>
        <TabHeader>
          <ul>
            {tabItem.map((item) => {
              const selected = item === selectedTabItem ? ' selected' : '';
              return (
                <li
                  className={'content-side__tab-header__item' + selected}
                  key={item}
                  onClick={() => setSelectedTabItem(item)}
                >
                  <a>{item}</a>
                </li>
              );
            })}
          </ul>
        </TabHeader>
      </TabItemSection>
    </ContentSideListContainer>
  );
};

export default ContentSideList;
