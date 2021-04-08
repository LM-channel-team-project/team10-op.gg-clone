import styled from 'styled-components';

import palette from '@/lib/styles/palette';

const NavItem = styled.a<{ isLol: boolean }>`
  align-self: stretch;
  cursor: pointer;
  color:${({ isLol }) => (isLol ? '#ffffff' : '#c3cbd1')}; 
  background-color: ${({ isLol }) => (isLol ? palette.background_blue : 'none')};
  }
  .container {
    display: flex;
    align-items: center;
    height: 32px;
    margin: 4px;
    padding: ${({ isLol }) => (isLol ? '0 8px 0 0' : '0 8px')};
    &:hover {
      border-radius: 0.25rem;
      background-color: ${({ isLol }) => (isLol ? 'none' : '#2f436e')}; 
    }
    span {
      margin-left: 8px;
      font-size: 0.75rem;
      color: inherit;
      white-space: nowrap;
    }
    &:hover {
    }
`;

const GnbContainer = styled.div`
  display: flex;
  flex-basis: 40px;
  align-items: center;
  width: 100%;
  background-color: #222f46;
`;

const GnbNav = styled.nav`
  display: flex;
  align-self: stretch;
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 0 16px;
  font-size: 1.375rem;
  font-weight: 800;
  background-color: ${palette.background_blue};

  a:link,
  a:visited {
    text-decoration: none;
    color: ${palette.white};
  }
`;

export default { NavItem, GnbContainer, GnbNav, Logo };
