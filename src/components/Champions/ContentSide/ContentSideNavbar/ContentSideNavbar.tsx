// styled-components
import { Container } from './styles';

// types, interfaces
import { ChampionsContentSideNavbarType, ContentSideNavbarProps } from './types';

const NavbarItems: ChampionsContentSideNavbarType[] = ['티어', '승률', '픽률', '벤률'];

const ContentSideNavbar = ({ selectedItem, setSelectedItem }: ContentSideNavbarProps) => {
  return (
    <Container>
      <h2 className="content-side__navbar__title">챔피언 순위</h2>
      <ul className="content-side__navbar__items">
        {NavbarItems.map((item) => {
          const liClassName = item === '티어' ? 'tier' : 'common';
          const selected = selectedItem === item ? ' selected' : '';
          return (
            <li key={item} className={liClassName + selected} onClick={() => setSelectedItem(item)}>
              <a>
                <div />
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ContentSideNavbar;
