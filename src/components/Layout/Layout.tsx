import React from 'react';
import styled, { css } from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import palette from '@/lib/styles/palette';

interface LayoutProps {
  children: React.ReactNode;
  pathName: string;
}

function Layout({ children, pathName }: LayoutProps) {
  return (
    <Container currentPath={pathName}>
      <Header />
      <main>{children}</main>
      <Footer currentPath={pathName} />
    </Container>
  );
}

const Container = styled.div<{ currentPath: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 800px;
  align-items: center;
  ${({ currentPath }) =>
    currentPath === '/' &&
    css`
      background-color: ${palette.background_blue};
    `}

  main {
    display: block;
    flex-basis: 100%;
    width: 100%;
  }
`;

export default Layout;
