// styled-components
import { TabHeaderContainer } from './styles';

// types, interfaces
import { TabHeaderProps } from './types';

const TabHeader = ({ selectedTabItem, setSelectedTabItem, tabItems }: TabHeaderProps) => {
  return (
    <TabHeaderContainer>
      <ul>
        {tabItems.map((item) => {
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
    </TabHeaderContainer>
  );
};

export default TabHeader;
