import styled from 'styled-components';

import HeaderGnb from './HeaderGnb';
import HeaderMenu from './HeaderMenu';

import palette from '@/lib/styles/palette';

function Header() {
  return (
    <Container>
      <HeaderGnb />
      <HeaderMenu />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${palette.background_blue};
`;

export default Header;
