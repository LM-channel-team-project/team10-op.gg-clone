import styled from 'styled-components';

const HeaderMenu = styled.nav`
  display: flex;
  flex-basis: 48px;
  justify-content: center;
  align-items: center;
  border: 1px solid #4171d6;
  ul {
    display: flex;
    max-width: 1300px;
    flex-basis: 100%;
    height: 100%;
    margin: auto 0;
  }
`;

const Meun = styled.li<{ isActived: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ isActived }) => (isActived ? '#ffffff' : '#b3cdff')};
  border-bottom: ${({ isActived }) => (isActived ? '3px solid #ffffff' : 'none')};
  a {
    font-size: 0.9375rem;
    font-weight: 500;
    color: inherit;
  }

  & + & {
    margin-left: 24px;
  }
`;

export default { HeaderMenu, Meun };
